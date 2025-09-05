"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// components
import ChatBox from "./ChatBox";

function TUUMAssistant() {
  const [openChat, setOpenChat] = useState(false);
  const [chatBoxHeight, setChatBoxHeight] = useState(500);

  useEffect(() => {
    if (window) {
      const handleResize = () => setChatBoxHeight(window.innerHeight - 200);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="fixed right-16 bottom-16 z-60">
      {/* Overlay */}
      {openChat && (
        <div
          className="fixed inset-0 bg-black/24 z-40"
          // onClick={() => setOpenChat(false)} // close when clicking outside
        />
      )}

      {/* Chat Box */}
      {openChat && (
        <div
          className="fixed bottom-32 right-16 w-96 bg-white rounded-lg z-50 flex flex-col"
          style={{
            height: chatBoxHeight,
          }}
        >
          <ChatBox />
        </div>
      )}

      {/* Assistant Button */}
      <div
        className="relative cursor-pointer z-50"
        onClick={() => setOpenChat((prev) => !prev)}
      >
        {/* glow effect */}
        <div className="absolute -top-[2px] -left-[2px] w-14 h-14 rounded-full bg-primary-shades-50 opacity-15 -z-5" />
        <div className="absolute -top-[2px] -right-[2px] w-14 h-14 rounded-full bg-primary-shades-50 opacity-15 -z-5" />
        <div className="absolute -bottom-[2px] -left-[2px] w-14 h-14 rounded-full bg-primary-shades-50 opacity-15 -z-5" />
        <div className="absolute -bottom-[2px] -right-[2px] w-14 h-14 rounded-full bg-primary-shades-50 opacity-15 -z-5" />

        <div className="bg-primary-shadess-90 rounded-full flex items-center justify-center w-[47.63px] h-[47.63px]">
          {openChat ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                fill="#FCE8E9"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16992 14.8299L14.8299 9.16992"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.8299 14.8299L9.16992 9.16992"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <Image
              className="w-6 h-6"
              src="/cama-college-logo.png"
              alt="tuum logo"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TUUMAssistant;
