import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nick Johnson | Full-Stack Engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0c0f",
          color: "#f3f4f6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              border: "4px solid #2563eb",
              color: "#60a5fa",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            NJ
          </div>
          <div style={{ fontSize: "28px", color: "#60a5fa" }}>
            nicksjohnson.com
          </div>
        </div>
        <div style={{ fontSize: "84px", fontWeight: 800, lineHeight: 1.1 }}>
          Nick Johnson
        </div>
        <div style={{ fontSize: "44px", color: "#9ca3af", marginTop: "16px" }}>
          Full-Stack Engineer
        </div>
        <div style={{ fontSize: "30px", color: "#6b7280", marginTop: "40px" }}>
          Laravel · Vue · React · Next.js
        </div>
      </div>
    ),
    size
  );
}
