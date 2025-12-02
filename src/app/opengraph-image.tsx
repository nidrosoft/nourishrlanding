import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nourishr - Decide What to Eat in 5 Seconds";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #0d9488 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Floating Food Emojis */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            fontSize: 64,
            display: "flex",
          }}
        >
          🍕
        </div>
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 120,
            fontSize: 56,
            display: "flex",
          }}
        >
          🥗
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 150,
            fontSize: 48,
            display: "flex",
          }}
        >
          🍜
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 100,
            fontSize: 52,
            display: "flex",
          }}
        >
          🍔
        </div>
        <div
          style={{
            position: "absolute",
            top: 200,
            left: 60,
            fontSize: 40,
            display: "flex",
          }}
        >
          🥑
        </div>
        <div
          style={{
            position: "absolute",
            top: 180,
            right: 80,
            fontSize: 44,
            display: "flex",
          }}
        >
          🍣
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
                backdropFilter: "blur(10px)",
              }}
            >
              <span style={{ fontSize: 48, fontWeight: "bold", color: "white" }}>
                N
              </span>
            </div>
            <span
              style={{
                fontSize: 56,
                fontWeight: "bold",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Nourishr
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              textShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Decide What to Eat
            <br />
            <span style={{ color: "#fef3c7" }}>in 5 Seconds</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.9)",
              margin: 0,
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Your AI meal companion. Get personalized recommendations based on your mood, diet, and cravings.
          </p>

          {/* CTA Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 50,
              padding: "12px 32px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ fontSize: 20, color: "white", fontWeight: 600 }}>
              ✨ Join 10,000+ Early Users
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
