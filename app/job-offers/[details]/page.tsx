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

  return (
    <div className="mobile-grid-system-level md:grid-system-level">
      <div className="border border-outline-level0 divide-x divide-outline-level0 md:grid md:grid-cols-4 md:h-screen">
        {/* related jobs */}
        <div className="hidden md:block col-span-1 overflow-y-auto no-scrollbar">
          {/* title */}
          <h5 className="sticky top-0 p-6 bg-white">Related Jobs</h5>

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

        <div className=" md:col-span-3 p-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-y-auto no-scrollbar">
          <div className="col-span-2 space-y-12">
            {/* header section */}
            <div className="space-y-6 md:space-y-3">
              {/* title */}
              <div className="flex justify-between">
                <h3 className="mobile-title-large md:title-large">
                  {jobDetails?.title}
                </h3>

                <div className="flex items-center gap-2 md:gap-3">
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
              <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-16 mobile-body-large md:body-large">
                {/* salary */}
                <div>
                  <h5 className="text-txt-on-surface-terriary-light">Salary</h5>
                  <p className="text-green">
                    {jobDetails?.ratePerhour
                      .split(" - ")
                      .map((v) => `$${v}`)
                      .join(" - ")}{" "}
                    per hour
                  </p>
                </div>

                {/* location */}
                <div>
                  <h5 className="text-txt-on-surface-terriary-light">
                    Location
                  </h5>
                  <p className="text-txt-on-surface-secondary-light">
                    {jobDetails?.location}
                  </p>
                </div>

                {/* time */}
                <div>
                  <h5 className="text-txt-on-surface-terriary-light">Time</h5>
                  <p className="text-txt-on-surface-secondary-light">
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
                    className="rounded-xs object-cover w-10 h-10 md:w-12 md:h-12"
                    src="/c4.png"
                    alt="cover"
                    width={48}
                    height={48}
                  />

                  <div className="space-y-1.5">
                    <h2 className="mobile-title-medium md:title-medium text-on_surface-light">
                      About the Company
                    </h2>

                    <p className="mobile-label-small md:label-small text-txt-on-surface-terriary-light">
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
                    size: "mobile-body-medium md:body-medium",
                    padding: "px-3 py-1",
                  }}
                />
              </div>

              <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>

            {/* job description */}
            <div className="space-y-3">
              <h2 className="mobile-title-medium md:title-medium text-on_surface-light">
                Job Description
              </h2>

              <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
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
                vel elit scelerisque. In egestas erat. Arcu Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Egestas purus
                viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit In egestas erat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod ut labore et dolore magna aliqua. Egestas purus viverra
                accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
                aenean vel elit scelerisque. In egestas erat. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat. Arcu cursus vitae congue mauris rhoncus aenean vel elit
                scelerisque. In egestas erat. Arcu Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Egestas purus viverra accumsan in
                nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
                elit scelerisque. In egestas erat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Egestas purus viverra accumsan in
                nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
                elit In egestas erat.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod ut labore et dolore magna
                aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
                vitae congue mauris rhoncus aenean vel elit scelerisque. In
                egestas erat. Arcu cursus vitae congue mauris rhoncus aenean vel
                elit scelerisque. In egestas erat. Arcu cursus vitae congue
                mauris rhoncus aenean vel elit scelerisque. In egestas erat.
                Arcu Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
                vitae congue mauris rhoncus aenean vel elit scelerisque. In
                egestas erat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
                vitae congue mauris rhoncus aenean vel elit In egestas
                erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod ut labore et dolore magna aliqua. Egestas purus
                viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat. Arcu
                cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
                In egestas erat. Arcu cursus vitae congue mauris rhoncus aenean
                vel elit scelerisque. In egestas erat. Arcu Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Egestas purus
                viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit In egestas erat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod ut labore et dolore magna aliqua. Egestas purus viverra
                accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
                aenean vel elit scelerisque. In egestas erat. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat. Arcu cursus vitae congue mauris rhoncus aenean vel elit
                scelerisque. In egestas erat. Arcu
              </p>
            </div>
          </div>

          {/* card */}
          <div className="relative col-span-1">
            {/* card */}
            <div className="md:sticky md:top-0 col-span-1 md:bg-shades-light-90 md:rounded-sm md:border md:border-outline-level0 pt-6 md:pb-4 md:space-y-6 md:h-fit md:min-w-80 md:max-w-fit">
              {/* Prerequisites */}
              <h3 className="hidden md:block title-medium text-on_surface-light px-6">
                Prerequisites
              </h3>

              {/* important details */}
              <div className="hidden md:block space-y-2 px-6">
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
              <div className="hidden md:block border border-outline-level0" />

              {/* send cv btn */}
              <div className="md:px-6">
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
