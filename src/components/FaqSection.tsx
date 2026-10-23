"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What primary technologies and tools do you use to engineer systems?",
      answer:
        "We build with high-performance, battle-tested modern stacks. On frontend and applications: Next.js 16 (App Router, Turbopack, React 19), TypeScript, Flutter, and Tailwind/Vanilla CSS. On backend and workflows: Python/FastAPI, Node.js, PostgreSQL, Redis, and n8n orchestration. On AI: OpenAI GPT-4o, Claude 3.5 Sonnet, LangChain, LlamaIndex, Pinecone vector embeddings, Whisper voice APIs, and Meta WhatsApp Cloud API.",
    },
    {
      question: "How does your SDLC sprint process work from kickoff to deployment?",
      answer:
        "We operate in 14-day high-cadence production sprints adapted for rapid digital and AI engineering. Sprint 1 starts with deep technical research, API mapping, and clickable architectural prototypes. Sprint 2 focuses on core feature development and pipeline wiring. Sprint 3 handles production hardening, webhook edge-case testing, and security audits. Sprint 4 concludes with CI/CD deployment, team walkthroughs, and guaranteed hypercare.",
    },
    {
      question: "How do you handle enterprise data privacy and security constraints?",
      answer:
        "We adhere strictly to zero-trust architecture. We never send sensitive corporate data to public training sets; we use enterprise zero-data-retention APIs and self-hosted vector databases where required. For healthcare and finance clients, we implement HIPAA-compliant encryption, tokenized authentication, and deterministic validation schemas so models cannot hallucinate critical business metrics.",
    },
    {
      question: "Can you integrate with our existing CRM, ERP, or legacy database?",
      answer:
        "Yes. Over 70% of our deployments integrate directly with clients' existing ecosystems. We build custom API bridges, webhooks, and n8n pipelines for HubSpot, Salesforce, Zoho CRM, Tally Prime ERP, Shopify, Razorpay, Slack, Google Workspace, and proprietary SQL/NoSQL databases with zero disruption to daily operations.",
    },
    {
      question: "Who owns the source code, IP, and configurations?",
      answer:
        "You own 100% of everything we build. All GitHub repositories, database schemas, Figma design files, n8n workflow JSONs, and environment configurations are transferred directly to your organization with full commercial rights. There are zero proprietary license traps or vendor lock-in.",
    },
    {
      question: "What does post-launch support and maintenance look like?",
      answer:
        "Every project includes a dedicated hypercare stabilization window post-launch. Following deployment, clients can choose between flexible monthly sprint retainers or on-demand support with guaranteed SLA response times, proactive API monitoring, uptime alerts, and continuous feature iterations.",
    },
    {
      question: "How do you price projects and what is the payment structure?",
      answer:
        "We believe in crystal-clear pricing with zero surprise billable hours. Projects are scoped as fixed sprint deliverables or ongoing embedded engineering retainers. You receive a comprehensive scope document detailing every deliverable, timeline, and milestone before any commitment.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "700px", margin: "0 auto 48px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "10px",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--text-heading)",
              marginBottom: "16px",
            }}
          >
            Clear answers before we write a single line of code.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-body)",
              lineHeight: 1.6,
            }}
          >
            Quick answers to common inquiries about our engineering process, integrations, data security, and IP ownership.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="studio-card"
                style={{
                  padding: "0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: isOpen
                    ? "1px solid var(--accent-primary)"
                    : "1px solid var(--border-subtle)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "22px 26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-heading)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      lineHeight: 1.4,
                      color: isOpen ? "var(--text-heading)" : "var(--text-heading)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "var(--accent-primary)" : "var(--bg-inset)",
                      color: isOpen ? "#101311" : "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background-color 0.2s ease",
                    }}
                  >
                    <ChevronDown size={17} strokeWidth={2.4} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 26px 24px",
                      fontSize: "0.9375rem",
                      color: "var(--text-body)",
                      lineHeight: 1.7,
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "18px",
                      backgroundColor: "var(--bg-card-subtle)",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Callout */}
        <div
          style={{
            maxWidth: "840px",
            margin: "36px auto 0",
            padding: "20px 28px",
            borderRadius: "14px",
            backgroundColor: "var(--bg-inset)",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "rgba(199, 243, 107, 0.2)",
                color: "#84CC16",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HelpCircle size={18} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-heading)",
                }}
              >
                Have a specific architecture question or unique tech stack?
              </div>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                Speak directly with an engineer. No sales pitch, zero fluff.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            type="button"
            className="btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.8125rem", gap: "6px" }}
          >
            <span>Ask Us On Scoping Call</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
