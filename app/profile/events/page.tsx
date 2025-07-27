"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";
import ScheduleView from "@/components/ScheduleView";
import SearchBoxContainer from "@/components/SearchBoxContainer";

// data
import { events } from "@/constants/data";

function Page() {
  const [filter, setFilter] = useQueryState("filter", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const [controlledList, setControlledList] = useState(events);

  useEffect(() => {
    setControlledList(
      events.filter(
        (eIP) => eIP.name.toLowerCase().includes(search.toLowerCase())
        // eIP.status.includes(filter ? filter : "")
      )
    );
  }, [search, filter]);

  useEffect(() => {
    setControlledList(events);
  }, []);

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Events Schedule
        </h2>

        <ScheduleView />
      </div>

      {/* events */}
      <div className="space-y-9">
        {/* upcoming events section */}
        <div className="space-y-4">
          <h2 className="mobile-title-large md:title-large text-on_surface-light">
            Upcoming Events
          </h2>

          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="min-w-[267px]">
              <CourseCard data={{ ...events[0], cardType: "EVENT" }} />
            </div>
            <div className="min-w-[267px]">
              <CourseCard data={{ ...events[1], cardType: "EVENT" }} />
            </div>
            <div className="min-w-[267px]">
              <CourseCard data={{ ...events[2], cardType: "EVENT" }} />
            </div>
          </div>
        </div>

        {/* events history section */}
        <div className="space-y-6">
          <SearchBoxContainer
            placeholder="Search in events..."
            isSearchCourse={true}
          />

          <div className="space-y-4 pb-10 md:pb-0">
            {/* title, filter box */}
            <div className="flex items-center justify-between">
              <h2 className="mobile-title-large md:title-large text-on_surface-light">
                Events History
              </h2>

              {/* filter */}
              <div className="flex items-center border border-outline1 rounded px-2 md:pl-3 md:pr-4 mobile-body-large md:body-large">
                <span className="text-txt-on-surface-terriary-light">
                  Filter:
                </span>

                <select
                  className="md:px-1 py-2 outline-none text-txt-on-surface-secondary cursor-pointer"
                  value={filter === "" ? "All Programs" : filter}
                  onChange={(e) =>
                    e.target.value === "All Events"
                      ? setFilter("")
                      : setFilter(e.target.value)
                  }
                >
                  <option value="All Events">All Events</option>
                  <option value="General">General</option>
                </select>
              </div>
            </div>

            {/* courses */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {controlledList.length > 0 ? (
                controlledList.map((item) => (
                  <CourseCard key={item.id} data={{ ...item, cardType: "EVENT" }} />
                ))
              ) : filter || search ? (
                <h5 className="col-span-8 p-3 text-center">Event not found!</h5>
              ) : (
                <h5 className="col-span-8 p-3 text-center">
                  You don&#39;t have any event yet!
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
