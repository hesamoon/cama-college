"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// components
import Button from "./Button";
import ChatBox from "./ChatBox";
import TUUMNotification from "./TUUMNotification";

function TUUMAssistant() {
  const [close, setClose] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [chatBoxHeight, setChatBoxHeight] = useState(window.innerHeight - 135);

  useEffect(() => {
    const handleResize = () => setChatBoxHeight(window.innerHeight - 135);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-60">
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
          className="fixed bottom-28 right-8 w-110 bg-white rounded-lg z-50 flex flex-col"
          style={{
            height: chatBoxHeight,
          }}
        >
          <ChatBox />

          <div className="p-2">
            <Button
              props={{
                value: "Open Notif",
                leftIcon: "",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 16,
                height: 16,
                size: "mobile-body-large md:body-large",
                clickHandler: () => {
                  setClose(false);
                  setOpenChat(false);
                },
              }}
            />
          </div>
        </div>
      )}

      {/* Assistant Button */}
      <AnimatePresence>
        {close ? (
          <motion.div
            key="chat-btn"
            id="tuum-ai-assistant-btn"
            className="relative cursor-pointer z-50"
            onClick={() => setOpenChat((prev) => !prev)}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <>
              <style jsx>{`
                @keyframes pulseGlow {
                  0%,
                  100% {
                    transform: scale(1);
                    opacity: 0.16;
                  }
                  50% {
                    transform: scale(1.1);
                    opacity: 0.3;
                  }
                }
              `}</style>

              {/* glow effect */}
              <div
                className="absolute -top-[2px] -left-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
                style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
              />
              <div
                className="absolute -top-[2px] -right-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
                style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
              />
              <div
                className="absolute -bottom-[2px] -left-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
                style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
              />
              <div
                className="absolute -bottom-[2px] -right-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
                style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
              />
            </>

            <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[59.54px] h-[59.54px]">
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
                  className="w-[50.05px] h-[48.7px]"
                  src="/tuum/tuum-logo.svg"
                  alt="tuum logo"
                  width={50.05}
                  height={48.7}
                />
                // <video
                //   autoPlay
                //   loop={true} // set true if you want looping
                //   muted
                //   playsInline
                //   className="w-[50.05px] h-[48.7px] rounded-full"
                // >
                //   <source src="/tuum/tuum-animation.mp4" type="video/mp4" />
                //   Your browser does not support the video tag.
                // </video>
              )}
            </div>
          </motion.div>
        ) : (
          <TUUMNotification key="notification" setClose={setClose} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default TUUMAssistant;
