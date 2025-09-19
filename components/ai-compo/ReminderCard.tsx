import Image from "next/image";

export default function ReminderCard() {
  return (
    <div className="max-w-sm rounded-lg bg-primary-shades-70 border border-primary-shades-70 p-4 h-[210px] overflow-hidden">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="title-large text-txt-on-primary-dark">
          Do you often forget?
        </h2>
        <p className="body-large text-txt-on-primary-dark">TUUM reminds</p>
      </div>

      {/* Inner Card */}
      <div className="mt-4 w-[300px] h-[102px] rounded-lg border border-primary-tints-90 p-3 bg-[#170304] shadow-[100px_-25px_80px_rgba(228,27,33,0.5)]">
        {/* App icon + name */}
        <div className="flex items-center gap-2">
          <Image
            className="h-5 w-5"
            src="/tuum/tuum-logo.svg"
            alt="tuum logo"
            width={20}
            height={20}
          />

          <span className="label-small text-primary-tints-90">TUUM</span>
        </div>

        {/* Message */}
        <p className="mt-2 body-medium text-primary-tints-90">
          Do you want to go to your last class?
        </p>

        {/* Actions */}
        <div className="mt-3 ml-4 flex items-center gap-12">
          <button className="body-small text-primary-tints-80">Cancel</button>
          <button className="flex items-center gap-1 body-small text-primary-tints-80">
            Yes. GO!{" "}
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465"
                  stroke="#F9D1D2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.3335 8H13.5535"
                  stroke="#F9D1D2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
