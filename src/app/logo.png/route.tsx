import { ImageResponse } from "next/og";

// Square Blizz logo at /logo.png, the same "B" mark as the navbar. Referenced as the
// Organization logo in structured data (Google needs a crawlable image of at least 112px).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 112,
          background: "linear-gradient(135deg, #f97316, #ef4444)",
          color: "white",
          fontSize: 300,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        B
      </div>
    ),
    { width: 512, height: 512 },
  );
}
