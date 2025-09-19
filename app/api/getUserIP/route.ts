// app/api/getUserIP/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Get IP from headers or fallback
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = req.headers.get("x-real-ip");
  const ip = forwardedFor || realIp || "Unknown";

  // Optional: fetch geo info using IP
  let country = "";
  let language = "";
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    if (res.ok) {
      const data = await res.json();
      country = data.country_name;
      language = data.languages; // e.g., "en-US"
    }
  } catch (err) {
    console.log("GeoIP error", err);
  }

  return NextResponse.json({ ip, country, language });
}
