"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// components
import Button from "./Button";
import BluredImage from "./BluredImage";
import MouseTooltipWrapper from "./MouseTooltipWrapper";

// types
import { CourseCardProps } from "@/app/types/types";

function CourseCard({ data }: { data: CourseCardProps }) {
  // const [imageLoading, setImageLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  console.log(data);

  return data.cardType === "NEWS" ? (
    <Link
      href={`/news/${data.name}`}
      className="flex flex-col gap-3 justify-between group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="space-y-2">
        <div className="relative overflow-hidden rounded-sm">
          <BluredImage
            url={`/${data.avatar}.png`}
            name={`${data.cardType} ${data.id}`}
            imgStyle="w-full transition-all duration-700 group-hover:scale-120"
            blurhashStyle=""
            cWidth={310}
            cHeight={174}
          />

          <span className="pointer-events-none absolute left-0 top-2 z-20 h-10 w-[220%] bg-black/20 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-7 group-hover:translate-y-7" />
          <span className="pointer-events-none absolute left-0 top-3 z-10 h-12 w-[220%] bg-background-primary-light/40 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-10 group-hover:translate-y-10" />
        </div>

        <div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#206F12]" />
            <span className="mobile-label-small md:label-small text-txt-on-surface-secondary-light">
              {data.category}
            </span>
          </div>

          <h3 className="mobile-body-large md:body-large text-on_surface-light">
            {data.name}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <p className="mobile-label-small md:label-small text-txt-on-surface-terriary-light">
          {new Date(data.date || "").toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>

        <div className="relative min-w-[80px] h-[32px] flex items-center justify-end">
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="details-hover-wipe"
                className="absolute right-0"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Button
                  props={{
                    value: "Details",
                    disabled: false,
                    leftIcon: "",
                    rightIcon: "arrow-right",
                    type: "text",
                    color: "red",
                    width: 20,
                    height: 20,
                    size: "mobile-body-medium md:body-small",
                    padding: "px-4 py-1",
                    // clickHandler: () => router.push(path),
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  ) : data.cardType === "PROGRAM" && data.price === 950 ? (
    <MouseTooltipWrapper message="Good Program :)">
      <Link
        href={`/programs/${data.name}?courseId=${data.id}`}
        className="relative cursor-pointer group flex flex-col gap-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden rounded-sm">
          <BluredImage
            url={data.avatar}
            name={`avatar ${data.id}`}
            imgStyle="w-full transition-all duration-700 group-hover:scale-120"
            blurhashStyle=""
            cWidth={310}
            cHeight={174}
          />

          <span className="pointer-events-none absolute left-0 top-2 z-20 h-10 w-[220%] bg-[#170304]/36 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-7 group-hover:translate-y-7" />
          <span className="pointer-events-none absolute left-0 top-3 z-10 h-12 w-[220%] bg-background-primary-light/36 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-10 group-hover:translate-y-10" />
        </div>

        {data?.status === "sold_out" ? (
          <div className="absolute top-2 left-2 py-0.5 px-3 rounded-xs text-white mobile-label-small md:label-small bg-background-primary-light">
            Sold Out
          </div>
        ) : null}

        <div className="flex flex-col gap-3 justify-between flex-1">
          <h3 className="mobile-body-large md:body-large">{data.name}</h3>

          {data.cardType === "PROGRAM" ? (
            <div className="space-y-1.5">
              <div className="mobile-label-medium md:label-medium text-shades-light-50 flex items-center gap-3">
                <div className="hidden md:flex items-center gap-1">
                  <Image src="/chart.svg" alt="chart" width={12} height={12} />
                  <span>{data.level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/monitor-mobbile.svg"
                    alt="monitor-mobbile"
                    width={12}
                    height={12}
                  />
                  <span>{data.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/timer.svg" alt="timer" width={12} height={12} />
                  <span>{data.duration} hours</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="mobile-label-large-db md:label-large-db text-on_surface-light">
                  ${data.price} (CAD)
                </p>

                <div className="relative min-w-[80px] h-[32px] flex items-center justify-end">
                  <AnimatePresence>
                    {hovered && (
                      <motion.div
                        key="details-hover-wipe"
                        className="absolute right-0"
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Button
                          props={{
                            value: "Details",
                            disabled: false,
                            leftIcon: "",
                            rightIcon: "arrow-right",
                            type: "text",
                            color: "red",
                            width: 20,
                            height: 20,
                            size: "mobile-body-medium md:body-medium",
                            padding: "px-4 py-1",
                            // clickHandler: () => router.push(path),
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Link>
    </MouseTooltipWrapper>
  ) : (
    <Link
      href={`/${data.cardType === "PROGRAM" ? "programs" : "events"}/${
        data.name
      }?courseId=${data.id}`}
      className="relative cursor-pointer group flex flex-col gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <BluredImage
          url={data.avatar}
          name={`avatar ${data.id}`}
          imgStyle="w-full transition-all duration-700 group-hover:scale-120"
          blurhashStyle=""
          cWidth={310}
          cHeight={174}
        />

        <span className="pointer-events-none absolute left-0 top-2 z-20 h-10 w-[220%] bg-[#170304]/36 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-7 group-hover:translate-y-7" />
        <span className="pointer-events-none absolute left-0 top-3 z-10 h-12 w-[220%] bg-background-primary-light/36 -rotate-45 -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-10 group-hover:translate-y-10" />
      </div>

      {data?.status === "sold_out" ? (
        <div className="absolute top-2 left-2 py-0.5 px-3 rounded-xs text-white mobile-label-small md:label-small bg-background-primary-light">
          Sold Out
        </div>
      ) : null}

      <div className="flex flex-col gap-3 justify-between flex-1">
        <h3 className="mobile-body-large md:body-large">{data.name}</h3>

        {data.cardType === "PROGRAM" ? (
          <div className="space-y-1.5">
            <div className="mobile-label-medium md:label-medium text-shades-light-50 flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1">
                <Image src="/chart.svg" alt="chart" width={12} height={12} />
                <span>{data.level}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/monitor-mobbile.svg"
                  alt="monitor-mobbile"
                  width={12}
                  height={12}
                />
                <span>{data.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/timer.svg" alt="timer" width={12} height={12} />
                <span>{data.duration} hours</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="mobile-label-large-db md:label-large-db text-on_surface-light">
                ${data.price} (CAD)
              </p>

              <div className="relative min-w-[80px] h-[32px] flex items-center justify-end">
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      key="details-hover-wipe"
                      className="absolute right-0"
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Button
                        props={{
                          value: "Details",
                          disabled: false,
                          leftIcon: "",
                          rightIcon: "arrow-right",
                          type: "text",
                          color: "red",
                          width: 20,
                          height: 20,
                          size: "mobile-body-medium md:body-medium",
                          padding: "px-4 py-1",
                          // clickHandler: () => router.push(path),
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : data.cardType === "EVENT" ? (
          <div className="flex items-center gap-4">
            <span className="mobile-label-large-db md:label-large-db text-background-primary-light">
              {new Date(data.date)
                .toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })
                .toUpperCase()}
            </span>

            <div className="border-[0.8px] border-dashed border-outline-level0 flex-1" />

            <span className="mobile-label-medium-db md:label-medium-db text-txt-on-surface-secondary-light">
              10:00 - 12:00
            </span>
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export default CourseCard;
