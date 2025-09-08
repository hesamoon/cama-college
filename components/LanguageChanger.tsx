"use client";

import { useEffect, useRef, useState } from "react";

// components
import Button from "./Button";
import LanguagesListModal from "./modal/LanguagesListModal";

function LanguageChanger() {
  const [open, setOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={modalRef} className="relative">
      <Button
        props={{
          value: "",
          leftIcon: open ? "close-circle" : "language-circle",
          rightIcon: "",
          type: "outlined",
          disabled: false,
          color: "red",
          width: 24,
          height: 24,
          size: "mobile-body-large md:body-large",
          clickHandler: () => setOpen((prev) => !prev),
        }}
      />

      <LanguagesListModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default LanguageChanger;
