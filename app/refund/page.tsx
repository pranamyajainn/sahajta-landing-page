import LegalPage, { h2Style, pStyle, linkStyle } from "@/components/LegalPage";

export const metadata = {
  title: "Refund and Cancellation Policy — Sahajta AI",
  description: "Sahajta AI's policy on refunds, cancellations, and disputes for project-based and retainer engagements.",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund and Cancellation Policy" lastUpdated="22 June 2026">
      <h2 style={h2Style}>1. Project-Based Pricing</h2>
      <p style={pStyle}>
        All Sahajta AI projects are scoped and priced per engagement before work begins. Payment terms are defined in the project agreement provided at the start of each engagement.
      </p>

      <h2 style={h2Style}>2. Cancellation Before Work Begins</h2>
      <p style={pStyle}>
        If you cancel within 48 hours of making a deposit and no work has commenced, a full refund is issued. Cancellations after 48 hours but before work begins are subject to a 10% processing fee deducted from the refund.
      </p>

      <h2 style={h2Style}>3. Cancellation After Work Has Started</h2>
      <p style={pStyle}>
        You are liable for fully completed milestones at their full agreed value. A milestone that is partially complete at the time of cancellation is billed at 50% of its agreed value.
      </p>
      <p style={pStyle}>
        Third-party tools, API accounts, subscriptions, or cloud resources set up on your behalf during delivery are non-refundable once activated.
      </p>

      <h2 style={h2Style}>4. Disputes About Deliverables</h2>
      <p style={pStyle}>
        If you believe a deliverable does not meet the agreed specification, you must notify us in writing at{" "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a> within 7 days of delivery. We will assess the dispute and respond within 5 business days.
      </p>
      <p style={pStyle}>
        Deliverables that have been accepted — whether explicitly or through the expiry of the 7-day review window — are non-refundable.
      </p>

      <h2 style={h2Style}>5. Retainer Engagements</h2>
      <p style={pStyle}>
        For ongoing retainer agreements, either party may cancel with 14 days written notice to{" "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a>. Fees for work completed within the notice period are due in full.
      </p>

      <h2 style={h2Style}>6. Contact</h2>
      <p style={pStyle}>
        For any refund or cancellation request, email{" "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a> with your project name and the reason for the request. We aim to respond within 2 business days.
      </p>
    </LegalPage>
  );
}
