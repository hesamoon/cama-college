"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  styled,
} from "@mui/material";

// components
import Button from "@/components/Button";
import GiftCodeCard from "@/components/card/GiftCodeCard";
import CreditCardForm from "@/components/form/CreditCardForm";
import CartItemsSkeleton from "@/components/skeletons/CartItemsSkeleton";

// api
import { deleteCart, getCarts } from "@/lib/api/cart";

// types
import { CartType, CreditCardValue } from "../types/types";

// utilities
import { userAttr } from "@/utilities/userAttr";

const RedRadio = styled(Radio)({
  color: "#BCBFC2", // default (unchecked)
  "&.Mui-checked": {
    color: "#d32f2f", // checked state
  },
});

function Page() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [deletingItems, setDeletingItems] = useState<Set<string>>(new Set());

  // Authentication check
  useEffect(() => {
    const user = userAttr();
    if (user.role === "UNSIGNED") {
      toast.error("Please login to continue", { position: "top-center" });
      router.push("/");
    }
  }, [router]);

  // GET
  const { data: cartsData, isLoading: isLoadingCarts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
    enabled: userAttr().role !== "UNSIGNED", // Only fetch if user is authenticated
  });

  // DELETE
  const { mutate: deleteCartMutation } = useMutation({
    mutationFn: (id: string) => {
      setDeletingItems((prev) => new Set(prev).add(id));
      return deleteCart(id);
    },
    onSuccess: (data, id) => {
      console.log(data);
      setDeletingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
      // Refresh cart data after successful deletion
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (error, id) => {
      console.log(error);
      setDeletingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    },
  });

  const [selTab, setSelTab] = useState({ code: "card", val: "Card" });
  const [selected, setSelected] = useState("Binance");
  const [creditCard, setCreditCard] = useState<CreditCardValue>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardType: "visa",
  });

  const [radioGroupWidth, setRadioGroupWidth] = useState<number>(100);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure container width
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadioGroupWidth(width);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);

    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  const handleSubmit = () => {
    console.log(selected);
    console.log(creditCard);
  };

  return (
    <div className="h-screen">
      <div className="md:grid md:grid-cols-2">
        {/* left-side */}
        <div
          className="md:h-full md:min-h-screen col-span-1 py-3.5 md:py-7 px-4 md:px-14 flex flex-col justify-between gap-4.5 md:gap-9"
          style={{
            backgroundImage: "url(/checkout-bg.svg)",
            backgroundColor: "var(--primary_shades_70)",
          }}
        >
          <div className="space-y-4.5 md:space-y-9">
            {/* back, details title, price */}
            <div className="space-y-1.5 md:space-y-3">
              {/* back */}
              <div className="flex items-center gap-1">
                <Button
                  props={{
                    value: "",
                    leftIcon: "arrow-left-white",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    color: "red",
                    width: 20,
                    height: 20,
                    size: "mobile-body-large md:body-large",
                    clickHandler: () => router.back(),
                  }}
                />

                <span className="text-txt-on-primary-dark mobile-body-medium md:body-medium">
                  Checkout Page
                </span>
              </div>

              {/* details title, price */}
              <div className="space-y-1.5 md:space-y-3">
                <h3 className="mobile-header-large md:header-large text-txt-on-primary-dark">
                  Cart Details
                </h3>
                {isLoadingCarts ? (
                  <Skeleton variant="text" width="40%" height={48} />
                ) : (
                  <h4 className="mobile-header-medium md:header-medium text-txt-on-primary-dark">
                    $
                    {cartsData?.data.data.reduce(
                      (sum: number, item: CartType) =>
                        sum + item.price * item.quantity,
                      0
                    )}{" "}
                    <span className="text-sm">(CAD)</span>
                  </h4>
                )}
              </div>
            </div>

            {/* total details */}
            <div className="space-y-4.5 md:space-y-9">
              {/* gift code */}
              <GiftCodeCard />

              {/* costs */}
              <div className="space-y-3 md:space-y-6 divide-y divide-outline-level0/40">
                {/* Subtotal */}
                {/* <div className="flex items-center justify-between pb-6">
              <h3 className="body-large text-white">Subtotal</h3>
              <h3 className="body-large text-txt-on-primary-dark">
                $650.00 (CAD)
              </h3>
            </div> */}

                {/* Products */}
                <div className="space-y-1.5 md:space-y-3 pb-3 md:pb-6">
                  <h3 className="mobile-body-large md:body-large text-white">
                    Products
                  </h3>

                  <div className="space-y-2">
                    {isLoadingCarts ? (
                      <CartItemsSkeleton />
                    ) : cartsData?.data.data.length > 0 ? (
                      cartsData?.data.data.map((cart: CartType) => (
                        <div
                          key={cart.cartable.id}
                          className="flex items-center justify-between group hover:bg-gray-50/5 rounded-lg p-2 transition-colors duration-300"
                        >
                          <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light flex-1">
                            {cart.cartable.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
                              ${cart.price}{" "}
                              <span className="text-xs">(CAD)</span>
                            </h3>
                            <button
                              onClick={() =>
                                deleteCartMutation(cart.cartable.id)
                              }
                              disabled={deletingItems.has(cart.cartable.id)}
                              className="transition-opacity duration-300 p-1 hover:bg-red-500/20 rounded-full disabled:opacity-50 cursor-pointer"
                              title={
                                deletingItems.has(cart.cartable.id)
                                  ? "Removing..."
                                  : "Remove product"
                              }
                            >
                              {deletingItems.has(cart.cartable.id) ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-red-500 animate-spin"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="31.416"
                                    strokeDashoffset="31.416"
                                    className="animate-pulse"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-red-500"
                                >
                                  <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-2 px-4">
                        <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light mb-2">
                          Your cart is empty
                        </h3>
                        <p className="mobile-body-medium md:body-medium text-txt-on-surface-terriary-light text-center max-w-sm">
                          Add some programs to get started with your learning
                          journey
                        </p>
                        <Link
                          href="/programs"
                          className="mobile-body-medium md:body-medium text-background-primary-light underline text-center max-w-sm"
                        >
                          Browse programs
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Other */}
                <div className="space-y-1.5 md:space-y-3 pb-3 md:pb-6">
                  <h3 className="mobile-body-large md:body-large text-white">
                    Other
                  </h3>

                  <div className="space-y-2">
                    {[1].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between"
                      >
                        <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
                          Tax
                        </h3>
                        <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
                          + $0.00 <span className="text-xs">(CAD)</span>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <h3 className="mobile-body-large md:body-large text-white">
                    Total
                  </h3>
                  {isLoadingCarts ? (
                    <Skeleton variant="text" width="20%" height={48} />
                  ) : (
                    <h3 className="body-large text-txt-on-primary-dark">
                      $
                      {cartsData?.data.data.reduce(
                        (sum: number, item: CartType) =>
                          sum + item.price * item.quantity,
                        0
                      )}{" "}
                      <span className="text-xs">(CAD)</span>
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* footer, copy rights */}
          <div className="hidden md:flex items-center gap-2 md:gap-11">
            {/* copy right */}
            <div className="flex items-center gap-0.5">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6673C4.32065 14.6673 1.33398 11.6807 1.33398 8.00065C1.33398 4.32065 4.32065 1.33398 8.00065 1.33398C11.6807 1.33398 14.6673 4.32065 14.6673 8.00065C14.6673 11.6807 11.6807 14.6673 8.00065 14.6673Z"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.92082 10.0007C9.44748 10.414 8.83414 10.6673 8.16081 10.6673C6.68747 10.6673 5.49414 9.47398 5.49414 8.00065C5.49414 6.52732 6.68747 5.33398 8.16081 5.33398C8.83414 5.33398 9.44748 5.58732 9.92082 6.00065"
                    stroke="#9B9798"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span className="mobile-body-large md:body-large text-txt-on-surface-terriary-light whitespace-nowrap">
                All rights reserved
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                props={{
                  value: "Terms",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  width: 20,
                  height: 20,
                  padding: "py-1 px-3",
                  size: "mobile-body-large md:body-large !text-txt-on-primary-dark",
                  // clickHandler: handleSubmit,
                }}
              />

              <Button
                props={{
                  value: "Have Question?",
                  leftIcon: "",
                  rightIcon: "",
                  type: "text",
                  disabled: false,
                  color: "red",
                  width: 20,
                  height: 20,
                  padding: "py-1 px-3",
                  size: "mobile-body-large md:body-large !text-txt-on-primary-dark whitespace-nowrap",
                  // clickHandler: handleSubmit,
                }}
              />
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="col-span-1 flex flex-col gap-6 md:gap-12 items-center py-3.5 md:py-7 px-4 md:px-14">
          {/* payment method */}
          <div className="space-y-3 md:space-y-6 w-full md:min-w-[422px] md:max-w-[422px]">
            <h1 className="mobile-header-large md:header-large text-on_surface-light">
              Payment Methods
            </h1>

            {/* types tab */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: "card", val: "Card" },
                { code: "exchange", val: "Exchange" },
                { code: "wallet", val: "Wallet" },
              ].map((tab) => (
                <div key={tab.code} className="col-span-1">
                  <button
                    className={`w-full flex items-center justify-center rounded-full transition-all duration-300 hover:bg-background-primary-light/40 py-2 px-3 mobile-body-large md:body-large cursor-pointer border ${
                      selTab.code === tab.code
                        ? "border-background-primary-light text-background-primary-light bg-background-primary-light/8"
                        : "border-outline1 text-on_surface-light"
                    } ${tab.code === "wallet" ? "opacity-40" : null}`}
                    disabled={tab.code === "wallet"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelTab(tab);
                    }}
                  >
                    {tab.val}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* info for payment */}
          <div className="max-w-[422px]" ref={containerRef}>
            {selTab.code === "card" ? (
              <div>
                <CreditCardForm
                  creditCard={creditCard}
                  setCreditCard={setCreditCard}
                />
              </div>
            ) : selTab.code === "exchange" ? (
              <div className="space-y-3">
                <RadioGroup
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="space-y-2"
                  sx={{ width: `${radioGroupWidth}px` }}
                >
                  <FormControlLabel
                    className="border border-outline-level0 rounded-lg py-2 px-3 flex items-center gap-1.5"
                    value="Binance"
                    control={<RedRadio />}
                    label={
                      <h3 className="text-on_surface-light body-large">
                        Binance
                      </h3>
                    }
                  />

                  <FormControlLabel
                    className="border border-outline-level0 rounded-lg py-2 px-3 flex items-center gap-1.5"
                    value="Coinbase"
                    control={<RedRadio />}
                    label={
                      <h3 className="text-on_surface-light body-large">
                        Coinbase
                      </h3>
                    }
                  />

                  <FormControlLabel
                    className="border border-outline-level0 rounded-lg py-2 px-3 flex items-center gap-1.5"
                    value="Kraken"
                    control={<RedRadio />}
                    label={
                      <h3 className="text-on_surface-light body-large">
                        Kraken
                      </h3>
                    }
                  />

                  <FormControlLabel
                    className="border border-outline-level0 rounded-lg py-2 px-3 flex items-center gap-1.5"
                    value="Bitfinex"
                    control={<RedRadio />}
                    label={
                      <h3 className="text-on_surface-light body-large">
                        Bitfinex
                      </h3>
                    }
                  />
                </RadioGroup>

                <Button
                  props={{
                    value: "Add",
                    leftIcon: "add-red",
                    rightIcon: "",
                    type: "outlined",
                    disabled: false,
                    color: "red",
                    width: 24,
                    height: 24,
                    padding: "py-3 px-8",
                    size: "mobile-body-large md:body-large w-full",
                    // clickHandler: handleSubmit,
                  }}
                />
              </div>
            ) : selTab.code === "wallet" ? (
              <div>wallet</div>
            ) : null}
          </div>

          {/* continue button */}
          <div className="w-full max-w-[422px]">
            <Button
              props={{
                value: "Continue",
                leftIcon: "",
                rightIcon: "",
                type: "filled",
                disabled: false,
                color: "red",
                width: 20,
                height: 20,
                padding: "py-3 px-8",
                size: "mobile-body-large md:body-large w-full",
                clickHandler: handleSubmit,
              }}
            />
          </div>
        </div>
      </div>

      {/* footer, copy rights */}
      <div className="flex md:hidden items-center gap-2 py-3.5 px-4">
        {/* copy right */}
        <div className="flex items-center gap-0.5">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00065 14.6673C4.32065 14.6673 1.33398 11.6807 1.33398 8.00065C1.33398 4.32065 4.32065 1.33398 8.00065 1.33398C11.6807 1.33398 14.6673 4.32065 14.6673 8.00065C14.6673 11.6807 11.6807 14.6673 8.00065 14.6673Z"
                stroke="#9B9798"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.92082 10.0007C9.44748 10.414 8.83414 10.6673 8.16081 10.6673C6.68747 10.6673 5.49414 9.47398 5.49414 8.00065C5.49414 6.52732 6.68747 5.33398 8.16081 5.33398C8.83414 5.33398 9.44748 5.58732 9.92082 6.00065"
                stroke="#9B9798"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <span className="mobile-body-large md:body-large text-txt-on-surface-terriary-light whitespace-nowrap">
            All rights reserved
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            props={{
              value: "Terms",
              leftIcon: "",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 20,
              height: 20,
              padding: "py-1 px-3",
              size: "mobile-body-large md:body-large",
              // clickHandler: handleSubmit,
            }}
          />

          <Button
            props={{
              value: "Have Question?",
              leftIcon: "",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 20,
              height: 20,
              padding: "py-1 px-3",
              size: "mobile-body-large md:body-large whitespace-nowrap",
              // clickHandler: handleSubmit,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
