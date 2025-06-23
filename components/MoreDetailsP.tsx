"use client";

import { useRouter } from "next/navigation";

// components
import Button from "./Button";

function MoreDetailsP({
  text,
  textStyle,
  href,
}: {
  text: string;
  textStyle: string;
  href: string;
}) {
  const router = useRouter();

  return (
    <div className="">
      <p className={`inline ${textStyle}`}>{text}...</p>

      <Button
        props={{
          value: "more",
          disabled: false,
          leftIcon: "",
          rightIcon: "",
          type: "text",
          color: "red",
          size: "body-large !inline",
          padding: "px-3 py-0",
          clickHandler: () => router.push(href),
        }}
      />
    </div>
  );
}

export default MoreDetailsP;
