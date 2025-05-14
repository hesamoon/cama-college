import Image from "next/image";

function UserProfile() {
  return (
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
  );
}

export default UserProfile;
