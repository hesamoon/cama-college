"use client";

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

  if (!open) return;

  return (
    <div data-lenis-prevent  className="absolute top-18 -right-45 flex flex-col bg-white border border-outline1 rounded-lg min-w-lg max-h-110 overflow-y-auto no-scrollbar">
      <div className="flex items-center gap-2 p-4">
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
            onClick={handleClose}
          >
            <span className={`fi fi-${lang.flag} rounded-xs`} />
            <span className="body-large text-on_surface-light">
              {lang.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesListModal;
