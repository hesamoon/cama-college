import Link from "next/link";

// types
import { Article } from "@/app/types/types";

// components
import Button from "./Button";
import MoreDetailsP from "./MoreDetailsP";

function ArticlePreview({ data }: { data: Article }) {
  const { type, title, desc, year, author, open } = data;

  return (
    <div className="space-y-4 py-2">
      <div className="flex flex-col gap-4">
        <Link href={`/articles/${title}`} className="space-y-2">
          <h6 className="label-medium text-on_surface-light">{type}</h6>
          <h2 className="title-medium text-on_surface-light">{title}</h2>
        </Link>

        <div className="bg-[#FCE8E95C] border-l-2 border-background-primary-light rounded p-5.5">
          {desc.length <= 523 ? (
            <p className="text-justify body-large text-txt-secondary">{desc}</p>
          ) : (
            <MoreDetailsP
              text={desc.slice(0, 523)}
              textStyle="text-justify body-large text-txt-secondary"
              href={`/articles/${title}`}
            />
          )}
        </div>
      </div>

      {/* year, author, open acccess / share button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="body-medium text-txt-on-surface-secondary-light">
            {year}
          </span>

          <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

          <span className="body-medium text-txt-on-surface-terriary-light">
            {author}
          </span>

          {open && (
            <>
              <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

              <span className="body-medium text-txt-on-surface-terriary-light">
                Open Access
              </span>
            </>
          )}
        </div>

        <div className="">
          <Button
            props={{
              value: "",
              disabled: false,
              leftIcon: "",
              rightIcon: "share-black",
              type: "text",
              padding: "p-3.5",
              width: 20,
              height: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
