"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat.",
  },
];

function FAQPreview() {
  const [opendFAQ, setOpenFAQ] = useState(faqs[1]);

  return (
    <div className="space-y-4">
      {faqs.map((fq, index) => (
        <div
          key={fq.id}
          className="bg-surface0-light rounded-lg py-4 px-6 cursor-pointer divide-y divide-outline-level1 space-y-4"
          onClick={() => setOpenFAQ(fq)}
        >
          <div
            className={`flex items-center justify-between transition-all ease-linear duration-200 ${
              opendFAQ.id === fq.id ? "pb-4" : ""
            }`}
          >
            {/* index and title */}
            <div className="flex items-center gap-2">
              <h5 className="header-medium outline-text">{index + 1}.</h5>

              <h4 className="body-large text-on_surface-light">{fq.title}</h4>
            </div>

            {/* icon */}
            <div
              className={`transition-all ease-in-out duration-200 ${
                opendFAQ.id === fq.id ? "rotate-180" : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2802 5.9668L8.93355 10.3135C8.42021 10.8268 7.58021 10.8268 7.06688 10.3135L2.72021 5.9668"
                  stroke="#170304"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* content */}
          {opendFAQ.id === fq.id && (
            <p className="text-justify text-txt-on-surface-secondary-light body-large">
              {fq.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQPreview;
