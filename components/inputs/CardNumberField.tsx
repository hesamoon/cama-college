"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { sx } from "@/constants/data";

// --- SVG Icons ---
const VisaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="24"
    viewBox="0 0 48 32"
  >
    <rect width="48" height="32" fill="#fff" rx="4" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="14"
      fill="#1a1f71"
    >
      VISA
    </text>
  </svg>
);

const MasterCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="24"
    viewBox="0 0 48 32"
  >
    <rect width="48" height="32" fill="#fff" rx="4" />
    <circle cx="18" cy="16" r="10" fill="#eb001b" />
    <circle cx="30" cy="16" r="10" fill="#f79e1b" />
  </svg>
);

const AmexIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="24"
    viewBox="0 0 48 32"
  >
    <rect width="48" height="32" fill="#2e77bc" rx="4" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="12"
      fill="#fff"
    >
      AMEX
    </text>
  </svg>
);

// --- Card detection ---
function detectCardType(
  number: string
): "visa" | "mastercard" | "amex" | "default" {
  const cleaned = number.replace(/\s+/g, "");

  if (/^4[0-9]{6,}$/.test(cleaned)) return "visa";
  if (/^5[1-5][0-9]{5,}$/.test(cleaned)) return "mastercard";
  if (/^3[47][0-9]{5,}$/.test(cleaned)) return "amex";
  return "default";
}

export default function CardNumberField() {
  const [value, setValue] = useState("");
  // 👇 default is visa
  const [cardType, setCardType] = useState<
    "visa" | "mastercard" | "amex" | "default"
  >("visa");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format in groups of 4
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = raw.replace(/(.{4})/g, "$1 ").trim();

    setValue(formatted);
    const detected = detectCardType(raw);
    setCardType(detected === "default" ? "visa" : detected);
  };

  // Pick SVG icon
  const CardIcon =
    cardType === "visa"
      ? VisaIcon
      : cardType === "mastercard"
      ? MasterCardIcon
      : cardType === "amex"
      ? AmexIcon
      : VisaIcon; // 👈 fallback to Visa

  return (
    <TextField
      fullWidth
      label="Card Number"
      value={value}
      onChange={handleChange}
      placeholder="1234 5678 1234 5678"
      sx={sx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CardIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
