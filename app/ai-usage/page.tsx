import LegalPage, { h2Style, pStyle, ulStyle, liStyle, linkStyle } from "@/components/LegalPage";

export const metadata = {
  title: "How We Use AI — Sahajta AI",
  description: "How Sahajta AI uses AI tools in its work and what that means for your data.",
};

export default function AiUsagePage() {
  return (
    <LegalPage title="How We Use AI" lastUpdated="22 June 2026">
      <p style={{ ...pStyle, color: "#2D5016", fontStyle: "italic" }}>
        This page is for clients and potential clients who want to understand exactly how we use AI in our work — and what that means for their data. No legal language, just a straight answer.
      </p>

      <h2 style={h2Style}>1. The Tools We Build With</h2>
      <p style={pStyle}>We use a small, deliberate set of AI tools, and we pick them based on what each project actually needs:</p>
      <ul style={ulStyle}>
        <li style={liStyle}><strong>OpenAI GPT models</strong> — for LLM integration, content generation pipelines, and agentic reasoning.</li>
        <li style={liStyle}><strong>Google Gemini</strong> — for multimodal tasks and document processing.</li>
        <li style={liStyle}><strong>Anthropic Claude</strong> — for code review, complex reasoning, and structured output work.</li>
        <li style={liStyle}><strong>n8n</strong> — for workflow automation and agent orchestration.</li>
      </ul>
      <p style={pStyle}>
        If a project calls for a different or additional tool, we tell you at the scoping stage and get your agreement before using it. No surprises.
      </p>

      <h2 style={h2Style}>2. What Happens to Your Data When We Use These Tools</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>We pass only the minimum data required to complete the task at hand.</li>
        <li style={liStyle}>Data shared with LLM APIs during a project is processed within the session. We do not store client data in any AI platform account.</li>
        <li style={liStyle}>We do not use your data to fine-tune or train any model.</li>
        <li style={liStyle}>Credentials, API keys, and proprietary business information are handled in isolated environments and are never shared across client engagements.</li>
      </ul>

      <h2 style={h2Style}>3. What We Do Not Do</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>We do not sell client data.</li>
        <li style={liStyle}>We do not use one client's business logic, data, or systems to inform or train anything for another client.</li>
        <li style={liStyle}>We do not retain access to client systems after project handover unless a separate maintenance agreement is in place and explicitly signed.</li>
      </ul>

      <h2 style={h2Style}>4. Staying Current</h2>
      <p style={pStyle}>
        The AI landscape changes fast. We track changes to the tools we use — including API policy updates, deprecations, and pricing shifts — and proactively flag anything that could affect a delivered product. If something changes after handover that you should know about, we'll reach out.
      </p>

      <h2 style={h2Style}>5. Questions</h2>
      <p style={pStyle}>
        If you have questions about how we use AI in a specific project or in general, email us at{" "}
        <a href="mailto:hello@sahajta.com" style={linkStyle}>hello@sahajta.com</a>. We respond within one business day.
      </p>
    </LegalPage>
  );
}
