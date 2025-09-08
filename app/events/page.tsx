/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// components
import Pagination from "@/components/Pagination";
import CourseCard from "@/components/CourseCard";
import ListHeader from "@/components/ListHeader";
import CourseSlider from "@/components/CourseSlider";
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";

// data
import {
  LIMITOfLOADEDLIST,
  LIMITNUMBEROFSCROLL,
  LIMITOfLOADEDLISTINONEPAGE,
} from "@/constants/data";

// api - events
import { getEvents, getSortedEvents } from "@/lib/api/events";

// types
import { Event } from "../types/types";

function page() {
  const queryClient = useQueryClient();
  const [sort] = useQueryState("sortBy");
  console.log(sort ? "getEvents" : "getSortedEvents");
  const {
    data: eventsData,
    isLoading: isLoadingEvents,
    isFetching: isFetchingEvents,
  } = useQuery({
    queryKey: ["events"],
    queryFn: sort ? getEvents : getSortedEvents,
  });

  const [eventList, setEventList] = useState<Event[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });

  const [numOfScroll, setNumOfScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    programTypes: string[];
    priceRange: { min: number; max: number };
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = eventsData?.data.data;
      setEventList((prev) =>
        [...prev, ...newItems].slice(
          0,
          numOfScroll === LIMITNUMBEROFSCROLL
            ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
            : LIMITOfLOADEDLIST * (numOfScroll === 0 ? 1 : numOfScroll) +
                LIMITOfLOADEDLIST
        )
      );
      setNumOfScroll((prev) => prev + 1);
      setLoading(false);
    }, 1000); // simulate loading
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 600 && !loading) {
        if (numOfScroll <= LIMITNUMBEROFSCROLL) {
          if (eventsData?.data.data.length > 0) {
            if (eventsData?.data.data.length > LIMITOfLOADEDLISTINONEPAGE)
              loadMore();
          }
        }
      }
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [loading, numOfScroll]);

  useEffect(() => {
    setEventList(
      eventsData?.data.data
        .sort((a: Event, b: Event) => {
          // "active" should come before "sold_out"
          if (a.status === b.status) return 0;
          if (a.status === "active") return -1;
          if (b.status === "active") return 1;
          return 0;
        })
        .filter((event: Event) =>
          event.name
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()
            .includes(search.toLowerCase())
        )
        .slice(
          0,
          numOfScroll === LIMITNUMBEROFSCROLL
            ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
            : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
        )
    );
  }, [search]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["events"] });
  }, [sort]);

  useEffect(() => {
    if (eventsData?.data.data.length > 0) {
      setEventList(
        eventsData?.data.data
          .sort((a: Event, b: Event) => {
            // "active" should come before "sold_out"
            if (a.status === b.status) return 0;
            if (a.status === "active") return -1;
            if (b.status === "active") return 1;
            return 0;
          })
          .filter((event: Event) =>
            event.name
              .toLowerCase()
              .replace(/\s+/g, " ")
              .trim()
              .includes(search.toLowerCase())
          )
          .slice(
            0,
            numOfScroll === LIMITNUMBEROFSCROLL
              ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
              : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
          )
      );
    }
  }, [eventsData]);

  return (
    <div className="space-y-4 md:space-y-14 pb-14">
      {/* banner */}
      <section className="">
        <CourseSlider type="Events" />
      </section>

      <section className="space-y-5 md:space-y-9">
        {/* title - sort and filtring */}
        <div className="mobile-grid-system-level0 md:grid-system-level0">
          <div className="hidden md:block">
            <ListHeader
              title="Events"
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div className="block md:hidden">
            <ListHeader title="" filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* events */}
        <div className="mobile-grid-system-level0 md:grid-system-level0">
          {isLoadingEvents || isFetchingEvents ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <CourseCardSkeleton key={index} type="events" />
              ))}
            </div>
          ) : eventList?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {eventList.map((event: Event) => (
                <CourseCard
                  key={event.id}
                  data={{ ...event, cardType: "EVENT" }}
                />
              ))}
            </div>
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
              <h3 className="body-large text-txt-on-surface-terriary-light">
                {search ? "Event not found" : "No Events"}
              </h3>
            </div>
          )}

          {loading && (
            <div
              aria-label="Loading..."
              role="status"
              className="flex items-center justify-center py-14"
            >
              <svg
                className="h-12 w-12 animate-spin stroke-[#a91418]"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
              </svg>
            </div>
          )}
        </div>

        {/* pagination */}
        {numOfScroll === LIMITNUMBEROFSCROLL + 1
          ? (eventList.length >= LIMITOfLOADEDLISTINONEPAGE ||
              currentPage > 1) && (
              <div className="flex items-center justify-center pb-14">
                <Pagination
                  totalPages={Math.ceil(350 / LIMITOfLOADEDLISTINONEPAGE)}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            )
          : null}
      </section>
    </div>
  );
}

export default page;
