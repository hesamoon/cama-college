"use client";

import Image from "next/image";

// components
import Button from "@/components/Button";
import ScheduleView from "@/components/ScheduleView";
import CourseInProgress from "@/components/CourseInProgress";

// data
import { programsInProgress } from "@/constants/data";

function page() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9 py-5">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          User Schedule
        </h2>

        <ScheduleView />
      </div>

      {/* last program section */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Last Program
        </h2>

        <CourseInProgress courseDetails={programsInProgress[0]} />
      </div>

      {/* Certifications section */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Certifications
        </h2>

        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-6">
          {programsInProgress.map((pIP) => (
            <div
              key={pIP.id}
              className="relative overflow-hidden bg-surface0-light border border-outline-level0 rounded z-10"
            >
              <div className="absolute -top-[4.5rem] -left-[4.5rem] w-[110px] h-[395.3496956058634px] rounded-lg bg-[#A91418] opacity-10 rotate-[30deg] -z-5" />

              <div className="flex items-center justify-between pt-2 px-4">
                <h3 className="mobile-title-small md:title-small text-txt-on-surface-secondary-light">
                  {pIP.name}
                </h3>

                <Button
                  props={{
                    value: "",
                    disabled: false,
                    leftIcon: "document-download",
                    rightIcon: "",
                    type: "text",
                    color: "red",
                    size: "mobile-body-medium md:body-large",
                    // clickHandler: () => setMoreClicked((prev) => !prev),
                  }}
                />
              </div>

              <div className="p-1 flex items-center justify-center">
                <Image
                  className="w-full"
                  src="/certifications.png"
                  alt="credential"
                  width={307.87}
                  height={158.8}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
