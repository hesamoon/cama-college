/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";
import CourseSlider from "@/components/CourseSlider";

// data
import { events } from "@/constants/data";

type Events = {
  id: number;
  coverImg: string;
  name: string;
  level: string;
  type: string;
  duration: number;
  price: number;
  status: string;
  publishDate: string;
  category: string;
};

function page() {
  const [sortVal, setSortVal] = useState("Newest");
  const [eventList, setEventList] = useState<Events[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });

  useEffect(() => {
    setEventList(
      events
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter((event) =>
          event.name
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()
            .includes(search.toLowerCase())
        )
    );
  }, [search]);

  useEffect(() => {
    setEventList(
      events
        .sort((a, b) =>
          sortVal === "Newest"
            ? new Date(b.publishDate ?? "").getTime() -
              new Date(a.publishDate ?? "").getTime()
            : new Date(a.publishDate ?? "").getTime() -
              new Date(b.publishDate ?? "").getTime()
        )
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter((event) =>
          event.name
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()
            .includes(search.toLowerCase())
        )
    );
  }, [sortVal]);

  useEffect(() => {
    setEventList(
      events
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter((event) =>
          event.name
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()
            .includes(search.toLowerCase())
        )
    );
  }, []);

  return (
    <div className="space-y-14 pb-14">
      {/* banner */}
      <section className="">
        <CourseSlider type="Events" />
      </section>

      <section className="space-y-9">
        {/* title - sort and filtring */}
        <div className="flex items-center justify-between w-full grid-system-level0">
          {/* title */}
          <h2 className="title-large text-shadow-on_surface-light">Events</h2>

          {/* sort and filtring */}
          <div className="flex items-center gap-1">
            {/* sort */}
            <div className="flex items-center border border-outline1 rounded py-0.5 pl-3 pr-4">
              <span className="body-large text-txt-on-surface-terriary-light">
                Sort By:
              </span>
              <select
                className="px-4 py-2 outline-none body-large text-txt-on-surface-secondary"
                value={sortVal}
                onChange={(e) => {
                  setSortVal(e.target.value);
                }}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>

            {/* filtring */}
            <div className="flex items-center gap-1 bg-statelayer-neutral-opacity-4 rounded-sm py-2.5 pl-3 pr-4 cursor-pointer">
              <Image src="/filter.svg" alt="filter" width={20} height={20} />
              <span className="body-large text-txt-on-surface-secondary">
                Filters
              </span>
            </div>
          </div>
        </div>

        {/* events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-system-level0 ">
          {eventList.length > 0 ? (
            eventList.map((event) => (
              <CourseCard key={event.id} data={event} type="events" />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
              <h3 className="body-large text-txt-on-surface-terriary-light">
                {search ? "Event not found" : "No Events"}
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default page;
