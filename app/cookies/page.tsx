import LegalPage, { h2Style, pStyle, linkStyle } from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy — Sahajta AI",
  description: "How sahajta.com uses cookies and what that means for you.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="22 June 2026">
      <h2 style={h2Style}>1. What Are Cookies</h2>
      <p style={pStyle}>
        Cookies are small text files that a website saves to your browser when you visit. They are used for a range of purposes — from keeping you logged in, to remembering your preferences, to understanding how visitors use a site. Some cookies are set by the site you visit directly; others are set by third-party services embedded on that page.
      </p>

      <h2 style={h2Style}>2. Cookies on This Site</h2>
      <p style={pStyle}>
        sahajta.com does not set any first-party tracking or advertising cookies. We do not use Google Analytics, Meta Pixel, or any other analytics or ad-targeting platform.
      </p>
      <p style={pStyle}>
        The only third-party embed on this site is the <strong>Cal.com</strong> scheduling calendar. When the calendar loads, Cal.com may set cookies required for the scheduling interface to function correctly — for example, to remember your timezone or session state during booking. These cookies are governed by Cal.com's privacy policy at{" "}
        <a href="https://cal.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">cal.com/privacy</a>.
      </p>
      <p style={pStyle}>
        We do not have access to or control over the cookies set by Cal.com.
      </p>

      <h2 style={h2Style}>3. How to Control Cookies</h2>
      <p style={pStyle}>
        You can block or delete cookies at any time through your browser settings. The steps vary by browser — most have a Privacy or Security section in Settings where you can manage cookies. Blocking cookies from third-party embeds like Cal.com may prevent the scheduling calendar from functioning, but will not affect the rest of the site.
      </p>
      <p style={pStyle}>
        For detailed guidance on managing cookies across different browsers, visit{" "}
        <a href="https://www.aboutcookies.org" style={linkStyle} target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
      </p>

      <h2 style={h2Style}>4. Contact</h2>
      <p style={pStyle}>
        If you have questions about this policy, email us at{" "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a>.
      </p>
    </LegalPage>
  );
}
