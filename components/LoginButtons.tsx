"use client";

import { useState } from "react";

// components
import Button from "./Button";
import AuthenticationModal from "./modal/AuthenticationModal";

function LoginButtons({
  color = "black",
  type = "outlined",
  icon = "login",
}: {
  color?: string;
  type?: string;
  icon?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button
        props={{
          value: "Login | Signup",
          leftIcon: icon,
          rightIcon: "",
          type: type,
          disabled: false,
          color: color,
          width: 24,
          height: 24,
          size: "mobile-body-large md:body-large",
          padding: "px-4 py-2",
          clickHandler: () => setOpen(true),
        }}
      />

      <AuthenticationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default LoginButtons;
