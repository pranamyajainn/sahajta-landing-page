"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DOT_SPACING = 18;
    const DOT_RADIUS = 1.5;
    const MAX_GLOW_DIST = 160;
    const DIM = "#1A3A28";

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / DOT_SPACING);
      const rows = Math.ceil(canvas.height / DOT_SPACING);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * DOT_SPACING;
          const y = r * DOT_SPACING;
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / MAX_GLOW_DIST);

          // interpolate between DIM and GOLD
          const r1 = 26, g1 = 58, b1 = 40;   // DIM #1A3A28
          const r2 = 201, g2 = 168, b2 = 76; // GOLD #C9A84C
          const ri = Math.round(r1 + (r2 - r1) * t);
          const gi = Math.round(g1 + (g2 - g1) * t);
          const bi = Math.round(b1 + (b2 - b1) * t);

          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS + t * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${ri},${gi},${bi})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    const footer = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    footer?.addEventListener("mousemove", onMove);
    footer?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      footer?.removeEventListener("mousemove", onMove);
      footer?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0B2818",
        borderRadius: "20px 20px 0 0",
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "0",
      }}
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Top metadata row */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "28px 40px 0",
        }}
      >
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#F5F0E8",
          opacity: 0.5,
          margin: 0,
        }}>
          © 2026 Sahajta AI Solution Pvt Ltd. All rights reserved.
        </p>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#F5F0E8",
          opacity: 0.5,
          margin: 0,
        }}>
          Built &amp; Shipped in BLR, IND
        </p>
      </div>

      {/* Wordmark */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          lineHeight: 0.82,
          padding: "0 20px 0",
          marginTop: "16px",
          marginBottom: "0",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(64px, 13vw, 180px)",
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
            display: "block",
            userSelect: "none",
          }}
        >
          Sahajta
        </span>
      </div>
    </footer>
  );
}
