import { cookies } from "next/headers";

export const userAttr = () => {
  let token;
  // Server side
  token = cookies().get("accessToken")?.value;

  if (!token || token === "undefined" || token === "") {
    return { role: "UNSIGNED" };
  }

  // You can decode the token here if needed
  return { role: "ADMIN" };
};
