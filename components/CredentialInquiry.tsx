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
    <div className="flex flex-col md:flex-row md:items-center gap-3 text-txt-on-primary-dark w-full md:w-fit">
      <input
        className="outline-none border border-outline1 rounded-sm p-3 mobile-body-large md:body-large md:w-96"
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
          size: "mobile-body-large md:body-large",
          padding: "py-3 px-6",
        }}
      />
    </div>
  );
}

export default CredentialInquiry;
