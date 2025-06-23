import Image from "next/image";

// data
import { days } from "@/constants/data";

function DescriptionSection() {
  return (
    <div id="Description" className="space-y-8 pt-8">
      {/* title */}
      <div className="space-y-3">
        <h2 className="title-medium text-txt-on-surface-secondary-light">
          About Program
        </h2>
        <p className="body-large text-txt-on-surface-secondary-light text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat.
        </p>
      </div>

      {/* some important stuff */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What are the prerequisites? */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/data.svg" alt="data" width={20} height={20} />
            <h3 className="title-medium text-txt-on-surface-secondary-light">
              What are the prerequisites?
            </h3>
          </div>

          <ul className="space-y-1 body-large text-txt-on-surface-secondary-light">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>

        {/* Who is the audience? */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/people.svg" alt="people" width={20} height={20} />
            <h3 className="title-medium text-txt-on-surface-secondary-light">
              Who is the audience?
            </h3>
          </div>

          <ul className="space-y-1 body-large text-txt-on-surface-secondary-light">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>
      </div>

      {/* what you'll learn */}
      <div className="space-y-3">
        {/* title */}
        <div className="flex items-center gap-[9px]">
          <Image src="/verify.svg" alt="verify" width={20} height={20} />
          <h4 className="title-medium text-txt-on-surface-secondary-light">
            What you&apos;ll learn?
          </h4>
        </div>

        {/* list of what you'll learn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-start gap-4 py-2.5">
              <h4 className="display-small text-primary-tints-70">{item}</h4>
              <div className="flex flex-col gap-2">
                <span className="title-medium text-txt-on-surface-secondary-light">
                  You Learn
                </span>

                <span className="body-medium text-txt-on-surface-secondary-light">
                  Lorem ipsum dolor sit amet, consectetur.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* schedule */}
      <div className="space-y-3">
        {/* title */}

        <h4 className="title-medium text-txt-on-surface-secondary-light">
          Schedule
        </h4>

        <div className="grid grid-cols-7 items-center gap-6">
          {days.slice(0, 7).map((day) => (
            <div
              key={day.id}
              className={`relative h-full border border-outline-level1 py-4 rounded flex flex-col items-center justify-center ${
                day.haveClass
                  ? "bg-background-primary-light text-txt-on-primary-dark"
                  : "bg-transparent text-txt-on-surface-secondary-light"
              }`}
            >
              <h5 className="uppercase label-medium">
                {new Date(day.date).toLocaleString("en-us", {
                  weekday: "short",
                })}
              </h5>
              {day.id === 5 || day.id === 8 ? (
                <h5 className="label-large-db whitespace-nowrap">12:00 - 14:00</h5>
              ) : null}

              {day.newEvents.length > 0 ? (
                <div className="absolute top-1 right-1 flex items-center gap-0.5">
                  {day.newEvents.map((e) => (
                    <div key={e} className="w-2 h-2 rounded-full bg-green" />
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
