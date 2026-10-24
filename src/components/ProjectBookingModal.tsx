"use client";

import React, { useState } from "react";
import { X, Check, ArrowRight, Sparkles, MessageSquare, Clock, Zap } from "lucide-react";

interface ProjectBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectBookingModal({ isOpen, onClose }: ProjectBookingModalProps) {
  const [selectedService, setSelectedService] = useState("Websites & Web Apps");
  const [timeline, setTimeline] = useState("2-4 Weeks (Fast Track)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    "Websites & Web Apps",
    "Cross-Platform Mobile",
    "Bespoke AI / LLM Agents",
    "End-to-End Automation",
    "Full Technical Co-Founder",
  ];

  const timelines = [
    "Immediate (Next sprint)",
    "2-4 Weeks (Fast Track)",
    "1-2 Months",
    "Flexible / Exploring",
  ];

  const sendToWhatsApp = () => {
    const lines = [
      "🚀 *New Project Inquiry | Cognixs*",
      "",
      `*Name:* ${name.trim() || "Founder"}`,
      `*Work Email:* ${email.trim() || "Not provided"}`,
      phone.trim() ? `*Phone / WhatsApp:* ${phone.trim()}` : null,
      `*Service Required:* ${selectedService}`,
      `*Target Timeline:* ${timeline}`,
      notes.trim() ? `*Project Overview:*\n${notes.trim()}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/916396880866?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    sendToWhatsApp();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(16, 19, 17, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "var(--bg-inset)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-heading)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 16px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-primary)",
                color: "#101311",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <Check size={36} strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
              Project Scope Received!
            </h3>
            <p style={{ maxWidth: "440px", margin: "0 auto 28px", color: "var(--text-body)" }}>
              A Senior Engineering Partner from Cognixs will review your requirements and reach out via WhatsApp / Email with a technical roadmap within 24 hours.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={handleWhatsAppDirect}
                className="btn-primary"
                type="button"
                style={{ background: "#25D366", color: "#FFFFFF" }}
              >
                <MessageSquare size={16} /> Open in WhatsApp
              </button>
              <button onClick={onClose} className="btn-secondary" type="button">
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  background: "var(--badge-bg)",
                  color: "var(--badge-text)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                <Sparkles size={12} /> RAPID SCOPING · 24-HOUR TURNAROUND
              </div>
              <h2 style={{ fontSize: "1.65rem", marginBottom: "6px" }}>
                Start your project with Cognixs.
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}>
                Tell us what you want to engineer. No fluff, no endless sales decks.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Service Selection */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                    color: "var(--text-heading)",
                  }}
                >
                  What do you need built?
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {services.map((item) => {
                    const isSelected = selectedService === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedService(item)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "9999px",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          border: isSelected ? "1px solid #101311" : "1px solid var(--border-subtle)",
                          backgroundColor: isSelected ? "var(--accent-primary)" : "var(--bg-inset)",
                          color: isSelected ? "#101311" : "var(--text-heading)",
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Cadence */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                    color: "var(--text-heading)",
                  }}
                >
                  Target Timeline
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {timelines.map((item) => {
                    const isSelected = timeline === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTimeline(item)}
                        style={{
                          padding: "6px 12px",
                          borderRadius: "9999px",
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          border: isSelected ? "1px solid #101311" : "1px solid var(--border-subtle)",
                          backgroundColor: isSelected ? "var(--accent-primary)" : "var(--bg-inset)",
                          color: isSelected ? "#101311" : "var(--text-muted)",
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      marginBottom: "6px",
                      color: "var(--text-heading)",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-inset)",
                      color: "var(--text-heading)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      marginBottom: "6px",
                      color: "var(--text-heading)",
                    }}
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-inset)",
                      color: "var(--text-heading)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                    color: "var(--text-heading)",
                  }}
                >
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210 (For instant project scoping)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-inset)",
                    color: "var(--text-heading)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                    color: "var(--text-heading)",
                  }}
                >
                  Brief Project Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a few sentences about your requirements, existing bottlenecks, or current stack..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-inset)",
                    color: "var(--text-heading)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1, padding: "13px" }}
                >
                  Submit Scoping Request <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 18px",
                    borderRadius: "9999px",
                    backgroundColor: "var(--bg-inset)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-heading)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: "pointer",
                  }}
                >
                  <MessageSquare size={16} style={{ color: "#25D366" }} /> WhatsApp
                </button>
              </div>

              {/* Privacy Policy Agreement */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "8px",
                }}
              >
                By submitting, you agree to our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-heading)",
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                  }}
                >
                  Privacy Policy
                </a>
                .
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  paddingTop: "6px",
                }}
              >
                <span>🔒 NDA protected. 100% intellectual property ownership.</span>
                <span>⚡ Avg response: &lt; 2 hours</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
