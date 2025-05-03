"use client";

import { usePathname } from "next/navigation";

// fake data
import { programs } from "@/constants/data";
import Image from "next/image";
import Button from "@/components/Button";

function Page() {
  const pathname = usePathname();
  const programDetails = programs.find(
    (p) => p.name === decodeURIComponent(pathname.split("/")[2])
  );

  return (
    <div className="grid-system-level1">
      {/* top section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {/* cover, title */}
          <div className="space-y-8">
            <Image
              className="rounded-sm aspect-16-9 object-cover"
              src={`/${programDetails?.coverImg}.png`}
              alt={`${programDetails?.coverImg}`}
              width={781}
              height={438}
            />

            <h1 className="display-medium text-color-on_surface-light">
              {programDetails?.name}
            </h1>
          </div>
        </div>

        {/* right side / card */}
        <div className="col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 px-6 space-y-6 h-fit">
          {/* price */}
          <h3 className="header-medium text-txt-on-surface-secondary-light">
            ${programDetails?.price} (CAD)
          </h3>

          {/* important details */}
          <div className="grid grid-cols-2 gap-2">
            {/* labels */}
            <div className="col-span-1 space-y-2">
              {/* level */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image src="/chart.svg" alt="chart" width={16} height={16} />
                <span>Level</span>
              </div>

              {/* duration */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image src="/timer.svg" alt="timer" width={16} height={16} />
                <span>Duration</span>
              </div>

              {/* subject */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={16}
                  height={16}
                />
                <span>Subject</span>
              </div>

              {/* language */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={16}
                  height={16}
                />
                <span>Language</span>
              </div>

              {/* credential type */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={16}
                  height={16}
                />
                <span>Credential Type</span>
              </div>

              {/* AP - number */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={16}
                  height={16}
                />
                <span>AP - Number</span>
              </div>
            </div>

            {/* values */}
            <div className="col-span-1 body-large text-txt-on-surface-secondary-light space-y-2">
              {/* level */}
              <h5>{programDetails?.level}</h5>

              {/* duration */}
              <h5>{programDetails?.duration}h</h5>

              {/* subject */}
              <h5>{programDetails?.category}</h5>

              {/* language */}
              <h5>English/ Persian</h5>

              {/* credential type */}
              <h5>Diploma</h5>

              {/* AP - number */}
              <h5>0</h5>
            </div>
          </div>

          {/* divider */}
          <div className="border border-outline-level1" />

          {/* get course btn */}
          <div className="space-y-2">
            {/* count of student enrolled */}
            <div className="flex items-center gap-1">
              <Image
                src="/like-shapes.svg"
                alt="like-shapes"
                width={20}
                height={20}
              />
              <span className="label-medium-db text-green">
                1220 Students enrolled
              </span>
            </div>

            {/* button */}
            <div className="flex items-center gap-2">
              <Button
                props={{
                  value: "Get Course",
                  type: "filled",
                  color: "red",
                  disabled: false,
                  leftIcon: "shopping-cart",
                  rightIcon: "",
                  padding: "py-2 pr-6 pl-4 w-full",
                  size: "body-large",
                  height: 24,
                  width: 24,
                }}
              />

              <Button
                props={{
                  value: "",
                  type: "outlined",
                  color: "",
                  disabled: false,
                  leftIcon: "archive-add",
                  rightIcon: "",
                  padding: "p-3",
                  size: "body-large",
                  height: 24,
                  width: 24,
                }}
              />
            </div>

            {/* enrolled validity */}
            <div className="flex items-center justify-center label-medium-db text-txt-on-surface-terriary-light">
              Enrollment Validity:{" "}
              <span className="text-on_surface-light">30 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* more details of program */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          
        </div>
      </div>
    </div>
  );
}

export default Page;
