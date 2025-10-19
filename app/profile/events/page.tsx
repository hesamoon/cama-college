"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

// components
import CourseCard from "@/components/CourseCard";
import ScheduleView from "@/components/ScheduleView";
import SearchBoxContainer from "@/components/SearchBoxContainer";

// api
import { getEvents } from "@/lib/api/events";

// types
import { Event } from "@/app/types/types";
import InProgressEventsSkeletone from "@/components/skeletons/InProgressEventsSkeletone";

function Page() {
  const [filter, setFilter] = useQueryState("filter", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const { data: eventsData, isLoading: isLoadingEvents } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const [controlledList, setControlledList] = useState<Event[]>([]);

  useEffect(() => {
    if (eventsData?.data.data.length > 0)
      setControlledList(
        eventsData?.data.data.filter(
          (pIP: Event) =>
            pIP.name.toLowerCase().includes(search.toLowerCase()) &&
            pIP.subject.includes(filter ? filter : "")
        )
      );
  }, [search, filter]);

  useEffect(() => {
    if (eventsData?.data.data.length > 0)
      setControlledList(eventsData?.data.data);
  }, [eventsData]);

  return isLoadingEvents ? (
    <InProgressEventsSkeletone />
  ) : (
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
            {eventsData?.data.data.slice(0, 3).map((ev: Event) => (
              <div key={ev.id} className="min-w-[267px]">
                <CourseCard data={{ ...ev, cardType: "EVENT" }} />
              </div>
            ))}
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
                  <CourseCard
                    key={item.id}
                    data={{ ...item, cardType: "EVENT" }}
                  />
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
