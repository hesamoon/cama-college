import BluredImage from "@/components/BluredImage";

// utils
import { parseStyledText } from "@/utilities/utils";

function page() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level3 space-y-6 md:space-y-10 py-5 md:py-10">
      {/* title */}
      {/* <h2 className="mobile-title-large md:title-large text-on_surface-light">
        Total Title
      </h2> */}

      <div className="space-y-9">
        {/* title / description 1 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            The Vision of CAMA College:
          </h4>

          <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
            {/* {/* {parseStyledText( */}
            At Canada Management College, we are committed to expanding our
            services globally, creating practical expertise alongside productive
            knowledge for all job enthusiasts as well as those interested in
            other aspects of our services and our curricula. We do believe that
            Canada Management College will become a leading educational center
            in the near future, leveraging state-of-the-art means, modes and
            mediums – such as those supported by Artificial Intelligence,
            Cognitive Sciences, Cyber Education and the like – instead of, and
            alongside with, traditional teaching methods.
            {/* )} */}
          </p>
        </div>

        {/* cover picture */}
        {/* <BluredImage
          url="/c1.png"
          name="c1"
          imgStyle="w-full h-[272px]"
          blurhashStyle="w-full h-[272px]"
          cWidth={672}
          cHeight={272}
        /> */}

        {/* title / description 2 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            The Mission of CAMA College:
          </h4>

          <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
            Here at CAMA College, our mission is to provide suitable, flexible,
            tailor-made and exceptional services for the furtherance and
            progress of all managers, employees, jobseekers, and other
            enthusiasts so as to easily, quickly and efficiently acquire their
            necessary skills and experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
