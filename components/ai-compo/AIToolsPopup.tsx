import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// components
import Button from "../Button";

function AIToolsPopup() {
  const timeoutRef = useRef<number | null>(null);
  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    text: string;
    isAnswer: boolean;
    isSelfStudy: boolean;
  } | null>(null);

  useEffect(() => {
    const clearPending = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleSelectionChange = () => {
      const selection = document.getSelection();
      if (
        selection &&
        !selection.isCollapsed &&
        selection.toString().trim() !== ""
      ) {
        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          // Check if selection is within an answer message
          const isAnswer =
            range.commonAncestorContainer.parentElement?.closest(
              '[data-message-type="answer"]'
            ) !== null;

          const isSelfStudy =
            range.commonAncestorContainer.parentElement?.closest(
              '[data-presentation-type="self-study"]'
            ) !== null;
          clearPending();
          timeoutRef.current = window.setTimeout(() => {
            setPopup({
              x: rect.left + rect.width / 2 + window.scrollX, // center X
              y: rect.top + window.scrollY - 50,
              text: selection.toString(),
              isAnswer,
              isSelfStudy,
            });
          }, 300);
        } catch {
          // No range available; ignore
        }
      } else {
        clearPending();
        setPopup(null);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      clearPending();
    };
  }, []);

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          key="tools-ai"
          className="absolute z-60"
          style={{
            top: popup.y,
            left: popup.isAnswer
              ? popup.x - 35
              : !popup.isSelfStudy
              ? popup.x - 90
              : popup.x - 150,
            transform: "translate(-50%, 0)",
          }}
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
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="relative rounded-lg border border-primary-tints-90 bg-[#170304] flex items-center gap-1">
            {popup.isAnswer ? (
              <Button
                props={{
                  value: "Ask AI",
                  leftIcon: "add",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  width: 16,
                  height: 16,
                  size: "mobile-body-large md:body-small !text-primary-tints-90",
                  clickHandler: () => {
                    if (!popup) return;
                    window.dispatchEvent(new Event("tuum:openChat"));

                    window.dispatchEvent(
                      new CustomEvent("tuum:setPrompt", {
                        detail: { text: popup.text, action: "ask" },
                      })
                    );
                  },
                }}
              />
            ) : (
              <>
                {popup.isSelfStudy && (
                  <Button
                    props={{
                      value: "Summerize it",
                      leftIcon: "add",
                      rightIcon: "",
                      type: "text",
                      disabled: false,
                      color: "red",
                      width: 16,
                      height: 16,
                      size: "mobile-body-large md:body-small !text-primary-tints-90",
                      clickHandler: () => {
                        if (!popup) return;
                        window.dispatchEvent(new Event("tuum:openChat"));
                        window.dispatchEvent(
                          new CustomEvent("tuum:setPrompt", {
                            detail: { text: popup.text, action: "summerize" },
                          })
                        );
                      },
                    }}
                  />
                )}

                <Button
                  props={{
                    value: "Ask AI",
                    leftIcon: "add",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    color: "red",
                    width: 16,
                    height: 16,
                    size: "mobile-body-large md:body-small !text-primary-tints-90",
                    clickHandler: () => {
                      if (!popup) return;
                      window.dispatchEvent(new Event("tuum:openChat"));
                      window.dispatchEvent(
                        new CustomEvent("tuum:setPrompt", {
                          detail: { text: popup.text, action: "ask" },
                        })
                      );
                    },
                  }}
                />

                <Button
                  props={{
                    value: "Explain more",
                    leftIcon: "add",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    color: "red",
                    width: 16,
                    height: 16,
                    size: "mobile-body-large md:body-small !text-primary-tints-90",
                    clickHandler: () => {
                      if (!popup) return;
                      window.dispatchEvent(new Event("tuum:openChat"));
                      window.dispatchEvent(
                        new CustomEvent("tuum:setPrompt", {
                          detail: { text: popup.text, action: "explain-more" },
                        })
                      );
                    },
                  }}
                />
              </>
            )}
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-180">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AIToolsPopup;
