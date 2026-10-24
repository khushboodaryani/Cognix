"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Activity, CheckCircle2, ShieldAlert, Clock, ExternalLink } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState(0);

  const tabs = ["TicketCRM Helpdesk", "OpenTreatment", "Mobile & UPI"];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(199, 243, 107, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Top Tag Pill */}
        <div style={{ marginBottom: "20px" }}>
          <div
            className="pill-badge"
            style={{
              padding: "6px 14px",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span className="pulse-dot" />
            <span>WEBSITES · APPS · AI SOLUTIONS · AUTOMATION</span>
          </div>
        </div>

        {/* Master Headline */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            maxWidth: "960px",
            margin: "0 auto 20px",
            color: "var(--text-heading)",
          }}
        >
          We’ve already made the mistakes. You get{" "}
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--accent-primary)",
              color: "#101311",
              padding: "2px 16px",
              borderRadius: "16px",
              transform: "rotate(-1deg)",
              boxShadow: "0 4px 14px rgba(199, 243, 107, 0.35)",
            }}
          >
            the results.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: "0 auto 34px",
            color: "var(--text-body)",
          }}
        >
          We engineer intelligent automation systems, AI agents, enterprise software, and modern digital experiences that cut busywork and work while you sleep.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            type="button"
            style={{ padding: "14px 28px", fontSize: "1rem" }}
          >
            <span>Start a project</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
            className="btn-secondary"
            style={{ padding: "13px 26px", fontSize: "1rem", cursor: "pointer" }}
          >
            <span>See our work</span>
          </a>
        </div>

        {/* Telemetry Status Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 14px",
            borderRadius: "9999px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
            marginBottom: "44px",
            fontFamily: "var(--font-mono)",
          }}
        >
          <Activity size={14} style={{ color: "#22C55E" }} />
          <span>Live Ops: <strong style={{ color: "var(--text-heading)" }}>99.4% automated uptime</strong></span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span><strong style={{ color: "var(--text-heading)" }}>+42 hrs/mo</strong> saved per client</span>
        </div>

        {/* Fanned Multi-Device UI Mockups */}
        <div
          style={{
            position: "relative",
            maxWidth: "980px",
            margin: "0 auto",
            paddingTop: "10px",
          }}
        >
          {/* Left Angled Window Mockup (Background layer) */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-30px",
              width: "360px",
              height: "260px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "18px",
              boxShadow: "var(--shadow-md)",
              transform: "rotate(-8deg) scale(0.9)",
              opacity: 0.7,
              zIndex: 1,
              pointerEvents: "none",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            className="hidden-mobile"
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF5F56" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27C93F" }} />
            </div>
            <div style={{ height: "14px", width: "50%", background: "var(--bg-inset)", borderRadius: "4px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", flex: 1 }}>
              <div style={{ background: "var(--bg-inset)", borderRadius: "10px" }} />
              <div style={{ background: "var(--bg-inset)", borderRadius: "10px" }} />
            </div>
          </div>

          {/* Right Angled Mobile Phone Mockup (OpenTreatment Real Mobile App Screen) */}
          <div
            style={{
              position: "absolute",
              bottom: "-28px",
              right: "-28px",
              width: "255px",
              height: "520px",
              backgroundColor: "#0F1110",
              border: "5px solid #2A2E2C",
              borderRadius: "42px",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)",
              transform: "rotate(4.5deg)",
              zIndex: 4,
              pointerEvents: "none",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            className="hidden-mobile"
          >
            {/* Phone Dynamic Island / Camera Notch */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70px",
                height: "18px",
                backgroundColor: "#000000",
                borderRadius: "9999px",
                zIndex: 10,
                boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
              }}
            />

            {/* Real Mobile App Screen Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "36px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Image
                src="/assets/projects/opentreatment-mobile.png"
                alt="OpenTreatment Real Mobile App Screen"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                sizes="260px"
                priority
              />
            </div>
          </div>

          {/* Center Main Stage Window Mockup */}
          <div
            className="studio-card"
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px 24px 28px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
              background: "var(--bg-card)",
              borderRadius: "24px",
            }}
          >
            {/* Window Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border-subtle)",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {activeTelemetryTab === 0
                    ? "ticketcrm.app/analytics"
                    : activeTelemetryTab === 1
                    ? "opentreatment.in/portal"
                    : "cognixs.in/console/preview"}
                </span>
              </div>

              {/* Status Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  background: "rgba(199, 243, 107, 0.2)",
                  color: "var(--text-heading)",
                  border: "1px solid rgba(199, 243, 107, 0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                <span className="pulse-dot" />
                <span>
                  {activeTelemetryTab === 0
                    ? "TICKETCRM LIVE"
                    : activeTelemetryTab === 1
                    ? "HEALTHCARE LIVE"
                    : "PRODUCTION DEPLOY"}
                </span>
              </div>
            </div>

            {/* Dashboard Content Header & Tab Switcher */}
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                    }}
                  >
                    {activeTelemetryTab === 0
                      ? "Enterprise Support Platform"
                      : activeTelemetryTab === 1
                      ? "Healthcare & Telehealth Platform"
                      : "Mobile App & Payment Gateway"}
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-heading)", margin: "2px 0 0" }}>
                    {activeTelemetryTab === 0
                      ? "TicketCRM — SLA-Driven Helpdesk Platform"
                      : activeTelemetryTab === 1
                      ? "OpenTreatment — Verified Health Network"
                      : "FinPulse NeoBank & UPI"}
                  </h3>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTelemetryTab(idx)}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        cursor: "pointer",
                        border:
                          activeTelemetryTab === idx
                            ? "1px solid var(--accent-primary)"
                            : "1px solid var(--border-subtle)",
                        background:
                          activeTelemetryTab === idx ? "var(--accent-primary)" : "var(--bg-inset)",
                        color: activeTelemetryTab === idx ? "#101311" : "var(--text-muted)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* TAB 0: HELPDESK CRM (Using the user's uploaded dashboard screenshot) */}
              {activeTelemetryTab === 0 && (
                <div>
                  {/* Top 4 Real Metrics from Helpdesk Screenshot */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Total Inflow</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        453
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#22C55E", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                        <CheckCircle2 size={12} /> Live Multi-Channel Inflow
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>MTTR (Avg Resolution)</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        34 <span style={{ fontSize: "0.95rem" }}>HRS</span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                        <Clock size={12} /> Respects Business Hours
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>SLA Breaches Tracked</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#EF4444", fontFamily: "var(--font-mono)" }}>
                        57
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#EF4444", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                        <ShieldAlert size={12} /> Automated Escalation Rules
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(199, 243, 107, 0.12)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid rgba(199, 243, 107, 0.4)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-heading)", fontWeight: 700, textTransform: "uppercase" }}>
                        Productivity Roster
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-heading)", marginTop: "4px" }}>
                        khushboo · Moni Singh
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#84CC16", fontWeight: 600, marginTop: "2px" }}>
                        ● 3 Agents Online in Real-Time
                      </div>
                    </div>
                  </div>

                  {/* High-res Helpdesk Screenshot Frame */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid var(--border-strong)",
                      boxShadow: "var(--shadow-md)",
                    }}
                  >
                    <img
                      src="/assets/projects/ticketcrm-exact.png"
                      alt="Helpdesk TicketCRM Enterprise Analytics Dashboard"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Tech stack row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "14px",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--border-subtle)",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <span>Stack: React · Node.js · Express · MySQL · Redis · BullMQ · Socket.IO · Docker</span>
                    <span style={{ color: "#84CC16", fontWeight: 700 }}>Production SLA Engine</span>
                  </div>
                </div>
              )}

              {/* TAB 1: OPENTREATMENT SHOWCASE */}
              {activeTelemetryTab === 1 && (
                <div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Verified Consultations</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        15,000+
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#22C55E", marginTop: "2px" }}>
                        Doctors, Hospitals &amp; Labs
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Search &amp; Match Latency</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        &lt; 1.4s
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        Sub-second query resolution
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Clinical Intake Overhead</div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#84CC16", fontFamily: "var(--font-mono)" }}>
                        -45%
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        Zero front-desk bottlenecks
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(199, 243, 107, 0.12)",
                        borderRadius: "12px",
                        padding: "14px",
                        border: "1px solid rgba(199, 243, 107, 0.4)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-heading)", fontWeight: 700, textTransform: "uppercase" }}>
                        Active Platforms
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-heading)", marginTop: "4px" }}>
                        Web &amp; Android App
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#84CC16", fontWeight: 600, marginTop: "2px" }}>
                        ● Live on Google Play Store
                      </div>
                    </div>
                  </div>

                  {/* OpenTreatment Details Box with Live Links */}
                  <div
                    style={{
                      padding: "24px",
                      borderRadius: "16px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    <div style={{ maxWidth: "560px" }}>
                      <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-heading)", marginBottom: "6px" }}>
                        A healthcare platform that helps patients reach verified doctors, hospitals and labs.
                      </div>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
                        Engineered by our team for speed, security, and scale — simple to use up front, with end-to-end appointment scheduling, real-time doctor availability, and automated reminder webhooks.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <a
                        href="https://www.opentreatment.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "10px 18px", fontSize: "0.85rem", gap: "6px" }}
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MOBILE & UPI */}
              {activeTelemetryTab === 2 && (
                <div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "16px",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "14px",
                        padding: "16px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                        Avg Response Latency
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        142 ms
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#16A34A", display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                        <CheckCircle2 size={12} /> 99.98% SLA Guaranteed
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        borderRadius: "14px",
                        padding: "16px",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                        Automated Ingestion
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-mono)" }}>
                        12,840 / mo
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        WhatsApp + Tally Sync
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--accent-primary)",
                        borderRadius: "14px",
                        padding: "16px",
                        color: "#101311",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                        Autonomous Execution
                      </div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                        Zero Manual Drag
                      </div>
                      <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>
                        Engineered by Cognixs
                      </div>
                    </div>
                  </div>

                  {/* SVG Sparkline Graph */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-inset)",
                      borderRadius: "14px",
                      padding: "16px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      <span>SYSTEM THROUGHPUT &amp; SPRINT TRAJECTORY</span>
                      <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-heading)" }}>+320% Velocity</span>
                    </div>
                    <svg
                      viewBox="0 0 500 80"
                      style={{ width: "100%", height: "70px", overflow: "visible" }}
                    >
                      <defs>
                        <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#C7F36B" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,60 Q80,55 140,40 T260,35 T380,15 T500,8 L500,80 L0,80 Z"
                        fill="url(#heroGradient)"
                      />
                      <path
                        d="M0,60 Q80,55 140,40 T260,35 T380,15 T500,8"
                        fill="none"
                        stroke="#84CC16"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="500" cy="8" r="5" fill="#C7F36B" stroke="#101311" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
