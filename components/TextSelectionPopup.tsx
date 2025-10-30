"use client";

import { useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";
import { usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

// components
import Button from "./Button";

// apis
import { translateText } from "@/lib/api/ai";

const languages = ["english", "french", "persian"];

export default function TextSelectionPopup() {
  const [translatedText, setTranslatedText] = useState("");

  // POST
  const { mutate: translateMutation, isPending: isTranslating } = useMutation({
    mutationFn: translateText,
    onSuccess: (data) => {
      setTranslatedText(data.data.data.response);
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          console.log(error.response.data.errors);
          toast.error(error.response.data.errors.text[0], {
            position: "top-center",
          });
        } else if (
          error.response?.data?.message ===
          'Attempt to read property "id" on null'
        ) {
          toast.error("Please login first!!", {
            position: "top-center",
          });
        } else {
          toast.error(error.response?.data?.message || error?.message, {
            position: "top-center",
          });
        }
      } else {
        toast.error("An unknown error occurred.", { position: "top-center" });
      }
    },
  });

  const pathname = usePathname();
  const timeoutRef = useRef<number | null>(null);
  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    text: string;
  } | null>(null);
  const [languageListOpen, setLanguageListOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("persian");

  useEffect(() => {
    const clearPending = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleSelectionChange = () => {
      if (pathname.includes("/in-progress")) {
        return;
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
              console.log(selectedLanguage);
              console.log(selection.toString());
              translateMutation({
                lang: selectedLanguage,
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
  }, [pathname]);

  useEffect(() => {
    const selection = document.getSelection();
    if (
      selection &&
      !selection.isCollapsed &&
      selection.toString().trim() !== ""
    )
      translateMutation({ lang: selectedLanguage, text: popup?.text || "" });
  }, [selectedLanguage]);

  console.log(selectedLanguage);
  console.log(popup);

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
                    // clickHandler: () => alert(popup.text),
                  }}
                />
              </div>
            </div>

            {isTranslating ? (
              <div
                className={`flex items-center ${
                  selectedLanguage === "persian"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <Skeleton
                  variant="text"
                  width="50%"
                  height={30}
                  sx={{ bgcolor: "grey.600" }}
                />
              </div>
            ) : (
              <h4
                className={`body-large text-white ${
                  selectedLanguage === "persian" ? "text-end" : "text-start"
                }`}
              >
                {translatedText}
              </h4>
            )}

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
