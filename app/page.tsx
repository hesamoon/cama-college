import Image from "next/image";

// components
import Chips from "@/components/Chips";
import Button from "@/components/Button";
import Searchbox from "@/components/Searchbox";
import ApplyBanner from "@/components/ApplyBanner";
import CredentialInquiry from "@/components/CredentialInquiry";

export default function Home() {
  return (
    <div>
      {/* header */}
      <section className="space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="display-large max-w-xl">
          With CAMA college, shape your future!
        </h1>
        <p className="max-w-3xl body-large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
        </p>

        <section className="space-y-2 mt-10">
          {/* searchbox */}
          <Searchbox />

          <div className="flex items-center gap-2 ml-6">
            <Image src="/star.svg" alt="star" width={16} height={16} />
            <span className="label-medium-db text-on_surface-light">
              12034 students enrolled
            </span>
          </div>
        </section>
      </section>

      {/* new courses */}
      <section className="mt-20 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="title-small">New Courses</h2>
            <Button
              props={{
                value: "View all",
                disabled: false,
                leftIcon: "",
                rightIcon: "arrow-right",
                type: "text",
                color: "red",
                width: 20,
                height: 20,
                size: "body-medium",
                padding: "px-4 py-1",
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["c1", "c2", "c3", "c4"].map((item) => (
              <div key={item}>
                <Image
                  src={`/${item}.png`}
                  alt={`Course ${item}`}
                  className="rounded-sm aspect-16-9 object-cover"
                  width={310}
                  height={174}
                />
                <div className="space-y-1">
                  <h3 className="body-large">Name of Course</h3>
                  <div className="label-medium text-shades-light-50 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/chart.svg"
                        alt="chart"
                        width={12}
                        height={12}
                      />
                      <span>Beginner</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/monitor-mobbile.svg"
                        alt="monitor-mobbile"
                        width={12}
                        height={12}
                      />
                      <span>Online</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/timer.svg"
                        alt="timer"
                        width={12}
                        height={12}
                      />
                      <span>8 hours</span>
                    </div>
                  </div>
                  <p className="label-large-db text-primary-shades-90">
                    $850 (CAD)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* chips */}
        <div className="flex items-center gap-2">
          {[
            "IT & AI",
            "Branding",
            "Business",
            "Management & Leadership",
            "Marketing & Sales",
            "Other",
          ].map((item) => (
            <Chips
              key={item}
              props={{
                lable: `${item}`,
                leftIcon: "",
                rightIcon: "",
                disabled: false,
                type: "tonal",
                width: 0,
                height: 0,
              }}
            />
          ))}
        </div>
      </section>

      <section className="hero">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black font-bold text-xl py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-small">
            <span className="display-large block">326</span> Students
          </div>
          <div className="header-small">
            <span className="display-large block">5</span> Nations
          </div>
          <div className="header-small">
            <span className="display-large block">85%</span> International
            Students
          </div>
          <div className="header-small">
            <span className="display-large block">15</span> Top Instructors
          </div>
        </div>
      </section>

      {/* new events */}
      <section className="mt-20 space-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="title-medium">New Events</h2>
          <Button
            props={{
              value: "View all",
              color: "red",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right",
              type: "text",
              width: 20,
              height: 20,
              size: "body-medium",
              padding: "px-4 py-1"
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["e1", "e2", "e3", "e4"].map((item) => (
            <div key={item}>
              <Image
                src={`/${item}.png`}
                alt={`Course ${item}`}
                className="rounded-sm aspect-16-9 object-cover"
                width={310}
                height={174}
              />
              <div className="space-y-1">
                <h3 className="body-large">Name of Event</h3>
                <div className="flex items-center gap-4">
                  <span className="label-large-db text-background-primary-light">
                    SEP 17
                  </span>
                  <div className="border-[0.8px] border-dashed border-outline-level0 flex-1" />
                  <span className="label-medium-db text-txt-on-surface-secondary-light">
                    10:00 - 12:00
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* admissions */}
      <section className="mt-20 flex items-center justify-center max-w-7xl mx-auto px-8 sm:px-12 lg:px-28">
        <ApplyBanner />
      </section>

      {/* news and posts */}
      <section className="mt-20 space-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="title-medium">News and Posts</h2>
          <Button
            props={{
              value: "View all",
              color: "red",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right",
              type: "text",
              width: 20,
              height: 20,
              size: "body-medium",
              padding: "px-4 py-1"
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["np1", "np2", "np3", "np4"].map((item) => (
            <div key={item}>
              <Image
                src={`/${item}.png`}
                alt={`Course ${item}`}
                className="rounded-sm aspect-16-9 object-cover"
                width={310}
                height={174}
              />
              <div className="mt-2 space-y-2">
                <div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#206F12]" />
                    <span className="label-small text-txt-on-surface-secondary-light">
                      NEWS
                    </span>
                  </div>
                  <h3 className="body-large text-on_surface-light">
                    Name of Event
                  </h3>
                </div>
                <p className="label-small text-txt-on-surface-terriary-light">
                  Aug 06, 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* instructor */}
      <section className="grid items-center grid-cols-2 gap-8 mt-20 space-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="col-span-1 space-y-4">
          <h1 className="header-large text-on_surface-light">
            Be an instructor
          </h1>
          <p className="body-large text-txt-on-surface-secondary-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat
          </p>

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
              size: "body-large",
              padding: "px-8 py-2"
            }}
          />
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
              <p className="body-medium text-txt-on-surface-secondary-light text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="hero2">
        <div className="flex items-center justify-between text-white font-bold text-xl py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 z-[999]">
            <h3 className="title-medium text-primary-shades-90">
              Credential inquiry
            </h3>
            <p className="body-large text-primary-shades-90">
              This is the description text
            </p>
          </div>

          {/* credential inquiry */}
          <div className="z-[999]">
            <CredentialInquiry />
          </div>
        </div>
      </section>
    </div>
  );
}
