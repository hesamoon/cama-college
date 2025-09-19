import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// components
import Button from "../Button";

const languages = [
  { code: "fa-IR", name: "فارسی", flag: "ir" },
  { code: "en-GB", name: "English", flag: "gb" },
  { code: "sv-SE", name: "Svenska", flag: "se" },
  { code: "ja-JP", name: "日本語", flag: "jp" },
  { code: "fr-FR", name: "Français", flag: "fr" },
  { code: "es-ES", name: "Español", flag: "es" },
  { code: "ar-SA", name: "العربية", flag: "sa" },
  { code: "de-DE", name: "Deutsch", flag: "de" },
  { code: "it-IT", name: "Italiano", flag: "it" },
  { code: "pt-PT", name: "Português", flag: "pt" },
  { code: "ru-RU", name: "Русский", flag: "ru" },
  { code: "zh-CN", name: "中文", flag: "cn" },
  { code: "ko-KR", name: "한국어", flag: "kr" },
  { code: "hi-IN", name: "हिन्दी", flag: "in" },
  { code: "tr-TR", name: "Türkçe", flag: "tr" },
  { code: "nl-NL", name: "Nederlands", flag: "nl" },
  { code: "no-NO", name: "Norsk", flag: "no" },
  { code: "da-DK", name: "Dansk", flag: "dk" },
  { code: "fi-FI", name: "Suomi", flag: "fi" },
  { code: "pl-PL", name: "Polski", flag: "pl" },
  { code: "el-GR", name: "Ελληνικά", flag: "gr" },
  { code: "th-TH", name: "ไทย", flag: "th" },
  { code: "vi-VN", name: "Tiếng Việt", flag: "vn" },
  { code: "id-ID", name: "Bahasa Indonesia", flag: "id" },
  // Canada
  { code: "en-CA", name: "English (Canada)", flag: "ca" },
  { code: "fr-CA", name: "Français (Canada)", flag: "ca" },
];

interface UserInfo {
  ip?: string;
  country?: string;
  language?: string;
}

interface Lang {
  code?: string;
  name?: string;
  flag?: string;
}

function TUUMLanguageDetecter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [info, setInfo] = useState<UserInfo>({});
  const [currentLang, setCurrentLang] = useState<Lang>({});

  const handleClose = () => {
    onClose();
  };

  console.log(info);

  useEffect(() => {
    // Fetch IP & geo info from server API
    async function fetchIP() {
      try {
        const res = await fetch("/api/getUserIP");
        const data = await res.json();
        setInfo(data);
        setCurrentLang(
          languages.find((l) => data.language.includes(l.code)) || {}
        );
      } catch (err) {
        console.log("Error fetching IP info:", err);
      }
    }

    fetchIP();
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up when modal unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 bg-black/30 z-999 flex items-center justify-center py-6"
          id="wrapper"
          onClick={handleClose}
        >
          <motion.div
            key="tuum-lang-detecter"
            className={`relative bg-white rounded-xl min-w-[320px] max-w-[90vw] md:min-w-[541px] md:max-w-[80vw] max-h-[90vh]`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="sticky top-0 flex flex-col gap-14 bg-white z-10 p-2 rounded-t-xl overflow-hidden">
              {/* two circle shape */}
              <div className="absolute -top-50 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-[295px] h-[295px] rounded-full bg-[#ED9D705C] flex items-center justify-center">
                  <div className="w-[266px] h-[266px] rounded-full bg-[#ED9D705C]"></div>
                </div>
              </div>

              {/* close button */}
              <div className="flex items-center justify-end">
                <Button
                  props={{
                    value: "",
                    leftIcon: "close-circle",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    width: 24,
                    height: 24,
                    size: "mobile-body-large md:body-large",
                    clickHandler: handleClose,
                  }}
                />
              </div>

              <h5 className="label-large-db bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
                TUUM Professor
              </h5>
            </div>

            {/* tuum */}
            <div className="absolute -top-13 left-1/2 -translate-x-1/2 z-10">
              <div className="relative rounded-full shadow-[0px_0px_100px_rgba(183,105,41,1)]">
                {/* glow effect */}
                <>
                  <div className="absolute -top-[2px] -left-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                  <div className="absolute -top-[2px] -right-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                  <div className="absolute -bottom-[2px] -left-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                  <div className="absolute -bottom-[2px] -right-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                </>

                <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[95.26px] h-[95.26px]">
                  <video
                    autoPlay
                    loop={true} // set true if you want looping
                    muted
                    playsInline
                    className="rounded-full"
                  >
                    <source
                      src="/tuum/tuum-animation3.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="max-h-100 p-2 overflow-scroll no-scrollbar space-y-2">
              <div className="p-4 space-y-6">
                <div className="space-y-3">
                  {/* where are you from? */}
                  <div className="flex items-center gap-2">
                    <Image
                      className="h-6 w-6"
                      src="/tuum/tuum-logo.svg"
                      alt="tuum logo"
                      width={24}
                      height={24}
                    />

                    <h5 className="body-large text-on_surface-light">
                      Where are you from?
                    </h5>
                  </div>

                  <h5 className="body-large text-on_surface-light text-start">
                    I think you are in {currentLang.name}; Right? :)
                  </h5>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`fi fi-${currentLang.flag} rounded-xs min-w-8 min-h-6`}
                  />
                  <span className="body-large text-on_surface-light">
                    {currentLang.name}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="body-large text-on_surface-light text-start pl-4">
                  Or use VPN? ;)
                </h5>

                {languages
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <div
                      key={lang.code}
                      className="flex items-center gap-2 cursor-pointer p-4"
                      onClick={() => alert(lang.name)}
                    >
                      <span
                        className={`fi fi-${lang.flag} rounded-xs min-w-8 min-h-6`}
                      />
                      <span className="body-large text-on_surface-light">
                        {lang.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export default TUUMLanguageDetecter;
