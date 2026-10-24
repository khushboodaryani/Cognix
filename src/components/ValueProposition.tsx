"use client";

import React from "react";
import { Zap, ShieldCheck, Scale, Headphones, Sparkles } from "lucide-react";

export default function ValueProposition() {
  const cards = [
    {
      icon: Zap,
      title: "Focused, thinking and punctual",
      desc: "We challenge unnecessary complexity. Clear schedules, sharp deliverables, and a reliable cadence so you launch ahead of your competition.",
    },
    {
      icon: ShieldCheck,
      title: "Clear pricing, no surprises",
      desc: "Fixed scopes and sprint agreements with zero hidden retainers or padded billable hours. You know exactly what gets shipped and when.",
    },
    {
      icon: Scale,
      title: "Built to scale",
      desc: "Production-grade architecture from day zero. Engineered with Next.js 15, Flutter, and PostgreSQL event queues ready for millions of requests.",
    },
    {
      icon: Headphones,
      title: "Support after launch",
      desc: "Direct engineering Slack channel, continuous performance tuning, proactive security monitoring, and guaranteed SLA support.",
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Center Hexagonal Brand Motif matching Screenshot 3 */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              margin: "0 auto 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="20" cy="20" r="4" fill="var(--accent-primary)" />
            </svg>
          </div>

          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
            Our experience, your head start.
          </h2>
        </div>

        {/* 4 Cards Grid Matching Screenshot 3 */}
        <div
          className="value-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="studio-card value-card"
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--bg-inset)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-heading)",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-heading)" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    height: "3px",
                    width: "28px",
                    backgroundColor: "var(--accent-primary)",
                    borderRadius: "9999px",
                    marginTop: "24px",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .value-grid {
            gap: 16px !important;
          }
          :global(.value-card) {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
