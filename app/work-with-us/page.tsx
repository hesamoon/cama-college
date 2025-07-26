"use client";

import { useState } from "react";

// components
import Button from "@/components/Button";
import CredentialInquiry from "@/components/CredentialInquiry";

// utils
import { parseStyledText } from "@/utilities/utils";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

function Page() {
  const [clicked, setClicked] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6 pt-5 md:pt-10">
      <div className="md:grid md:grid-cols-3 md:gap-6 mobile-grid-system-level0 md:grid-system-level1">
        {/* left side */}
        <div className="col-span-2 space-y-5 md:space-y-10">
          {/* title */}
          <h2 className="mobile-title-large md:title-large text-on_surface-light">
            Partners
          </h2>

          <div className="md:hidden bg-shades-light-90 space-y-4 p-3 rounded">
            <h3 className="mobile-mobile-title-medium md:title-medium text-on_surface-light">
              Your Benefits
            </h3>

            <div className="space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M7.49219 2.51367C7.76368 2.28182 8.24261 2.27851 8.52441 2.51562L9.57422 3.41992V3.41895C9.73199 3.55536 9.93184 3.6601 10.1201 3.73047C10.3089 3.80101 10.5299 3.85352 10.7402 3.85352H11.874C12.3043 3.85376 12.6602 4.21025 12.6602 4.64062V5.77344C12.6602 5.98113 12.7133 6.20253 12.7832 6.39062C12.8529 6.57814 12.9574 6.78047 13.0947 6.93945V6.94043L14 7.99121V7.99219C14.2312 8.26263 14.2355 8.73918 14.001 9.02148L13.0957 10.0732C12.9589 10.2311 12.8537 10.4315 12.7832 10.6201C12.7127 10.8088 12.6602 11.03 12.6602 11.2402V12.374C12.6601 12.8043 12.3043 13.1599 11.874 13.1602H10.7402C10.5327 13.1602 10.312 13.2134 10.124 13.2832C9.93644 13.3529 9.73324 13.4573 9.57422 13.5947L8.52148 14.501C8.24982 14.7328 7.76996 14.7355 7.48828 14.498L6.44043 13.5957H6.44141C6.28345 13.4588 6.08229 13.3547 5.89355 13.2842C5.70477 13.2136 5.4838 13.1602 5.27344 13.1602H4.12012C3.6897 13.1601 3.33408 12.8044 3.33398 12.374V11.2334C3.33391 11.0255 3.28052 10.8065 3.21191 10.6211C3.14299 10.4349 3.04136 10.2363 2.91113 10.0801L2.9082 10.0771L2.00977 9.01855C1.77952 8.74453 1.77947 8.26909 2.00977 7.99512L2.00879 7.99414L2.9082 6.9375L2.91113 6.93359C3.04121 6.77741 3.14303 6.57961 3.21191 6.39355C3.28059 6.20803 3.33398 5.9883 3.33398 5.78027V4.64062C3.33398 4.21014 3.68965 3.85358 4.12012 3.85352H5.27344C5.48114 3.85352 5.70254 3.80037 5.89062 3.73047C6.07796 3.6608 6.27963 3.55609 6.43848 3.41895L6.43945 3.41992L7.49219 2.51367Z"
                      fill="#34C759"
                      stroke="#34C759"
                    />
                    <path
                      d="M8.41309 5.92188L8.42188 5.9248L8.43164 5.92773C8.45285 5.93465 8.49062 5.95952 8.51953 6.00879C8.54831 6.05811 8.54723 6.09554 8.54492 6.10645L8.54199 6.12207L8.53906 6.13672L8.37988 7.17676L8.37891 7.18164C8.34539 7.41623 8.41339 7.64088 8.5498 7.81152C8.71128 8.01337 8.94428 8.09957 9.16016 8.09961H10.46C10.5802 8.09961 10.6274 8.14282 10.6445 8.16699L10.6504 8.1748C10.6633 8.19268 10.6792 8.22676 10.6504 8.29785L10.6436 8.31348L10.6387 8.33008L9.8584 10.7031L9.85156 10.7236L9.84668 10.7441C9.81131 10.8926 9.6022 11.0732 9.38672 11.0732H8.15332C8.09734 11.0732 8.01703 11.0621 7.94238 11.04C7.90633 11.0294 7.87881 11.0187 7.86133 11.0098C7.85584 11.007 7.85261 11.0042 7.85059 11.0029L7.83789 10.9893L7.81152 10.9697L6.83203 10.2168L6.07227 9.63281L6.02734 10.5898C6.02453 10.6492 6.01611 10.6831 6.01074 10.7012C5.98741 10.7082 5.93622 10.7197 5.83984 10.7197H5.51367C5.4114 10.7197 5.35815 10.7076 5.33398 10.7002C5.32821 10.6785 5.32032 10.6357 5.32031 10.5596V7.37305C5.32031 7.29497 5.32815 7.25161 5.33398 7.23047C5.35836 7.22311 5.41206 7.21289 5.51367 7.21289H5.83984C5.93971 7.21289 5.99361 7.22311 6.01855 7.23047C6.02439 7.25147 6.0332 7.29452 6.0332 7.37305V9.25L6.94824 7.89258L8.24121 5.97168L8.24316 5.96973C8.23876 5.97633 8.24132 5.97128 8.25684 5.95996C8.27157 5.94925 8.29178 5.938 8.31543 5.92969C8.36667 5.9117 8.40103 5.91739 8.41309 5.92188Z"
                      fill="#34C759"
                      stroke="#34C759"
                    />
                  </svg>

                  <h5 className="mobile-body-large text-txt-on-surface-secondary-light">
                    Lorem ipsum dolor
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-9">
            {/* title & description 1 */}
            <div className="space-y-3">
              <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
                Title
              </h4>
              <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
                {parseStyledText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. @(*Ullamcorper*)@ velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
                )}
              </p>
            </div>

            {/* title & description 2 */}
            <div className="space-y-3">
              <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
                Title
              </h4>
              <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
                {parseStyledText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
                )}
              </p>
            </div>

            {/* title & description 3 */}
            <div className="space-y-3">
              <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
                Title
              </h4>
              <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
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

        {/* card */}
        <div className="hidden md:block sticky top-[4.5rem] col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 px-6 space-y-6 h-fit">
          {/* title */}
          <div className="space-y-8">
            <h3 className="header-medium text-txt-on-surface-secondary-light">
              Apply to Be an Instructor
            </h3>

            <div className="space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M7.49219 2.51367C7.76368 2.28182 8.24261 2.27851 8.52441 2.51562L9.57422 3.41992V3.41895C9.73199 3.55536 9.93184 3.6601 10.1201 3.73047C10.3089 3.80101 10.5299 3.85352 10.7402 3.85352H11.874C12.3043 3.85376 12.6602 4.21025 12.6602 4.64062V5.77344C12.6602 5.98113 12.7133 6.20253 12.7832 6.39062C12.8529 6.57814 12.9574 6.78047 13.0947 6.93945V6.94043L14 7.99121V7.99219C14.2312 8.26263 14.2355 8.73918 14.001 9.02148L13.0957 10.0732C12.9589 10.2311 12.8537 10.4315 12.7832 10.6201C12.7127 10.8088 12.6602 11.03 12.6602 11.2402V12.374C12.6601 12.8043 12.3043 13.1599 11.874 13.1602H10.7402C10.5327 13.1602 10.312 13.2134 10.124 13.2832C9.93644 13.3529 9.73324 13.4573 9.57422 13.5947L8.52148 14.501C8.24982 14.7328 7.76996 14.7355 7.48828 14.498L6.44043 13.5957H6.44141C6.28345 13.4588 6.08229 13.3547 5.89355 13.2842C5.70477 13.2136 5.4838 13.1602 5.27344 13.1602H4.12012C3.6897 13.1601 3.33408 12.8044 3.33398 12.374V11.2334C3.33391 11.0255 3.28052 10.8065 3.21191 10.6211C3.14299 10.4349 3.04136 10.2363 2.91113 10.0801L2.9082 10.0771L2.00977 9.01855C1.77952 8.74453 1.77947 8.26909 2.00977 7.99512L2.00879 7.99414L2.9082 6.9375L2.91113 6.93359C3.04121 6.77741 3.14303 6.57961 3.21191 6.39355C3.28059 6.20803 3.33398 5.9883 3.33398 5.78027V4.64062C3.33398 4.21014 3.68965 3.85358 4.12012 3.85352H5.27344C5.48114 3.85352 5.70254 3.80037 5.89062 3.73047C6.07796 3.6608 6.27963 3.55609 6.43848 3.41895L6.43945 3.41992L7.49219 2.51367Z"
                      fill="#34C759"
                      stroke="#34C759"
                    />
                    <path
                      d="M8.41309 5.92188L8.42188 5.9248L8.43164 5.92773C8.45285 5.93465 8.49062 5.95952 8.51953 6.00879C8.54831 6.05811 8.54723 6.09554 8.54492 6.10645L8.54199 6.12207L8.53906 6.13672L8.37988 7.17676L8.37891 7.18164C8.34539 7.41623 8.41339 7.64088 8.5498 7.81152C8.71128 8.01337 8.94428 8.09957 9.16016 8.09961H10.46C10.5802 8.09961 10.6274 8.14282 10.6445 8.16699L10.6504 8.1748C10.6633 8.19268 10.6792 8.22676 10.6504 8.29785L10.6436 8.31348L10.6387 8.33008L9.8584 10.7031L9.85156 10.7236L9.84668 10.7441C9.81131 10.8926 9.6022 11.0732 9.38672 11.0732H8.15332C8.09734 11.0732 8.01703 11.0621 7.94238 11.04C7.90633 11.0294 7.87881 11.0187 7.86133 11.0098C7.85584 11.007 7.85261 11.0042 7.85059 11.0029L7.83789 10.9893L7.81152 10.9697L6.83203 10.2168L6.07227 9.63281L6.02734 10.5898C6.02453 10.6492 6.01611 10.6831 6.01074 10.7012C5.98741 10.7082 5.93622 10.7197 5.83984 10.7197H5.51367C5.4114 10.7197 5.35815 10.7076 5.33398 10.7002C5.32821 10.6785 5.32032 10.6357 5.32031 10.5596V7.37305C5.32031 7.29497 5.32815 7.25161 5.33398 7.23047C5.35836 7.22311 5.41206 7.21289 5.51367 7.21289H5.83984C5.93971 7.21289 5.99361 7.22311 6.01855 7.23047C6.02439 7.25147 6.0332 7.29452 6.0332 7.37305V9.25L6.94824 7.89258L8.24121 5.97168L8.24316 5.96973C8.23876 5.97633 8.24132 5.97128 8.25684 5.95996C8.27157 5.94925 8.29178 5.938 8.31543 5.92969C8.36667 5.9117 8.40103 5.91739 8.41309 5.92188Z"
                      fill="#34C759"
                      stroke="#34C759"
                    />
                  </svg>

                  <h5 className="body-large text-txt-on-surface-secondary-light">
                    Lorem ipsum dolor
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* divider */}
          <div className="border border-outline-level1" />

          {/* apply button */}
          <div className="space-y-2">
            {/* agree */}
            <div className="flex items-center justify-center gap-2">
              <Button
                props={{
                  value: "",
                  type: "filled",
                  color: "red",
                  disabled: false,
                  leftIcon: "",
                  rightIcon: clicked ? "tick" : "",
                  padding: `p-1 w-5 h-5 !rounded-sm ${
                    !clicked
                      ? "!bg-transparent !border-2 !border-primary-shades-10"
                      : null
                  }`,
                  hover: "",
                  clickHandler: () => setClicked((prev) => !prev),
                }}
              />

              <span className="body-large text-on-surface">
                I agree to the Terms and Conditions
              </span>
            </div>

            <Button
              props={{
                value: "Apply",
                type: "filled",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: "",
                padding: "p-2 w-full",
                size: "body-large",
              }}
            />
          </div>
        </div>
      </div>

      <section className="hero2 mobile-grid-system-level0 md:grid-system-level0">
        <div className="flex flex-col md:space-y-0 md:grid md:grid-cols-2 gap-9 md:gap-4 pb-5 md:pb-0">
          <div className="md:col-span-1 flex flex-col md:items-start gap-3 pt-5 md:py-10 z-30">
            <h3 className="text-start mobile-title-medium md:title-medium text-txt-on-primary-dark">
              Representative Inquiry
            </h3>

            <div className="space-y-2 w-fit">
              <h4 className="text-start mobile-title-small md:title-small text-txt-on-primary-dark">
                Verify the Status of Our Representatives
              </h4>

              <div className="text-start space-y-10 mobile-body-large md:body-large text-txt-on-primary-dark">
                <p className="text-justify">
                  Worldwide To check the status of our global representatives,
                  please enter the representative code in the search bar above.
                  The report provided will display the representative’s status,
                  start and end dates of their partnership, region of
                  representation, name, and direct contact number. Please note
                  that the information obtained through this verification
                  process takes precedence over any physical certificate.
                </p>

                <p className="flex flex-wrap gap-2">
                  For further information, please contact us at
                  <a href="mailto:Contact@camacollege.ca" className="underline">
                    Contact@camacollege.ca.
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* representative inquiry */}
          <div className="md:col-span-1 flex items-center md:justify-center z-30">
            <CredentialInquiry placeholder="Enter Representative Inquiry..." />
          </div>
        </div>
      </section>

      {isMobile && (
        <div className="space-y-4 mobile-grid-system-level0 pb-4">
          {/* agree */}
          <div className="flex items-center gap-2">
            <Button
              props={{
                value: "",
                type: "filled",
                color: "red",
                disabled: false,
                leftIcon: "",
                rightIcon: clicked ? "tick" : "",
                padding: `p-1 w-5 h-5 !rounded-sm ${
                  !clicked
                    ? "!bg-transparent !border-2 !border-primary-shades-10"
                    : null
                }`,
                hover: "",
                clickHandler: () => setClicked((prev) => !prev),
              }}
            />

            <span className="body-medium text-on-surface">
              I agree to the Terms and Conditions
            </span>
          </div>

          <Button
            props={{
              value: "Apply",
              type: "filled",
              color: "red",
              disabled: false,
              leftIcon: "",
              rightIcon: "",
              padding: "p-3 w-full",
              size: "body-medium",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Page;
