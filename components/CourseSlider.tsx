"use client";

import { useRouter } from "next/navigation";

// components
import Button from "./Button";

function CourseSlider({ type }: { type?: string }) {
  const router = useRouter();

  return (
    <>
      <div
        className={`relative grid grid-cols-2 md:grid-cols-3 md:grid-system-level00`}
        style={{
          backgroundImage: `url(/bg-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* left side */}
        <div className="md:pl-16 py-12 md:py-20 col-span-1 rounded-sm bg-linear-to-r from-[#3B070966]">
          <div className="hidden md:block space-y-4 md:space-y-9">
            <h2 className="mobile-header-large md:header-large text-txt-on-primary-dark max-w-[304px]">
              This is a title for slider
            </h2>

            <Button
              props={{
                value: `See ${type}`,
                type: "filled",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: "arrow-right-ios-white",
                padding: "p-2 md:py-2 md:px-6",
                size: "mobile-body-large md:body-large whitespace-nowrap",
                height: 20,
                width: 20,
                clickHandler: () =>
                  router.push(
                    `/${type === "Programs" ? "programs" : "events"}`
                  ),
              }}
            />
          </div>
        </div>

        {/* right side */}
        <div className="hidden md:flex items-end justify-end gap-2 py-3 pr-3 md:py-5 col-span-1 md:col-span-2">
          <Button
            props={{
              value: "",
              type: "outlined",
              color: "red",
              disabled: false,
              leftIcon: "arrow-left-ios-red",
              rightIcon: "",
              padding: "p-2",
              size: "body-large",
              height: 24,
              width: 24,
            }}
          />

          <Button
            props={{
              value: "",
              type: "outlined",
              color: "red",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right-red",
              padding: "p-2",
              size: "body-large",
              height: 24,
              width: 24,
            }}
          />
        </div>
      </div>

      <div className="block relative md:hidden mobile-grid-system-level0 -mt-4 z-50">
        <div className="flex flex-row items-center justify-between gap-2 py-2 px-3 bg-white border border-outline-level0 rounded">
          <h2 className="mobile-title-medium text-on_surface-light">
            This is a title for slider
          </h2>

          <Button
            props={{
              value: `See ${type}`,
              type: "filled",
              color: "red",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right-ios-white",
              padding: "p-2",
              size: "mobile-body-small md:body-large whitespace-nowrap",
              height: 20,
              width: 20,
              clickHandler: () =>
                router.push(`/${type === "Programs" ? "programs" : "events"}`),
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CourseSlider;
