"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import z, { ZodError } from "zod";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// components
import Modal from "./Modal";
import Button from "../Button";

const formSchema = z.object({
  address: z.string().optional(),
  gender: z.string().optional(),
  citizenship: z
    .union([
      z.literal(""), // allow empty for typing
      z.enum(["US", "CA", "IN", "DE", "FR"]),
    ])
    .refine((val) => val !== "", { message: "Please select your citizenship" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

function GeneralInfoModal({
  open,
  onClose,
  infoFor,
}: {
  open: boolean;
  onClose: () => void;
  infoFor: string;
}) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormSchemaType, string>>
  >({});
  const [gInfo, setGInfo] = useState({
    address: "",
    gender: "",
    citizenship: "",
  });

  const handleSubmit = () => {
    try {
      formSchema.parse(gInfo);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        // Flatten errors into { field: message }
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          const key =
            Array.isArray(err.path) && err.path.length
              ? err.path.join(".")
              : "form";
          newErrors[key] = err.message;
        });
        setErrors(newErrors);
      } else {
        // For unexpected errors
        console.error("Unexpected error:", error);
      }
      return false;
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {/* header */}
      <div className="flex items-center justify-between w-4xl">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/cama-college-logo.png"
              alt="logo"
              width={43}
              height={48}
              className="w-auto h-10"
            />
          </Link>
          <h3 className="header-small text-on_surface-light">CAMA College</h3>
        </div>

        {/* close button */}
        <Button
          props={{
            value: "",
            leftIcon: "close-circle",
            rightIcon: "",
            type: "text",
            disabled: false,
            width: 24,
            height: 24,
            size: "mobile-body-large md:body-large",
            clickHandler: handleClose,
          }}
        />
      </div>

      {/* body */}
      <div className="mt-12 flex flex-col gap-6">
        {/* notaion */}
        <div className="flex items-center gap-2">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.25V13.5"
                stroke="#484647"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.0802 9.08003V15.92C21.0802 17.04 20.4802 18.08 19.5102 18.65L13.5702 22.08C12.6002 22.64 11.4002 22.64 10.4202 22.08L4.48016 18.65C3.51016 18.09 2.91016 17.05 2.91016 15.92V9.08003C2.91016 7.96003 3.51016 6.91999 4.48016 6.34999L10.4202 2.92C11.3902 2.36 12.5902 2.36 13.5702 2.92L19.5102 6.34999C20.4802 6.91999 21.0802 7.95003 21.0802 9.08003Z"
                stroke="#484647"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.6992V16.7992"
                stroke="#484647"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h4 className="body-large text-txt-on-surface-secondary-light">
            We need the following information to know the location of the{" "}{infoFor}.
          </h4>
        </div>

        {/* form */}
        <div className="flex">
          <h4 className="w-[40%] title-medium text-on_surface-light">
            General Information
          </h4>

          <form className="w-[60%] flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Address (optional) */}
            <TextField
              label="Address"
              value={gInfo.address}
              onChange={(e) => setGInfo({ ...gInfo, address: e.target.value })}
              placeholder="Country; State; City; Street..."
            />

            {/* Gender (optional) */}
            <FormControl>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                label="Gender"
                value={gInfo.gender}
                onChange={(e) => setGInfo({ ...gInfo, gender: e.target.value })}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            {/* Citizenship (required) */}
            <FormControl error={!!errors.citizenship}>
              <InputLabel id="citizenship-label">
                Citizenship
                <span className="text-background-primary-light">*</span>
              </InputLabel>
              <Select
                labelId="citizenship-label"
                label="Citizenship"
                value={gInfo.citizenship}
                onChange={(e) =>
                  setGInfo({ ...gInfo, citizenship: e.target.value })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="CA">CA</MenuItem>
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="IN">IN</MenuItem>
                <MenuItem value="DE">DE</MenuItem>
                <MenuItem value="FR">FR</MenuItem>
              </Select>
              <p className="text-background-primary-light text-sm">
                {errors.citizenship}
              </p>
            </FormControl>
          </form>
        </div>
      </div>

      {/* footer */}
      <footer className="flex items-center justify-between mt-12">
        <Button
          props={{
            value: "Cancel",
            leftIcon: "",
            rightIcon: "",
            type: "outlined",
            color: "red",
            disabled: false,
            size: "mobile-body-large md:body-large",
            padding: "py-2 px-4",
            clickHandler: handleClose,
          }}
        />

        <Button
          props={{
            value: "Save Changes",
            leftIcon: "",
            rightIcon: "",
            type: "filled",
            color: "red",
            disabled: false,
            size: "mobile-body-large md:body-large",
            padding: "py-2 px-4",
            clickHandler: handleSubmit,
          }}
        />
      </footer>
    </Modal>
  );
}

export default GeneralInfoModal;
