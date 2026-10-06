import { ImageResponse } from "next/og";

// Preview card shown when blizz.world is shared on WhatsApp, LinkedIn, X, etc.
export const alt = "Blizz — WhatsApp-native CRM for small businesses";
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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 55%, #fee2e2 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              color: "white",
              fontSize: 44,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: "#0f172a" }}>Blizz</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: "#0f172a", lineHeight: 1.1 }}>
            The CRM small businesses finish setting up fast
          </div>
          <div style={{ fontSize: 32, color: "#475569" }}>
            WhatsApp-native · Built for India & GCC teams · Free for 2 users
          </div>
        </div>

        <div style={{ fontSize: 28, fontWeight: 600, color: "#ea580c" }}>www.blizz.world</div>
      </div>
    ),
    size,
  );
}
