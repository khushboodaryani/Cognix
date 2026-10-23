"use client";

import React, { useState } from "react";
import { Globe, Smartphone, Bot, Workflow, ArrowUpRight, Check, Zap, Sparkles } from "lucide-react";

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export default function ServicesBento({ onOpenBooking }: ServicesBentoProps) {
  const [chatMessage, setChatMessage] = useState("Summarize today's order trends for store #104");

  return (
    <section id="services" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "640px", marginBottom: "48px" }}>
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
            SERVICES
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--text-heading)",
            }}
          >
            Engineered for speed, built for scale.
          </h2>
        </div>

        {/* 4 Core Offerings Bento Grid (Matches Screenshot 2) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* 1. Websites & Web Platforms (Width: 7 cols) */}
          <div
            className="studio-card service-col-7"
            style={{
              gridColumn: "span 7",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Top metadata row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  FAST DELIVERY / 2-3 WEEKS
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "var(--bg-inset)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-heading)",
                  }}
                >
                  High Conversion
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px" }}>
                Websites & Platforms
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                  maxWidth: "520px",
                }}
              >
                Optimizing flow, conversion pipelines, and bespoke software design to eliminate manual admin overhead, and lower customer acquisition costs. Sub-second load times with Next.js App Router.
              </p>
            </div>

            {/* Mini Browser Mockup Preview */}
            <div
              style={{
                backgroundColor: "var(--bg-inset)",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#CBD5E1" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#CBD5E1" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#CBD5E1" }} />
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  [Project client preview] · 99/100 Lighthouse
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--accent-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Globe size={18} color="#101311" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-heading)" }}>
                      Omnichannel D2C Storefront
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Razorpay Checkout · 0.8s LCP
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "var(--badge-bg)",
                    color: "var(--badge-text)",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  +184% Orders
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "14px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Build time: 2-3 weeks (Fixed scope)
              </span>
              <button
                onClick={onOpenBooking}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Scope Website <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* 2. Mobile Apps (Width: 5 cols) */}
          <div
            className="studio-card service-col-5"
            style={{
              gridColumn: "span 5",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  FAST DELIVERY / 3-4 WEEKS
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
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

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px" }}>
                Mobile Apps
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Fluid, native-level cross-platform experiences with real-time sync, offline storage, and modern UPI / biometric payment integrations.
              </p>
            </div>

            {/* Smartphone Mockup Frame Matching Screenshot 2 */}
            <div
              style={{
                width: "100%",
                maxWidth: "260px",
                margin: "0 auto 20px",
                backgroundColor: "var(--bg-inset)",
                borderRadius: "28px",
                border: "2px solid var(--text-heading)",
                padding: "12px",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "var(--border-strong)",
                  borderRadius: "9999px",
                  margin: "0 auto 10px",
                }}
              />
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "14px",
                  padding: "10px",
                  marginBottom: "8px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>FinPulse UPI Wallet</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                  ₹ 1,48,200
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    height: "4px",
                    width: "80%",
                    background: "var(--accent-primary)",
                    borderRadius: "9999px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "4px 8px",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>Offline Sync: Active</span>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>60 FPS</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "14px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Build time: 3-4 weeks
              </span>
              <button
                onClick={onOpenBooking}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Scope App <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* 3. AI Solutions (Width: 6 cols) */}
          <div
            className="studio-card service-col-6"
            style={{
              gridColumn: "span 6",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  CUSTOM AI / 2-3 WEEKS
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "var(--accent-primary)",
                    color: "#101311",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  LLM AGENTS
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px" }}>
                AI Solutions & Agents
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Bespoke LLM agents, automated document extraction, and tailored knowledge retrieval trained on your proprietary business datasets.
              </p>
            </div>

            {/* Interactive Chat Preview */}
            <div
              style={{
                backgroundColor: "var(--bg-inset)",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  marginBottom: "10px",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-heading)",
                }}
              >
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "2px" }}>
                  User query via WhatsApp:
                </div>
                &quot;{chatMessage}&quot;
              </div>

              <div
                style={{
                  backgroundColor: "rgba(199, 243, 107, 0.2)",
                  border: "1px solid rgba(199, 243, 107, 0.5)",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  color: "#101311",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Sparkles size={16} style={{ color: "#4D7C0F", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.75rem", color: "#2D4A1D" }}>
                    Cognixs Agent (0.64s latency):
                  </div>
                  Found 412 completed orders. Peak volume occurred at 14:30 IST. GST invoices synced to Tally.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "14px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Build time: 2-3 weeks (API & Webhook)
              </span>
              <button
                onClick={onOpenBooking}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Scope AI Agent <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* 4. End-to-End Automation (Width: 6 cols) */}
          <div
            className="studio-card service-col-6"
            style={{
              gridColumn: "span 6",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  ZERO MANUAL WORK
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "var(--bg-inset)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-heading)",
                  }}
                >
                  Operational Ops
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px" }}>
                Workflow Automation
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Connect seamless workflows eliminating repetitive human steps between your communication, databases, and invoicing channels.
              </p>
            </div>

            {/* Workflow Pipeline Diagram Preview */}
            <div
              style={{
                backgroundColor: "var(--bg-inset)",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Lead Ingest
                </div>
                <div style={{ color: "var(--text-muted)" }}>&rarr;</div>
                <div
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  OpenAI Parse
                </div>
                <div style={{ color: "var(--text-muted)" }}>&rarr;</div>
                <div
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "var(--accent-primary)",
                    color: "#101311",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  WhatsApp API
                </div>
                <div style={{ color: "var(--text-muted)" }}>&rarr;</div>
                <div
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Tally ERP
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "14px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Build time: 1-2 weeks (Instant ROI)
              </span>
              <button
                onClick={onOpenBooking}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-heading)",
                  fontFamily: "var(--font-display)",
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
