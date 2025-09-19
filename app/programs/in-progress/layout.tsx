"use client";

import { useEffect, useState } from "react";

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
        <div className="col-span-2 mobile-grid-system-level0 !px-0 md:!px-16 md:!py-10 md:grid-system-level0 border-l border-outline-level0">
          {children}
        </div>
      </div>

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
