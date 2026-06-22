import LegalPage, { h2Style, pStyle, ulStyle, liStyle, linkStyle } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Sahajta AI",
  description: "How Sahajta AI Solution Private Limited collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="22 June 2026">
      <h2 style={h2Style}>1. Who We Are</h2>
      <p style={pStyle}>
        Sahajta AI Solution Private Limited (CIN: U63999RJ2026PTC111789) is an AI studio and automation services company based in Bangalore, India. Our registered office is at: Registered Office Address — To Be Added.{/* TODO: Pranamya — add the registered office address before launch */}
      </p>
      <p style={pStyle}>
        You can reach us at <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a>. For privacy-related queries, write to <a href="mailto:privacy@sahajta.com" style={linkStyle}>privacy@sahajta.com</a>.
      </p>

      <h2 style={h2Style}>2. What Data We Collect</h2>
      <p style={pStyle}><strong>(a) Contact form.</strong> When you submit our project intake form, we collect your name, email address, project description, and budget range.</p>
      <p style={pStyle}><strong>(b) Scheduling.</strong> When you book a call via our website, the scheduling is handled by Cal.com per their privacy policy at <a href="https://cal.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">cal.com/privacy</a>. We receive your name and email from the confirmed booking notification.</p>
      <p style={pStyle}><strong>(c) Email correspondence.</strong> We retain the content and metadata of emails you send to hello@sahajta.com or privacy@sahajta.com for as long as necessary to handle your inquiry.</p>

      <h2 style={h2Style}>3. How We Use Your Data</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>To respond to project inquiries and answer questions.</li>
        <li style={liStyle}>To schedule and run discovery calls.</li>
        <li style={liStyle}>To maintain internal records of business engagements.</li>
      </ul>
      <p style={pStyle}>We do not use your data for marketing without your separate consent.</p>

      <h2 style={h2Style}>4. Who We Share Data With</h2>
      <ul style={ulStyle}>
        <li style={liStyle}><strong>Cal.com</strong> — for scheduling functionality only.</li>
        <li style={liStyle}><strong>OpenAI, Google, and Anthropic</strong> — when their APIs are used during project delivery. Client data shared with these tools is processed within the session and is not stored in any Sahajta account on those platforms.</li>
        <li style={liStyle}><strong>n8n</strong> — for workflow automation during delivery.</li>
      </ul>
      <p style={pStyle}>We do not sell, rent, or share data with advertisers, data brokers, or analytics platforms. We do not use one client's data in another client's engagement.</p>

      <h2 style={h2Style}>5. How We Protect Data</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>All connections to this website use HTTPS.</li>
        <li style={liStyle}>Access to stored data is limited to team members who need it for delivery.</li>
        <li style={liStyle}>We do not store payment information. Payment is handled by the client's chosen method outside this website.</li>
      </ul>

      <h2 style={h2Style}>6. Your Rights Under the DPDP Act 2023</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>The right to know what personal data we hold about you.</li>
        <li style={liStyle}>The right to correction of inaccurate data.</li>
        <li style={liStyle}>The right to erasure — we will action deletion requests within 7 days of receiving a written request at <a href="mailto:privacy@sahajta.com" style={linkStyle}>privacy@sahajta.com</a>.</li>
        <li style={liStyle}>The right to withdraw consent at any time.</li>
        <li style={liStyle}>The right to raise a grievance with the Data Protection Board of India.</li>
      </ul>

      <h2 style={h2Style}>7. Data Retention</h2>
      <ul style={ulStyle}>
        <li style={liStyle}><strong>Contact form submissions:</strong> retained for 2 years from the date of last contact.</li>
        <li style={liStyle}><strong>Project engagement records:</strong> retained for 5 years for business records compliance.</li>
        <li style={liStyle}><strong>Email correspondence:</strong> retained as long as reasonably necessary for the engagement.</li>
      </ul>

      <h2 style={h2Style}>8. Grievance Officer</h2>
      <p style={pStyle}>
        <strong>Shubhang Sethi</strong><br />
        <a href="mailto:privacy@sahajta.com" style={linkStyle}>privacy@sahajta.com</a><br />
        Sahajta AI Solution Private Limited
      </p>
      <p style={pStyle}>Grievances will be acknowledged within 48 hours and resolved within 30 days.</p>

      <h2 style={h2Style}>9. Changes to This Policy</h2>
      <p style={pStyle}>When this policy changes, we update the Last Updated date at the top of this page. Continued use of the site after a change constitutes acceptance of the updated policy.</p>

      <h2 style={h2Style}>10. Governing Law</h2>
      <p style={pStyle}>This policy is governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>
    </LegalPage>
  );
}
