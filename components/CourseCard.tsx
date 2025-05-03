import Image from "next/image";
import Link from "next/link";

function CourseCard({ data, type }: { type: string }) {
  return type === "post" ? (
    <div className="space-y-3">
      <div className="space-y-2">
        <Image
          src={`/${data.coverImg}.png`}
          alt={`${data.type} ${data.id}`}
          className="rounded-sm aspect-16-9 object-cover"
          width={310}
          height={174}
        />

        <div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#206F12]" />
            <span className="label-small text-txt-on-surface-secondary-light">
              {data.type}
            </span>
          </div>

          <h3 className="body-large text-on_surface-light">{data.name}</h3>
        </div>
      </div>

      <p className="label-small text-txt-on-surface-terriary-light">
        {data.date}
      </p>
    </div>
  ) : (
    <Link
      href={`/${type}/${data.name}`}
      className="space-y-2 relative cursor-pointer"
    >
      <Image
        src={`/${data.coverImg}.png`}
        alt={`${type} ${data.id}`}
        className="rounded-sm aspect-16-9 object-cover"
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

        {type === "programs" ? (
          <div className="space-y-1.5">
            <div className="label-medium text-shades-light-50 flex items-center gap-3">
              <div className="flex items-center gap-1">
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

            <p className="label-large-db text-on_surface-light">
              ${data.price} (CAD)
            </p>
          </div>
        ) : type === "events" ? (
          <div className="flex items-center gap-4">
            <span className="label-large-db text-background-primary-light">
              {data.date}
            </span>
            <div className="border-[0.8px] border-dashed border-outline-level0 flex-1" />
            <span className="label-medium-db text-txt-on-surface-secondary-light">
              {data.time}
            </span>
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export default CourseCard;
