import Image from "next/image";
import Button from "../Button";

export default function HelpCard() {
  return (
    <div className="max-w-2xl mx-auto flex overflow-hidden rounded-lg bg-primary-shades-70 border border-primary-shades-7 h-[210px]">
      {/* Left Section */}
      <div className="w-2/4 p-6 flex flex-col gap-3">
        <h2 className="title-large text-txt-on-primary-dark text-nowrap">
          You Need Help?
        </h2>
        <p className="body-large text-txt-on-primary-dark max-w-[215px]">
          TUUM introduces the best course just for you.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-white p-6">
        {/* Chat bubble */}
        <div className="space-y-0.5">
          <div className={`rounded-lg p-2 bg-surface0-light`}>
            <p
              className={`inline body-small text-txt-on-surface-secondary-light text-justify`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua?
            </p>
          </div>

          <div className={`flex items-center gap-2 justify-end`}>
            <Button
              props={{
                value: "",
                leftIcon: "clipboard",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 16,
                height: 16,
                size: "mobile-body-large md:body-large",
                // clickHandler: handleCopy,
              }}
            />
          </div>
        </div>

        {/* Response */}
        <div className="space-y-0.5">
          <div className={`rounded-lg p-2 space-x-2`}>
            <Image
              className="w-5.5 h-5.5 inline"
              src="/cama-college-logo.png"
              alt="tuum logo"
              width={22}
              height={22}
            />

            <p
              className={`inline body-small text-txt-on-surface-secondary-light text-justify`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
