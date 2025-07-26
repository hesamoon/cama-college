"use client";

import { useState } from "react";
import Image from "next/image";

// components
import Button from "./Button";

const desc0 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas consectetur adipiscing elit, sed`;
const desc1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt`;
function ContentSection() {
  return (
    <div id="Content" className="space-y-4 pt-10">
      <div className="space-y-2">
        {/* hours */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-primary-tints-90 flex items-center gap-4 p-3 rounded-xs"
            >
              <Image src="/book.svg" alt="book" width={24} height={24} />
              <h4 className="mobile-label-large-db md:label-large-db text-on_surface-light">
                38+ hours
              </h4>
            </div>
          ))}
        </div>

        {/* subjects */}
        <div className="md:hidden border border-outline-level1 rounded p-5 space-y-3">
          <h3 className="mobile-title-medium md:title-medium text-on_surface-light">
            Subjects
          </h3>

          <div className="space-y-4">
            {[
              { id: 1, desc: desc0 },
              { id: 2, desc: desc1 },
            ].map((subject) => (
              <SubjectBlock
                key={subject.id}
                id={subject.id}
                desc={subject.desc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="relative overflow-hidden flex flex-col-reverse items-center md:grid md:grid-cols-2 md:gap-6 border border-outline-level1 rounded">
        <div className="p-4 md:p-6 space-y-3 col-span-1">
          <h3 className="mobile-title-medium md:title-medium text-on_surface-light">
            Credential
          </h3>

          <p className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra.
          </p>
        </div>

        <div className="p-4 col-span-1 flex items-center justify-center z-30">
          <Image
            src="/credential.png"
            alt="credential"
            width={317.8671875}
            height={168.80615234375}
          />
        </div>

        <div className="absolute -top-[4.5rem] -left-[4.5rem] w-[110px] h-[395.3496956058634px] rounded-lg bg-[#A91418] opacity-10 rotate-[30deg]" />

        <div className="absolute -top-[16rem] -right-20 w-[195.94994806890335px] h-[704.2614634570201px] rounded-lg bg-[#A91418] opacity-10 -rotate-[94.99deg]" />

        <div className="absolute -top-[16rem] -right-20 w-[195.94994806890335px] h-[704.2614634570201px] rounded-lg bg-[#A91418] opacity-10 -rotate-[75deg]" />
      </div>

      {/* credential */}
      <div className="border border-outline-level1 rounded space-y-3 p-4 md:p-6">
        <h3 className="mobile-title-medium md:title-medium text-on_surface-light">Instructor</h3>

        <div className="space-y-2">
          <h3 className="mobile-body-medium md:body-medium text-on_surface-light space-x-1.5">
            <span>Name</span>
            <span className="mobile-label-medium-db md:label-medium-db">Education</span>
          </h3>

          <p className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;

const SubjectBlock = ({ id, desc }: { id: number; desc: string }) => {
  const [moreClicked, setMoreClicked] = useState(false);

  return (
    <div key={id} className="space-y-1">
      <div className="space-y-2">
        <h4 className="mobile-title-small md:title-small text-on_surface-light">
          Subject {id}
        </h4>

        <div className="flex items-center gap-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-1">
              <Image src="/book-grey.svg" alt="book" width={16} height={16} />
              <span className="mobile-label-small md:label-small text-txt-on-surface-terriary-light">
                Lorem ipsum
              </span>
              {item !== 3 && (
                <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
              )}
            </div>
          ))}
        </div>

        {desc.length <= 523 ? (
          <p className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light text-justify">
            {desc}
          </p>
        ) : (
          <div className="">
            <p
              className={`inline mobile-body-medium md:body-medium text-txt-on-surface-secondary-light text-justify`}
            >
              {moreClicked ? desc : `${desc.slice(0, 523)}...`}
            </p>

            <Button
              props={{
                value: moreClicked ? "less" : "more",
                disabled: false,
                leftIcon: "",
                rightIcon: "",
                type: "text",
                color: "red",
                size: "mobile-body-medium md:body-large !inline",
                padding: "px-3",
                clickHandler: () => setMoreClicked((prev) => !prev),
              }}
            />
          </div>
        )}
      </div>

      <Button
        props={{
          value: "More Details",
          disabled: false,
          type: "text",
          leftIcon: "",
          rightIcon: "arrow-right-red",
          color: "red",
          width: 20,
          height: 20,
          size: "body-small md:body-medium",
          padding: "py-1 px-3",
        }}
      />
    </div>
  );
};
