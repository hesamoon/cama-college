function TranslateCard() {
  return (
    <div className="relative w-1/2 mx-auto flex overflow-hidden rounded-lg bg-primary-shades-70 border border-primary-shades-70 h-[210px]">
      {/* Left Section */}
      <div className="p-6 flex flex-col gap-3">
        <h2 className="title-large text-txt-on-primary-dark text-nowrap">
          Is your English not good?
        </h2>
        <p className="body-large text-txt-on-primary-dark max-w-[215px]">
          TUUM Translates to +100 languages.
        </p>
      </div>

      {/* Right Section (Tilted Preview) */}
      <div className="absolute bottom-2 right-2 space-y-5">
        <p className="body-large text-txt-on-primary-dark text-nowrap text-end pr-3">
          tempor{" "}
          <span className="bg-background-primary-light p-0.5 rounded-xs">
            incididunt
          </span>{" "}
          ut
        </p>

        <div className="relative w-[258px] h-[93px] rounded-lg border border-primary-tints-90 p-3 bg-[#170304] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="label-medium text-white">Translated To </span>
              <div className="flex items-center gap-1">
                <span className="label-medium text-background-primary-light">
                  فارسی
                </span>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2802 5.9668L8.93355 10.3135C8.42021 10.8268 7.58021 10.8268 7.06688 10.3135L2.72021 5.9668"
                      stroke="#A91418"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.6665 10.7339V9.26718C1.6665 8.40052 2.37484 7.68385 3.24984 7.68385C4.75817 7.68385 5.37484 6.61718 4.6165 5.30885C4.18317 4.55885 4.4415 3.58385 5.19984 3.15052L6.6415 2.32552C7.29984 1.93385 8.14984 2.16718 8.5415 2.82552L8.63317 2.98385C9.38317 4.29218 10.6165 4.29218 11.3748 2.98385L11.4665 2.82552C11.8582 2.16718 12.7082 1.93385 13.3665 2.32552L14.8082 3.15052C15.5665 3.58385 15.8248 4.55885 15.3915 5.30885C14.6332 6.61718 15.2498 7.68385 16.7582 7.68385C17.6248 7.68385 18.3415 8.39218 18.3415 9.26718V10.7339C18.3415 11.6005 17.6332 12.3172 16.7582 12.3172C15.2498 12.3172 14.6332 13.3838 15.3915 14.6922C15.8248 15.4505 15.5665 16.4172 14.8082 16.8505L13.3665 17.6755C12.7082 18.0672 11.8582 17.8339 11.4665 17.1755L11.3748 17.0172C10.6248 15.7089 9.3915 15.7089 8.63317 17.0172L8.5415 17.1755C8.14984 17.8339 7.29984 18.0672 6.6415 17.6755L5.19984 16.8505C4.4415 16.4172 4.18317 15.4422 4.6165 14.6922C5.37484 13.3838 4.75817 12.3172 3.24984 12.3172C2.37484 12.3172 1.6665 11.6005 1.6665 10.7339Z"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <h4 className="body-large text-white text-end">حادثه‌آفرین</h4>

          <div className="absolute -top-3 right-14">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.26795 1C8.03775 -0.333333 9.96225 -0.333333 10.7321 1L17.6603 13C18.4301 14.3333 17.4678 16 15.9282 16H2.0718C0.532197 16 -0.430054 14.3333 0.339746 13L7.26795 1Z"
                fill="#170304"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslateCard;
