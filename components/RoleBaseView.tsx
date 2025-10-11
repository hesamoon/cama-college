"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "./Button";
import BluredImage from "./BluredImage";
import LoginButtons from "./LoginButtons";

// api
import { getMe } from "@/lib/api/auth";
import { getCarts } from "@/lib/api/cart";

// utils
import { userAttr } from "@/utilities/userAttr";
import toast from "react-hot-toast";
import { useState } from "react";
import GeneralInfoModal from "./modal/GeneralInfoModal";

function RoleBaseView({
  role,
  landingHeader,
}: {
  role: string;
  landingHeader?: boolean;
}) {
  //GET
  const { data: cartsData, isLoading: isLoadingCarts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });
  const { data: meData, isLoading: meIsLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const router = useRouter();
  const pathname = usePathname();

  const [openGenInfo, setOpenGenInfo] = useState(false);

  const shoppingClickHandler = () => {
    console.log(meData);
    const user = userAttr();
    if (user.role !== "UNSIGNED") {
      // if (meData?.data.data.mobile === null) {
      //   setOpenGenInfo(true);
      // } else {
      //   router.push("/checkout");
      // }
      router.push('/checkout');
    } else {
      toast.error("Please login to continue", { position: "top-center" });
    }
  };

  if (pathname === "/apply") return;

  return role !== "UNSIGNED" ? (
    <div className="flex items-center gap-2">
      <div className="relative cursor-pointer">
        <Button
          props={{
            value: "",
            leftIcon: landingHeader ? "shopping-cart" : "shopping-cart-black",
            rightIcon: "",
            type: "outlined",
            disabled: meIsLoading,
            color: "red",
            width: 24,
            height: 24,
            size: "mobile-body-large md:body-large",
            clickHandler: shoppingClickHandler,
          }}
        />

        {cartsData?.data.data.length > 0 && (
          <div
            className={`absolute -top-1 -right-1 p-1 flex items-center justify-center rounded-full bg-orange-400 w-5 h-5 pointer-events-none ${
              isLoadingCarts ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white text-xs">
              {cartsData?.data.data.length}
            </span>
          </div>
        )}
      </div>

      <Link
        href="/profile"
        className="rounded-full flex items-center gap-2 p-1 pr-2 cursor-pointer border border-outline1"
      >
        <BluredImage
          url="/profile.jpg"
          name="profile"
          imgStyle="!rounded-full w-10 h-10"
          blurhashStyle="!rounded-full w-10 h-10"
          cWidth={40}
          cHeight={40}
        />

        <Image
          className="rounded-full"
          src="/arrow-down.svg"
          alt="arrow-down"
          width={20}
          height={20}
        />
      </Link>

      <GeneralInfoModal
        open={openGenInfo}
        onClose={() => setOpenGenInfo(false)}
        infoFor="product"
      />
    </div>
  ) : (
    <LoginButtons
      color={landingHeader ? "white" : "black"}
      icon={landingHeader ? "login-white" : "login"}
    />
  );
}

export default RoleBaseView;
