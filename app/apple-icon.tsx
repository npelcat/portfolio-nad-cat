import { ImageResponse } from "next/og";

// Same drawing as app/icon.svg. iOS uses a PNG and rounds the corners itself, so the square is full.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f5f4a",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32">
          <path
            d="M7 22V10l8 12V10M18.5 22V10h3.5a3.5 3.5 0 0 1 0 7h-3.5"
            fill="none"
            stroke="#fafaf9"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
