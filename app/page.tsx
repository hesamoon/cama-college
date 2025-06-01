import Image from "next/image";
import Link from "next/link";

// components
import Chips from "@/components/Chips";
import Button from "@/components/Button";
import Searchbox from "@/components/Searchbox";
import CourseCard from "@/components/CourseCard";
import ApplyBanner from "@/components/ApplyBanner";
import SectionTitle from "@/components/SectionTitle";
import CourseSlider from "@/components/CourseSlider";
import CredentialInquiry from "@/components/CredentialInquiry";

// data
import { events, posts, programs } from "../constants/data.js";

// utils
import { userAttr } from "../utilities/userAttr.js";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* header */}
      {userAttr()?.role === "ADMIN" ? (
        <section className="mt-14 space-y-12">
          {/* searchbox */}
          <div className="w-full flex items-center justify-center">
            <div className="w-3xl">
              <Searchbox />
            </div>
          </div>

          {/* banner */}
          <div className="">
            <CourseSlider type="Programs" />
          </div>
        </section>
      ) : (
        <section className="mt-14 space-y-12 grid-system-level0">
          <div className="space-y-6">
            <h1 className="display-large max-w-xl">
              With CAMA college, shape your future!
            </h1>
            <p className="max-w-3xl body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas
            </p>
          </div>

          <section className="space-y-3 mt-10 max-w-3xl pr-4">
            {/* searchbox */}
            <Searchbox />

            <div className="flex items-center gap-1 ml-6">
              <Image src="/star.svg" alt="star" width={16} height={16} />
              <span className="label-medium-db text-on_surface-light">
                12034 students enrolled
              </span>
            </div>
          </section>
        </section>
      )}

      {/* new programs */}
      <section className="space-y-8 grid-system-level0">
        <div className="space-y-4">
          <SectionTitle title="New Programs" path="/programs" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {programs
              .filter((program) => program.id <= 4)
              .map((program) => (
                <CourseCard key={program.id} data={program} type="programs" />
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
            <Link
              href={`/programs?category=${encodeURIComponent(item)}`}
              key={item}
            >
              <Chips
                chips={{
                  lable: `${item}`,
                  leftIcon: "",
                  rightIcon: "",
                  disabled: false,
                  type: "tonal",
                  width: 0,
                  height: 0,
                }}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="hero grid-system-level0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black font-bold text-xl py-6">
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
      <section className="space-y-4 grid-system-level0">
        <SectionTitle title="New Events" path="/events" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event) => (
            <CourseCard key={event.id} data={event} type="events" />
          ))}
        </div>
      </section>

      {/* admissions */}
      <section className="flex items-center justify-center grid-system-level1">
        <ApplyBanner />
      </section>

      {/* news and posts */}
      <section className="space-y-4 grid-system-level0">
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
              padding: "px-4 py-1",
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <CourseCard key={post.id} data={post} type="post" />
          ))}
        </div>
      </section>

      {/* instructor */}
      <section className="grid items-center grid-cols-2 gap-8 space-y-2 grid-system-level0">
        <div className="col-span-1 space-y-6">
          <div className="space-y-4">
            <h1 className="header-large text-on_surface-light">
              Be an instructor
            </h1>
            <p className="body-large text-txt-on-surface-secondary-light text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
            </p>
          </div>

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
              padding: "px-8 py-2",
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

      <section className="hero2 grid-system-level0">
        <div className="flex items-center justify-between text-white font-bold text-xl py-9">
          <div className="flex flex-col items-start gap-3 z-[999]">
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
