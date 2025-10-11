import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Poppins } from "next/font/google";

// components
import Button from "./Button";
import CountdownTimer from "@/components/CountdownTimer";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

function MeetPreview() {
  // Meeting time logic
  const meetingTime = useMemo(() => new Date("2025-10-29T15:30:00"), []);
  const [isMeetingTime, setIsMeetingTime] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  const handleCopy = async (msg: string) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(msg);
        toast.success("Copied to clipboard");
      } else {
        // Fallback for mobile devices or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = msg;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          toast.success("Copied to clipboard");
        } catch (err) {
          console.error("Fallback copy failed: ", err);
        }

        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error("Failed to copy content: ", err);
    }
  };

  useEffect(() => {
    const checkMeetingTime = () => {
      const now = new Date();
      setIsMeetingTime(now >= meetingTime);
    };

    checkMeetingTime(); // Initial check
    const interval = setInterval(checkMeetingTime, 1000); // Check every second

    return () => clearInterval(interval);
  }, [meetingTime]);

  return (
    <div className="pt-10 md:py-10 h-screen md:h-fit flex flex-col items-center md:justify-center gap-20 mobile-grid-system-level0 md:grid-system-level0">
      {/* logo */}
      <div className="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <rect
            width="16"
            height="16"
            x="12"
            y="16"
            fill="#fff"
            transform="rotate(-90 20 24)"
          />
          <polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16" />
          <path
            fill="#4caf50"
            d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
          />
          <path
            fill="#fbc02d"
            d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
          />
          <path fill="#1565c0" d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z" />
          <polygon fill="#e53935" points="13,7 13,17 3,17" />
          <polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55" />
          <path
            fill="#4caf50"
            d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
          />
        </svg>

        <h3 className={`${poppins.className} text-4xl text-[#5f6368]`}>
          Google Meet
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-16">
        {/* time */}
        <div className="space-y-6 ">
          <h4 className="header-small text-on_surface-light text-center">
            Join the class in...
          </h4>

          <CountdownTimer targetDate={meetingTime} />
        </div>

        {/* link */}
        <div className="space-y-4 md:min-w-[422px]">
          <div className="py-1 px-6 border border-[#E3E3E3] rounded-full flex items-center justify-between">
            <h3 className="body-large text-txt-on-surface-secondary-light">
              meet.google.com/jdf-sjdh-kdj
            </h3>

            <Button
              props={{
                value: "",
                leftIcon: "copy-black",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 24,
                height: 24,
                size: "mobile-body-large md:body-large",
                clickHandler: () =>
                  handleCopy("https://meet.google.com/jdf-sjdh-kdj"),
              }}
            />
          </div>

          <div className="relative">
            <Link
              href={
                isMeetingTime ? "https://meet.google.com/jdf-sjdh-kdj" : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ease-in-out ${
                isMeetingTime
                  ? "hover:scale-105 hover:shadow-lg"
                  : "cursor-not-allowed opacity-75 hover:opacity-90"
              }`}
              onMouseEnter={() => {
                if (!isMeetingTime) {
                  setShowMeetingModal(true);
                }
              }}
              onMouseLeave={() => {
                if (!isMeetingTime) {
                  setShowMeetingModal(false);
                }
              }}
              onClick={(e) => {
                if (!isMeetingTime) {
                  e.preventDefault();
                }
              }}
            >
              <Button
                props={{
                  value: "Join",
                  type: "filled",
                  color: "red",
                  disabled: !isMeetingTime,
                  leftIcon: "",
                  rightIcon: "",
                  padding: "py-3 px-6 w-full",
                  // clickHandler: () => setOpenGenInfo(true),
                }}
              />
            </Link>

            {/* Small popup tooltip */}
            <div
              className={`absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap z-50 transition-all duration-300 ease-out ${
                showMeetingModal
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center">
                <div className="font-medium">Meeting Not Started</div>
                <div className="text-xs text-gray-300 mt-1">
                  Starts at{" "}
                  {meetingTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}{" "}
                  on{" "}
                  {meetingTime.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetPreview;
