"use client";
import { useState } from "react";

// components
import Button from "./Button";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

function AboutUs({sx}:{sx:string}) {
  const [moreClicked, setMoreClicked] = useState(false);
  const isMobile = useIsMobile();

  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisque rhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisquerhoncus aenean vel elit scelerisque. In";

  return (
    <div className={`${sx} mobile-grid-system-level0 md:grid-system-level0 space-y-2 my-10`}>
      <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
        About Us
      </h4>

      <div
        className="mobile-body-large md:body-large cursor-pointer"
        onClick={() => setMoreClicked((prev) => !prev)}
      >
        {desc.length <= (isMobile ? 150 : 350) ? (
          <p className="text-justify text-txt-secondary">{desc}</p>
        ) : (
          <div className="">
            <p className={`inline text-justify text-txt-secondary`}>
              {moreClicked ? desc : `${desc.slice(0, isMobile ? 150 : 350)}...`}
            </p>

            <Button
              props={{
                value: moreClicked ? "less" : "more",
                disabled: false,
                leftIcon: "",
                rightIcon: "",
                type: "text",
                color: "red",
                size: "mobile-body-large md:body-large !inline",
                padding: "px-3 py-0",
                clickHandler: () => setMoreClicked((prev) => !prev),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
