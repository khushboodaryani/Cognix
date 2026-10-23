"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  ShoppingBag,
  Building2,
  Receipt,
  Hotel,
  Truck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface IndustriesMatrixProps {
  onOpenBooking: () => void;
}

export default function IndustriesMatrix({ onOpenBooking }: IndustriesMatrixProps) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "healthcare",
      label: "Healthcare & MedTech",
      icon: Stethoscope,
      badge: "HIPAA & NDHM Ready",
      headline: "Autonomous Clinical Intake & RAG Knowledge Workflows",
      description:
        "Replace manual intake paper trails and patient charting delays with secure, verified clinical automation.",
      painPoints: [
        "Clinicians spending 3+ hours daily on repetitive EHR/EMR data entry.",
        "Patient inquiry bottlenecks outside clinical operating hours.",
        "Human errors in intake questionnaires and insurance document routing.",
      ],
      solutions: [
        "HIPAA-compliant WhatsApp triage agents with sub-second response times.",
        "Clinical RAG search indexing hospital protocols and doctor directories.",
        "Deterministic document parsing directly syncing patient cards to EHR.",
      ],
      roi: "15+ hrs saved / week per clinician · 100% intake compliance",
      tags: ["HIPAA Encryption", "EHR Sync", "LlamaIndex", "Secure LLM Gateway"],
    },
    {
      id: "ecommerce",
      label: "E-Commerce & Retail",
      icon: ShoppingBag,
      badge: "+38% Recovered GMV",
      headline: "Headless Storefronts & Autonomous Retention Engines",
      description:
        "Eliminate checkout abandonment and inventory sync delays across multi-channel retail operations.",
      painPoints: [
        "Cart abandonment rates exceeding 70% with standard email recovery failing.",
        "Delayed stock inventory sync between Shopify, Amazon, and ERP warehouses.",
        "Customer support teams overwhelmed by 'Where is my order?' queries.",
      ],
      solutions: [
        "Automated WhatsApp interactive checkout and abandoned cart re-engagement.",
        "Sub-second multi-warehouse inventory webhooks via custom microservices.",
        "Autonomous tracking & returns bot handling 85% of tier-1 support tickets.",
      ],
      roi: "+38% recovered checkout GMV · 85% autonomous ticket resolution",
      tags: ["Shopify Headless", "WhatsApp Cloud API", "Razorpay / UPI", "Inventory Webhooks"],
    },
    {
      id: "b2b",
      label: "B2B & Enterprise Services",
      icon: Building2,
      badge: "< 45s Response Time",
      headline: "Inbound Lead Qualification & Zero-Touch SDR Pipelines",
      description:
        "Never let a qualified enterprise buyer wait. Qualify, enrich, and stage prospect meetings in real time.",
      painPoints: [
        "Average B2B lead response delay of 4+ hours, bleeding qualified deals.",
        "SDRs bogged down in repetitive manual CRM data entry and LinkedIn research.",
        "Disconnected tech stacks causing lead drop-off between form and calendar.",
      ],
      solutions: [
        "Event-driven webhooks triggering instant AI enrichment and ICP scoring.",
        "Autonomous conversational booking agents locking meetings on sales calendars.",
        "Bi-directional synchronization across HubSpot, Zoho CRM, and Slack alerts.",
      ],
      roi: "Lead response dropped from 4 hours to 45 seconds · +140% qualified demos",
      tags: ["HubSpot API", "Zoho CRM", "Instant Enrichment", "Slack Notifications"],
    },
    {
      id: "finance",
      label: "Finance & Accounting",
      icon: Receipt,
      badge: "99.8% Touchless Entry",
      headline: "Deterministic Reconciliation & GST / Tally Automation",
      description:
        "Turn tedious month-end ledger reconciliation into automated, audit-proof background pipelines.",
      painPoints: [
        "Manual reconciliation of thousands of bank statements and gateway logs.",
        "Typing invoice line-items into Tally / Zoho causing compliance errors.",
        "Delayed visibility into daily cash flows and outstanding receivables.",
      ],
      solutions: [
        "Multi-bank statement OCR parser with deterministic ledger categorization.",
        "Automated Tally Prime & Zoho Books API sync with zero manual re-entry.",
        "Automated payment reminder workflows via WhatsApp and email.",
      ],
      roi: "99.8% touchless ledger entry · 4x faster month-end financial closing",
      tags: ["Tally Prime API", "Bank Statement OCR", "GST Ledger Automation", "Audit Trails"],
    },
    {
      id: "hospitality",
      label: "Hospitality & Real Estate",
      icon: Hotel,
      badge: "Zero Missed Inquiries",
      headline: "24/7 Reservation Hubs & Interactive Brochure Agents",
      description:
        "Capture weekend property buyers and diners when human staff are off-duty.",
      painPoints: [
        "Over 60% of high-intent property and dining inquiries occur after 7 PM.",
        "Staff wasting hours emailing brochures and answering price questions.",
        "Double-booking friction and delayed site visit scheduling.",
      ],
      solutions: [
        "Omnichannel WhatsApp concierge answering floor plans, pricing, and rules.",
        "Instant dynamic PDF brochure generation tailored to buyer preferences.",
        "Autonomous site visit booking syncing directly to property agent calendars.",
      ],
      roi: "+150% after-hours inquiry capture · 100% calendar sync accuracy",
      tags: ["Dynamic PDF Generation", "WhatsApp Concierge", "Google Calendar API", "Instant Maps"],
    },
    {
      id: "logistics",
      label: "Logistics & Supply Chain",
      icon: Truck,
      badge: "65% Lower Dispatch Cost",
      headline: "Automated Dispatch Alerts & Proof-of-Delivery OCR",
      description:
        "Streamline fleet coordination, paper bill-of-lading processing, and customer tracking.",
      painPoints: [
        "Customer call centers overwhelmed by manual delivery status check calls.",
        "Physical paper proof-of-delivery receipts lost or damaged in transit.",
        "Manual driver allocation causing dispatch delays and fuel wastage.",
      ],
      solutions: [
        "Automated WhatsApp live tracking links pushed at every checkpoint.",
        "Instant driver mobile upload with automatic OCR validation of POD stamps.",
        "Centralized telemetry dashboard monitoring vehicle milestones in real time.",
      ],
      roi: "65% reduction in dispatch overhead · Sub-minute proof-of-delivery filing",
      tags: ["Fleet Telemetry", "Stamp OCR", "Live Tracking Webhooks", "Driver PWA"],
    },
  ];

  const current = industries[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
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
            INDUSTRIES WE TRANSFORM
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
            Custom workflow automation tailored to sector-specific bottlenecks.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-body)",
              lineHeight: 1.6,
            }}
          >
            We don&apos;t build generic AI gimmicks. We engineer mission-critical systems that solve the exact operational pain points holding back your revenue.
          </p>
        </div>

        {/* Industry Interactive Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: "28px",
          }}
          className="industries-layout"
        >
          {/* Left Vertical Industry Selector Tabs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(idx)}
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: isActive
                      ? "1px solid var(--accent-primary)"
                      : "1px solid var(--border-subtle)",
                    backgroundColor: isActive
                      ? "var(--bg-inset)"
                      : "var(--bg-card)",
                    color: "var(--text-heading)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isActive ? "var(--shadow-md)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "var(--bg-inset)";
                      e.currentTarget.style.borderColor = "var(--border-strong)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "var(--bg-card)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                      color: isActive ? "#101311" : "var(--text-heading)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--text-heading)",
                      }}
                    >
                      {ind.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Industry Details Bento Card */}
          <div
            className="studio-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "20px",
            }}
          >
            <div>
              {/* Top Meta Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(199, 243, 107, 0.15)",
                      color: "#84CC16",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(199, 243, 107, 0.4)",
                    }}
                  >
                    <CurrentIcon size={22} strokeWidth={2.2} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text-heading)",
                    }}
                  >
                    {current.label}
                  </span>
                </div>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(199, 243, 107, 0.18)",
                    border: "1px solid rgba(199, 243, 107, 0.4)",
                    color: "var(--text-heading)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Sparkles size={13} style={{ color: "#84CC16" }} />
                  {current.badge}
                </span>
              </div>

              {/* Main Headline & Description */}
              <h3
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                  lineHeight: 1.25,
                }}
              >
                {current.headline}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "28px",
                }}
              >
                {current.description}
              </p>

              {/* Two Column Grid: Pain Points vs Engineered Solutions */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginBottom: "28px",
                }}
                className="pain-solution-grid"
              >
                {/* Pain Points */}
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "var(--bg-inset)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      color: "#EF4444",
                      marginBottom: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <AlertTriangle size={16} />
                    <span>Sector Bottlenecks</span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {current.painPoints.map((pain, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-body)",
                          lineHeight: 1.5,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "#EF4444", fontWeight: 700, flexShrink: 0 }}>✕</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engineered Solutions */}
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(199, 243, 107, 0.08)",
                    border: "1px solid rgba(199, 243, 107, 0.3)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      color: "var(--text-heading)",
                      marginBottom: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: "#84CC16" }} />
                    <span>Cognixs Engineered Solution</span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {current.solutions.map((sol, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-heading)",
                          lineHeight: 1.5,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: "#84CC16", flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quantified Impact Banner */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "var(--accent-primary)",
                    color: "#101311",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <TrendingUp size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    PROVEN PRODUCTION OUTCOME
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                    }}
                  >
                    {current.roi}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tech Badges & CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {current.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={onOpenBooking}
                className="btn-primary"
                type="button"
                style={{
                  padding: "10px 20px",
                  fontSize: "0.875rem",
                  gap: "8px",
                }}
              >
                <span>Automate Your {current.label.split(" ")[0]} Stack</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
