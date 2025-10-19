"use client";

import jwt from "jsonwebtoken";

// utilities/userAttr.js
import { getCookie } from "./cookie";

export const userAttr = () => {
  let token;
  // Client side
  token = getCookie("accessToken");

  if (!token || token === "undefined" || token === "") {
    return { role: "UNSIGNED" };
  }

  return { role: "ADMIN" };
};
