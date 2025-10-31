import Image from "next/image";

// data
import { days } from "@/constants/data";

function DescriptionSection({
  about,
  prerequisites,
  audience,
  what_you_learn,
  presentation_type,
  type,
}: {
  about: string;
  prerequisites: { text: string }[];
  audience: { text: string }[];
  what_you_learn: { text: string }[];
  presentation_type: string;
  type: string;
}) {
  return (
    <div id="Description" className="space-y-8 pt-8">
      {/* title */}
      <div className="space-y-2 md:space-y-3">
        <h2 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
          About Program
        </h2>
        <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
          {about}
        </p>
      </div>

      {/* some important stuff */}
      {type === "program" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What are the prerequisites? */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/data.svg" alt="data" width={20} height={20} />
              <h3 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
                What are the prerequisites?
              </h3>
            </div>

            <ul className="space-y-1 mobile-body-large md:body-large text-txt-on-surface-secondary-light">
              {prerequisites?.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Who is the audience? */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/people.svg" alt="people" width={20} height={20} />
              <h3 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
                Who is the audience?
              </h3>
            </div>

            <ul className="space-y-1 mobile-body-large md:body-large text-txt-on-surface-secondary-light">
              {audience?.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-txt-on-surface-secondary-light" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* what you'll learn */}
      {type === "program" && (
        <div className="space-y-3">
          {/* title */}
          <div className="flex items-center gap-[9px]">
            <Image src="/verify.svg" alt="verify" width={20} height={20} />
            <h4 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
              What you&apos;ll learn?
            </h4>
          </div>

          {/* list of what you'll learn */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {what_you_learn?.map((item, index) => (
              <div key={index} className="flex items-start gap-4 py-2.5">
                <h4 className="mobile-display-small md:display-small text-primary-tints-70">
                  {index + 1}
                </h4>
                <div className="flex flex-col gap-2">
                  <span className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
                    You Learn
                  </span>

                  <span className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* schedule */}
      {presentation_type === "offline" && (
        <div className="space-y-3">
          {/* title */}
          <h4 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
            Schedule
          </h4>

          <div className="flex items-center flex-wrap md:grid md:grid-cols-7 gap-3">
            {days.slice(0, 7).map((day) => (
              <div
                key={day.id}
                className={`flex-1 relative border min-h-[4.5rem] border-outline-level1 p-4 rounded flex flex-col items-center justify-center ${
                  day.haveClass
                    ? "bg-background-primary-light text-txt-on-primary-dark"
                    : "bg-transparent text-txt-on-surface-secondary-light"
                }`}
              >
                <h5 className="uppercase mobile-label-medium md:label-medium">
                  {new Date(day.date).toLocaleString("en-us", {
                    weekday: "short",
                  })}
                </h5>
                {day.id === 5 || day.id === 8 ? (
                  <h5 className="mobile-label-large-db md:label-large-db whitespace-nowrap">
                    12:00 - 14:00
                  </h5>
                ) : null}

                {day.newEvents.length > 0 ? (
                  <div className="absolute top-1 right-1 flex items-center gap-0.5">
                    {day.newEvents.map((e) => (
                      <div
                        key={e}
                        className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DescriptionSection;
