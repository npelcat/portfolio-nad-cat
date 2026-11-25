import { ImageResponse } from "next/og";
import { PROFILE } from "@/content/profile";

// Generated at build time. Colors are the light theme tokens from globals.css.
export const alt = `${PROFILE.name}, ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fafaf9",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#57534e" }}>
          {PROFILE.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 88, letterSpacing: -2 }}>
            {PROFILE.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              lineHeight: 1.3,
              maxWidth: 900,
              color: "#57534e",
            }}
          >
            {`${PROFILE.role}. ${PROFILE.tagline}`}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 64, height: 6, background: "#1f5f4a" }} />
          <div style={{ display: "flex", fontSize: 26, color: "#1f5f4a" }}>
            nadegepelcat.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
