"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// components
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import CommentsSection from "@/components/CommentsSection";

// data
import { news } from "@/constants/data";

// utils
import { parseStyledText } from "@/utilities/utils";

function Page() {
  const pathname = usePathname();
  const newsDetails = news.find(
    (n) => n.title.trim() === decodeURIComponent(pathname.split("/")[2])
  );

  const [like1, setLike1] = useState(253);
  const [like2, setLike2] = useState(253);

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToComments = () => {
    const element = document.getElementById("Comments");
    if (element) {
      const yOffset = -80; // scroll 80px *above* the element
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      inputRef.current?.focus();
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level3 space-y-16 py-5 md:py-10">
      {/* main content */}
      <div className="space-y-9">
        {/* top section */}
        <div className="space-y-6">
          {/* cover / title / author, time */}
          <div className="space-y-4">
            {/* cover */}
            <div className="rounded overflow-hidden">
              <Image
                className="object-cover w-full h-[202px] md:h-[377px] rounded aspect-16-9"
                src={`/${newsDetails?.coverImg}.png`}
                alt={newsDetails ? newsDetails.coverImg : ""}
                width={672}
                height={377}
              />
            </div>

            {/* title / author, time */}
            <div className="space-y-2">
              {/* title */}
              <h4 className="mobile-title-large md:title-large text-on_surface-light">
                Title Of Lesson
              </h4>

              {/* author, time */}
              <div className="flex items-center gap-3 mobile-label-medium md:label-medium text-txt-on-surface-terriary-light">
                {/* author */}
                <div className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                      stroke="#9B9798"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <mask id="path-2-inside-1_1030_5670" fill="white">
                      <path d="M10.2951 11C10.2951 9.065 8.37008 7.5 6.00008 7.5C3.63008 7.5 1.70508 9.065 1.70508 11" />
                    </mask>
                    <path
                      d="M9.29507 11C9.29507 11.5523 9.74279 12 10.2951 12C10.8474 12 11.2951 11.5523 11.2951 11H9.29507ZM0.705078 11C0.705078 11.5523 1.15279 12 1.70508 12C2.25736 12 2.70508 11.5523 2.70508 11H0.705078ZM10.2951 11H11.2951C11.2951 8.33053 8.72058 6.5 6.00008 6.5V7.5V8.5C8.01958 8.5 9.29507 9.79947 9.29507 11H10.2951ZM6.00008 7.5V6.5C3.27958 6.5 0.705078 8.33053 0.705078 11H1.70508H2.70508C2.70508 9.79947 3.98058 8.5 6.00008 8.5V7.5Z"
                      fill="#9B9798"
                      mask="url(#path-2-inside-1_1030_5670)"
                    />
                  </svg>

                  <span>{newsDetails?.author}</span>
                </div>

                {/* time */}
                <div className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                      stroke="#9B9798"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4V6.5"
                      stroke="#9B9798"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 1H7.5"
                      stroke="#9B9798"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span>12 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* likes, comments count / share, flag button */}
          <div className="flex items-center justify-between gap-3 bg-surface0-light rounded py-1 md:py-2 px-1.5 md:px-2.5">
            {/* likes, comments count */}
            <div className="flex items-center gap-4 mobile-label-large md:label-large text-on_surface-light">
              {/* like */}
              <div className="flex items-center gap-1 md:pl-4">
                <Button
                  props={{
                    value: "",
                    type: "text",
                    color: "red",
                    leftIcon: "",
                    rightIcon: "like",
                    disabled: false,
                    padding: "p-3",
                    width: 24,
                    height: 24,
                    clickHandler: () => setLike1((prev) => prev + 1),
                  }}
                />

                <span>{like1}</span>
              </div>

              {/* count of comments */}
              <div className="flex items-center gap-1">
                <Button
                  props={{
                    value: "",
                    type: "text",
                    color: "red",
                    leftIcon: "",
                    rightIcon: "message-text",
                    disabled: false,
                    padding: "p-3",
                    width: 24,
                    height: 24,
                    clickHandler: () => scrollToComments(),
                  }}
                />

                <span>{newsDetails?.comments}</span>
              </div>
            </div>

            {/* share, flag button */}
            <div className="flex items-center gap-2">
              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  leftIcon: "",
                  rightIcon: "share-black",
                  disabled: false,
                  padding: "p-3",
                  width: 24,
                  height: 24,
                }}
              />

              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  leftIcon: "",
                  rightIcon: "flag-black",
                  disabled: false,
                  padding: "p-3",
                  width: 24,
                  height: 24,
                }}
              />
            </div>
          </div>
        </div>

        {/* descriptions section */}
        <div className="space-y-9">
          <div className="space-y-3">
            <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
              Title Of Lesson
            </h4>

            <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. @(*Ullamcorper*)@ velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
          </div>

          {/* cover */}
          <div className="rounded overflow-hidden">
            <Image
              className="object-cover w-full max-h-[234px] rounded"
              src={`/${newsDetails?.coverImg}.png`}
              alt={newsDetails ? newsDetails.coverImg : ""}
              width={672}
              height={234}
            />
          </div>

          <div className="space-y-3">
            <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
              Title Of Lesson
            </h4>

            <div className="space-y-2 mobile-body-large md:body-large">
              <p className="text-txt-on-surface-secondary-light text-justify">
                {parseStyledText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
                )}
              </p>
              <p className="text-txt-on-surface-secondary-light text-justify">
                {parseStyledText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
                )}
              </p>
            </div>
          </div>

          {/* likes, comments count / share, flag button */}
          <div className="flex items-center justify-between gap-3 bg-surface0-light rounded py-1 md:py-2 px-1.5 md:px-2.5">
            {/* likes, comments count */}
            <div className="flex items-center gap-4 mobile-label-large md:label-large text-on_surface-light">
              {/* like */}
              <div className="flex items-center gap-1 md:pl-4">
                <Button
                  props={{
                    value: "",
                    type: "text",
                    color: "red",
                    leftIcon: "",
                    rightIcon: "like",
                    disabled: false,
                    padding: "p-3",
                    width: 24,
                    height: 24,
                    clickHandler: () => setLike2((prev) => prev + 1),
                  }}
                />

                <span>{like2}</span>
              </div>

              {/* count of comments */}
              <div className="flex items-center gap-1">
                <Button
                  props={{
                    value: "",
                    type: "text",
                    color: "red",
                    leftIcon: "",
                    rightIcon: "message-text",
                    disabled: false,
                    padding: "p-3",
                    width: 24,
                    height: 24,
                    clickHandler: () => scrollToComments(),
                  }}
                />

                <span>{newsDetails?.comments}</span>
              </div>
            </div>

            {/* share, flag button */}
            <div className="flex items-center gap-2">
              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  leftIcon: "",
                  rightIcon: "share-black",
                  disabled: false,
                  padding: "p-3",
                  width: 24,
                  height: 24,
                }}
              />

              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  leftIcon: "",
                  rightIcon: "flag-black",
                  disabled: false,
                  padding: "p-3",
                  width: 24,
                  height: 24,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* comments */}
      <div id="Comments" className="space-y-9">
        <div className="space-y-6">
          <h4 className="mobile-title-medium md:title-medium">
            Comments ({newsDetails?.comments})
          </h4>

          <div className="p-3 bg-surface0-light rounded">
            <input
              ref={inputRef}
              className="p-3 bg-white rounded outline-none mobile-body-large md:body-large placeholder:text-txt-on-surface-terriary-light text-on_surface-light w-full"
              type="text"
              placeholder="What do you think?"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-0">
            <CommentsSection stars={true} />
          </div>
        </div>
      </div>

      {/* related news */}
      <div className="space-y-6">
        <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Related News</h4>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
        {news.map((n) => (
            <CourseCard key={n.id} data={n} type="news" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
