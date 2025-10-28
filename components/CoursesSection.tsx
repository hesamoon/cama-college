"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

// components
import Chips from "./Chips";
import CourseCard from "./CourseCard";
import SectionTitle from "./SectionTitle";
import CourseCardSkeleton from "./skeletons/CourseCardSkeleton";

// apis
import { getSortedEvents } from "@/lib/api/events";
import { getSortedPrograms } from "@/lib/api/programs";

// types
import { CourseCardProps } from "@/app/types/types";

function CoursesSection({ courseType }: { courseType: string }) {
  const { data: coursesData, isLoading: isLoadingCourses } = useQuery({
    queryKey: [courseType],
    queryFn: courseType === "programs" ? getSortedPrograms : getSortedEvents,
  });

  return (
    <section
      className={`space-y-8 mobile-grid-system-level0 md:grid-system-level0 transition-transform duration-700`}
    >
      <div className="space-y-4">
        <SectionTitle title={`New ${courseType}`} path={`/${courseType}`} />

        {isLoadingCourses ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <CourseCardSkeleton key={index} type={courseType} />
            ))}
          </div>
        ) : coursesData?.data.data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coursesData?.data.data
              .map((item: Record<string, unknown>) => ({
                ...item,
                cardType: courseType === "programs" ? "PROGRAM" : "EVENT",
              }))
              .slice(0, 4)
              .map((course: CourseCardProps) => (
                <CourseCard key={course.id} data={course} />
              ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="body-large text-txt-on-surface-terriary-light py-10">
              {`No ${courseType}`}
            </h3>
          </div>
        )}
      </div>

      {/* chips */}
      {courseType === "programs" && (
        <div className="flex items-center gap-2 overflow-x-scroll no-scrollbar">
          {[
            "IT & AI",
            "Branding",
            "Business",
            "Management & Leadership",
            "Marketing & Sales",
            "Other",
          ].map((item) => (
            <Link
              href={`/programs?category=${encodeURIComponent(item)}`}
              key={item}
            >
              <Chips
                chips={{
                  lable: `${item}`,
                  leftIcon: "",
                  rightIcon: "",
                  disabled: false,
                  type: "tonal",
                  width: 0,
                  height: 0,
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default CoursesSection;
