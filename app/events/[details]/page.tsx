"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// components
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import CommentsSection from "@/components/CommentsSection";
import SpeakersSection from "@/components/SpeakersSection";
import LocationSection from "@/components/LocationSection";
import DescriptionSection from "@/components/DescriptionSection";

// fake data
import { events } from "@/constants/data";
import RatingCard from "@/components/RatingCard";

function Page() {
  const pathname = usePathname();
  const eventDetails = events.find(
    (e) => e.name === decodeURIComponent(pathname.split("/")[2])
  );
  const tabs = [
    "Description",
    "Location",
    "Speakers",
    "Comments",
    "Related Events",
  ];
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of tabs) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom >= 130) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-6">
      {/* top section -> cover, title / cart */}
      <div className="grid grid-cols-3 gap-6 grid-system-level1 space-y-6 mt-4">
        <div className="col-span-2 space-y-6">
          {/* cover, title */}
          <div className="space-y-8">
            <Image
              className="rounded-sm aspect-16-9 object-cover"
              src={`/${eventDetails?.coverImg}.png`}
              alt={`${eventDetails?.coverImg}`}
              width={781}
              height={438}
            />

            <h1 className="display-medium text-color-on_surface-light">
              {eventDetails?.name}
            </h1>
          </div>
        </div>

        {/* right side / card */}
        <div className="sticky top-[6.5rem] col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 px-6 space-y-6 h-fit min-w-96 max-w-fit">
          {/* price */}
          <h3 className="header-medium text-txt-on-surface-secondary-light">
            ${eventDetails?.price} (CAD)
          </h3>

          {/* important details */}
          <div className="grid grid-cols-2 gap-2">
            {/* labels */}
            <div className="col-span-1 space-y-2">
              {/* event date */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image src="/chart.svg" alt="chart" width={16} height={16} />
                <span>Event Date</span>
              </div>

              {/* event time */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image src="/timer.svg" alt="timer" width={16} height={16} />
                <span>Event Time</span>
              </div>

              {/* rating */}
              <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={16}
                  height={16}
                />
                <span>Rating</span>
              </div>

              {/* location */}
              <div className="space-y-2">
                {/* location */}
                <div className="flex items-center body-large text-txt-on-surface-terriary-light gap-1">
                  <Image
                    src="/monitor-mobbile.svg"
                    alt="monitor-mobbile"
                    width={16}
                    height={16}
                  />
                  <span>Location</span>
                </div>

                {/* location */}
                <h5>Province, City, Street</h5>
              </div>
            </div>

            {/* values */}
            <div className="col-span-1 body-large text-txt-on-surface-secondary-light space-y-2">
              {/* event date */}
              <h5>{eventDetails?.level}</h5>

              {/* event time */}
              <h5>{eventDetails?.duration}h</h5>

              {/* rating */}
              <h5>{eventDetails?.category}</h5>
            </div>
          </div>

          {/* social media */}
          <div className="flex items-center gap-3">
            <div className="border border-outline-level1 p-3 rounded-full">
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </div>

            <div className="border border-outline-level1 p-3 rounded-full">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
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
            <div className="">
              <Button
                props={{
                  value: "Get Ticket",
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

      {/* tabs */}
      <div className="sticky top-[5.6rem] bg-white z-[9999] grid-system-level1">
        {/* tabs */}
        <div
          className={`flex items-center justify-between border-b border-outline-level0 transition-all duration-300 ease-in-out ${
            activeTab === "Comments" || activeTab === "Related Events"
              ? "w-full"
              : "w-2/3"
          }`}
        >
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <div key={tab}>
                <button
                  className={`py-3 px-2.5 body-large cursor-pointer transition-all ease-linear duration-200 ${
                    activeTab === tab
                      ? "text-background-primary-light border-b border-background-primary-light"
                      : "text-txt-on-surface-terriary-light"
                  }`}
                  onClick={() => {
                    const element = document.getElementById(tab);
                    if (element) {
                      const yOffset = -117; // scroll 117px *above* the element
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {tab}
                </button>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-300 ease-linear overflow-hidden ${
              activeTab === "Comments" || activeTab === "Related Events"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } flex items-center gap-1`}
          >
            <Button
              props={{
                value: "Get Ticket",
                type: "filled",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: "",
                padding: "py-2 px-4 w-full",
                size: "body-large",
                height: 20,
                width: 20,
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 grid-system-level1 space-y-6 mt-4">
        <div className="col-span-2 space-y-6">
          {/* description */}
          <DescriptionSection />

          {/* location */}
          <LocationSection />

          {/* speakers */}
          <SpeakersSection />
        </div>
      </div>

      {/* comments */}
      <div
        id="Comments"
        className="grid grid-cols-3 grid-system-level1 space-y-6 pt-8"
      >
        {/* comments */}
        <div className="col-span-2">
          {/* comments */}
          <CommentsSection />
        </div>

        {/* rating card */}
        <div className="col-span-1">
          <RatingCard />
        </div>
      </div>

      {/* event */}
      <div className="grid grid-cols-3 gap-6 grid-system-level1 space-y-6 mt-4">
        {/* event */}
        <div
          id="Related Events"
          className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        >
          {events
            .filter((e) => e.id <= 6)
            .map((event) => (
              <CourseCard key={event.id} data={event} type="events" />
            ))}
        </div>
      </div>

      {/* apply */}
      <section className="flex items-center justify-center">
        <div className="grid-system-level1 relative bg-primary-tints-90 grid grid-cols-2 gap-8 overflow-hidden py-10">
          <div className="col-span-1 z-[999] space-y-4">
            <div className="space-y-3">
              <h2 className="title-large text-on_surface-light">
                Apply to easy access to Programs
              </h2>
              <p className="mt-2 text-txt-on-surface-secondary-light body-large text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="body-large text-black">
                    Positive feature
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="body-large text-black">
                    Positive feature
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="body-large text-black">
                    Positive feature
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="body-large text-black">
                    Positive feature
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex items-end justify-center gap-4">
            <div className="pb-4">
              <Button
                props={{
                  value: "Apply now",
                  type: "outlined",
                  disabled: false,
                  leftIcon: "",
                  rightIcon: "arrow-right",
                  color: "red",
                  width: 20,
                  height: 20,
                  size: "body-large",
                  padding: "px-6 py-3",
                }}
              />
            </div>

            <Image
              src="/rafiki.svg"
              alt="rafiki"
              width={296.596435546875}
              height={221.00003051757812}
            />
          </div>

          <Image
            className="absolute top-0 left-0"
            src="/rec-t-l.svg"
            alt="rec-t-l"
            width={150}
            height={150}
          />
          <Image
            className="absolute top-0 right-8"
            src="/rec-t-r.svg"
            alt="rec-t-r"
            width={204}
            height={204}
          />
          <Image
            className="absolute bottom-0 right-0"
            src="/rec-b-r.svg"
            alt="rec-b-r"
            width={150}
            height={150}
          />
          <Image
            className="absolute bottom-0 left-0"
            src="/rec1.svg"
            alt="rec1"
            width={30}
            height={30}
          />
          <Image
            className="absolute bottom-0 left-0"
            src="/rec2.svg"
            alt="rec2"
            width={50}
            height={50}
          />
          <Image
            className="absolute bottom-0 left-0"
            src="/rec3.svg"
            alt="rec3"
            width={70}
            height={70}
          />
          <Image
            className="absolute bottom-0 left-0"
            src="/rec4.svg"
            alt="rec4"
            width={90}
            height={90}
          />
        </div>
      </section>
    </div>
  );
}

export default Page;
