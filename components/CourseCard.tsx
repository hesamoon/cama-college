import Image from "next/image";
import Link from "next/link";

// types
import { CourseCardProps } from "@/app/types/types";

function CourseCard({ type, data }: CourseCardProps) {
  return type === "news" ? (
    <Link href={`/news/${data.name}`} className="space-y-3">
      <div className="space-y-2">
        <Image
          src={`/${data.coverImg}.png`}
          alt={`${data.type} ${data.id}`}
          className="rounded-sm aspect-16-9 object-cover w-full"
          width={310}
          height={174}
        />

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

      <p className="mobile-label-small md:label-small text-txt-on-surface-terriary-light">
        {new Date(data.publishDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </p>
    </Link>
  ) : type === "events2" ? (
    <Link
      href={`/events/${data.name}`}
      className="space-y-2 relative cursor-pointer"
    >
      <Image
        src={`/${data.coverImg}.png`}
        alt={`${type} ${data.id}`}
        className="rounded-sm aspect-16-9 object-cover w-full"
        width={310}
        height={174}
      />

      {data?.status === "Sold Out" ? (
        <div className="absolute top-2 left-2 py-0.5 px-3 rounded-xs text-white label-small bg-background-primary-light">
          Sold Out
        </div>
      ) : null}

      <div className="space-y-3">
        <h3 className="body-large">{data.name}</h3>

        <div className="flex items-center gap-4">
          <span className="label-large-db text-background-primary-light">
            {new Date(data.publishDate)
              .toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })
              .toUpperCase()}
          </span>

          <div className="border-[0.8px] border-dashed border-outline-level0 flex-1" />

          <span className="label-medium-db text-txt-on-surface-secondary-light">
            10:00 - 12:00
          </span>
        </div>
      </div>
    </Link>
  ) : (
    <Link
      href={`/${type}/${data.name}?courseId=${data.id}`}
      className="space-y-2 relative cursor-pointer"
    >
      <Image
        src={data.avatar}
        alt={`${type} ${data.id}`}
        className="rounded-sm aspect-16-9 object-cover w-full"
        width={310}
        height={174}
        unoptimized
      />

      {data?.status === "Sold Out" ? (
        <div className="absolute top-2 left-2 py-0.5 px-3 rounded-xs text-white mobile-label-small md:label-small bg-background-primary-light">
          Sold Out
        </div>
      ) : null}

      <div className="space-y-3">
        <h3 className="mobile-body-large md:body-large">{data.name}</h3>

        {type === "programs" ? (
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

            <p className="mobile-label-large-db md:label-large-db text-on_surface-light">
              ${data.price} (CAD)
            </p>
          </div>
        ) : type === "events" ? (
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
