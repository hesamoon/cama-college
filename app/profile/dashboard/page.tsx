"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "@/components/Button";
import ScheduleView from "@/components/ScheduleView";
import CourseInProgress from "@/components/CourseInProgress";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

// data
import { programsInProgress } from "@/constants/data";

// api
import { getExams } from "@/lib/api/exam/exams";
import { myRequests } from "@/lib/api/work-request";
import { getRegisteredPrograms } from "@/lib/api/programs";

function Page() {
  // GET
  const { data: workRequestsData, isLoading: isLoadingWorkRequests } = useQuery(
    {
      queryKey: ["work-requests"],
      queryFn: myRequests,
    }
  );
  const { data: programsData, isLoading: isLoadingPrograms } = useQuery({
    queryKey: ["reg-programs"],
    queryFn: getRegisteredPrograms,
  });
  const {
    data: examsData,
    isLoading: isLoadingExams,
    error: examError,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: getExams,
    enabled: true,
  });

  console.log({
    examsData,
    isLoadingExams,
    examError,
  });

  console.log(workRequestsData);
  console.log(isLoadingWorkRequests);

  if (isLoadingWorkRequests || isLoadingPrograms) return <DashboardSkeleton />;

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9 py-5">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          User Schedule
        </h2>

        <ScheduleView />
      </div>

      {/* last program section */}
      {programsData?.data.data.length > 0 ? (
        <div className="space-y-4">
          <h2 className="mobile-title-large md:title-large text-on_surface-light">
            Last Program
          </h2>

          <CourseInProgress courseDetails={programsData?.data.data[0]} />
        </div>
      ) : null}

      {/* Certifications section */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Certifications
        </h2>

        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-6">
          {programsInProgress.map((pIP) => (
            <div
              key={pIP.id}
              className="relative overflow-hidden bg-surface0-light border border-outline-level0 rounded z-10"
            >
              <div className="absolute -top-[4.5rem] -left-[4.5rem] w-[110px] h-[395.3496956058634px] rounded-lg bg-[#A91418] opacity-10 rotate-[30deg] -z-5" />

              <div className="flex items-center justify-between pt-2 px-4">
                <h3 className="mobile-title-small md:title-small text-txt-on-surface-secondary-light">
                  {pIP.name}
                </h3>

                <Button
                  props={{
                    value: "",
                    disabled: false,
                    leftIcon: "document-download",
                    rightIcon: "",
                    type: "text",
                    color: "red",
                    size: "mobile-body-medium md:body-large",
                    // clickHandler: () => setMoreClicked((prev) => !prev),
                  }}
                />
              </div>

              <div className="p-1 flex items-center justify-center">
                <Image
                  className="w-full"
                  src="/certifications.png"
                  alt="credential"
                  width={307.87}
                  height={158.8}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
