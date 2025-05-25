"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

// components
import Button from "@/components/Button";

// data
import { jobOffers } from "@/constants/data";

// utils
import { getRelativeTime } from "@/utilities/utils";
import JobCard from "@/components/JobCard";

function Page() {
  const pathname = usePathname();
  const jobDetails = jobOffers.find(
    (job) => job.title === decodeURIComponent(pathname.split("/")[2])
  );

  console.log(jobDetails);

  return (
    <div className="grid-system-level">
      <div className="border border-outline-level0 divide-x divide-outline-level0 grid grid-cols-4">
        {/* related jobs */}
        <div className="col-span-1">
          {/* title */}
          <h5 className="sticky top-[5rem] p-6 bg-white">Related Jobs</h5>

          {/* jobs */}
          <div>
            {jobOffers.map((job) => (
              <>
                <div className="px-3">
                  <JobCard
                    key={job.id}
                    job={job}
                    archFlag={false}
                    border={false}
                    cvBtn={false}
                    divider={false}
                  />
                </div>

                <div className="border border-outline-level0 w-full" />
              </>
            ))}
          </div>
        </div>

        <div className="col-span-3 p-4 grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-12">
            {/* header section */}
            <div>
              {/* title */}
              <div className="flex justify-between">
                <h3>{jobDetails?.title}</h3>

                <div className="flex items-center gap-3">
                  <Button
                    props={{
                      value: "",
                      type: "text",
                      color: "red",
                      leftIcon: "",
                      rightIcon: "archive-add-white",
                      disabled: false,
                      width: 20,
                      height: 20,
                    }}
                  />

                  <Button
                    props={{
                      value: "",
                      type: "text",
                      color: "red",
                      leftIcon: "",
                      rightIcon: "share",
                      disabled: false,
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
              </div>

              {/* important details */}
              <div className="flex items-center gap-16">
                {/* salary */}
                <div>
                  <h5 className="body-large text-txt-on-surface-terriary-light">
                    Salary
                  </h5>
                  <p className="text-green body-large">
                    {jobDetails?.ratePerhour
                      .split(" - ")
                      .map((v) => `$${v}`)
                      .join(" - ")}{" "}
                    per hour
                  </p>
                </div>

                {/* location */}
                <div>
                  <h5 className="body-large text-txt-on-surface-terriary-light">
                    Location
                  </h5>
                  <p className="text-txt-on-surface-secondary-light body-large">
                    {jobDetails?.location}
                  </p>
                </div>

                {/* time */}
                <div>
                  <h5 className="body-large text-txt-on-surface-terriary-light">
                    Time
                  </h5>
                  <p className="text-txt-on-surface-secondary-light body-large">
                    {getRelativeTime(jobDetails?.postedAt)}
                  </p>
                </div>
              </div>
            </div>

            {/* company details */}
            <div className="border border-outline-level1 rounded p-4 space-y-3">
              <div className="flex justify-between">
                {/* cover / title */}
                <div className="flex gap-2">
                  <Image
                    className="rounded-xs object-cover"
                    src="/c4.png"
                    alt="cover"
                    width={48}
                    height={48}
                  />

                  <div className="space-y-1.5">
                    <h2 className="title-medium text-on_surface-light">
                      About the Company
                    </h2>

                    <p className="label-small text-txt-on-surface-terriary-light">
                      56 employees
                    </p>
                  </div>
                </div>

                <Button
                  props={{
                    value: "website",
                    type: "text",
                    color: "red",
                    disabled: false,
                    leftIcon: "",
                    rightIcon: "arrow-right",
                    size: "body-medium",
                    padding: "px-3 py-1",
                  }}
                />
              </div>

              <p className="text-justify body-large text-txt-on-surface-secondary-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>

            {/* job description */}
            <div className="space-y-3">
              <h2 className="title-medium text-on_surface-light">
                Job Description
              </h2>

              <p className="text-justify body-large text-txt-on-surface-secondary-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
                vitae congue mauris rhoncus aenean vel elit In egestas
                erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod ut labore et dolore magna aliqua. Egestas purus
                viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat. Arcu
                cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
                In egestas erat. Arcu cursus vitae congue mauris rhoncus aenean
                vel elit scelerisque. In egestas erat. Arcu
              </p>
            </div>
          </div>

          {/* card */}
          <div className="col-span-1">
            {/* card */}
            <div className="sticky top-[6.5rem] col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 space-y-6 h-fit min-w-80 max-w-fit">
              {/* Prerequisites */}
              <h3 className="title-medium text-on_surface-light px-6">
                Prerequisites
              </h3>

              {/* important details */}
              <div className="space-y-2 px-6">
                {/* career history */}
                <div className="flex items-center justify-between gap-3 body-large">
                  <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                    Career history
                  </h4>

                  <div className="w-full border border-dashed border-outline-level0" />

                  <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                    2 years
                  </h5>
                </div>

                {/* age */}
                <div className="flex items-center justify-between gap-3 body-large">
                  <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                    Age
                  </h4>

                  <div className="w-full border border-dashed border-outline-level0" />

                  <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                    20 - 30
                  </h5>
                </div>

                {/* gender */}
                <div className="flex items-center justify-between gap-3 body-large">
                  <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                    Gender
                  </h4>

                  <div className="w-full border border-dashed border-outline-level0" />

                  <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                    don&apos;t matter
                  </h5>
                </div>

                {/* education */}
                <div className="flex items-center justify-between gap-3 body-large">
                  <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                    Education
                  </h4>

                  <div className="w-full border border-dashed border-outline-level0" />

                  <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                    don&apos;t matter
                  </h5>
                </div>
              </div>

              {/* divider */}
              <div className="border border-outline-level0" />

              {/* get course btn */}
              <div className="px-6">
                <Button
                  props={{
                    value: "Send CV",
                    type: "filled",
                    color: "red",
                    disabled: false,
                    leftIcon: "",
                    rightIcon: "",
                    padding: "py-2 px-6 w-full",
                    size: "body-large",
                    height: 24,
                    width: 24,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
