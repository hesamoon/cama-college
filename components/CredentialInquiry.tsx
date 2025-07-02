"use client";

import { useState } from "react";

// components
import Button from "./Button";

function CredentialInquiry({
  placeholder = "Enter credential ID...",
}: {
  placeholder?: string;
}) {
  const [credentialID, setCredentialID] = useState("");

  return (
    <div className="flex items-center gap-3 text-txt-on-primary-dark">
      <input
        className="outline-none border border-outline1 rounded-sm p-3 body-large w-96"
        value={credentialID}
        onChange={(e) => setCredentialID(e.target.value)}
        placeholder={placeholder}
      />

      <Button
        props={{
          value: "Validate",
          type: "filled",
          leftIcon: "tick-circle",
          rightIcon: "",
          disabled: false,
          color: "red",
          width: 24,
          height: 24,
          size: "body-large",
          padding: "py-3 px-6",
        }}
      />
    </div>
  );
}

export default CredentialInquiry;
