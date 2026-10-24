"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { scrollToSection } from "@/utils/scroll";
import { Play, CheckCircle2, ArrowRight, Zap, RefreshCw, Send, ShieldAlert, Cpu } from "lucide-react";

export default function AutomationVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<number>(2);

  const nodes = [
    {
      id: 0,
      title: "1. Lead Capture",
      app: "Landing Page",
      stage: "Immediate",
      status: "200 OK",
      detail: "Webhook triggers on client form submission with verified UTM tags and Indian phone number formatting.",
      payload: '{ "name": "Vikram Sethi", "phone": "+91 98201...", "interest": "D2C Architecture", "intent_score": 0.94 }',
    },
    {
      id: 1,
      title: "2. Zoho CRM",
      app: "Auto Ingest",
      stage: "Synced",
      status: "Synced",
      detail: "Lead created and tagged automatically without manual data entry. Duplicate detection passed.",
      payload: '{ "lead_id": "ZH-88192", "owner": "Enterprise Sales", "stage": "AI Verification" }',
    },
    {
      id: 2,
      title: "3. OpenAI GPT-4o",
      app: "AI Qualification",
      stage: "Evaluated",
      status: "Evaluated",
      detail: "LLM evaluates project urgency, budget parameters, and prepares a tailored scoping agenda.",
      payload: '{ "priority": "CRITICAL", "intent": "Shopify migration to Next.js", "sentiment": "High Urgency" }',
    },
    {
      id: 3,
      title: "4. WhatsApp Cloud",
      app: "Instant Outreach",
      stage: "Delivered",
      status: "Delivered",
      detail: "Trigger verified Meta Business WhatsApp template with interactive calendar booking buttons.",
      payload: '{ "template": "founder_welcome_v2", "status": "READ", "delivery_status": "DELIVERED" }',
    },
    {
      id: 4,
      title: "5. Tally Prime",
      app: "Auto GST & Voucher",
      stage: "Generated",
      status: "Generated",
      detail: "Direct XML/ODBC sync into Tally Prime creating a preliminary project ledger and GST quotation.",
      payload: '{ "voucher_type": "Sales Proforma", "gstin": "27AAACG0000A1Z5", "status": "READY" }',
    },
    {
      id: 5,
      title: "6. Slack Dispatch",
      app: "Internal Ops Alert",
      stage: "Dispatched",
      status: "Dispatched",
      detail: "Engineering leads notified with interactive 1-click accept / assign buttons in #war-room.",
      payload: '{ "channel": "#lead-dispatches", "team_notified": ["@lead_architect", "@founder"] }',
    },
  ];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setSelectedNode(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < nodes.length) {
        setActiveStep(step);
        setSelectedNode(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 850);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-canvas)", position: "relative" }}>
      <div className="container-custom">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
                marginBottom: "8px",
              }}
            >
              LIVE SHOWPIECE
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", fontWeight: 800 }}>
              The Zero-Manual Automation Pipeline
            </h2>
            <p style={{ color: "var(--text-body)", maxWidth: "560px", marginTop: "8px" }}>
              See how Cognixs bridges fragmented Indian enterprise tools into synchronized, autonomous pipelines.
            </p>
          </div>

          <button
            type="button"
            onClick={runSimulation}
            disabled={isRunning}
            className="btn-primary"
            style={{
              padding: "12px 24px",
              opacity: isRunning ? 0.75 : 1,
              cursor: isRunning ? "not-allowed" : "pointer",
            }}
          >
            {isRunning ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                <span>Simulating Pipeline...</span>
              </>
            ) : (
              <>
                <Play size={16} fill="#101311" />
                <span>Trigger Live Simulation</span>
              </>
            )}
          </button>
        </div>

        {/* Pipeline Nodes Flow Track */}
        <div
          className="studio-card"
          style={{
            padding: "32px",
            marginBottom: "24px",
            background: "var(--bg-card)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "14px",
              position: "relative",
            }}
          >
            {nodes.map((node, index) => {
              const isPassed = activeStep >= index;
              const isCurrent = activeStep === index && isRunning;
              const isSelected = selectedNode === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(index)}
                  style={{
                    backgroundColor: isCurrent
                      ? "var(--accent-lime-subtle)"
                      : isSelected
                      ? "var(--bg-card)"
                      : "var(--bg-inset)",
                    border: isCurrent
                      ? "2px solid #84CC16"
                      : isSelected
                      ? "2px solid #101311"
                      : "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    padding: "16px",
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isSelected || isCurrent ? "translateY(-3px)" : "none",
                    boxShadow: isSelected ? "var(--shadow-md)" : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {node.stage}
                    </span>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: isPassed ? "#22C55E" : "var(--border-strong)",
                        display: "inline-block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                      marginBottom: "4px",
                    }}
                  >
                    {node.title}
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {node.app}
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "0.6875rem",
                      padding: "3px 8px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      backgroundColor: isPassed ? "rgba(34, 197, 94, 0.15)" : "var(--bg-card)",
                      color: isPassed ? "#15803D" : "var(--text-muted)",
                      fontWeight: 600,
                    }}
                  >
                    {node.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Inspector Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            backgroundColor: "var(--bg-inset)",
            borderRadius: "20px",
            border: "1px solid var(--border-subtle)",
            padding: "24px",
          }}
          className="inspector-grid"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Pipeline Node Inspector
              </span>
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "8px" }}>
              {nodes[selectedNode].title} ({nodes[selectedNode].app})
            </h3>
            <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "16px" }}>
              {nodes[selectedNode].detail}
            </p>
            <div style={{ display: "flex", gap: "12px", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              <span>Stage: <strong style={{ color: "var(--text-heading)" }}>{nodes[selectedNode].stage}</strong></span>
              <span>·</span>
              <span>Delivery: <strong style={{ color: "#16A34A" }}>Verified Idempotent</strong></span>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginBottom: "6px",
              }}
            >
              Payload Telemetry (JSON Event):
            </div>
            <pre
              style={{
                backgroundColor: "#101311",
                color: "#C7F36B",
                padding: "16px",
                borderRadius: "14px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                overflowX: "auto",
                border: "1px solid rgba(199, 243, 107, 0.2)",
              }}
            >
              <code>{nodes[selectedNode].payload}</code>
            </pre>
          </div>
        </div>

        {/* Full-Width Pricing & Scoping Highlight Box */}
        <div
          className="pricing-box-wrap"
          style={{
            marginTop: "36px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "clamp(14px, 3vw, 20px) clamp(14px, 3vw, 24px)",
            borderRadius: "16px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-sm)",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              borderRadius: "9999px",
              backgroundColor: "var(--accent-primary)",
              color: "#101311",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.03em",
            }}
          >
            PRICED FOR YOUR PROJECT
          </span>
          <div
            style={{
              fontSize: "0.92rem",
              color: "var(--text-body)",
              lineHeight: 1.55,
              flex: 1,
              minWidth: 0,
              width: "100%",
            }}
          >
            Clear, fixed quotes. Every business needs something different, so we don&apos;t do one-size-fits-all pricing. Tell us what you need on a free 20-minute call, and you&apos;ll get a fixed quote with clear milestones. No hidden charges, no surprise invoices.{" "}
            <Link
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              style={{
                color: "var(--text-heading)",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                display: "inline-flex",
                alignItems: "center",
                gap: "2px",
                whiteSpace: "nowrap",
              }}
            >
              Get your quote &rarr;
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @media (max-width: 800px) {
          .inspector-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
