"use client";

import type React from "react";
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

type CardType = "visa" | "mastercard" | "amex" | "default";

export type CreditCardValue = {
  cardNumber: string;
  expiry: string; // "MM/YY"
  cvv: string;
  cardType: CardType;
};

export type CreditCardFormProps = {
  creditCard: CreditCardValue;
  setCreditCard: React.Dispatch<React.SetStateAction<CreditCardValue>>;
};

export default function CreditCardForm({
  creditCard,
  setCreditCard,
}: CreditCardFormProps) {

  // --- Handlers ---
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = raw.replace(/(.{4})/g, "$1 ").trim();

    const detected = detectCardType(raw);
    const nextType: CardType = detected === "default" ? "visa" : detected;

    setCreditCard((prev) => {
      let nextCvv = prev.cvv;
      if (nextType === "amex" && nextCvv.length > 4) nextCvv = nextCvv.slice(0, 4);
      if (nextType !== "amex" && nextCvv.length > 3) nextCvv = nextCvv.slice(0, 3);
      return {
        ...prev,
        cardNumber: formatted,
        cardType: nextType,
        cvv: nextCvv,
      };
    });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 4) val = val.slice(0, 4);

    if (val.length >= 3) {
      val = val.slice(0, 2) + "/" + val.slice(2);
    }
    setCreditCard((prev) => ({ ...prev, expiry: val }));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (creditCard.cardType === "amex") {
      if (val.length > 4) val = val.slice(0, 4);
    } else {
      if (val.length > 3) val = val.slice(0, 3);
    }
    setCreditCard((prev) => ({ ...prev, cvv: val }));
  };

  // Pick correct SVG icon
  const CardIcon =
    creditCard.cardType === "visa"
      ? VisaIcon
      : creditCard.cardType === "mastercard"
      ? MasterCardIcon
      : creditCard.cardType === "amex"
      ? AmexIcon
      : VisaIcon; // fallback Visa

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Card Number */}
      <TextField
        fullWidth
        label="Card Number"
        placeholder="1234 5678 1234 5678"
        value={creditCard.cardNumber}
        onChange={handleCardNumberChange}
        sx={sx}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CardIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Row with Expiry + CVV */}
      <div style={{ display: "flex", gap: "16px" }}>
        <TextField
          label="MM / YY"
          placeholder="02 / 25"
          value={creditCard.expiry}
          onChange={handleExpiryChange}
          inputProps={{ maxLength: 5 }}
          style={{ flex: 1 }}
          sx={sx}
        />

        <TextField
          label="CVV"
          placeholder={creditCard.cardType === "amex" ? "1234" : "123"}
          value={creditCard.cvv}
          onChange={handleCvvChange}
          inputProps={{ maxLength: creditCard.cardType === "amex" ? 4 : 3 }}
          style={{ flex: 1 }}
          sx={sx}
        />
      </div>
    </div>
  );
}
