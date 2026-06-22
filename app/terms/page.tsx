import Link from "next/link";
import LegalPage, { h2Style, pStyle, ulStyle, liStyle, linkStyle } from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service — Sahajta AI",
  description: "The terms governing your use of sahajta.com and engagement with Sahajta AI Solution Private Limited.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="22 June 2026">
      <h2 style={h2Style}>1. Acceptance</h2>
      <p style={pStyle}>
        Accessing or using sahajta.com, or engaging Sahajta AI Solution Private Limited for services, constitutes your acceptance of these terms in full. If you do not agree, please do not use this site or engage our services.
      </p>

      <h2 style={h2Style}>2. Services</h2>
      <p style={pStyle}>
        Sahajta AI Solution Private Limited provides custom AI product development, automation engineering, AI feature integration, and website development. All projects are scoped and agreed in writing before work begins.
      </p>

      <h2 style={h2Style}>3. Intellectual Property</h2>
      <p style={pStyle}>
        Upon receipt of full payment for a project, all code, documentation, and deliverables created specifically for that project transfer to the client with full IP rights.
      </p>
      <p style={pStyle}>
        Sahajta retains the right to describe the engagement — including the project name, the type of work, and the outcome — in its portfolio and marketing materials, unless a signed NDA explicitly prohibits this.
      </p>
      <p style={pStyle}>
        Sahajta retains ownership of reusable internal tools, frameworks, prompt libraries, and proprietary systems not built specifically for the client's project.
      </p>

      <h2 style={h2Style}>4. Client Obligations</h2>
      <p style={pStyle}>
        Clients must provide accurate project briefs, supply required access and assets on time, and make payments per the agreed schedule. Delays caused by the client's failure to provide inputs or feedback do not extend Sahajta's liability or timeline commitment.
      </p>

      <h2 style={h2Style}>5. Third-Party APIs and Tools</h2>
      <p style={pStyle}>
        Deliverables may depend on third-party APIs and platforms including but not limited to OpenAI, Google, Meta, and Vercel. Sahajta is not liable for outages, deprecation, pricing changes, or policy changes by these third parties after project handover. Sahajta will flag known risks at the scoping stage.
      </p>

      <h2 style={h2Style}>6. Limitation of Liability</h2>
      <p style={pStyle}>
        Sahajta's total liability in any dispute is capped at the fees paid for the specific project in question. Sahajta is not liable for indirect, consequential, incidental, or special damages of any kind.
      </p>

      <h2 style={h2Style}>7. No Warranty</h2>
      <p style={pStyle}>
        Work is delivered to meet the agreed specification at time of handover. Sahajta makes no warranty about ongoing performance under conditions outside the agreed scope, including third-party API changes, infrastructure changes made by the client, or modifications made to the codebase after handover.
      </p>

      <p style={pStyle}>
        For our{" "}
        <Link href="/cookies" style={linkStyle}>Cookie Policy</Link>
        {", "}
        <Link href="/refund" style={linkStyle}>Refund Policy</Link>
        {", and "}
        <Link href="/ai-usage" style={linkStyle}>AI usage practices</Link>
        {", email us at "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a>.
      </p>

      <h2 style={h2Style}>8. Governing Law</h2>
      <p style={pStyle}>
        These terms are governed by Indian law. Disputes are subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
      </p>

      <h2 style={h2Style}>9. Changes</h2>
      <p style={pStyle}>
        Sahajta may update these terms. The current version is always at sahajta.com/terms. Continued engagement after an update constitutes acceptance of the revised terms.
      </p>
    </LegalPage>
  );
}
