"use client";

import React from "react";
import { Globe, ArrowUpRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export default function ServicesBento({ onOpenBooking }: ServicesBentoProps) {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("contact");
  };

  return (
    <section id="services" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "680px", marginBottom: "48px" }}>
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
            Everything you need to go digital, under one roof.
          </h2>
        </div>

        {/* 4 Core Offerings Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* 1. WEBSITES (Width: 7 cols) */}
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
                  WEBSITES
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
                  Mobile-first
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-heading)" }}>
                Websites that bring you customers
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
                Custom-designed, fast websites with enquiry forms and WhatsApp built in. Easy for you to update after launch.
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
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  yourbusiness.com
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
                  border: "1px solid var(--border-subtle)",
                  flexWrap: "wrap",
                  gap: "10px",
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
                      flexShrink: 0,
                    }}
                  >
                    <Globe size={18} color="#101311" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-heading)" }}>
                      New enquiry received
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      From your website contact form
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(199, 243, 107, 0.2)",
                    color: "#166534",
                    border: "1px solid rgba(199, 243, 107, 0.5)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  WhatsApp alert sent
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
                Typical timeline: 2 to 4 weeks
              </span>
              <a
                href="#contact"
                onClick={handleScrollToContact}
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
                  textDecoration: "none",
                }}
              >
                Discuss a website <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* 2. MOBILE APPS (Width: 5 cols) */}
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
                  MOBILE APPS
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
                  Android &amp; iOS
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-heading)" }}>
                Apps your users actually enjoy
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Android and iOS apps from one codebase, with simple screens, secure logins and payments. We handle the Play Store and App Store launch.
              </p>
            </div>

            {/* Smartphone Mockup Frame */}
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
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Your app</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-display)" }}>
                  Booking confirmed
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
                  alignItems: "center",
                  padding: "4px 8px",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>Order tracking: Live</span>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>UPI</span>
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
                Typical timeline: 4 to 8 weeks
              </span>
              <a
                href="#contact"
                onClick={handleScrollToContact}
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
                  textDecoration: "none",
                }}
              >
                Discuss an app <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* 3. AI SOLUTIONS (Width: 6 cols) */}
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
                  AI SOLUTIONS
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
                  24/7 replies
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-heading)" }}>
                AI that answers customers, even at 2 AM
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                WhatsApp and website chatbots trained on your products, prices and FAQs. Plus AI that reads documents and invoices so your team doesn&apos;t have to.
              </p>
            </div>

            {/* Chat Preview */}
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
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                }}
              >
                Example conversation
              </div>

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
                  Customer on WhatsApp:
                </div>
                &quot;Is the 2BHK in Sector 62 still available?&quot;
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
                  <div style={{ fontWeight: 700, fontSize: "0.75rem", color: "#2D4A1D", marginBottom: "2px" }}>
                    Your AI assistant:
                  </div>
                  &quot;Yes! It&apos;s available from 1 December. Would you like to book a site visit this weekend?&quot;
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
                Typical timeline: 2 to 4 weeks
              </span>
              <a
                href="#contact"
                onClick={handleScrollToContact}
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
                  textDecoration: "none",
                }}
              >
                Discuss an AI solution <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* 4. AUTOMATION (Width: 6 cols) */}
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
                  AUTOMATION
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
                  No more copy-paste
                </span>
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-heading)" }}>
                Stop doing the same task twice
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                New leads saved automatically, reminders and invoices sent on time, and your tools (WhatsApp, Zoho, Tally, Google Sheets) finally talking to each other.
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
                    color: "var(--text-heading)",
                  }}
                >
                  New lead
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
                    color: "var(--text-heading)",
                  }}
                >
                  Saved to CRM
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
                  WhatsApp reply
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
                    color: "var(--text-heading)",
                  }}
                >
                  Invoice in Tally
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
                Typical timeline: 1 to 3 weeks
              </span>
              <a
                href="#contact"
                onClick={handleScrollToContact}
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
                  textDecoration: "none",
                }}
              >
                Discuss an automation <ArrowUpRight size={14} />
              </a>
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
