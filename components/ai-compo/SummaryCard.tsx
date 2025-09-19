import Image from "next/image";

export default function SummaryCard() {
  return (
    <div className="relative w-1/2 mx-auto flex overflow-hidden rounded-lg bg-primary-shades-70 border border-primary-shades-70 text-white h-[210px]">
      {/* Left Section */}
      <div className="p-6 flex flex-col gap-3">
        <h2 className="title-large text-txt-on-primary-dark text-nowrap">
          Do NOT have time?
        </h2>
        <p className="body-large text-txt-on-primary-dark max-w-[215px]">
          It summarizes the comments for you.
        </p>
      </div>

      {/* Right Section (Tilted Preview) */}
      <div className="w-1/2 absolute -bottom-16 -right-6">
        <div className="bg-white rounded-lg p-4 rotate-15 text-gray-800 shadow-[70px_-45px_80px_rgba(228,27,33,0.5)]">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-full bg-primary-tints-90 flex items-center justify-center">
              <Image
                className="h-5 w-5"
                src="/tuum/tuum-logo.svg"
                alt="tuum logo"
                width={20}
                height={20}
              />
            </div>
            <span className="body-medium text-txt-low-important">
              Generated With TUUM
            </span>
          </div>

          {/* Content */}
          <p className="body-large text-txt-secondary">
            Lorem ipsum dolor sit amet, sagittis ullamcorper sit amet,
            consectetur adipiscing elit. Curabitur vel lacus vitae elit luctus
            viverra.
          </p>
        </div>
      </div>
    </div>
  );
}
