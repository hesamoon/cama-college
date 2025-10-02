"use client";

import { useState } from "react";

// components
import Button from "../Button";

export default function GiftCodeCard() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

//   const handleClear = () => setCode("");

  const handleSubmit = () => {
    if (!code.trim()) return;
    alert(`Gift code submitted: ${code}`);
    // TODO: send to API or backend
    setCode("");
    setOpen(false);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#E41B213D]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#A914183D] px-4 py-3">
        <h3 className="text-txt-on-primary-dark mobile-title-medium md:title-medium">Gift Code</h3>

        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6419 8.33398H3.30859V15.0007C3.30859 17.5007 4.14193 18.334 6.64193 18.334H13.3086C15.8086 18.334 16.6419 17.5007 16.6419 15.0007V8.33398Z"
              stroke="#F3F3F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9173 5.83268V6.66602C17.9173 7.58268 17.4757 8.33268 16.2507 8.33268H3.75065C2.47565 8.33268 2.08398 7.58268 2.08398 6.66602V5.83268C2.08398 4.91602 2.47565 4.16602 3.75065 4.16602H16.2507C17.4757 4.16602 17.9173 4.91602 17.9173 5.83268Z"
              stroke="#F3F3F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M9.70096 4.16784H5.10096C4.81763 3.85951 4.82596 3.38451 5.12596 3.08451L6.30929 1.90117C6.61763 1.59284 7.12596 1.59284 7.43429 1.90117L9.70096 4.16784Z"
              stroke="#F3F3F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M14.891 4.16784H10.291L12.5577 1.90117C12.866 1.59284 13.3743 1.59284 13.6827 1.90117L14.866 3.08451C15.166 3.38451 15.1743 3.85951 14.891 4.16784Z"
              stroke="#F3F3F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.44922 8.33398V12.6173C7.44922 13.284 8.18255 13.6757 8.74089 13.3173L9.52422 12.8007C9.80755 12.6173 10.1659 12.6173 10.4409 12.8007L11.1826 13.3007C11.7326 13.6673 12.4742 13.2757 12.4742 12.609V8.33398H7.44922Z"
              stroke="#F3F3F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        {!open ? (
          <div className="flex items-center gap-1 md:gap-2">
            <Button
              props={{
                value: "",
                leftIcon: "add-circle",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 20,
                height: 20,
                size: "mobile-body-large md:body-large",
                clickHandler: () => setOpen(true),
              }}
            />
            <span className="text-txt-on-primary-dark mobile-body-large md:body-large">
              Do you have gift code?
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter gift code"
              className="flex-1 rounded-md px-2 py-1 text-txt-on-primary-dark outline-none mobile-body-large md:body-large"
            />

            <Button
              props={{
                value: "Apply",
                leftIcon: "",
                rightIcon: "",
                type: "filled",
                disabled: false,
                color: "red",
                width: 20,
                height: 20,
                padding:"py-2 px-6",
                size: "mobile-body-large md:body-large",
                clickHandler: handleSubmit,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
