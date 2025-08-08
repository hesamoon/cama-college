import Image from "next/image";

// types
import { Company } from "@/app/types/types";

// components
import Button from "./Button";

// types
function CompanyPreview({ companyDetails }: { companyDetails: Company }) {
  return (
    <div className="border border-outline-level1 rounded p-4 space-y-3">
      <div className="flex justify-between">
        {/* cover / title */}
        <div className="flex gap-2">
          <Image
            className="rounded-xs object-cover w-10 h-10 md:w-12 md:h-12"
            src="/c4.png"
            alt="cover"
            width={48}
            height={48}
          />

          <div className="space-y-1.5">
            <h2 className="mobile-title-medium md:title-medium text-on_surface-light">
              {companyDetails.name}
            </h2>

            <p className="mobile-label-small md:label-small text-txt-on-surface-terriary-light">
              {companyDetails.employee_count} employees
            </p>
          </div>
        </div>

        <Button
          props={{
            value: "website",
            type: "text",
            color: "red",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right",
            size: "mobile-body-medium md:body-medium",
            padding: "px-3 py-0",
            clickHandler: () => {
              if (companyDetails.website_link) {
                const url = companyDetails.website_link.startsWith("http")
                  ? companyDetails.website_link
                  : `https://${companyDetails.website_link}`;
                window.open(url, "_blank");
              }
            },
          }}
        />
      </div>

      <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
        {companyDetails.description}
      </p>
    </div>
  );
}

export default CompanyPreview;
