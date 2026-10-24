"use client";

import React from "react";
import { Star } from "lucide-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "“Exceptional technical expertise and real attention to detail. The team operates with the discipline of elite founding engineers, turning complex requirements into clean, scalable software.”",
      author: "Jayant Sharma",
      role: "CEO",
      company: "Wanderift",
    },
    {
      stars: 5,
      quote:
        "“Full-stack expertise paired with strong problem-solving. From high-throughput backend architecture to seamless client-side performance, their execution has been nothing short of exceptional.”",
      author: "Vivek Sharma",
      role: "CTO",
      company: "TravelPartner",
    },
    {
      stars: 5,
      quote:
        "“Innovative solutions and a genuinely collaborative approach. They architected our entire digital storefront with sub-second loading speed, multi-currency checkout, and a brand-first experience.”",
      author: "Shambhav Tiwari",
      role: "Founder",
      company: "Katan Saree",
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
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="studio-card testimonial-card"
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
      <style jsx>{`
        @media (max-width: 640px) {
          .testimonials-grid {
            gap: 16px !important;
          }
          :global(.testimonial-card) {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
