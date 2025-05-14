// components
import Bio from "@/components/Bio";
import Button from "@/components/Button";
import ProfilePicture from "@/components/ProfilePicture";
import SocialNetworks from "@/components/SocialNetworks";
import GeneralInformation from "@/components/GeneralInformation";

function page() {
  return (
    <div className="grid-system-level0 w-full py-7 space-y-12">
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
  );
}

export default page;
