"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// components
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/Pagination";
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";

// data
import {
  categories,
  LIMITNUMBEROFSCROLL,
  LIMITOfLOADEDLIST,
  LIMITOfLOADEDLISTINONEPAGE,
} from "@/constants/data";

// types
import { Program } from "../types/types";

// api - programs
import { getPrograms, getSortedPrograms } from "@/lib/api/programs";

function Page() {
  const queryClient = useQueryClient();
  const [sortVal, setSortVal] = useState("Newest");

  const {
    data: programsData,
    isLoading: isLoadingPrograms,
    isFetching: isFetchingPrograms,
    error: errorPrograms,
  } = useQuery({
    queryKey: ["programs"],
    queryFn: sortVal === "Newest" ? getSortedPrograms : getPrograms,
  });

  console.log(`isLoadingPrograms: ${isLoadingPrograms}`);
  console.log(`errorPrograms: ${errorPrograms}`);
  console.log(programsData?.data.data);

  const [category, setCategory] = useQueryState("category");
  const [type] = useQueryState("type", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const [numOfScroll, setNumOfScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [programList, setProgramList] = useState<Program[]>([]);

  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = programsData?.data.data;
      setProgramList((prev) =>
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
    if (programsData?.data.data.length > 0) {
      setProgramList(
        programsData?.data.data
          .sort((a: Program, b: Program) => {
            // "active" should come before "sold_out"
            if (a.status === b.status) return 0;
            if (a.status === "active") return -1;
            if (b.status === "active") return 1;
            return 0;
          })
          .filter(
            (program: Program) =>
              program.name.includes(search) &&
              program.type.includes(type) &&
              program.subject.includes(category ? category : "")
          )
          .slice(
            0,
            numOfScroll === LIMITNUMBEROFSCROLL
              ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
              : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
          )
      );
    }
  }, [search, type, category]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["programs"] });
  }, [sortVal]);

  useEffect(() => {
    if (programsData?.data.data.length > 0) {
      setProgramList(
        programsData?.data.data
          .sort((a: Program, b: Program) => {
            // "active" should come before "sold_out"
            if (a.status === b.status) return 0;
            if (a.status === "active") return -1;
            if (b.status === "active") return 1;
            return 0;
          })
          .filter(
            (program: Program) =>
              program.name.includes(search) &&
              program.type.includes(type) &&
              program.subject.includes(category ? category : "")
          )
          .slice(
            0,
            numOfScroll === 3 ? 12 * numOfScroll + 11 : 12 * numOfScroll + 12
          )
      );
    }
  }, [programsData]);

  useEffect(() => {
    // if (programList.length < LIMITOfLOADEDLISTINONEPAGE) return;
    const handleWindowScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 600 && !loading) {
        if (numOfScroll <= LIMITNUMBEROFSCROLL) {
          if (programsData?.data.data.length > 0) {
            if (programsData?.data.data.length > LIMITOfLOADEDLISTINONEPAGE)
              loadMore();
          }
        }
      }
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [loading, numOfScroll]);

  return (
    <div className="">
      {/* categories - sort and filtring */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:border-y md:border-outline-level0 md:grid-system-level0">
        {/* categories */}
        <div className="flex items-center gap-0 md:gap-6 lg:gap-8 overflow-x-scroll no-scrollbar border-y border-outline-level0 md:border-none">
          {categories.map((ctgry) => (
            <div
              key={ctgry.id}
              className={`flex flex-col items-center justify-center transition-all duration-300 gap-1 cursor-pointer px-2 py-2 ${
                category === ctgry.label || (ctgry.id === 0 && !category)
                  ? "border-b border-background-primary-light"
                  : null
              }`}
              onClick={() =>
                ctgry.id === 0 ? setCategory(null) : setCategory(ctgry.label)
              }
            >
              <Image
                src="/monitor-mobbile-black.svg"
                alt="monitor-mobbile-black"
                width={20}
                height={20}
              />

              <h5 className="mobile-body-large md:body-large text-on_surface-light whitespace-nowrap px-4 md:px-0">
                {ctgry.label}
              </h5>
            </div>
          ))}
        </div>

        {/* sort and filtring */}
        <div className="flex items-center gap-4 p-4 md:p-0">
          {/* sort */}
          <div className="flex items-center border border-outline1 rounded pl-3 pr-4">
            <span className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
              Sort By:
            </span>
            <select
              className="md:px-4 py-2 outline-none mobile-body-large md:body-large text-txt-on-surface-secondary"
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
          <div className="flex items-center gap-1 bg-statelayer-neutral-opacity-4 rounded-sm py-2 pl-3 pr-4 cursor-pointer">
            <Image src="/filter.svg" alt="filter" width={20} height={20} />
            <span className="mobile-body-large md:body-large text-txt-on-surface-secondary">
              Filters
            </span>
          </div>
        </div>
      </div>

      {/* programs */}
      <div className="mobile-grid-system-level0 md:grid-system-level0">
        {isLoadingPrograms || isFetchingPrograms ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-7 md:py-14">
            {Array.from({ length: 3 }).map((_, index) => (
              <CourseCardSkeleton key={index} type="programs" />
            ))}
          </div>
        ) : programList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-7 md:py-14">
            {programList.map((program) => (
              <CourseCard
                key={program.id}
                data={{ ...program, cardType: "PROGRAM" }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="body-large text-txt-on-surface-terriary-light py-10">
              {search || type ? "Program not found" : "No Programs"}
            </h3>
          </div>
        )}

        {loading && (
          <div
            aria-label="Loading..."
            role="status"
            className="flex items-center justify-center pb-14"
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
        ? (programList.length >= LIMITOfLOADEDLISTINONEPAGE ||
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
    </div>
  );
}

export default Page;
