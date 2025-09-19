"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// components
import ChatBox from "./ChatBox";
// import TUUMNotification from "./TUUMNotification";

function TUUMAssistant() {
  // const [close, setClose] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [thinking, setThinking] = useState(false);
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
          <ChatBox setLoading={setThinking} />
        </div>
      )}

      {/* Assistant Button */}
      <AnimatePresence>
        {/* {close ? ( */}
        <motion.div
          key="chat-btn"
          id="tuum-ai-assistant-btn"
          className="relative cursor-pointer z-50"
          onClick={() => {
            setOpenChat((prev) => !prev);
            setThinking(false);
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileTap={{ scale: 0.95 }}
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
              style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }}
            />
            <div
              className="absolute -top-[2px] -right-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
              style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
            />
            <div
              className="absolute -bottom-[2px] -left-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
              style={{ animation: "pulseGlow 3.5s ease-in-out infinite" }}
            />
            <div
              className="absolute -bottom-[2px] -right-[2px] w-[71.94px] h-[71.94px] rounded-full bg-[#B76929] opacity-16 -z-5"
              style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
            />
          </>

          <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[59.54px] h-[59.54px]">
            {thinking ? (
              <video
                autoPlay
                loop={true} // set true if you want looping
                muted
                playsInline
                className="rounded-full"
              >
                <source src="/tuum/tuum-animation2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                className="w-[50.05px] h-[48.7px]"
                src="/tuum/tuum-logo.svg"
                alt="tuum logo"
                width={50.05}
                height={48.7}
              />
            )}
          </div>
        </motion.div>
        {/* // ) : (
        //   <TUUMNotification setClose={setClose} />
        // )} */}
      </AnimatePresence>
    </div>
  );
}

export default TUUMAssistant;
