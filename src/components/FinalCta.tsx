"use client";

import React from "react";
import { ArrowRight, MessageSquare, Sparkles, Clock, ShieldCheck } from "lucide-react";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/916396880866?text=Hi%20Cognixs%20Team!%20I%20have%20an%20idea%20and%20would%20like%20to%20scope%20a%20project.", "_blank");
  };

  return (
    <section id="contact" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Dark Obsidian Hero Block Matching Screenshot 3 */}
        <div
          style={{
            backgroundColor: "#101311",
            borderRadius: "32px",
            padding: "clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid #2C342C",
            boxShadow: "0 24px 64px -12px rgba(16, 19, 17, 0.4)",
          }}
        >
          {/* Subtle Radial Lime Glow in background */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "250px",
              background: "radial-gradient(circle, rgba(199, 243, 107, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
            {/* Top Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(199, 243, 107, 0.12)",
                border: "1px solid rgba(199, 243, 107, 0.3)",
                color: "#C7F36B",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={13} />
              <span>GET STARTED IN SPRINT WEEK 1</span>
            </div>

            {/* Master CTA Heading */}
            <h2
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#E8ECE5",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                marginBottom: "18px",
              }}
            >
              Have an idea? Let’s build it.
            </h2>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "#A6AEA5",
                lineHeight: 1.6,
                marginBottom: "36px",
              }}
            >
              Get a reply and scoping roadmap within 24 hours — just shoot us a brief note and let’s turn your vision into production.
            </p>

            {/* CTA Buttons */}
            <div
              className="final-cta-btn-group"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              <a
                href="https://wa.me/916396880866?text=Hi%20Cognixs!%20I%20would%20like%20to%20schedule%20a%20free%2020-min%20consultation%20call%20regarding%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "14px 32px",
                  fontSize: "1.05rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Book a free call</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <button
                onClick={handleWhatsApp}
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 26px",
                  borderRadius: "9999px",
                  backgroundColor: "#1A201A",
                  border: "1px solid #333E33",
                  color: "#E8ECE5",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C7F36B")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333E33")}
              >
                <MessageSquare size={17} style={{ color: "#25D366" }} />
                <span>Direct WhatsApp inquiry</span>
              </button>
            </div>

            {/* Guarantees */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap",
                fontSize: "0.8rem",
                color: "#747E73",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={14} style={{ color: "#C7F36B" }} /> &lt; 24h Response SLA
              </span>
              <span>·</span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={14} style={{ color: "#C7F36B" }} /> 100% IP & Code Ownership
              </span>
              <span>·</span>
              <span>Zero-fluff scoping session</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 480px) {
          .final-cta-btn-group {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .final-cta-btn-group a,
          .final-cta-btn-group button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
