"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Globe, Smartphone, Bot, Workflow } from "lucide-react";

interface ProvenOutcomesProps {
  onOpenBooking: () => void;
}

export default function ProvenOutcomes({ onOpenBooking }: ProvenOutcomesProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Websites", "Mobile", "AI", "Automation"];

  const projects = [
    {
      title: "FinPulse NeoBank",
      category: "Mobile",
      metric: "120ms Latency · 4.9 App Rating",
      desc: "Cross-platform Flutter mobile wallet with native UPI deep-linking and biometric instant payouts.",
      badge: "LIVE PRODUCTION",
      stack: "Flutter · Go · Razorpay",
      icon: Smartphone,
    },
    {
      title: "Omniflow Logistics",
      category: "Automation",
      metric: "85,000+ Monthly Shipments",
      desc: "Automated WhatsApp dispatch, Dunzo/Shiprocket carrier routing, and real-time customer alerts.",
      badge: "ENTERPRISE SCALE",
      stack: "WhatsApp Cloud · Node.js · Tally",
      icon: Workflow,
    },
    {
      title: "Kensho Retail D2C",
      category: "Websites",
      metric: "+280% Mobile Conversion",
      desc: "Headless Next.js App Router digital storefront with edge caching and 1-click Cashfree checkout.",
      badge: "SUB-SECOND LCP",
      stack: "Next.js 15 · Tailwind · Shopify Plus",
      icon: Globe,
    },
    {
      title: "DocuExtract AI",
      category: "AI",
      metric: "99.8% Field Extraction Precision",
      desc: "Autonomous LLM document parser processing Indian GST invoices, bills of lading, and bank statements.",
      badge: "CUSTOM RAG",
      stack: "OpenAI GPT-4o · Python · Pinecone",
      icon: Bot,
    },
    {
      title: "CloudKitchen POS & KDS",
      category: "Websites",
      metric: "14 Kitchen Outlets Synchronized",
      desc: "Centralized kitchen display system connecting Zomato & Swiggy webhooks directly to order printers.",
      badge: "ZERO DROPPED ORDERS",
      stack: "Next.js · WebSockets · PostgreSQL",
      icon: Globe,
    },
    {
      title: "AutoLedger ERP Sync",
      category: "Automation",
      metric: "100% Automated GST Ledgering",
      desc: "Direct ODBC & XML bridge syncing multi-channel e-commerce sales vouchers into Tally Prime without humans.",
      badge: "ZERO MANUAL ENTRY",
      stack: "Tally Prime · Python · AWS Lambda",
      icon: Workflow,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="outcomes" className="section-padding" style={{ backgroundColor: "var(--bg-canvas)", position: "relative" }}>
      <div className="container-custom">
        {/* Header & Filter Pills Matching Screenshot 3 */}
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
              PORTFOLIO
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              Proven outcomes in production.
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: isActive ? "1px solid #101311" : "1px solid var(--border-subtle)",
                    backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                    color: isActive ? "#101311" : "var(--text-muted)",
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Bento Outcome Cards in 3x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProjects.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="studio-card"
                onClick={onOpenBooking}
                style={{
                  padding: "28px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "260px",
                }}
              >
                <div>
                  {/* Top Row with Badge & Arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--bg-inset)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-heading)",
                      }}
                    >
                      {item.badge}
                    </span>

                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--bg-inset)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-heading)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Wireframe Mockup Pill inside Card */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-inset)",
                      borderRadius: "12px",
                      padding: "12px",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-card)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} color="#101311" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: "6px", width: "70%", backgroundColor: "var(--border-strong)", borderRadius: "3px", marginBottom: "4px" }} />
                      <div style={{ height: "4px", width: "45%", backgroundColor: "var(--accent-primary)", borderRadius: "3px" }} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "var(--text-heading)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-body)",
                      lineHeight: 1.55,
                      marginBottom: "16px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "#16A34A",
                      fontWeight: 700,
                    }}
                  >
                    {item.metric}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.stack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
