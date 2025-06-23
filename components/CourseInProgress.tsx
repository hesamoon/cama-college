"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// types
import { ProgramInProgress } from "@/app/types/types";

// components
import Button from "./Button";

function CourseInProgress({
  courseDetails,
}: {
  courseDetails: ProgramInProgress;
}) {
  const { coverImg, name, level, type, type2, duration, progress } =
    courseDetails;

  const router = useRouter();

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Image
          className="rounded object-cover w-[282px] h-[121px]"
          src={`/${coverImg}.png`}
          alt={coverImg}
          width={282}
          height={121}
        />

        <div className="flex flex-col justify-between">
          {/* name */}
          <div className="">
            <h4>{name}</h4>

            <div className="flex items-center gap-3 label-medium text-txt-on-surface-terriary-light">
              {/* level */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 11H10.5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.7998 4.69043V9H2V4.69043H2.7998Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.39941 3.09473V9H5.59961V3.09473H6.39941Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 1.5V9H9.2002V1.5H10Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{level}</span>
              </div>

              {/* type */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8.47502H3.105C1.42 8.47502 1 8.05501 1 6.37001V3.37001C1 1.68501 1.42 1.26501 3.105 1.26501H8.37C10.055 1.26501 10.475 1.68501 10.475 3.37001"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 10.735V8.47498"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 6.47498H5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.37 10.735H5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 6.39998V9.25498C11 10.44 10.705 10.735 9.52002 10.735H7.74501C6.56001 10.735 6.26501 10.44 6.26501 9.25498V6.39998C6.26501 5.21498 6.56001 4.91998 7.74501 4.91998H9.52002C10.705 4.91998 11 5.21498 11 6.39998Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.62225 9.125H8.62674"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{type}</span>
              </div>

              {/* type2 */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8.47502H3.105C1.42 8.47502 1 8.05501 1 6.37001V3.37001C1 1.68501 1.42 1.26501 3.105 1.26501H8.37C10.055 1.26501 10.475 1.68501 10.475 3.37001"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 10.735V8.47498"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 6.47498H5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.37 10.735H5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 6.39998V9.25498C11 10.44 10.705 10.735 9.52002 10.735H7.74501C6.56001 10.735 6.26501 10.44 6.26501 9.25498V6.39998C6.26501 5.21498 6.56001 4.91998 7.74501 4.91998H9.52002C10.705 4.91998 11 5.21498 11 6.39998Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.62225 9.125H8.62674"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{type2}</span>
              </div>

              {/* duration */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 4V6.5"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 1H7.5"
                    stroke="#9B9798"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{duration} hours</span>
              </div>
            </div>
          </div>

          {/* progressbar */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <h4 className="label-medium text-txt-on-surface-secondary-light">
                Progress
              </h4>

              <h4 className="label-medium text-txt-on-surface-secondary-light">
                {progress}%
              </h4>
            </div>

            <div className="bg-outline-level1 h-1 rounded-full">
              <div
                className="bg-background-primary-light h-1 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <Button
          props={{
            value: "",
            disabled: false,
            leftIcon: "",
            rightIcon: "more",
            type: "text",
            width: 24,
            height: 24,
          }}
        />

        <Button
          props={{
            value: "Continue learning",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right-white",
            type: "filled",
            size: "body-medium",
            padding: "px-3.5 py-2",
            clickHandler: () =>
              router.push(`/programs/in-progress/?program=${name}`),
          }}
        />
      </div>
    </div>
  );
}

export default CourseInProgress;
