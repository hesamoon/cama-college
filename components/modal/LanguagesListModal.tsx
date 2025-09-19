"use client";

import { AnimatePresence, motion } from "framer-motion";

const languages = [
  { code: "fa", name: "فارسی", flag: "ir" },
  { code: "en", name: "English", flag: "gb" },
  { code: "ar", name: "العربية", flag: "sa" },
  { code: "es", name: "Español", flag: "es" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "pt", name: "Português", flag: "pt" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "zh", name: "中文", flag: "cn" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "hi", name: "हिन्दी", flag: "in" },
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "nl", name: "Nederlands", flag: "nl" },
  { code: "sv", name: "Svenska", flag: "se" },
  { code: "no", name: "Norsk", flag: "no" },
  { code: "da", name: "Dansk", flag: "dk" },
  { code: "fi", name: "Suomi", flag: "fi" },
  { code: "pl", name: "Polski", flag: "pl" },
  { code: "el", name: "Ελληνικά", flag: "gr" },
  { code: "th", name: "ไทย", flag: "th" },
  { code: "vi", name: "Tiếng Việt", flag: "vn" },
  { code: "id", name: "Bahasa Indonesia", flag: "id" },
];

function LanguagesListModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="absolute top-16 right-2">
          <motion.div
            key="lang-modal"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute top-12 -left-10" style={{ zIndex: -10 }}>
              <motion.div
                key="circle"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* two circle shape */}
                <div className="flex items-center justify-center">
                  <div className="w-[295px] h-[295px] rounded-full bg-[#ED9D705C] flex items-center justify-center">
                    <div className="w-[266px] h-[266px] rounded-full bg-[#ED9D705C]"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col bg-white border border-outline1 rounded-lg min-w-lg max-h-92 overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-2 p-4" onClick={handleClose}>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.99 8.95898H7.01001"
                      stroke="#170304"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 7.2793V8.95929"
                      stroke="#170304"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5 8.93945C14.5 13.2395 11.14 16.7194 7 16.7194"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 16.72C15.2 16.72 13.6 15.76 12.45 14.25"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <h5 className="body-medium text-on_surface-light">
                  What language do you want me to speak to you in?
                </h5>
              </div>

              <div>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="flex items-center gap-2 cursor-pointer p-4"
                    onClick={() => alert(lang.name)}
                  >
                    <span className={`fi fi-${lang.flag} rounded-xs`} />
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

export default LanguagesListModal;
