import Image from "next/image";
import Button from "./Button";

function ContentSection() {
  return (
    <div id="Content" className="space-y-4 pt-8">
      <div className="space-y-2">
        {/* hours */}
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-primary-tints-90 flex items-center gap-4 p-3 rounded-xs"
            >
              <Image src="/book.svg" alt="book" width={24} height={24} />
              <h4 className="label-large-db text-on_surface-light">
                38+ hours
              </h4>
            </div>
          ))}
        </div>

        {/* subjects */}
        <div className="border border-outline-level1 rounded p-6 space-y-6">
          <h3 className="title-medium text-on_surface-light">Subjects</h3>

          <div className="space-y-10">
            {[1, 2].map((subject) => (
              <div key={subject} className="space-y-1">
                <div className="space-y-2">
                  <h4 className="title-small text-on_surface-light">
                    Subject {subject}
                  </h4>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center gap-1">
                        <Image
                          src="/book-grey.svg"
                          alt="book"
                          width={16}
                          height={16}
                        />
                        <span className="label-small text-txt-on-surface-terriary-light">
                          Lorem ipsum
                        </span>
                        {item !== 3 && (
                          <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="body-medium text-txt-on-surface-secondary-light text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas more...
                  </p>
                </div>

                <Button
                  props={{
                    value: "More Details",
                    disabled: false,
                    type: "text",
                    leftIcon: "",
                    rightIcon: "arrow-right-red",
                    color: "red",
                    width: 20,
                    height: 20,
                    size: "body-medium",
                    padding: "py-1 px-3",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="relative overflow-hidden grid grid-cols-2 gap-6 border border-outline-level1 rounded">
        <div className="p-6 space-y-3 col-span-1">
          <h3 className="title-medium text-on_surface-light">Credential</h3>

          <p className="body-medium text-txt-on-surface-secondary-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra.
          </p>
        </div>

        <div className="p-4 col-span-1 flex items-center justify-center z-[999]">
          <Image
            src="/credential.png"
            alt="credential"
            width={317.8671875}
            height={168.80615234375}
          />
        </div>

        <div className="absolute -top-[4.5rem] -left-[4.5rem] w-[110px] h-[395.3496956058634px] rounded-lg bg-[#A91418] opacity-10 rotate-[30deg]" />

        <div className="absolute -top-[16rem] -right-20 w-[195.94994806890335px] h-[704.2614634570201px] rounded-lg bg-[#A91418] opacity-10 -rotate-[94.99deg]" />

        <div className="absolute -top-[16rem] -right-20 w-[195.94994806890335px] h-[704.2614634570201px] rounded-lg bg-[#A91418] opacity-10 -rotate-[75deg]" />
      </div>

      {/* credential */}
      <div className="border border-outline-level1 rounded space-y-3 p-6">
        <h3 className="title-medium text-on_surface-light">Instructor</h3>

        <div className="space-y-2">
          <h3 className="body-large text-on_surface-light space-x-1.5">
            <span>Name</span>
            <span className="label-medium-db">Education</span>
          </h3>

          <p className="body-medium text-txt-on-surface-secondary-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
