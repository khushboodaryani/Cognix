"use client";

import React from "react";
import { Star } from "lucide-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "“Cognixs operates like an elite founding engineering team, not an agency. In 3 weeks they transformed our fragmented logistics flow into an automated WhatsApp dispatch machine.”",
      author: "Aditya Nair",
      role: "Co-founder & COO",
      company: "Omniflow Logistics",
    },
    {
      stars: 5,
      quote:
        "“The team rebuilt our entire checkout & UPI flow in Next.js. Our mobile conversion went up by 280% on Day 1. Their attention to detail on latency and design polish is world-class.”",
      author: "Pooja Singhal",
      role: "VP of Product",
      company: "Kensho Retail D2C",
    },
    {
      stars: 5,
      quote:
        "“We were drowning in manual billing between WhatsApp orders and Tally. Cognixs integrated everything seamlessly. We haven’t had to touch manual data entry in 6 months.”",
      author: "Sanjay Mehta",
      role: "Managing Director",
      company: "FinPulse NeoBank",
    },
  ];

  return (
    <section className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "40px" }}>
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
            TESTIMONIALS
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
            Client words.
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="studio-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#84CC16"
                      stroke="none"
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-heading)",
                    lineHeight: 1.65,
                    marginBottom: "24px",
                    fontWeight: 500,
                  }}
                >
                  {item.quote}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-heading)" }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {item.role} · {item.company}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    background: "var(--badge-bg)",
                    color: "var(--badge-text)",
                    fontWeight: 600,
                  }}
                >
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
