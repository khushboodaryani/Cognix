"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  PhoneCall,
  Bot,
  FileSearch,
  ScanText,
  Globe,
  Smartphone,
  Workflow,
  Headphones,
  ShieldCheck,
  ArrowUpRight,
  Check,
  Zap,
  Sparkles,
  Terminal,
  Clock,
  Layers,
  ArrowRight,
  Activity,
  CheckCircle2,
  Server,
  RefreshCw,
} from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

interface ServicesBentoProps {
  onOpenBooking: (service?: string) => void;
}

export default function ServicesBento({ onOpenBooking }: ServicesBentoProps) {
  // Category Filter
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "engineering" | "automation" | "support">("all");

  // Interactive Chatbot Simulator
  const [chatBotIndex, setChatBotIndex] = useState(0);
  const chatBotOptions = [
    {
      q: "WhatsApp Catalog & Order",
      user: "Show me your current summer collection and order 2 pieces of SKU-104",
      bot: "Here is the collection! SKU-104 added to your cart (Qty: 2). Total: ₹3,499. Pay via instant UPI link or COD?",
      tag: "WhatsApp Cloud API · Real-time Auto-reply",
    },
    {
      q: "Support Ticket Escalation",
      user: "My shipment has been delayed for 3 days. Order #OT-8192",
      bot: "I've checked with Bluedart. Package is out for delivery today before 4 PM. Escalated to dispatch lead with ticket #HD-441.",
      tag: "Zendesk Sync · Auto-triage",
    },
    {
      q: "Internal Company SOPs",
      user: "What is our company refund policy for enterprise annual contracts?",
      bot: "Per Section 4.2 of legal_master_agreement_2026.pdf, refunds are prorated within 30 days minus setup costs. Source: Page 14.",
      tag: "RAG Vector Search · Source Verified",
    },
  ];

  // Interactive Voice Agent Simulator
  const [voiceIndex, setVoiceIndex] = useState(0);
  const voiceScenarios = [
    {
      label: "Appointment Booking",
      call: "Caller: 'Hi, I need a consultation with Dr. Mehta for knee pain tomorrow.'",
      action: "AI Voice: 'Checking schedule... Dr. Mehta is available at 11:30 AM or 4:00 PM tomorrow. Which works better?'",
      status: "Booked in Clinic CRM · WhatsApp confirmation sent",
    },
    {
      label: "Outbound Lead Qualification",
      call: "AI Outbound: 'Hi Rahul, noticed you requested a quote for solar installation in Pune.'",
      action: "Caller: 'Yes, looking for a 5kW rooftop setup.' -> AI qualifies budget and roof area.",
      status: "Qualified Lead · Assigned to Pune Sales Lead on Slack",
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header - Zero Fluff, Precise Value */}
        <div style={{ maxWidth: "780px", marginBottom: "32px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--accent-primary)",
              backgroundColor: "rgba(199, 243, 107, 0.1)",
              border: "1px solid rgba(199, 243, 107, 0.25)",
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "9999px",
              marginBottom: "12px",
            }}
          >
            OUR SERVICES
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text-heading)",
              marginBottom: "14px",
            }}
          >
            What we build, and how we price it.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-body)",
              lineHeight: 1.6,
              maxWidth: "680px",
            }}
          >
            From WhatsApp chatbots and AI assistants to websites, mobile apps and business automation, with ongoing support after launch.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {[
            { id: "all", label: "All Services (8)" },
            { id: "ai", label: "AI & Chatbots (4)" },
            { id: "engineering", label: "Web & Mobile (2)" },
            { id: "automation", label: "ERP & Automation (1)" },
            { id: "support", label: "Support & Retainers (1)" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isActive ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                  backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                  color: isActive ? "#101311" : "var(--text-body)",
                  boxShadow: isActive ? "0 4px 12px rgba(199, 243, 107, 0.2)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SERVICES GRID */}
        {/* ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* ----------------------------------------------------------------------- */}
          {/* 1. AI CHATBOTS (WHATSAPP, WEB & CRM) */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div
              className="studio-card service-col-7"
              style={{
                gridColumn: "span 7",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    AI SERVICE / 1-2 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(199, 243, 107, 0.15)",
                      border: "1px solid rgba(199, 243, 107, 0.35)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                    }}
                  >
                    <MessageSquare size={13} style={{ color: "#4D7C0F" }} />
                    WhatsApp · Web · CRM
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Custom AI Chatbots & Conversational Agents
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Intelligent conversational bots trained on your products, FAQs, and company data. Deployed across WhatsApp Business API, website widgets, and CRM portals.
                </p>

                {/* Precise Deliverables List */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginBottom: "20px" }}>
                  {[
                    "Meta WhatsApp Cloud API integration",
                    "Website floating chat widget",
                    "Zendesk / Intercom / Zoho sync",
                    "Instant human agent live handoff",
                    "Multi-lingual (English, Hindi, Hinglish)",
                    "Interactive reply buttons & product catalogs",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "14px", border: "1px solid var(--border-subtle)", padding: "14px", marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Test Live Chatbot Responses:
                  </span>
                  <span style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "var(--accent-primary)", fontWeight: 600 }}>
                    {chatBotOptions[chatBotIndex].tag}
                  </span>
                </div>

                {/* Quick Chips */}
                <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "6px", marginBottom: "8px" }}>
                  {chatBotOptions.map((opt, i) => (
                    <button
                      key={opt.q}
                      onClick={() => setChatBotIndex(i)}
                      style={{
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        border: chatBotIndex === i ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                        backgroundColor: chatBotIndex === i ? "var(--accent-primary)" : "var(--bg-card)",
                        color: chatBotIndex === i ? "#101311" : "var(--text-muted)",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {opt.q}
                    </button>
                  ))}
                </div>

                {/* User msg */}
                <div style={{ backgroundColor: "var(--bg-card)", padding: "8px 12px", borderRadius: "10px", fontSize: "0.78rem", marginBottom: "6px", border: "1px solid var(--border-subtle)" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.65rem", display: "block" }}>Customer asks:</span>
                  &ldquo;{chatBotOptions[chatBotIndex].user}&rdquo;
                </div>
                {/* Bot reply */}
                <div style={{ backgroundColor: "rgba(199, 243, 107, 0.14)", border: "1px solid rgba(199, 243, 107, 0.35)", padding: "8px 12px", borderRadius: "10px", fontSize: "0.78rem", color: "var(--text-heading)", display: "flex", gap: "8px" }}>
                  <Sparkles size={14} style={{ color: "#4D7C0F", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "0.68rem", color: "#4D7C0F", display: "block" }}>AI Bot Reply:</span>
                    {chatBotOptions[chatBotIndex].bot}
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Typical turnaround: 7-14 Days
                </span>
                <button
                  onClick={() => onOpenBooking("Intelligent WhatsApp & Web AI Chatbots")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope AI Chatbot <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 2. AI VOICE AGENTS & CALLING */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div
              className="studio-card service-col-5"
              style={{
                gridColumn: "span 5",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    AI SERVICE / 2 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    <PhoneCall size={12} />
                    Voice AI
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  AI Voice Agents & Calling
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Speech-to-speech voice agents that pick up inbound customer phone calls, qualify leads, and schedule appointments naturally.
                </p>

                {/* Deliverables List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Inbound 24/7 call triage & customer answers",
                    "Outbound appointment booking & confirmations",
                    "Natural, conversational human voice",
                    "Twilio / Exotel Indian phone number sync",
                    "Auto-generated call summaries logged to CRM",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voice simulator */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "14px", border: "1px solid var(--border-subtle)", padding: "14px", marginBottom: "18px" }}>
                <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                  {voiceScenarios.map((scen, idx) => (
                    <button
                      key={scen.label}
                      onClick={() => setVoiceIndex(idx)}
                      style={{
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        border: voiceIndex === idx ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                        backgroundColor: voiceIndex === idx ? "var(--bg-card)" : "transparent",
                        color: voiceIndex === idx ? "var(--text-heading)" : "var(--text-muted)",
                        cursor: "pointer",
                      }}
                    >
                      {scen.label}
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-heading)", marginBottom: "4px" }}>
                  {voiceScenarios[voiceIndex].call}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#4D7C0F", fontWeight: 600, marginBottom: "6px" }}>
                  {voiceScenarios[voiceIndex].action}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.7rem", color: "#16A34A", fontWeight: 700 }}>
                  <CheckCircle2 size={12} />
                  <span>{voiceScenarios[voiceIndex].status}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 2 Weeks
                </span>
                <button
                  onClick={() => onOpenBooking("AI Voice Agents & Autonomous Calling")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope Voice Bot <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 3. RAG KNOWLEDGE BASES & DOCUMENT SEARCH */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div
              className="studio-card service-col-6"
              style={{
                gridColumn: "span 6",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    AI SERVICE / 1-2 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    <FileSearch size={12} />
                    RAG Knowledge
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  RAG Knowledge Bases & Internal Doc AI
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  A private AI search and Q&A engine trained on your company SOPs, employee handbooks, catalogs, and customer contracts with exact source citations.
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Vector embeddings across PDFs, Word, Excel & Notion",
                    "Direct source citations with verification guardrails",
                    "Role-based permission gating (HR, Sales, Tech access)",
                    "Live auto-sync whenever new files are uploaded",
                    "Direct Slack / Microsoft Teams / Web portal integration",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Connected Data Vault: 148 Company SOPs</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>Source Verified</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 1-2 Weeks
                </span>
                <button
                  onClick={() => onOpenBooking("RAG Knowledge Bases & Internal Doc AI")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope RAG Vault <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 4. DOCUMENT OCR & VISION INTELLIGENCE */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div
              className="studio-card service-col-6"
              style={{
                gridColumn: "span 6",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    AI SERVICE / 1-2 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    <ScanText size={12} />
                    Document OCR
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Document OCR & Invoice Intelligence
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Extract line items, GSTIN, tax values, and dates from supplier invoices, receipts, and government IDs without human manual keying.
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Automated line-item, tax & GSTIN extraction",
                    "Direct XML/ODBC sync to Tally Prime & Zoho Books",
                    "Government ID parsing (GSTIN, PAN, Aadhaar OCR)",
                    "Automated tax discrepancy & duplicate invoice detection",
                    "High-speed batch processing (1,000+ docs in minutes)",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Vendor Invoice OCR Pipeline</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>Auto-Synced to Tally</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 1-2 Weeks
                </span>
                <button
                  onClick={() => onOpenBooking("Document OCR & Invoice Intelligence")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope OCR Pipeline <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 5. ENTERPRISE WEB APPS & SAAS PLATFORMS */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "engineering") && (
            <div
              className="studio-card service-col-7"
              style={{
                gridColumn: "span 7",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    WEB ENGINEERING / 2-3 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    Next.js 15 · High-Performance UX
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Enterprise Web & Multi-Tenant SaaS
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  High-converting web applications, B2B SaaS platforms, and client portals built with Next.js App Router for sub-second speeds and search dominance.
                </p>

                {/* Deliverables */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginBottom: "18px" }}>
                  {[
                    "Next.js 15 App Router & React Server Components",
                    "Multi-tenant database partitioning & RBAC",
                    "Razorpay, Stripe & instant UPI payment checkout",
                    "Admin dashboards & telemetry analytics",
                    "SEO optimization & verified Core Web Vitals",
                    "Fast page load with server-side rendering",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Omnichannel D2C & Multi-Tenant Architecture</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>+28% Conversion Rate</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 2-3 Weeks (Fixed Scope)
                </span>
                <button
                  onClick={() => onOpenBooking("Enterprise Web & Multi-Tenant SaaS")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope Web App <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 6. CROSS-PLATFORM MOBILE APPS */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "engineering") && (
            <div
              className="studio-card service-col-5"
              style={{
                gridColumn: "span 5",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    MOBILE APPS / 3-4 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    iOS & Android
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Cross-Platform Mobile Apps
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Native experiences built on React Native & Expo with offline SQLite caching, biometric security, and push notifications.
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Single codebase for iOS and Android (React Native)",
                    "Offline-first SQLite local storage & auto-sync",
                    "Biometric authentication (FaceID & Fingerprint)",
                    "Instant UPI & Razorpay in-app checkout",
                    "Full App Store & Google Play Store publishing",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Offline Sync Engine</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>60 FPS Native Performance</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 3-4 Weeks
                </span>
                <button
                  onClick={() => onOpenBooking("Cross-Platform Native Mobile Apps")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope Mobile App <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 7. BUSINESS PROCESS & ERP / CRM AUTOMATION */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "automation") && (
            <div
              className="studio-card service-col-6"
              style={{
                gridColumn: "span 6",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    AUTOMATION / 1-2 WEEKS
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                    }}
                  >
                    Zero Manual Data Entry
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Workflow & ERP / CRM Automation
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Connect your fragmented business systems into auto-running pipelines between WhatsApp, Zoho, HubSpot, Tally Prime, and Slack.
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Tally Prime ERP XML/ODBC sync for sales & purchase vouchers",
                    "Zoho CRM, HubSpot & Salesforce automated lead ingestion",
                    "BullMQ Redis background queues for zero-drop events",
                    "Automated GST invoice generation & WhatsApp PDF dispatch",
                    "Slack / Email instant notification war-rooms for operations",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Pipeline: Lead Ingest → AI Parse → WhatsApp → Tally</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>Fully Automated Pipeline</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Build time: 1-2 Weeks (Instant ROI)
                </span>
                <button
                  onClick={() => onOpenBooking("Business Process & ERP/CRM Automation")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope Automation <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 8. SUPPORT SERVICES & ENGINEERING RETAINERS (NEW) */}
          {/* ----------------------------------------------------------------------- */}
          {(activeTab === "all" || activeTab === "support") && (
            <div
              className="studio-card service-col-6"
              style={{
                gridColumn: "span 6",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "var(--bg-card)",
                border: "1px solid rgba(199, 243, 107, 0.4)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    SUPPORT & RETAINERS / MONTHLY
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(199, 243, 107, 0.2)",
                      color: "#101311",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    <Headphones size={12} />
                    24/7 SLA Support
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-heading)" }}>
                  Support & Engineering Retainers
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.55, marginBottom: "16px" }}>
                  Keep your software, AI models, and automations running with guaranteed uptime, rapid incident resolution, and continuous feature sprints.
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {[
                    "Guaranteed SLA response times (< 1 hour for critical incidents)",
                    "24/7 Uptime & error telemetry monitoring (AWS, Vercel, Supabase)",
                    "AI Model maintenance, prompt drift tuning & token cost reduction",
                    "Security patching, dependency updates & database performance tuning",
                    "Dedicated direct engineering Slack channel with senior tech leads",
                    "Continuous weekly feature iterations & bug fixes (Fractional CTO)",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--text-heading)" }}>
                      <Check size={14} style={{ color: "#16A34A", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div style={{ backgroundColor: "var(--bg-inset)", borderRadius: "10px", padding: "10px 14px", border: "1px solid var(--border-subtle)", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Production SLA Guarantee</span>
                <span style={{ fontSize: "0.72rem", color: "#16A34A", fontWeight: 700 }}>Dedicated SLA & Engineering Team</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Flexible Retainers · Cancel anytime
                </span>
                <button
                  onClick={() => onOpenBooking("Support & Engineering Retainer")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Scope Support Plan <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* WHAT WE AUTOMATE & DELIVER - PRECISE BUSINESS OUTCOMES */}
        {/* ========================================================================= */}
        <div
          style={{
            marginTop: "44px",
            padding: "28px",
            borderRadius: "18px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent-primary)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                SUMMARY OF WHAT YOU GET
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-heading)", margin: 0 }}>
                Direct Business Outcomes & Operational Savings
              </h3>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{
                padding: "8px 18px",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>Book Scoping Consultation</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "24/7 Inbound Lead & Support Triage",
                metric: "Save 12-15 hrs/wk",
                detail: "Capture leads and support tickets across WhatsApp and Web, answer immediately, and book calendar slots automatically.",
              },
              {
                title: "Zero-Data-Entry Invoice to ERP",
                metric: "Zero Keying Errors",
                detail: "Extract PDF bills, validate GST & tax subtotals, and auto-post entries into Tally Prime without human intervention.",
              },
              {
                title: "Next.js Web & Mobile Apps",
                metric: "Ship in 2-3 Weeks",
                detail: "Production-ready B2B portals, SaaS MVPs, and mobile apps with clean code, modern UX, and Stripe/Razorpay billing.",
              },
              {
                title: "Dedicated Support & SLA",
                metric: "< 1 Hr Incident SLA",
                detail: "Direct engineering access on Slack, regular bug fixes, model drift tuning, and continuous DevOps monitoring.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "var(--bg-inset)",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "#16A34A", fontWeight: 700, backgroundColor: "rgba(22, 163, 74, 0.1)", padding: "2px 6px", borderRadius: "4px" }}>
                    {card.metric}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-heading)", marginBottom: "4px" }}>
                  {card.title}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-body)", lineHeight: 1.5 }}>
                  {card.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .service-col-7,
          .service-col-5,
          .service-col-6 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
