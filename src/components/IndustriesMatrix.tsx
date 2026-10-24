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
  Sparkles,
} from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

interface IndustriesMatrixProps {
  onOpenBooking: () => void;
}

export default function IndustriesMatrix({ onOpenBooking }: IndustriesMatrixProps) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "healthcare",
      label: "Healthcare & Clinics",
      icon: Stethoscope,
      badge: "We built OpenTreatment",
      headline: "Online booking, reminders and records for clinics",
      description:
        "Help patients find you, book easily and come back, without your staff living on the phone.",
      painPoints: [
        "Patients calling again and again to ask prices and timings.",
        "Appointment reminders sent by hand, or not at all.",
        "Reports and prescriptions scattered across WhatsApp and paper.",
      ],
      solutions: [
        "Online booking with clear prices and available slots.",
        "Automatic WhatsApp confirmations and reminders.",
        "Simple digital records and prescriptions patients can download.",
      ],
      roi: "Fewer calls at the front desk, fewer no-shows, and patients who trust your prices. We've built this before: OpenTreatment, a healthcare platform live on the web and Google Play.",
      tags: ["Online booking", "WhatsApp reminders", "Patient records", "Android app"],
      buttonText: "Talk to us about your clinic",
    },
    {
      id: "ecommerce",
      label: "E-Commerce & Retail",
      icon: ShoppingBag,
      badge: "WhatsApp-first",
      headline: "A faster store and order updates that send themselves",
      description:
        'Sell more on mobile and stop answering "where is my order?" all day.',
      painPoints: [
        "Slow website that loses shoppers on mobile.",
        "Customers messaging all day to ask about their order.",
        "Orders copied into Tally or Excel by hand.",
      ],
      solutions: [
        "Fast, mobile-first online store with UPI checkout.",
        "Automatic WhatsApp updates for order, shipping and delivery.",
        "Orders synced straight into your accounting.",
      ],
      roi: "A smoother buying experience for customers, fewer support messages, and no more manual order entry.",
      tags: ["Online store", "UPI checkout", "WhatsApp updates", "Tally sync"],
      buttonText: "Talk to us about your store",
    },
    {
      id: "b2b",
      label: "B2B & Services",
      icon: Building2,
      badge: "Less admin",
      headline: "Quotes, follow-ups and client updates on autopilot",
      description: "Spend your time on clients, not on paperwork.",
      painPoints: [
        "Quotes and invoices made manually every time.",
        "Follow-ups forgotten, so good leads go cold.",
        "Client updates spread across emails and chats.",
      ],
      solutions: [
        "Quote and invoice templates that fill themselves.",
        "Automatic follow-up reminders for every lead.",
        "A simple client portal or dashboard for updates.",
      ],
      roi: "Faster quotes, no lost leads, and clients who always know where their work stands.",
      tags: ["Lead tracking", "Auto invoices", "Client portal", "Zoho / Sheets"],
      buttonText: "Talk to us about your business",
    },
    {
      id: "finance",
      label: "Finance & Accounting",
      icon: Receipt,
      badge: "No copy-paste",
      headline: "Bills and documents read and filed automatically",
      description:
        "Let AI handle the boring data entry so your team can focus on the numbers.",
      painPoints: [
        "Invoices and bills typed in by hand.",
        "Payment reminders sent manually, or forgotten.",
        "Data spread across Excel, Tally and email.",
      ],
      solutions: [
        "AI that reads invoices and bills and pulls out the details.",
        "Automatic payment reminders on WhatsApp and email.",
        "Data synced between your tools in one place.",
      ],
      roi: "Less manual typing, fewer errors, and payments that come in on time.",
      tags: ["Invoice reading", "Payment reminders", "Tally sync", "Google Sheets"],
      buttonText: "Talk to us about your accounts",
    },
    {
      id: "hospitality",
      label: "Hospitality & Real Estate",
      icon: Hotel,
      badge: "24/7 replies",
      headline: "Instant replies to every enquiry, even at night",
      description:
        "Never lose a booking or a buyer because nobody replied in time.",
      painPoints: [
        "Leads from ads going cold before anyone replies.",
        "The same questions about rooms, prices or properties, all day.",
        "Bookings and site visits tracked on paper or WhatsApp.",
      ],
      solutions: [
        "AI assistant on WhatsApp that answers common questions instantly.",
        "Simple booking and site-visit scheduling.",
        "Lead tracker so your team knows who to call next.",
      ],
      roi: "Every enquiry gets a reply in seconds, and your team only talks to people who are ready.",
      tags: ["WhatsApp AI", "Booking system", "Lead tracker", "Website"],
      buttonText: "Talk to us about your property business",
    },
    {
      id: "logistics",
      label: "Logistics & Supply Chain",
      icon: Truck,
      badge: "Live tracking",
      headline: "Delivery updates and proof of delivery, without the paperwork",
      description:
        "Keep customers informed automatically and stop chasing drivers for updates.",
      painPoints: [
        "Customers calling to ask where their delivery is.",
        "Paper delivery receipts getting lost or damaged.",
        "Drivers and dispatch coordinated over calls and chats.",
      ],
      solutions: [
        "Automatic WhatsApp tracking updates at each step.",
        "Simple driver app to upload proof of delivery photos.",
        "One dashboard to see every delivery's status.",
      ],
      roi: 'Fewer "where is it?" calls, no lost receipts, and a clear view of every delivery.',
      tags: ["WhatsApp tracking", "Driver app", "Delivery photos", "Dashboard"],
      buttonText: "Talk to us about your deliveries",
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
            WHO WE HELP
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
            Built around how your business actually works.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-body)",
              lineHeight: 1.6,
            }}
          >
            Every industry has its own headaches. Here&apos;s how we help some of them.
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
            className="studio-card industry-detail-card"
            style={{
              padding: "clamp(18px, 4vw, 36px)",
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

              {/* Two Column Grid: Common Problems vs What We Build */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginBottom: "28px",
                }}
                className="pain-solution-grid"
              >
                {/* Common Problems */}
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
                    <span>Common Problems</span>
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

                {/* What We Build */}
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
                    <span>What We Build</span>
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

              {/* What Changes For You Box */}
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
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    WHAT CHANGES FOR YOU
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text-heading)",
                      lineHeight: 1.5,
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

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="btn-primary"
                style={{
                  padding: "10px 20px",
                  fontSize: "0.875rem",
                  gap: "8px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span>{current.buttonText}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
