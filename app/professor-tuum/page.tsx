// components
import FAQPreview from "@/components/FAQPreview";
import BluredImage from "@/components/BluredImage";
import HelpCard from "@/components/ai-compo/HelpCard";
import SummaryCard from "@/components/ai-compo/SummaryCard";
import ReminderCard from "@/components/ai-compo/ReminderCard";
import TranslateCard from "@/components/ai-compo/TranslateCard";
import GeneralBenefitsAIAssis from "@/components/ai-compo/GeneralBenefitsAIAssis";

function page() {
  return (
    <div className="">
      {/* cover */}
      <div className="max-w-[120rem] mx-auto">
        {/* cover image */}
        <div className="relative flex items-center justify-center">
          <BluredImage
            url="/tuum-bg.jpg"
            name="tuum bg"
            imgStyle="object-cover"
            blurhashStyle="object-cover"
            cWidth={1920}
            cHeight={1080}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#3B070966] to-[#720D1100]" />

          <div className="absolute top-22 left-36 flex flex-col justify-center items-center max-w-96 space-y-6">
            <div className="space-y-4">
              <h3 className="display-medium bg-gradient-to-r from-[#F9D1D2] to-[#FCE8E9] bg-clip-text text-transparent">
                Learn With AI
              </h3>

              <h4 className="header-small text-txt-on-primary-dark">
                Welcome to the next generation of learning
              </h4>
            </div>

            <p className="body-large text-txt-on-primary-dark text-justify">
              Professor TUUM is an AI assistant to accompany you on your
              learning journey. incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.{" "}
            </p>
          </div>
        </div>

        {/* benefits */}
        <section className="hero3 mobile-grid-system-level0 md:grid-system-level0">
          <div className="flex items-center justify-between py-6">
            {[
              "More motivation",
              "Independence in learning",
              "Learn faster",
              "More power in learning",
              "Easier learning",
            ].map((item, index) => (
              <div
                key={index}
                className="mobile-title-small md:title-medium text-txt-on-primary-dark"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Ai Assistant | shots | faq */}
      <div className="grid-system-level2 space-y-16 py-10">
        {/* Ai Assistant */}
        <div className="space-y-3">
          <h2 className="mobile-title-large md:title-large text-on_surface-light">
            Ai Assistant in Subjects
          </h2>

          <GeneralBenefitsAIAssis />
        </div>

        {/* some shots from benefits */}
        <div className="space-y-6 pointer-events-none select-none">
          <div className="flex items-center justify-between gap-6">
            <ReminderCard />

            <HelpCard />
          </div>

          <div className="flex items-center justify-between gap-6">
            <SummaryCard />

            <TranslateCard />
          </div>
        </div>

        {/* frequently asked questions */}
        <div className="space-y-6">
          <h4 className="title-large text-on_surface-light">FAQ</h4>

          <FAQPreview />
        </div>
      </div>
    </div>
  );
}

export default page;
