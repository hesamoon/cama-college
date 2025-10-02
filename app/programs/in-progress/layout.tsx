"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// components
import ChatBox from "@/components/ChatBox";
import MobileNavbar from "@/components/MobileNavbar";
import LessonesNavs from "@/components/LessonesNavs";
// disable interaction / components
// import DisableInteractions from "@/components/DisableInteractions";
import AIToolsPopup from "@/components/ai-compo/AIToolsPopup";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("Subjects");
  const [chatBoxHeight, setChatBoxHeight] = useState(0);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    const handleResize = () => setChatBoxHeight(window.innerHeight - 110);
    setChatBoxHeight(window.innerHeight - 110);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <DisableInteractions /> */}
      <div className="mobile-grid-system-level0 md:grid-system-level md:grid md:grid-cols-3 md:!gap-0">
        <MobileNavbar />

        {/* left side */}
        <div className="hidden md:block col-span-1 h-fit sticky top-[3.75rem] border-l border-outline-level0">
          <div className="grid grid-cols-2 text-center md:flex border-b border-outline-level0">
            {["Subjects", "TUUM AI"].map((tab) => (
              <div
                key={tab}
                className={`w-full 
                  ${
                    activeTab === tab
                      ? "border-b border-background-primary-light"
                      : ""
                  }
                `}
              >
                <button
                  className={`w-full py-3 px-4 mobile-body-large md:body-large cursor-pointer transition-all ease-linear duration-200 ${
                    activeTab === tab
                      ? "text-background-primary-light"
                      : "text-txt-on-surface-terriary-light"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </div>
            ))}
          </div>

          {activeTab === "Subjects" ? (
            <LessonesNavs />
          ) : (
            <div
              className={`z-50 flex flex-col`}
              style={{
                height: chatBoxHeight,
              }}
            >
              <ChatBox onlyChatting={true} />
            </div>
          )}
        </div>

        {/* right side / details */}
        <div className="col-span-2 mobile-grid-system-level0 !px-0 md:!px-16 md:!py-10 md:grid-system-level0 md:border-l md:border-outline-level0 flex items-center justify-center w-full">
          {children}
        </div>
      </div>
      
      <AnimatePresence>
        <div className="md:hidden sticky bottom-0 w-full bg-white">
          <motion.div
            key="mobile-title-chat"
            className="p-4 flex items-center justify-between cursor-pointer bg-gradient-to-r from-[#CE63121a] to-[#F78B5D1a]"
            animate={{ 
              y: openChat ? 0 : 1,
              opacity: 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setOpenChat((prev) => !prev)}
          >
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  className="h-8 w-8"
                  src="/tuum/tuum-logo.svg"
                  alt="tuum logo"
                  width={32}
                  height={32}
                />
              </div>
              <h5 className="mobile-body-large bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
                Ask TUUM AI assistant
              </h5>
            </div>

            <div
              className={`pr-2 transition-all ease-in-out duration-300 ${
                openChat ? "rotate-180" : null
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9201 15.0496L13.4001 8.52965C12.6301 7.75965 11.3701 7.75965 10.6001 8.52965L4.08008 15.0496"
                  stroke="url(#paint0_linear_2501_1041)"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2501_1041"
                    x1="12.0001"
                    y1="7.95215"
                    x2="12.0001"
                    y2="15.0496"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F78B5D" />
                    <stop offset="1" stop-color="#CE6312" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

            {openChat && (
              <motion.div
                key="mobile-chat"
                className={`z-90 flex flex-col bg-white`}
                style={{
                  height: chatBoxHeight - 150,
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ChatBox onlyChatting={true} />
              </motion.div>
            )}
        </div>
      </AnimatePresence>

      <AIToolsPopup />
      {/* Switch to AI tab when prompted */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            window.addEventListener('tuum:openChat', function(){
              try{ var btns = document.querySelectorAll('button'); Array.prototype.find.call(btns, function(b){ return b && b.textContent && b.textContent.trim() === 'TUUM AI'; })?.click(); }catch(e){}
            });
          })();
        `,
        }}
      />
    </>
  );
}
