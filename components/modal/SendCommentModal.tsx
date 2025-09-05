"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components
import Modal from "./Modal";
import Button from "../Button";

function SendCommentModal({
  open,
  onClose,
  score,
  commentFor,
}: {
  open: boolean;
  onClose: () => void;
  score: number;
  commentFor: string;
}) {
  const [commentValue, setCommentValue] = useState("");

  const handleClose = () => {
    setCommentValue("");
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {/* header */}
      <div className="flex items-center justify-between w-4xl">
        {/* logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/cama-college-logo.png"
            alt="logo"
            width={43}
            height={48}
            className="w-auto h-10"
          />
        </Link>

        <div className="flex justify-between gap-10">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="flex flex-col items-center justify-center gap-1 cursor-pointer"
            >
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8479 1.8541C12.4466 0.0114832 15.0534 0.0114818 15.6521 1.8541L17.3422 7.05573C17.61 7.87977 18.3779 8.43769 19.2443 8.43769H24.7136C26.6511 8.43769 27.4566 10.9169 25.8892 12.0557L21.4645 15.2705C20.7635 15.7798 20.4702 16.6825 20.7379 17.5066L22.428 22.7082C23.0267 24.5508 20.9178 26.0831 19.3503 24.9443L14.9256 21.7295C14.2246 21.2202 13.2754 21.2202 12.5744 21.7295L8.14966 24.9443C6.58224 26.0831 4.47327 24.5508 5.07198 22.7082L6.76209 17.5066C7.02984 16.6825 6.73652 15.7798 6.03555 15.2705L1.61078 12.0557C0.043355 10.9169 0.848905 8.43769 2.78635 8.43769H8.25566C9.12212 8.43769 9.89003 7.87977 10.1578 7.05573L11.8479 1.8541Z"
                  fill={score >= num ? "#A91418" : "#D7D5D6"}
                />
              </svg>
            </button>
          ))}
        </div>

        {/* close button */}
        <Button
          props={{
            value: "",
            leftIcon: "",
            rightIcon: "close-circle",
            type: "text",
            disabled: false,
            width: 24,
            height: 24,
            size: "mobile-body-large md:body-large",
            clickHandler: handleClose,
          }}
        />
      </div>

      {/* body */}
      <div className="mt-12 flex flex-col gap-2 ">
        <h5 className="body-medium text-on-surface-secondary ml-4">
          What is your opinion about the {commentFor}?
        </h5>

        <textarea
          className="border body-large rounded-md resize-none outline-none border-outline-level1 p-3"
          name="comment"
          id="comment"
          rows={6}
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          placeholder="Write here..."
        ></textarea>
      </div>

      <footer className="flex items-center justify-between mt-12">
        <Button
          props={{
            value: "Cancel",
            leftIcon: "",
            rightIcon: "",
            type: "outlined",
            color: "red",
            disabled: false,
            size: "mobile-body-large md:body-large",
            padding: "py-2 px-4",
            clickHandler: handleClose,
          }}
        />

        <Button
          props={{
            value: "Submit Comment",
            leftIcon: "",
            rightIcon: "",
            type: "filled",
            color: "red",
            disabled: false,
            size: "mobile-body-large md:body-large",
            padding: "py-2 px-4",
            // clickHandler: handleClose,
          }}
        />
      </footer>
    </Modal>
  );
}

export default SendCommentModal;
