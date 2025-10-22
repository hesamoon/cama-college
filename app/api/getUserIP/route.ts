// app/api/getUserIP/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Get IP from headers or fallback
  const forwardedFor = req.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();
  const realIp = req.headers.get("x-real-ip");
  const ip = forwardedFor || realIp || "Unknown";

  // Optional: fetch geo info using IP
  let country = "";
  let language = "";
  try {
    console.log(ip);
    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=363ecfa3deee43afbc70dbe4ac41a6f1&ip=${ip}`
    );
    if (res.ok) {
      const data = await res.json();
      country = data.country_name;
      language = data.languages.split(",")[0]; // e.g., "en-US"
    }
  } catch (err) {
    console.log("GeoIP error", err);
  }

  return NextResponse.json({ ip, country, language });
}
