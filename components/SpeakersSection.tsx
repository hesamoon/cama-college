import Image from "next/image";

function SpeakersSection() {
  return (
    <div id="Speakers" className="pt-8">
      <div className="border border-outline-level1 p-3 md:py-5 md:px-6 rounded-sm space-y-4">
        <h3 className="mobile-title-medium md:title-medium text-on_surface-light">Speakers</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={48}
              height={48}
            />

            <div className="space-y-0">
              <h5 className="mobile-body-large md:body-large text-on_surface-light">Name</h5>
              <h6 className="mobile-label-medium-db md:label-medium-db text-txt-on-surface-secondary-light">
                Education
              </h6>
            </div>
          </div>

          <p className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpeakersSection;
