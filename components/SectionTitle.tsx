"use client";

import { useRouter } from "next/navigation";

// components
import Button from "./Button";

function SectionTitle({ title, path }: { title: string; path: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <h2 className="title-small">{title}</h2>

      <Button
        props={{
          value: "View all",
          disabled: false,
          leftIcon: "",
          rightIcon: "arrow-right",
          type: "text",
          color: "red",
          width: 20,
          height: 20,
          size: "body-medium",
          padding: "px-4 py-1",
          clickHandler: () => router.push(path),
        }}
      />
    </div>
  );
}

export default SectionTitle;
