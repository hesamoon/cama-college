"use client";

import { useState } from "react";

// components
import Button from "./Button";

// data
import { days } from "@/constants/data";

function ScheduleView() {
  const [more, setMore] = useState(1);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 items-center gap-6">
        {days.slice(0, more * 12).map((day) => (
          <div
            key={day.id}
            className={`relative border border-outline-level1 p-3 rounded flex flex-col items-center justify-center ${
              day.haveClass
                ? "bg-background-primary-light text-txt-on-primary-dark"
                : "bg-transparent text-txt-on-surface-secondary-light"
            }`}
          >
            <h5 className="uppercase label-medium">
              {new Date(day.date).toLocaleString("en-us", { weekday: "short" })}
            </h5>
            <h5 className="label-large-db">
              {new Date(day.date).toLocaleString("en-us", { day: "2-digit" })}
            </h5>

            {day.newEvents.length > 0 ? (
              <div className="absolute top-1 right-1 flex items-center gap-0.5">
                {day.newEvents.map((e) => (
                  <div key={e} className="w-2 h-2 rounded-full bg-green" />
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
            value: more * 12 <= days.length ? "See More" : "See Less",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon:
              more * 12 <= days.length ? "arrow-down-red" : "arrow-down-red",
            type: "text",
            size: "body-large",
            padding: "px-3 py-2",
            clickHandler: () =>
              more * 12 <= days.length
                ? setMore((prev) => prev + 1)
                : setMore((prev) => prev - 1),
          }}
        />
      </div>
    </div>
  );
}

export default ScheduleView;
