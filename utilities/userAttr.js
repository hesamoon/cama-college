"use client";

// utilities/userAttr.js
import { getCookie } from "./cookie";

export const userAttr = () => {
  let token;
  // Client side
  token = getCookie("accessToken");

  if (!token || token === "undefined" || token === "") {
    return { role: "UNSIGNED" };
  }

  // You can decode the token here if needed
  return { role: "ADMIN" };
};
