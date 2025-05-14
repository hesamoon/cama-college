import Image from "next/image";

// components
import Button from "./Button";

// utils
import { getRelativeTime } from "@/utilities/utils.js";

// types
import { Job } from "@/app/types/types";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded border border-outline-level1 p-3 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          <Image
            className="rounded-xs object-cover"
            src="/c4.png"
            alt="cover"
            width={48}
            height={48}
          />

          <div className="space-y-1">
            <h2 className="title-medium text-on_surface-light">{job.title}</h2>

            <p className="body-medium text-txt-on-surface-terriary-light">
              {job.company}
            </p>
          </div>
        </div>

        <div className="label-small text-gray-400 flex items-center gap-2.5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0827 8.875H7.91602"
              stroke="#9B9798"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 6.84167V11.0083"
              stroke="#9B9798"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.0176 1.66666H5.98424C4.20924 1.66666 2.76758 3.11666 2.76758 4.88332V16.625C2.76758 18.125 3.84258 18.7583 5.15924 18.0333L9.22591 15.775C9.65924 15.5333 10.3592 15.5333 10.7842 15.775L14.8509 18.0333C16.1676 18.7667 17.2426 18.1333 17.2426 16.625V4.88332C17.2342 3.11666 15.7926 1.66666 14.0176 1.66666Z"
              stroke="#9B9798"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="w-1 h-1 rounded-full bg-outline-level0" />

          <span className="text-txt-on-surface-terriary-light">
            {getRelativeTime(job.postedAt)}
          </span>
        </div>
      </div>

      <div className="mt-4 pl-14 body-medium text-txt-on-surface-secondary-light space-y-1">
        <p>{job.location}</p>
        <p>
          {job.isRemote ? "Remote Work" : "Fulltime Work"}
          {job.isDisabilityFriendly ? " • Hiring the disabled" : null}
        </p>
      </div>

      <div className="mt-6 border border-outline-level0" />

      <div className="flex justify-between items-center text-sm pt-3">
        <span className="text-green label-medium-db">
          {job.ratePerhour
            .split(" - ")
            .map((v) => `$${v}`)
            .join(" - ")}{" "}
          per hour
        </span>

        <Button
          props={{
            value: "Upload CV",
            type: "text",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right",
            size: "body-medium",
            padding: "px-4 py-1.5",
          }}
        />
      </div>
    </div>
  );
}
