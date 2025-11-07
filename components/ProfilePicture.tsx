"use client";

import { useRef, useState } from "react";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
// api
import { getMe } from "@/lib/api/auth";

// components
import Button from "./Button";
import BluredImage from "./BluredImage";

function ProfilePicture() {
  const { data: myData, isLoading: isLoadingMe } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  console.log(myData);

  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Remove selected image
  const handleRemove = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex items-center gap-6">
      {isLoadingMe ? (
        <Skeleton variant="circular" width={128} height={128} />
      ) : (
        <BluredImage
          url={image || "/profile.jpg"}
          name="Profile Preview"
          imgStyle="!rounded-full w-[128px] h-[128px] object-cover"
          blurhashStyle="!rounded-full w-[128px] h-[128px] object-cover"
          cWidth={128}
          cHeight={128}
        />
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div className="space-y-4">
        {isLoadingMe ? (
          <div className="mb-4">
            <Skeleton variant="text" width={120} height={24} />
          </div>
        ) : (
          <h4 className="header-small text-on_surface-light">
            {`${myData?.data.data.name} ${myData?.data.data.family}`}
          </h4>
        )}

        <div className="flex items-center gap-3">
          <Button
            props={{
              value: "Change Picture",
              type: "outlined",
              disabled: false,
              leftIcon: "edit",
              rightIcon: "",
              width: 24,
              height: 24,
              color: "red",
              padding: "py-2 px-4 gap-2",
              clickHandler: () => fileInputRef.current?.click(),
            }}
          />

          <Button
            props={{
              value: "",
              type: "outlined",
              disabled: !image,
              leftIcon: "trash",
              rightIcon: "",
              width: 24,
              height: 24,
              color: "red",
              clickHandler: handleRemove,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
