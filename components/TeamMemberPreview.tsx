// types
import { Member } from "@/app/types/types";
import Image from "next/image";

function TeamMemberPreview({ memberDetails }: { memberDetails: Member }) {
  const { name, role, desc } = memberDetails;

  return (
    <div className="relative border border-outline-level0 rounded py-6 px-7 overflow-hidden">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <div className="border border-outline-level0 rounded-full w-28 h-28 pt-[5.88px] pl-[5.88px]">
            <Image
              className="rounded-full"
              src="/profile-pic.jpg"
              alt="profile"
              width={96}
              height={96}
            />
          </div>

          <div className="space-y-1.5">
            <h3 className="body-large text-black">{name}</h3>
            <h6 className="body-medium text-txt-on-surface-secondary-light">
              {role}
            </h6>
          </div>
        </div>

        <p className="body-large text-txt-secondary">{desc}</p>
      </div>

      <>
        <div className="absolute -top-14 -left-14 w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />
        <div className="absolute -top-14 left-[50%] -translate-x-[50%] w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />
        <div className="absolute -top-14 -right-14 w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />

        <div className="absolute -bottom-14 -left-14 w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />
        <div className="absolute -bottom-14 left-[50%] -translate-x-[50%] w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />
        <div className="absolute -bottom-14 -right-14 w-24 h-24 border border-outline-level0 rounded-full bg-transparent" />
      </>
    </div>
  );
}

export default TeamMemberPreview;
