"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";
import ScheduleView from "@/components/ScheduleView";
import SearchBoxContainer from "@/components/SearchBoxContainer";

// types
import { Events } from "@/app/types/types";

// data
import { events } from "@/constants/data";

function Page() {
  const [filter, setFilter] = useQueryState("filter", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const [controlledList, setControlledList] = useState<Events[]>([]);

  useEffect(() => {
    setControlledList(
      events.filter(
        (pIP) =>
          pIP.name.toLowerCase().includes(search.toLowerCase()) &&
          pIP.category.includes(filter ? filter : "")
      )
    );
  }, [search, filter]);

  useEffect(() => {
    setControlledList(events);
  }, []);

  return (
    <div className="grid-system-level0 w-full space-y-9">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="title-large text-on_surface-light">Events Schedule</h2>

        <ScheduleView />
      </div>

      {/* events */}
      <div className="space-y-9">
        {/* upcoming events section */}
        <div className="space-y-4">
          <h2 className="title-large text-on_surface-light">Upcoming Events</h2>

          <div className="flex items-center gap-6 justify-between">
            <CourseCard data={events[0]} type="events" />
            <CourseCard data={events[1]} type="events" />
            <CourseCard data={events[2]} type="events" />
          </div>
        </div>

        {/* events history section */}
        <div className="space-y-6">
          <SearchBoxContainer
            placeholder="Search in events..."
            isSearchCourse={true}
          />

          <div className="space-y-4">
            {/* title, filter box */}
            <div className="flex items-center justify-between">
              <h2 className="title-large text-on_surface-light">
                Events History
              </h2>

              {/* filter */}
              <div className="flex items-center border border-outline1 rounded py-0.5 pl-3 pr-4">
                <span className="body-large text-txt-on-surface-terriary-light">
                  Filter:
                </span>

                <select
                  className="px-1 py-2 outline-none body-large text-txt-on-surface-secondary cursor-pointer"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {controlledList.map((item) => (
                <CourseCard key={item.id} data={item} type="events" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
