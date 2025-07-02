"use client";

import { useRouter } from "next/navigation";

// components
import Button from "./Button";

// utils
import { setCookie } from "@/utilities/cookie";

function LoginButtons({
  color = "black",
  type = "outlined",
  icon = "login",
}: {
  color?: string;
  type?: string;
  icon?: string;
}) {
  const router = useRouter();

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
          size: "body-large",
          padding: "px-4 py-2",
          clickHandler: () => {
            setCookie({ accessToken: "ivbgehnogy82332h" });
            router.refresh();
          },
        }}
      />

      {/* <Button
        props={{
          value: "",
          leftIcon: "bag",
          rightIcon: "",
          type: "outlined",
          disabled: false,
          size: "body-large",
          color: "black",
          padding: "p-2",
          width: 24,
          height: 24,
        }}
      /> */}
    </div>
  );
}

export default LoginButtons;
