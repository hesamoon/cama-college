"use client";

import { useState } from "react";
import SendCommentModal from "./modal/SendCommentModal";

const ratingData = [
  { stars: 5, percentage: 88.98 },
  { stars: 4, percentage: 32.03 },
  { stars: 3, percentage: 22.98 },
  { stars: 2, percentage: 12.03 },
  { stars: 1, percentage: 15.08 },
];

export default function RatingCard({ ratingFor }: { ratingFor: string }) {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(1);

  return (
    <div className="sticky top-[9.5rem] border border-outline-level0 rounded py-5 px-6 space-y-4 md:space-y-8">
      {/* Header */}
      <div className="hidden md:flex items-baseline">
        <span className="header-large text-on_surface-light">4.7</span>
        <span className="label-small text-txt-on-surface-terriary-light">
          <span className="body-large">/5</span> (58 votes)
        </span>
      </div>

      {/* Ratings Breakdown */}
      <div className="hidden md:block mt-4 space-y-3">
        {ratingData.map(({ stars, percentage }) => (
          <div key={stars} className="flex items-center gap-3">
            <span className="label-medium-db text-txt-on-surface-secondary-light">
              {stars}
            </span>

            <div className="relative flex-1 h-0.5 bg-outline-level1 rounded">
              <div
                className="absolute top-0 left-0 h-0.5 bg-background-primary-light rounded"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <span className="label-small text-txt-on-surface-terriary-light">
              {percentage.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      <hr className="hidden md:block my-4 border-outline-level0" />

      {/* Tip */}
      <div className="flex items-center gap-2 mobile-label-small md:label-small text-txt-secondary">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M14 5V10H13C11.35 10 10 11.35 10 13V14H5C3.34 14 2 12.66 2 11V5C2 3.34 3.34 2 5 2H11C12.66 2 14 3.34 14 5Z"
            fill="#424242"
          />
          <path
            d="M5.19952 6.63014C4.96952 6.63014 4.72952 6.52013 4.58952 6.31013C4.34952 5.97013 4.42952 5.50015 4.76952 5.26015C5.54952 4.71015 6.59951 4.70013 7.38951 5.24013C7.72951 5.47013 7.81952 5.94017 7.58952 6.28017C7.35952 6.62017 6.88951 6.71012 6.54951 6.48012C6.27951 6.30012 5.91952 6.30013 5.64952 6.49013C5.49952 6.59013 5.34952 6.63014 5.19952 6.63014Z"
            fill="#424242"
          />
          <path
            d="M9.19952 6.63014C8.96952 6.63014 8.72952 6.52013 8.58952 6.31013C8.34952 5.97013 8.42952 5.50015 8.76952 5.26015C9.54952 4.71015 10.5995 4.70013 11.3895 5.24013C11.7295 5.47013 11.8195 5.94017 11.5895 6.28017C11.3595 6.62017 10.8895 6.71012 10.5495 6.48012C10.2795 6.30012 9.91952 6.30013 9.64952 6.49013C9.49952 6.59013 9.34952 6.63014 9.19952 6.63014Z"
            fill="#424242"
          />
          <path
            d="M8.16078 12.1699H5.84078C5.13078 12.1699 4.55078 11.5899 4.55078 10.8799C4.55078 8.97994 6.10078 7.42993 8.00078 7.42993C8.78078 7.42993 9.55078 7.69994 10.1608 8.18994C10.4808 8.44994 10.5408 8.91993 10.2808 9.23993C10.0208 9.55993 9.55078 9.61992 9.23078 9.35992C8.88078 9.07992 8.46078 8.92993 8.01078 8.92993C7.01078 8.92993 6.18078 9.68992 6.07078 10.6699H8.17078C8.58078 10.6699 8.92078 11.0099 8.92078 11.4199C8.92078 11.8299 8.57078 12.1699 8.16078 12.1699Z"
            fill="#424242"
          />
          <path
            d="M18.2207 16.6801C18.1507 16.6001 18.0507 16.5601 17.9407 16.5601H14.0607C13.9507 16.5601 13.8507 16.6001 13.7807 16.6801C13.7107 16.7601 13.6707 16.87 13.6907 16.97C13.8207 18.15 14.8107 19.05 16.0007 19.05C17.1907 19.05 18.1807 18.16 18.3107 16.97C18.3207 16.86 18.2907 16.7601 18.2207 16.6801Z"
            fill="#424242"
          />
          <path
            d="M19 10H13C11.35 10 10 11.35 10 13V19C10 20.65 11.35 22 13 22H19C20.65 22 22 20.65 22 19V13C22 11.35 20.65 10 19 10ZM12.59 13.17C12.83 12.83 13.3 12.75 13.64 12.99C13.91 13.18 14.27 13.18 14.54 13C14.88 12.76 15.35 12.85 15.58 13.2C15.81 13.54 15.73 14.01 15.38 14.24C14.99 14.5 14.54 14.64 14.09 14.64C13.62 14.64 13.16 14.5 12.77 14.22C12.43 13.97 12.35 13.5 12.59 13.17ZM16 20.17C14.1 20.17 12.55 18.62 12.55 16.72C12.55 16.01 13.13 15.43 13.84 15.43H18.16C18.87 15.43 19.45 16.01 19.45 16.72C19.45 18.62 17.9 20.17 16 20.17ZM19.38 14.23C18.99 14.49 18.54 14.63 18.09 14.63C17.62 14.63 17.16 14.49 16.77 14.21C16.43 13.97 16.35 13.5 16.59 13.16C16.83 12.82 17.3 12.74 17.64 12.98C17.91 13.17 18.27 13.17 18.54 12.99C18.88 12.75 19.35 12.84 19.58 13.19C19.81 13.54 19.72 14 19.38 14.23Z"
            fill="#424242"
          />
        </svg>
        Safer shopping with more reviews
      </div>

      {/* Submit Rating */}
      <div className="md:mt-4 space-y-2">
        <p className="mobile-body-small md:body-small text-on_surface-light">
          Submit your score:
        </p>
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="flex flex-col items-center justify-center gap-1 cursor-pointer"
              onClick={() => {
                setScore(num);
                setOpen(true);
              }}
            >
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8479 1.8541C12.4466 0.0114832 15.0534 0.0114818 15.6521 1.8541L17.3422 7.05573C17.61 7.87977 18.3779 8.43769 19.2443 8.43769H24.7136C26.6511 8.43769 27.4566 10.9169 25.8892 12.0557L21.4645 15.2705C20.7635 15.7798 20.4702 16.6825 20.7379 17.5066L22.428 22.7082C23.0267 24.5508 20.9178 26.0831 19.3503 24.9443L14.9256 21.7295C14.2246 21.2202 13.2754 21.2202 12.5744 21.7295L8.14966 24.9443C6.58224 26.0831 4.47327 24.5508 5.07198 22.7082L6.76209 17.5066C7.02984 16.6825 6.73652 15.7798 6.03555 15.2705L1.61078 12.0557C0.043355 10.9169 0.848905 8.43769 2.78635 8.43769H8.25566C9.12212 8.43769 9.89003 7.87977 10.1578 7.05573L11.8479 1.8541Z"
                  fill="#D7D5D6"
                />
              </svg>

              <h4 className="mobile-body-large md:body-large text-txt-on-surface-secondary-light p-2">
                {num}
              </h4>
            </button>
          ))}
        </div>
      </div>

      <SendCommentModal
        open={open}
        onClose={() => setOpen(false)}
        score={score}
        commentFor={ratingFor}
      />
    </div>
  );
}
