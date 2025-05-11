// utilities/userAttr.js
import { cookies } from "next/headers";
import { getCookie } from "./cookie";

export const userAttr = () => {
  let token;

  if (typeof window === "undefined") {
    // Server side
    token = cookies().get("accessToken")?.value;
  } else {
    // Client side
    token = getCookie("accessToken");
  }

  if (!token || token === "undefined" || token === "") {
    return { role: "UNSIGNED" };
  }

  // You can decode the token here if needed
  return { role: "ADMIN" };
};
