import Image from "next/image";

// utils
import { parseStyledText } from "@/utilities/utils";

function page() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level3 space-y-6 md:space-y-10 py-5 md:py-10">
      {/* title */}
      <h2 className="mobile-title-large md:title-large text-on_surface-light">
        Total Title
      </h2>

      <div className="space-y-9">
        {/* title / description 1 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Title Of Lesson
          </h4>

          <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
            {parseStyledText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id @(*Example.com*)@ lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
            )}
          </p>
        </div>

        {/* cover picture */}
        <Image
          className="object-cover rounded w-full h-[272px]"
          src="/c1.png"
          alt="c1"
          width={672}
          height={272}
        />

        {/* title / description 2 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Title Of Lesson
          </h4>

          <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
