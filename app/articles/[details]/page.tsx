"use client";

import { usePathname } from "next/navigation";

// data
import { articles } from "@/constants/data";

// utils
import { parseStyledText } from "@/utilities/utils";

function Page() {
  const pathname = usePathname();
  const articleDetails = articles.find(
    (article) => article.title === decodeURIComponent(pathname.split("/")[2])
  );
  const { title, year, author, open } = articleDetails!;

  return (
    <div className="grid-system-level3 space-y-10 py-10">
      {/* title / year, author, open acccess */}
      <div className="space-y-2">
        {/* title */}
        <h2 className="title-large text-on_surface-light">{title}</h2>

        {/* year, author, open acccess */}
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
      </div>

      <div className="space-y-9">
        {/* title & description 1 */}
        <div className="space-y-3">
          <h4 className="title-medium text-on_surface-light">Title</h4>
          <p className="body-large text-txt-on-surface-secondary-light text-justify">
            {parseStyledText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. @(*Ullamcorper*)@ velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
            )}
          </p>
        </div>

        {/* title & description 2 */}
        <div className="space-y-3">
          <h4 className="title-medium text-on_surface-light">Title</h4>
          <div className="body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
          </div>
        </div>

        {/* title & description 3 */}
        <div className="space-y-3">
          <h4 className="title-medium text-on_surface-light">Title</h4>
          <div className="body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
