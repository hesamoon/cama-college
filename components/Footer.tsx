import Image from "next/image";
import Link from "next/link";


import StaticMap from "./StaticMap";

function Footer() {
  return (
    <footer className="bg-shades-light-90">
      <div className="grid grid-cols-7 gap-4 grid-system-level0 pt-8 sm:pt-12 lg:pt-16">
        {/* left section */}
        <div className="col-span-5">
          {/* top - left section */}
          <div className="grid grid-cols-4">
            {/* logo */}
            <Link href="/">
              <Image
                src="/cama-college-logo.png"
                alt="logo"
                width={156}
                height={173}
              />
            </Link>

            {/* about section */}
            <div className="space-y-6">
              <h4 className="title-medium text-on_surface-light">About</h4>

              <ul className="body-large text-txt-on-surface-secondary-light space-y-4">
                <li>About Us</li>
                <li>Contact</li>
                <li>Tagline</li>
                <li>Professor TUUM</li>
                <li>Identity Chart</li>
                <li>Our Legality and Legitimacy</li>
              </ul>
            </div>

            {/* stay informed section */}
            <div className="space-y-6">
              <h4 className="title-medium text-on_surface-light">
                Stay Informed
              </h4>

              <ul className="body-large text-txt-on-surface-secondary-light space-y-4">
                <li>News & Blog</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Consultant</li>
              </ul>
            </div>

            {/* hot links section */}
            <div className="space-y-6">
              <h4 className="title-medium text-on_surface-light">Hot Links</h4>

              <ul className="body-large text-txt-on-surface-secondary-light space-y-4">
                <li>FAQ</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Instructor Registration</li>
                <li>Representative Inquiry</li>
                <li>Charity & Philanthropy</li>
              </ul>
            </div>
          </div>

          {/* about us description*/}
          <div className="space-y-2 mt-16">
            <h4 className="title-medium text-on_surface-light">About Us</h4>
            <p className="body-large text-txt-on-surface-secondary-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris. In{" "}
              <span className="text-background-primary-light">more...</span>
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="col-span-2 flex flex-col justify-between">
          {/* contact us */}
          <div className="space-y-5">
            <h4 className="title-medium text-on_surface-light">Contact Us</h4>

            {/* location */}
            <StaticMap paddingPer="75%" />

            <ul className="body-large text-black space-y-3">
              <li>Phone</li>
              <li>Email</li>
            </ul>

            {/* social media */}
            <div className="flex items-center gap-4">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* our partners */}
          <div className="space-y-2">
            <h4 className="title-medium text-on_surface-light">Our Partners</h4>

            {/* social media */}
            <div className="flex items-center gap-4">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div
        className="mt-2 py-4 flex items-center justify-center gap-1"
        style={{
          backgroundImage: "url('/bg-ptrn3.svg')",
          backgroundSize: "cover",
        }}
      >
        <Image src="/copyright.svg" alt="copyright" width={20} height={20} />
        <p className="text-center body-large text-txt-on-surface-terriary-light">
          CAMA College. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
