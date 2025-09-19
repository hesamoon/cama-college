"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function TextSelectionPopup() {
  const pathname = usePathname();
  const timeoutRef = useRef<number | null>(null);
  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    text: string;
  } | null>(null);
  const [languageListOpen, setLanguageListOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("فارسی");
  const languages = [
    "English",
    "Français",
    "Español",
    "Deutsch",
    "فارسی",
    "العربية",
    "中文",
    "日本語",
    "한국어",
    "Русский",
  ];

  useEffect(() => {
    const clearPending = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleSelectionChange = () => {
      if (pathname.includes("/programs/in-progress")) {
       return
      } else {
        const selection = document.getSelection();
        if (
          selection &&
          !selection.isCollapsed &&
          selection.toString().trim() !== ""
        ) {
          try {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            clearPending();
            timeoutRef.current = window.setTimeout(() => {
              setPopup({
                x: rect.left + rect.width / 2 + window.scrollX, // center X
                y: rect.bottom + window.scrollY + 20, // below selection
                text: selection.toString(),
              });
            }, 300);
          } catch {
            // No range available; ignore
          }
        } else {
          clearPending();
          setPopup(null);
        }
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      clearPending();
    };
  }, []);

  return (
    <>
      {popup && (
        <div
          style={{
            top: popup.y,
            left: popup.x,
            transform: "translate(-50%, 0)",
          }}
          className="absolute z-60"
          role="button"
          tabIndex={0}
          onMouseDown={(e) => {
            // Prevent selection from collapsing before click fires
            e.preventDefault();
            e.stopPropagation();
          }}
          // onClick={() => alert(popup.text)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              (e.currentTarget as HTMLDivElement).click();
            }
          }}
        >
          <div className="relative w-[258px] min-h-[93px] rounded-lg border border-primary-tints-90 p-3 bg-[#170304] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="label-medium text-white">Translated To </span>
                <div
                  className="flex items-center gap-1 cursor-pointer select-none"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLanguageListOpen((prev) => !prev);
                  }}
                >
                  <span className="label-medium text-background-primary-light">
                    {selectedLanguage}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      languageListOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200`}
                  >
                    <path
                      d="M13.2802 5.9668L8.93355 10.3135C8.42021 10.8268 7.58021 10.8268 7.06688 10.3135L2.72021 5.9668"
                      stroke="#A91418"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <Button
                  props={{
                    value: "",
                    leftIcon: "setting",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    color: "red",
                    width: 20,
                    height: 20,
                    size: "mobile-body-large md:body-large",
                    padding: "p-2",
                    clickHandler: () => alert(popup.text),
                  }}
                />
              </div>
            </div>

            <h4 className="body-large text-white text-end">حادثه‌آفرین</h4>

            {languageListOpen && (
              <div
                className="absolute left-3 right-3 top-12 bg-[#1E0A0B] border border-primary-tints-90 rounded-md max-h-44 overflow-auto shadow-lg"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className={`w-full text-left px-3 py-2 label-medium ${
                      lang === selectedLanguage
                        ? "text-background-primary-light"
                        : "text-white"
                    } hover:bg-[#2A0F11]`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedLanguage(lang);
                      setLanguageListOpen(false);
                      // trigger translation here if needed
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}

            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.26795 1C8.03775 -0.333333 9.96225 -0.333333 10.7321 1L17.6603 13C18.4301 14.3333 17.4678 16 15.9282 16H2.0718C0.532197 16 -0.430054 14.3333 0.339746 13L7.26795 1Z"
                  fill="#170304"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
