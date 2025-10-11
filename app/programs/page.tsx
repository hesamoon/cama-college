"use client";

import { useEffect, useRef, useState } from "react";
import { useQueryState } from "nuqs";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// components
import Chips from "@/components/Chips";
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/Pagination";
import FiltersModal from "@/components/modal/FiltersModal";
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
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<{
    programTypes: string[];
    priceRange: { min: number; max: number };
  } | null>(null);

  // GET
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

  console.log(filters);

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
        <div className="flex items-center gap-10 md:gap-0 overflow-x-scroll no-scrollbar border-y border-outline-level0 md:border-none">
          {categories.map((ctgry) => (
            <CategoryPreview
              key={ctgry.id}
              data={ctgry}
              category={category}
              setCategory={setCategory}
            />
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
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            <Chips
              chips={{
                lable: "Filters",
                leftIcon: "filter",
                rightIcon: "",
                disabled: false,
                type: "tonal",
                padding:
                  "py-2 pl-3 pr-4 mobile-body-large md:body-large text-txt-on-surface-secondary",
                width: 20,
                height: 20,
              }}
            />
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

      <FiltersModal
        open={open}
        onClose={() => setOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default Page;

const CategoryPreview = ({
  data,
  category,
  setCategory,
}: {
  data: { id: number; label: string };
  category: string | null;
  setCategory: (value: string | null) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const widths = Array.from(containerRef.current.children).map(
        (child) => (child as HTMLElement).offsetWidth
      );
      setMaxWidth(Math.max(...widths));
    }
  }, []);

  return (
    <div
      key={data.id}
      ref={containerRef}
      className={`flex flex-col items-center justify-center transition-all ease-in-out duration-300 gap-1 cursor-pointer px-4 py-2 
       hover:bg-primary-opacity-12 hover:border-b hover:border-background-primary-light hover:text-background-primary-light ${
         category === data.label || (data.id === 0 && !category)
           ? "text-on_surface-light border-b border-background-primary-light"
           : "text-txt-on-surface-secondary-light border-transparent"
       } flex-1`}
      style={{ minWidth: maxWidth }}
      onClick={() =>
        data.id === 0 ? setCategory(null) : setCategory(data.label)
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        className="transition-all ease-in-out duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.83317 14.125H5.67484C2.8665 14.125 2.1665 13.425 2.1665 10.6167V5.61666C2.1665 2.80833 2.8665 2.10833 5.67484 2.10833H14.4498C17.2582 2.10833 17.9582 2.80833 17.9582 5.61666"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.8335 17.8917V14.125"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.1665 10.7917H8.83317"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.1167 17.8917H8.83337"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.8336 10.6667V15.425C18.8336 17.4 18.3419 17.8917 16.3669 17.8917H13.4086C11.4336 17.8917 10.9419 17.4 10.9419 15.425V10.6667C10.9419 8.69166 11.4336 8.2 13.4086 8.2H16.3669C18.3419 8.2 18.8336 8.69166 18.8336 10.6667Z"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.8706 15.2083H14.8781"
          stroke={
            hovered
              ? "#A91418"
              : category === data.label || (data.id === 0 && !category)
              ? "#170304"
              : "#484647"
          }
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h5 className="mobile-body-large md:body-large px-4 md:px-2 whitespace-nowrap">
        {data.label}
      </h5>
    </div>
  );
};
