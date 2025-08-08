"use client";

import { useRef, useState } from "react";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

// components
import Button from "./Button";

// api
import { applyForJobOpportunity } from "@/lib/api/job-opportunity";
import toast from "react-hot-toast";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  onSend?: (file: File) => void;
  buttonText?: string;
  accept?: string;
  maxSize?: number; // in bytes
  showFileName?: boolean;
  id?: string;
}

function FileUpload({
  onFileSelect,
  onSend,
  buttonText = "Send",
  accept = ".pdf,.doc,.docx",
  maxSize = 5 * 1024 * 1024, // 5MB default
  showFileName = false,
  id,
}: FileUploadProps) {
  //POST
  const { mutate: applyMutation, isPending: isApplying } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) =>
      applyForJobOpportunity(id, data),
    onSuccess: (data) => {
      console.log(data);
      // Reset after sending
      setSelectedFile(null);
      // setCookie({ accessToken: data.data.data.token });
      toast.success(data.data.message, {
        position: "top-center",
      });
      // router.refresh();
      // handleClose();
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || error?.message, {
          position: "top-center",
        });
        setError(error.response?.data?.message || error?.message);
      } else {
        setError("An unknown error occurred.");
      }

      setSelectedFile(null);
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please select a valid file type (PDF, DOC, or DOCX)");
      setSelectedFile(null);
      return;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(
        `File size must be less than ${Math.round(maxSize / (1024 * 1024))}MB`
      );
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    onFileSelect?.(file);
  };

  const handleSendClick = () => {
    if (selectedFile) {
      onSend?.(selectedFile);

      // Prepare FormData with file
      const formData = new FormData();
      formData.append("cover_letter", "cover lettrt ...");
      formData.append("resume", selectedFile);

      // Assuming applyMutation expects an object with id and data
      applyMutation({ id: id || "", data: formData });
      console.log(formData.get("resume"));

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      // If no file is selected, trigger file input
      fileInputRef.current?.click();
    }
  };

  const handleButtonClick = () => {
    if (selectedFile) {
      handleSendClick();
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Send button */}
      <Button
        props={{
          value: isApplying ? "Sending..." : buttonText,
          type: "filled",
          color: "red",
          disabled: false,
          leftIcon: "",
          rightIcon: "",
          padding: "py-2 px-6 w-full",
          size: "mobile-body-large md:body-large",
          height: 24,
          width: 24,
          clickHandler: handleButtonClick,
        }}
      />

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* File name display */}
      {showFileName && selectedFile && (
        <div className="text-on_surface-light text-sm flex items-center justify-between">
          <span>{selectedFile.name}</span>

          <Button
            props={{
              value: "",
              type: "text",
              color: "red",
              disabled: false,
              leftIcon: "trash",
              rightIcon: "",
              size: "mobile-body-large md:body-large",
              height: 20,
              width: 20,
              clickHandler: () => setSelectedFile(null),
            }}
          />
        </div>
      )}
    </div>
  );
}

export default FileUpload;
