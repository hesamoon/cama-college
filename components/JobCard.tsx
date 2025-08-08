import Image from "next/image";
import { useRouter } from "next/navigation";

// components
import Button from "./Button";

// utils
import { getTimeRemaining } from "@/utilities/utils.js";

// types
import { JobOffers } from "@/app/types/types";

export default function JobCard({
  job,
  border = true,
  archFlag = true,
  divider = true,
  cvBtn = true,
}: {
  job: JobOffers;
  border?: boolean;
  archFlag?: boolean;
  divider?: boolean;
  cvBtn?: boolean;
}) {
  const router = useRouter();

  // Handle card click (navigate to job details)
  const handleCardClick = () => {
    router.push(`/job-offers/${job.title}?jobId=${job.id}`);
  };

  // Prevent navigation when a button is clicked
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleCardClick}
      className={`${
        border ? "rounded border border-outline-level1" : ""
      } p-3 cursor-pointer`}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          <Image
            className="rounded-xs object-cover w-10 md:w-12 h-10 md:h-12"
            src="/c4.png"
            alt="cover"
            width={48}
            height={48}
          />

          <div className="space-y-1">
            <h2 className="mobile-title-medium md:title-medium text-on_surface-light max-w-[180px]">
              {job.title}
            </h2>

            <p className="mobile-body-medium md:body-medium text-txt-on-surface-terriary-light">
              {job.company.name}
            </p>
          </div>
        </div>

        <div className="mobile-label-small md:label-small text-gray-400 flex items-center gap-2.5">
          {archFlag && (
            <>
              <div onClick={stopPropagation}>
                <Button
                  props={{
                    value: "",
                    type: "text",
                    color: "red",
                    disabled: false,
                    leftIcon: "",
                    rightIcon: "archive-add-white",
                    size: "mobile-body-medium md:body-medium",
                    clickHandler: () => console.log("arch flag"),
                  }}
                />
              </div>

              <div className="w-1 h-1 rounded-full bg-outline-level0" />
            </>
          )}

          <span className="text-txt-on-surface-terriary-light">
            {getTimeRemaining(job.application_deadline)}
          </span>
        </div>
      </div>

      <div className="mt-4 pl-12 md:pl-14 mobile-body-medium md:body-medium text-txt-on-surface-secondary-light space-y-1">
        <p>{job.street.name}</p>
        <p>
          {job.type === "remote" ? "Remote Work" : "Fulltime Work"}
          {job.disability_friendly === 1 ? " • Hiring the disabled" : null}
        </p>
      </div>

      {divider && <div className="mt-6 border border-outline-level0" />}

      <div className="flex justify-between items-center pt-3">
        <span className="text-green mobile-label-medium-db md:label-medium-db">
          ${job.salary_min} - ${job.salary_max} per hour
        </span>

        {cvBtn && job.is_active === 1 ? (
          <div onClick={stopPropagation}>
            <Button
              props={{
                value: "Upload CV",
                type: "text",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: "arrow-right",
                size: "mobile-body-medium md:body-medium",
                padding: "px-4 py-1.5",
                clickHandler: () => handleCardClick(),
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
