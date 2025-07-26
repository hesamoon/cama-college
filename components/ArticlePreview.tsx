"use client";

import { useState } from "react";
import Link from "next/link";

// types
import { Article } from "@/app/types/types";

// components
import Button from "./Button";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

function ArticlePreview({ data }: { data: Article }) {
  const { type, title, desc, year, author, open } = data;

  const [moreClicked, setMoreClicked] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4 py-2">
      <div className="flex flex-col gap-4">
        <Link href={`/articles/${title}`} className="space-y-2">
          <h6 className="mobile-label-medium md:label-medium text-on_surface-light">
            {type}
          </h6>
          <h2 className="mobile-title-medium md:title-medium text-on_surface-light">
            {title}
          </h2>
        </Link>

        <div
          className="mobile-body-large md:body-large bg-[#FCE8E95C] border-l-2 border-background-primary-light rounded p-5.5 cursor-pointer"
          onClick={() => setMoreClicked((prev) => !prev)}
        >
          {desc.length <= (isMobile ? 150 : 523) ? (
            <p className="text-justify text-txt-secondary">{desc}</p>
          ) : (
            <div className="">
              <p className={`inline text-justify text-txt-secondary`}>
                {moreClicked
                  ? desc
                  : `${desc.slice(0, isMobile ? 150 : 523)}...`}
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

      {/* year, author, open acccess / share button */}
      <div className="flex items-center gap-2 justify-between">
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mobile-body-medium md:body-medium">
          <span className="text-txt-on-surface-secondary-light">{year}</span>

          <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

          <span className="text-txt-on-surface-terriary-light">{author}</span>

          {open && (
            <>
              <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

              <span className="text-txt-on-surface-terriary-light">
                Open Access
              </span>
            </>
          )}
        </div>

        <div className="min-w-10 min-h-10 flex items-center justify-center">
          <Button
            props={{
              value: "",
              disabled: false,
              leftIcon: "",
              rightIcon: "share-black",
              type: "text",
              padding: "p-2 md:p-3.5",
              width: 20,
              height: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
