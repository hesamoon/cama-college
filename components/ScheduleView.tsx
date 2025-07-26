"use client";

import { useState } from "react";

// components
import Button from "./Button";

// data
import { days } from "@/constants/data";
import useIsMobile from "@/hooks/useIsMobile";

function ScheduleView() {
  const [more, setMore] = useState(1);
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4">
      <div
        className={`grid ${
          isMobile ? "grid-cols-7 gap-1" : "grid-cols-12 gap-6"
        } items-center`}
      >
        {days.slice(0, isMobile ? more * 7 : more * 12).map((day) => (
          <div
            key={day.id}
            className={`relative border border-outline-level1 p-2 md:p-3 rounded flex flex-col items-center justify-center ${
              day.haveClass
                ? "bg-background-primary-light text-txt-on-primary-dark"
                : "bg-transparent text-txt-on-surface-secondary-light"
            }`}
          >
            <h5 className="uppercase mobile-label-medium md:label-medium">
              {new Date(day.date).toLocaleString("en-us", { weekday: "short" })}
            </h5>
            <h5 className="mobile-label-large-db md:label-large-db">
              {new Date(day.date).toLocaleString("en-us", { day: "2-digit" })}
            </h5>

            {day.newEvents.length > 0 ? (
              <div className="absolute top-1 right-1 flex items-center gap-0.5">
                {day.newEvents.map((e) => (
                  <div key={e} className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green" />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* more button */}
      <div className="flex items-center justify-center">
        <Button
          props={{
            value:
              (isMobile ? more * 7 : more * 12) <= days.length
                ? "See More"
                : "See Less",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon:
              (isMobile ? more * 7 : more * 12) <= days.length
                ? "arrow-down-red"
                : "arrow-down-red",
            type: "text",
            size: "mobile-body-large md:body-large",
            padding: "px-3 py-2",
            clickHandler: () =>
              (isMobile ? more * 7 : more * 12) <= days.length
                ? setMore((prev) => prev + 1)
                : setMore((prev) => prev - 1),
          }}
        />
      </div>
    </div>
  );
}

export default ScheduleView;
