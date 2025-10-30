"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "./Button";
import BluredImage from "./BluredImage";
import UserProfileSkeleton from "./skeletons/UserProfileSkeleton";

// api
import { getMe } from "@/lib/api/auth";

function UserProfile() {
  const { data: myData, isLoading: isLoadingMe } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  console.log(myData?.data.data);
  return (
    <div className="space-y-5">
      {/* picture, name, number */}
      {isLoadingMe ? (
        <UserProfileSkeleton />
      ) : (
        <>
          <div className="flex items-center gap-2">
            <BluredImage
              url="/profile.jpg"
              name="profile"
              imgStyle="!rounded-full w-12 h-12"
              blurhashStyle="!rounded-full w-12 h-12"
              cWidth={48}
              cHeight={48}
            />
            <div className="space-y-0.5">
              <h4 className="body-large text-on_surface-light">{`${myData?.data.data.name} ${myData?.data.data.family}`}</h4>
              <h5 className="label-large text-txt-on-surface-secondary-light">
                {myData?.data.data.mobile ? myData?.data.data.mobile : null}
              </h5>
            </div>
          </div>

          {/* tuum balance */}
          <div className="relative overflow-hidden rounded bg-[#FF8D2814] py-2 px-3 flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Image
                src="/tuum/tuum-coin.svg"
                alt="coin"
                width={32}
                height={32}
              />

              <h3 className="text-black text-sm">
                {myData?.data.data.tuum_balance} Coins
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  disabled: false,
                  leftIcon: "money-send",
                  rightIcon: "",
                  padding: "p-2",
                  size: "body-large",
                  height: 24,
                  width: 24,
                  title: "send coins",
                  // clickHandler: searchClickHandler,
                }}
              />

              <Button
                props={{
                  value: "",
                  type: "text",
                  color: "red",
                  disabled: false,
                  leftIcon: "add-black",
                  rightIcon: "",
                  padding: "p-2",
                  size: "body-large",
                  height: 24,
                  width: 24,
                  title: "receive coins",
                  // clickHandler: searchClickHandler,
                }}
              />
            </div>

            <div className="absolute -top-[4.4rem] -left-20 opacity-10 rotate-[60deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#FFCC00]" />
            <div className="absolute -bottom-[5.5rem] -right-[0.8rem] opacity-10 rotate-[50deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#FFCC00]" />
            <div className="absolute -bottom-[5.5rem] -right-[2.5rem] opacity-10 rotate-[50deg] rounded-xs w-[97.2px] h-[97.2px] bg-[#FFCC00]" />
          </div>

          {/* apply banner */}
          {/* <div className="relative overflow-hidden cursor-pointer rounded bg-shades-light-90 py-2 px-[13px] flex items-center justify-between gap-2.5">
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
          </div> */}
        </>
      )}
    </div>
  );
}

export default UserProfile;
