"use client";

import { useRouter } from "next/navigation";

// components
import Button from "./Button";

function CourseSlider() {
  const router = useRouter();

  return (
    <div
      className={`grid grid-cols-3 grid-system-level00 rounded-sm`}
      style={{
        backgroundImage: `url(/bg-banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* left side */}
      <div className="space-y-9 pl-16 py-20 col-span-1 rounded-sm bg-linear-to-r from-[#3B070966]">
        <h2 className="header-large text-txt-on-primary-dark max-w-[304px]">
          This is a title for slider
        </h2>

        <Button
          props={{
            value: "See Program",
            type: "filled",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right-ios-white",
            padding: "py-2 px-6",
            size: "body-large",
            height: 20,
            width: 20,
            clickHandler: () => router.push("/programs"),
          }}
        />
      </div>

      {/* right side */}
      <div className="flex items-end justify-end gap-2 py-5 col-span-2">
        <Button
          props={{
            value: "",
            type: "outlined",
            color: "red",
            disabled: false,
            leftIcon: "arrow-left-ios-red",
            rightIcon: "",
            padding: "p-2",
            size: "body-large",
            height: 24,
            width: 24,
          }}
        />

        <Button
          props={{
            value: "",
            type: "outlined",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right-red",
            padding: "p-2",
            size: "body-large",
            height: 24,
            width: 24,
          }}
        />
      </div>
    </div>
  );
}

export default CourseSlider;
