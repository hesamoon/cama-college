"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

// components
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import RatingCard from "@/components/RatingCard";
import CommentsSection from "@/components/CommentsSection";
import SpeakersSection from "@/components/SpeakersSection";
import LocationSection from "@/components/LocationSection";
import DescriptionSection from "@/components/DescriptionSection";
import EventDetailsSkeleton from "@/components/skeletons/EventDetailsSkeleton";

// api
import { getEvent, getEvents } from "@/lib/api/events";

// types
import { Event } from "@/app/types/types";

function Page() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const { data: eventDetailss, isLoading: isLoadingEventDetails } = useQuery({
    queryKey: ["eventDetails", courseId],
    queryFn: () => getEvent(courseId || ""),
  });

  const { data: eventsData, isLoading: isLoadingEvents } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const eventDetails = eventDetailss?.data.data;

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

  if (isLoadingEventDetails || isLoadingEvents) {
    return <EventDetailsSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {/* top section -> cover, title*/}
        <div className="grid grid-cols-3 gap-6 mobile-grid-system-level0 md:grid-system-level1 space-y-6 mt-4">
          <div className="col-span-3 space-y-6">
            {/* cover, title */}
            <div className="space-y-8">
              <Image
                className="rounded-sm aspect-16-9 object-cover w-full max-h-[438px]"
                src={eventDetails?.avatar}
                alt={`${eventDetails?.name} cover`}
                width={781}
                height={438}
                unoptimized
              />

              <h1 className="mobile-display-medium md:display-medium text-color-on_surface-light">
                {eventDetails?.name}
              </h1>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="sticky top-[3.75rem] bg-white z-[35] md:grid-system-level1 overflow-x-auto no-scrollbar">
          {/* tabs */}
          <div
            className={`flex items-center justify-between border-b border-outline-level0 transition-all duration-300 ease-in-out ${
              activeTab === "Comments" || activeTab === "Related Events"
                ? "w-full"
                : "md:w-2/3"
            }`}
          >
            <div className="flex items-center justify-between w-full md:w-fit md:gap-4">
              {tabs.map((tab) => (
                <div key={tab}>
                  <button
                    className={`py-2 px-4 md:py-3 md:px-2.5 mobile-body-large md:body-large cursor-pointer transition-all ease-linear duration-200 whitespace-nowrap ${
                      activeTab === tab
                        ? "text-background-primary-light border-b border-background-primary-light"
                        : "text-txt-on-surface-terriary-light"
                    }`}
                    onClick={() => {
                      const element = document.getElementById(tab);
                      if (element) {
                        const yOffset = -100; // scroll 117px *above* the element
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
              } hidden md:flex items-center gap-1`}
            >
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
                  height: 20,
                  width: 20,
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
                  height: 20,
                  width: 20,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mobile-grid-system-level0 md:grid-system-level1">
          <div className="col-span-2">
            {/* card */}
            <div className="block md:hidden bg-shades-light-90 rounded-sm p-3 space-y-3 h-fit w-full">
              {/* price */}
              <h3 className="title-medium text-txt-on-surface-secondary-light">
                Event Features
              </h3>

              {/* important details */}
              <div className="grid grid-cols-2 gap-2">
                {/* labels */}
                <div className="col-span-1 space-y-2 mobile-body-large">
                  {/* event date */}
                  <div className="flex items-center text-txt-on-surface-terriary-light gap-1">
                    <Image
                      src="/chart.svg"
                      alt="chart"
                      width={16}
                      height={16}
                    />
                    <span>Event Date</span>
                  </div>

                  {/* event time */}
                  <div className="flex items-center text-txt-on-surface-terriary-light gap-1">
                    <Image
                      src="/timer.svg"
                      alt="timer"
                      width={16}
                      height={16}
                    />
                    <span>Event Time</span>
                  </div>

                  {/* rating */}
                  <div className="flex items-center text-txt-on-surface-terriary-light gap-1">
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
                    <div className="flex items-center text-txt-on-surface-terriary-light gap-1">
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
                <div className="col-span-1 text-txt-on-surface-secondary-light space-y-2 mobile-body-large">
                  {/* event date */}
                  <h5>{eventDetails?.level}</h5>

                  {/* event time */}
                  <h5>{eventDetails?.duration}h</h5>

                  {/* rating */}
                  <h5>{20}</h5>
                </div>
              </div>

              {/* social media */}
              <div className="flex items-center gap-3">
                <Button
                  props={{
                    value: "",
                    type: "outlined",
                    color: "red",
                    disabled: false,
                    leftIcon: "telegram",
                    rightIcon: "",
                    size: "body-large",
                    padding: "p-3",
                    height: 24,
                    width: 24,
                  }}
                />

                <Button
                  props={{
                    value: "",
                    type: "outlined",
                    color: "red",
                    disabled: false,
                    leftIcon: "instagram",
                    rightIcon: "",
                    size: "body-large",
                    padding: "p-3",
                    height: 24,
                    width: 24,
                  }}
                />
              </div>
            </div>

            {/* description */}
            <DescriptionSection
              about={eventDetails?.about}
              prerequisites={eventDetails?.prerequisites || []}
              audience={eventDetails?.audience || []}
              what_you_learn={eventDetails?.what_you_learn || []}
              type="event"
            />

            {/* location */}
            <LocationSection />

            {/* get course btn */}
            <div className="block md:hidden space-y-2 pt-4">
              {/* count of student enrolled */}
              <div className="flex items-center gap-1">
                <Image
                  src="/like-shapes.svg"
                  alt="like-shapes"
                  width={20}
                  height={20}
                />
                <span className="text-green mobile-label-medium-db md:label-medium-db">
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
                    size: "mobile-body-large md:body-large",
                    height: 24,
                    width: 24,
                  }}
                />
              </div>
            </div>

            {/* speakers */}
            <SpeakersSection />
          </div>

          {/* right side / card */}
          <div className="hidden md:block sticky top-[4.5rem] z-[36] col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 px-6 space-y-6 h-fit min-w-96 max-w-fit">
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
                <h5>{20}</h5>
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

        {/* comments */}
        <div
          id="Comments"
          className="flex flex-col-reverse md:grid md:grid-cols-3 mobile-grid-system-level0 md:grid-system-level1 space-y-6 pt-8"
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
        <div className="grid grid-cols-3 mobile-grid-system-level0 md:grid-system-level1 space-y-6 mt-4">
          {/* event */}
          <div
            id="Related Events"
            className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
          >
            {eventsData?.data.data.slice(0, 6).map((event: Event) => (
              <CourseCard
                key={event.id}
                data={{ ...event, cardType: "EVENT" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* apply */}
      <section className="flex items-center justify-center md:mt-20">
        <div className="mobile-grid-system-level0 md:grid-system-level1 relative bg-primary-tints-90 flex flex-col-reverse md:grid md:grid-cols-2 space-y-8 md:space-y-0 overflow-hidden py-10">
          <div className="col-span-1 z-30 space-y-6 md:space-y-4">
            <div className="space-y-3">
              <h2 className="mobile-title-large md:title-large text-on_surface-light">
                Apply to easy access to Events
              </h2>
              <p className="mt-2 text-txt-on-surface-secondary-light mobile-body-large md:body-large text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan
              </p>
            </div>

            <div className="space-y-2 md:space-y-1">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="mobile-body-large md:body-large text-black">
                    Positive feature
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="mobile-body-large md:body-large text-black">
                    Positive feature
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="mobile-body-large md:body-large text-black">
                    Positive feature
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-[#A91418]" />
                  <span className="mobile-body-large md:body-large text-black">
                    Positive feature
                  </span>
                </div>
              </div>
            </div>

            <div className="md:hidden">
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
                  size: "body-medium md:body-large",
                  padding: "px-6 py-3",
                }}
              />
            </div>
          </div>

          <div className="col-span-1 flex items-end justify-center gap-4">
            <div className="hidden md:block pb-4">
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
            className="absolute -top-10 -left-10 md:top-0 md:left-0"
            src="/rec-t-l.svg"
            alt="rec-t-l"
            width={150}
            height={150}
          />
          <Image
            className="absolute top-0 -right-32 md:right-8"
            src="/rec-t-r.svg"
            alt="rec-t-r"
            width={204}
            height={204}
          />
          <Image
            className="hidden md:block absolute bottom-0 right-0"
            src="/rec-b-r.svg"
            alt="rec-b-r"
            width={150}
            height={150}
          />
          <Image
            className="hidden md:block absolute bottom-0 left-0"
            src="/rec1.svg"
            alt="rec1"
            width={30}
            height={30}
          />
          <Image
            className="hidden md:block absolute bottom-0 left-0"
            src="/rec2.svg"
            alt="rec2"
            width={50}
            height={50}
          />
          <Image
            className="hidden md:block absolute bottom-0 left-0"
            src="/rec3.svg"
            alt="rec3"
            width={70}
            height={70}
          />
          <Image
            className="hidden md:block absolute bottom-0 left-0"
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
