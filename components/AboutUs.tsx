"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// components
import Button from "./Button";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

function AboutUs({ sx }: { sx: string }) {
  const [moreClicked, setMoreClicked] = useState(false);
  const isMobile = useIsMobile();

  const desc = `Canada Management College (CAMA College) is an academic and entrepreneurial training center. With a business name approval from Canada’s Ministry of Colleges and Universities, CAMA College is an institution with its administrative and in-person focus primarily on Ontario for the time being.
  However, CAMA College welcomes students from all around the world in various practical disciplines for all facets of management as well as all kinds of managers and business owners, offering principles of Management and Leadership, Marketing, Branding, Advertising, Digital Marketing, IT, Artificial Intelligence, Organizational Structuring, Human Resources, and many more programs for you to hone your managerial skills. Utilizing the expertise of an internationally dynamic faculty, we offer both short-term and long-term practical courses, currently not only in English but also in Persian/Farsi.`;

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 space-y-6">
      <div className={`${sx} space-y-2 mt-10`}>
        <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
          About Us
        </h4>

        <div
          className="mobile-body-large md:body-large cursor-pointer"
          onClick={() => setMoreClicked((prev) => !prev)}
        >
          {desc.length <= (isMobile ? 150 : 350) ? (
            <p className="text-justify text-txt-secondary">{desc}</p>
          ) : (
            <div className="">
              <p
                className={`inline text-justify text-txt-secondary whitespace-pre-line`}
              >
                {moreClicked
                  ? desc
                  : `${desc.slice(0, isMobile ? 150 : 350)}...`}
              </p>

              <Button
                props={{
                  value: moreClicked ? "less" : "more",
                  disabled: false,
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  color: "red",
                  size: "mobile-body-large md:body-large !inline",
                  padding: "px-3 py-0",
                  clickHandler: () => setMoreClicked((prev) => !prev),
                }}
              />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {moreClicked && (
          <motion.div
            key="footer-links"
            className="flex flex-col md:flex-row md:items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Link href="/brand-story">
              <Button
                props={{
                  value: "Brand Story",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  size: "mobile-body-large md:body-large",
                  // clickHandler: () => setReplyText(""),
                }}
              />
            </Link>

            <div className="hidden md:block w-2 h-2 rounded-full bg-[#D7D5D6]" />

            <Link href="/vision-mission">
              <Button
                props={{
                  value: "Vision & Mission",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  size: "mobile-body-large md:body-large",
                  // clickHandler: () => setReplyText(""),
                }}
              />
            </Link>

            <div className="hidden md:block w-2 h-2 rounded-full bg-[#D7D5D6]" />

            <Link href="/our-legality-and-legitimacy">
              <Button
                props={{
                  value: "Our Legality and Legitimacy",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  size: "mobile-body-large md:body-large",
                  // clickHandler: () => setReplyText(""),
                }}
              />
            </Link>

            <div className="hidden md:block w-2 h-2 rounded-full bg-[#D7D5D6]" />

            <Link href="/policies-and-regulations">
              <Button
                props={{
                  value: "Policies and Regulations",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  size: "mobile-body-large md:body-large",
                  // clickHandler: () => setReplyText(""),
                }}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AboutUs;
