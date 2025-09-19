"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

// component
import Button from "@/components/Button";
import BluredImage from "@/components/BluredImage";

// data
import { policiesMenu } from "@/constants/data";

function Page() {
  const pathname = usePathname();
  const [like, setLike] = useState(12);
  const [dislike, setDislike] = useState(2);

  const policeDetail = policiesMenu.find((pm) => pm.path === pathname);

  return (
    <div className=" space-y-10">
      {/* title */}
      <h2 className="mobile-title-large md:title-large text-on_surface-light">
        {policeDetail?.title}
      </h2>

      <div className="space-y-9">
        {/* title / description 1 */}
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

        {/* cover picture */}
        <BluredImage
          url="/c1.png"
          name="c1"
          imgStyle="w-full h-[272px]"
          blurhashStyle="w-full h-[272px]"
          cWidth={781}
          cHeight={272}
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

        {/* warning or info */}
        <div className="flex items-center gap-2 py-2 px-3 bg-primary-tints-90 rounded">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.7489 2.95031C11.4489 2.36031 12.5789 2.36031 13.2589 2.95031L14.8389 4.30031C15.1389 4.55031 15.7089 4.76031 16.1089 4.76031H17.8089C18.8689 4.76031 19.7389 5.63031 19.7389 6.69031V8.39031C19.7389 8.79031 19.9489 9.35031 20.1989 9.65031L21.5489 11.2303C22.1389 11.9303 22.1389 13.0603 21.5489 13.7403L20.1989 15.3203C19.9489 15.6203 19.7389 16.1803 19.7389 16.5803V18.2803C19.7389 19.3403 18.8689 20.2103 17.8089 20.2103H16.1089C15.7089 20.2103 15.1489 20.4203 14.8489 20.6703L13.2689 22.0203C12.5689 22.6103 11.4389 22.6103 10.7589 22.0203L9.17891 20.6703C8.87891 20.4203 8.30891 20.2103 7.91891 20.2103H6.16891C5.10891 20.2103 4.23891 19.3403 4.23891 18.2803V16.5703C4.23891 16.1803 4.03891 15.6103 3.78891 15.3203L2.43891 13.7303C1.85891 13.0403 1.85891 11.9203 2.43891 11.2303L3.78891 9.64031C4.03891 9.34031 4.23891 8.78031 4.23891 8.39031V6.70031C4.23891 5.64031 5.10891 4.77031 6.16891 4.77031H7.89891C8.29891 4.77031 8.85891 4.56031 9.15891 4.31031L10.7489 2.95031Z"
              fill="#A91418"
            />
            <path
              d="M12 17.37C11.45 17.37 11 16.92 11 16.37C11 15.82 11.44 15.37 12 15.37C12.55 15.37 13 15.82 13 16.37C13 16.92 12.56 17.37 12 17.37Z"
              fill="#A91418"
            />
            <path
              d="M12 14.22C11.59 14.22 11.25 13.88 11.25 13.47V8.63C11.25 8.22 11.59 7.88 12 7.88C12.41 7.88 12.75 8.22 12.75 8.63V13.46C12.75 13.88 12.42 14.22 12 14.22Z"
              fill="#A91418"
            />
          </svg>

          <p className="mobile-body-large md:body-large text-background-primary-light">
            Velit ut tortor pretium viverra suspendisse potenti nullam
          </p>
        </div>

        {/* description */}
        <div>
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

      {/* like & dislike */}
      <div className="flex items-center justify-end gap-6 md:gap-12">
        <span className="mobile-label-small md:label-small text-txt-low-important">
          Is this helpful?
        </span>

        <div className="flex items-center gap-4 mobile-label-large md:label-large">
          {/* dislike */}
          <div className="flex items-center gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "dislike",
                disabled: false,
                clickHandler: () => setDislike((prev) => prev + 1),
              }}
            />

            <span className="text-on_surface-light">{dislike}</span>
          </div>

          {/* like */}
          <div className="flex items-center gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "like",
                disabled: false,
                clickHandler: () => setLike((prev) => prev + 1),
              }}
            />

            <span className="text-on_surface-light">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
