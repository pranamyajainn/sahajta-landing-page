import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontWeight: 700,
  fontSize: "1.4rem",
  color: "#0B2818",
  letterSpacing: "-0.01em",
  marginTop: "40px",
  marginBottom: "10px",
  lineHeight: 1.2,
};

const pStyle: React.CSSProperties = {
  marginBottom: "16px",
  color: "#121212",
  lineHeight: "1.75",
  fontSize: "15px",
};

const ulStyle: React.CSSProperties = {
  marginBottom: "16px",
  paddingLeft: "20px",
  lineHeight: "1.75",
  fontSize: "15px",
  color: "#121212",
};

const liStyle: React.CSSProperties = {
  marginBottom: "6px",
  listStyleType: "disc",
};

const linkStyle: React.CSSProperties = {
  color: "#2D5016",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

export { h2Style, pStyle, ulStyle, liStyle, linkStyle };

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div style={{ backgroundColor: "var(--bg-cream, #FDFCF0)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{
        borderBottom: "1px solid var(--border, #DDD8CC)",
        padding: "18px 40px",
        backgroundColor: "var(--bg-cream, #FDFCF0)",
      }}>
        <Link href="/" aria-label="Sahajta AI — home" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/sahajta-logo.png"
            alt="Sahajta AI"
            width={120}
            height={34}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
      </header>

      {/* Content */}
      <main style={{ flex: 1, padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 3.25rem)",
            color: "#0B2818",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "10px",
          }}>
            {title}
          </h1>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B7E76",
            marginBottom: "48px",
            marginTop: 0,
          }}>
            Last updated: {lastUpdated}
          </p>
          <div>
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
