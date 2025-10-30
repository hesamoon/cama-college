import Link from "next/link";
import Image from "next/image";

// components
import Button from "@/components/Button";
import Typewriter from "@/components/Typewriter";
import ApplyBanner from "@/components/ApplyBanner";
import LoginBanner from "@/components/LoginBanner";
import AISearchBox from "@/components/AISearchBox";
import CoursesSection from "@/components/CoursesSection";
import CredentialInquiry from "@/components/CredentialInquiry";

// utils
import { userAttr } from "../utilities/serverUserAttr.js";

export default function Home() {
  return (
    <div className="space-y-7 md:space-y-14">
      {/* <TUUMLanding /> */}

      {/* header */}
      {userAttr()?.role === "ADMIN" ? (
        <LoginBanner />
      ) : (
        <section className="mt-8 grid grid-cols-2 mobile-grid-system-level0 md:grid-system-level0">
          <div className="space-y-12 col-span-1">
            <div className="space-y-6">
              {/* TUUM Professor AI */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  {/* glow effect */}
                  <>
                    <div className="absolute -top-[2px] -left-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -top-[2px] -right-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                  </>

                  <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[47.63px] h-[47.63px]">
                    <Image
                      className="w-[40px] h-[39px]"
                      src="/tuum/tuum-logo.svg"
                      alt="tuum logo"
                      width={40}
                      height={39}
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h5 className="label-medium-db bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
                    TUUM Professor
                  </h5>
                  <h3 className="body-large text-on_surface-light">
                    Hello, Im CAMA College AI assistant
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start">
                <Typewriter
                  text="With CAMA college, shape your future!"
                  sx="mobile-display-large md:header-small max-w-96 md:max-w-xl"
                />

                <Typewriter
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas"
                  sx="mobile-body-large md:body-large max-w-96 md:max-w-xl"
                />
              </div>
            </div>

            {/* searchbox */}
            <AISearchBox />
          </div>
        </section>
      )}

      {/* new programs */}
      <CoursesSection courseType="programs" />

      {/* numbers */}
      <section className="hero mobile-grid-system-level0 md:grid-system-level0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black font-bold text-xl py-6">
          <div className="mobile-title-medium md:header-small">
            <span className="mobile-display-large md:display-large block">
              326
            </span>{" "}
            Students
          </div>
          <div className="mobile-title-medium md:header-small">
            <span className="mobile-display-large md:display-large block">
              5
            </span>{" "}
            Nations
          </div>
          <div className="mobile-title-medium md:header-small">
            <span className="mobile-display-large md:display-large block">
              85%
            </span>{" "}
            International Students
          </div>
          <div className="mobile-title-medium md:header-small">
            <span className="mobile-display-large md:display-large block">
              15
            </span>{" "}
            Top Instructors
          </div>
        </div>
      </section>

      {/* new events */}
      <CoursesSection courseType="events" />

      {/* admissions */}
      <section className="flex items-center justify-center mobile-grid-system-level0 md:grid-system-level1">
        <ApplyBanner />
      </section>

      {/* instructor */}
      <section className="flex flex-col md:grid items-center md:grid-cols-2 gap-8 space-y-2 mobile-grid-system-level0 md:grid-system-level0">
        <div className="col-span-1 space-y-6">
          <div className="space-y-4">
            <h1 className="mobile-header-large md:header-large text-on_surface-light">
              Be an instructor
            </h1>
            <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
            </p>
          </div>

          <Link href="/work-with-us">
            <Button
              props={{
                value: "View Conditions",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: "arrow-right-red",
                type: "outlined",
                width: 24,
                height: 24,
                size: "mobile-body-large md:body-large",
                padding: "px-6 md:px-8 py-2",
              }}
            />
          </Link>
        </div>

        <div className="col-span-1 flex items-center justify-center gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-outline-level2 rounded-sm flex flex-col items-center justify-center gap-4 p-4"
            >
              <div className="p-3 rounded-full bg-primary-tints-90 w-fit">
                <Image
                  src="/card-coin.svg"
                  alt="card-coin"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credential inquiry */}
      <section className="hero2 mobile-grid-system-level0 md:grid-system-level0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-white font-bold text-xl py-9">
          <div className="flex flex-col items-start gap-3 z-30">
            <h3 className="mobile-title-medium md:title-medium text-primary-shades-90">
              Credential inquiry
            </h3>
            <p className="mobile-body-large md:body-large text-primary-shades-90 text-start">
              To check the status of our global representatives, please enter
              the representative code in the search bar next. The report
              provided will display the representative’s status, start and end
              dates of their partnership, region of representation, name, and
              direct contact number.
            </p>
          </div>

          {/* credential inquiry */}
          <div className="z-30">
            <CredentialInquiry />
          </div>
        </div>
      </section>
    </div>
  );
}
