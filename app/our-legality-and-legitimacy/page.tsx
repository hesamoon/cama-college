import { parseStyledText } from "@/utilities/utils";

function page() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level3 space-y-10 py-5 md:py-10">
      {/* title */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Our Legality and Legitimacy
        </h2>

        <div className="flex items-center gap-1 mobile-label-medium md:label-medium text-txt-on-surface-terriary-light">
          <span>Last update:</span>
          <span>12 hours ago</span>
        </div>
      </div>

      {/* title & description 1 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <p className="mobile-body-large md:body-large text-justify">
          Canada Management College has been founded in 2024 in Ontario, Canada.
          It must be noted that, in Canada, general, non-career, and career
          colleges initiate their official activity based on the name approval
          they receive from Canada’s Ministry of Colleges and Universities.
          Next, following the pre-screening evaluations and related assessments,
          the branch of activity of every college can be defined.
        </p>
      </div>

      {/* title & description 2 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            Correspondingly abbreviated to, and branded as, CAMA College, Canada
            Management College has been approved at a federal level in the
            country of Canada; moreover, it has been legally founded and
            legitimately established through the abovementioned processes.
          </p>
        </div>
      </div>

      {/* title & description 3 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            As a federal corporation, Canada Management College (CAMA College),
            hereinafter referred to as the college, has been registered as an
            active member of with the Corporation Number of 1610541-6 under the
            title of Canada Management College Inc.
          </p>
        </div>
      </div>

      {/* title & description 4 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            In accordance with the regulatory necessities of Canadian legal
            system and due to the inherent centrality of Ontario, the college is
            also registered in this province by being listed in Ontario Business
            Registry (OBR) with the Ontario Corporation Number (OCN) of
            1000921178.
          </p>
        </div>
      </div>

      {/* title & description 5 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            Pursuant to the prescreening by Canada’s Ministry of Colleges and
            Universities, every single program/course offered by the college has
            its own unique Application ID which corresponds to the Approval
            Number for that specific program/course in the ministry’s
            educational system, thus ensuring an independently consistent and
            cohesive identity for every program/course.
          </p>
        </div>
      </div>

      {/* title & description 6 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            The college is planning on becoming one of the main career colleges
            of Ontario in 2025-2026, notwithstanding the fact that it has
            already succeeded in meeting the majority of the necessary
            requirements. Moreover, the fiscal structure of the college and
            mechanisms of its legal adherence to tax laws with regard to Canada
            Revenue Agency (CRA) was officially established in 2024, turning the
            college into a CRA-registered legal and corporate entity.
          </p>
        </div>
      </div>

      {/* title & description 7 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            When every program/course comes to its end, each participant is
            given either a diploma or a certificate whose details are in
            accordance with the requirements, specifications, and
            characterizations of the pre-screening forms and related documents.
          </p>
        </div>
      </div>

      {/* title & description 8 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            If you look for more information, want to learn how to receive the
            college’s publicly accessible legal documents, or wish to contact
            our legal team, you can proceed via the following email address.
          </p>
        </div>
      </div>

      {/* title & description 8 */}
      <div className="space-y-3">
        {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">Title</h4> */}
        <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p className="flex items-center justify-center">
            <a href="mailto:contact@camacollege.ca" className="underline">
              contact@camacollege.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
