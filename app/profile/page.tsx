import Image from "next/image";

// components
import Bio from "@/components/Bio";
import ProfileNavs from "@/components/ProfileNavs";
import ProfilePicture from "@/components/ProfilePicture";
import SocialNetworks from "@/components/SocialNetworks";
import GeneralInformation from "@/components/GeneralInformation";
import Button from "@/components/Button";

function page() {
  return (
    <div className="grid-system-level grid grid-cols-5 border rounded-t-sm border-outline-level0 divide-x divide-outline-level0">
      {/* left side */}
      <div className="col-span-1 py-7 px-4 space-y-6">
        {/* section 1 */}
        <div className="space-y-5">
          {/* picture, name, number */}
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={48}
              height={48}
            />
            <div className="space-y-0.5">
              <h4 className="body-large text-on_surface-light">Ali Rahimi</h4>
              <h5 className="label-large text-txt-on-surface-secondary-light">
                +1 938 8838 383
              </h5>
            </div>
          </div>

          {/* apply banner */}
          <div className="relative overflow-hidden cursor-pointer rounded bg-shades-light-90 py-2 px-[13px] flex items-center justify-between gap-2.5">
            <div className="space-y-1">
              <h5 className="label-medium text-on_surface-light">
                Apply for growing faster
              </h5>
              <h6 className="body-small text-txt-on-surface-secondary-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </h6>
            </div>

            <Image
              src="/arrow-right-red.svg"
              alt="arrow-right"
              width={20}
              height={20}
            />

            <div>
              <div className="absolute -top-[4.4rem] -left-20 opacity-10 rotate-[60deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#E41B21]" />
              <div className="absolute -bottom-[4.6rem] -right-[0.8rem] opacity-10 rotate-[50deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#E41B21]" />
              <div className="absolute -bottom-[4.5rem] -right-[2.5rem] opacity-10 rotate-[50deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#E41B21]" />
              <div
                className="absolute top-0 left-0 w-[89px] h-[50px]"
                style={{
                  backgroundImage: "url('/stars.svg')",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* navs */}
        <ProfileNavs />
      </div>

      {/* right side / details */}
      <div className="col-span-4 grid-system-level0 w-full py-7 space-y-12">
        {/* profile picture */}
        <div className="grid grid-cols-3">
          {/* title */}
          <div className="col-span-1">
            <h2 className="title-medium text-on_surface-light">
              Profile Picture
            </h2>
          </div>

          {/* content */}
          <div className="col-span-2">
            <ProfilePicture />
          </div>
        </div>

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* general information */}
        <div className="grid grid-cols-3">
          {/* title */}
          <div className="col-span-1">
            <h2 className="title-medium text-on_surface-light">
              General Information
            </h2>
          </div>

          {/* content */}
          <div className="col-span-2">
            <GeneralInformation />
          </div>
        </div>

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* bio */}
        <div className="grid grid-cols-3">
          {/* title */}
          <div className="col-span-1">
            <h2 className="title-medium text-on_surface-light">Bio</h2>
          </div>

          {/* content */}
          <div className="col-span-2">
            <Bio />
          </div>
        </div>

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* social networks */}
        <div className="grid grid-cols-3">
          {/* title */}
          <div className="col-span-1 space-y-2">
            <h2 className="title-medium text-on_surface-light">
              Social Networks
            </h2>
            <p className="body-medium text-txt-on-surface-secondary-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>

          {/* content */}
          <div className="col-span-2">
            <SocialNetworks />
          </div>
        </div>

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* buttons */}
        <div className="flex items-center justify-between">
          <Button
            props={{
              value: "Change Password",
              disabled: false,
              leftIcon: "login-red",
              rightIcon: "",
              type: "outlined",
              color: "red",
              padding: "px-6 py-3 gap-2",
              width: 24,
              height: 24,
            }}
          />

          <Button
            props={{
              value: "Change Password",
              disabled: false,
              leftIcon: "login-white",
              rightIcon: "",
              type: "filled",
              color: "red",
              padding: "px-6 py-3 gap-2",
              width: 24,
              height: 24,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
