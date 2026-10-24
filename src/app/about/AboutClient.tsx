"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectBookingModal from "@/components/ProjectBookingModal";
import CognixsLogo from "@/components/CognixsLogo";
import {
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  KeyRound,
  Globe,
  Smartphone,
  Bot,
  Zap,
  ArrowRight,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function ProfileAvatar({
  src,
  alt,
  initials,
  objectPosition = "center 20%",
}: {
  src: string;
  alt: string;
  initials: string;
  objectPosition?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        width: "clamp(220px, 28vw, 280px)",
        height: "clamp(220px, 28vw, 280px)",
        borderRadius: "28px",
        border: "2px solid var(--accent-primary)",
        boxShadow: "0 0 0 4px rgba(199, 243, 107, 0.22)",
        overflow: "hidden",
        backgroundColor: "var(--accent-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: objectPosition,
            display: "block",
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "3.5rem",
            color: "#101311",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

export default function AboutClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/916396880866?text=Hi%20Cognixs!%20I'd%20like%20to%20discuss%20a%20project.",
      "_blank"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-canvas)",
      }}
    >
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ flex: 1 }}>
        {/* ======================================================== */}
        {/* SECTION 1: HERO (centered) */}
        {/* ======================================================== */}
        <section
          style={{
            position: "relative",
            padding: "clamp(64px, 8vw, 108px) 24px clamp(56px, 7vw, 84px)",
            textAlign: "center",
            overflow: "hidden",
          }}
          className="bg-grid-pattern"
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "320px",
              background:
                "radial-gradient(circle, rgba(199, 243, 107, 0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "880px",
              margin: "0 auto",
            }}
          >
            {/* Label Pill */}
            <div
              className="pill-badge"
              style={{
                marginBottom: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={13} style={{ color: "var(--accent-forest)" }} />
              <span>ABOUT COGNIXS</span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                color: "var(--text-heading)",
                marginBottom: "22px",
              }}
            >
              Two developers. One promise:{" "}
              <span
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#101311",
                  padding: "2px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                build it right.
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "var(--text-body)",
                lineHeight: 1.65,
                maxWidth: "760px",
                margin: "0 auto 36px",
              }}
            >
              Cognixs is a small tech studio from Delhi NCR. We design and build
              websites, mobile apps and AI automations for growing businesses,
              and you work directly with the people writing the code.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                <span>Book a free call</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/#work"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <span>See our work</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: OUR STORY (two columns: text left, visual right) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 92px) 24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(36px, 5vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Left Column: Text */}
              <div>
                <div
                  className="pill-badge"
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  OUR STORY
                </div>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.8vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--text-heading)",
                    marginBottom: "24px",
                    lineHeight: 1.15,
                  }}
                >
                  Why we started Cognixs
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                    color: "var(--text-body)",
                  }}
                >
                  <p>
                    Between the two of us, we&apos;ve spent 6+ years building
                    software. Lalit as a freelancer, delivering projects for
                    clients and startups, and Khushboo inside product-based
                    companies, building apps used by real customers every day.
                    More than 40 projects, from business websites to full
                    mobile apps.
                  </p>
                  <p>
                    Along the way we kept seeing the same thing. Business owners
                    paying for software they didn&apos;t understand, waiting
                    months for updates, and getting handed off from salespeople
                    to junior developers they never met.
                  </p>
                  <p>
                    So we started Cognixs to work the way we&apos;d want to be
                    treated as clients: clear pricing, honest advice, weekly
                    progress, and direct access to the people actually building
                    your product.
                  </p>
                </div>
              </div>

              {/* Right Column: Simple Visual Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "28px",
                  padding: "clamp(36px, 5vw, 48px) clamp(24px, 4vw, 36px)",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Ambient glow inside card */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(199, 243, 107, 0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Cognixs Logo Mark */}
                <div style={{ marginBottom: "28px" }}>
                  <CognixsLogo size="lg" showWordmark={true} />
                </div>

                {/* Stacked Stat Pills */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                    maxWidth: "320px",
                  }}
                >
                  {[
                    "6+ years combined experience",
                    "40+ projects delivered",
                    "Web, Android & iOS",
                  ].map((stat) => (
                    <div
                      key={stat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 16px",
                        backgroundColor: "var(--bg-inset)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--text-heading)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "var(--accent-primary)",
                          color: "#101311",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: WHAT WE BELIEVE (4 cards in a grid, 2x2 on desktop) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 92px) 24px",
            backgroundColor: "var(--bg-card-subtle)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div
                className="pill-badge"
                style={{
                  marginBottom: "16px",
                }}
              >
                HOW WE WORK
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-heading)",
                  lineHeight: 1.15,
                }}
              >
                What you can expect from us
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  title: "Honest advice",
                  text: "We'll tell you what you need, and what you don't. Sometimes the best answer is a simpler solution.",
                  icon: Sparkles,
                },
                {
                  title: "Clear pricing",
                  text: "A fixed quote for an agreed scope before we start. No hidden charges, no surprise invoices.",
                  icon: ShieldCheck,
                },
                {
                  title: "Weekly progress",
                  text: "You see real progress every week, with test links you can open on your own phone.",
                  icon: Clock,
                },
                {
                  title: "You own everything",
                  text: "Once the project is paid for, the code, design and accounts are yours. No lock-in.",
                  icon: KeyRound,
                },
              ].map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "20px",
                      padding: "32px 28px",
                      boxShadow: "var(--shadow-sm)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                    className="feature-card"
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        backgroundColor: "var(--accent-lime-subtle)",
                        border: "1px solid var(--accent-lime-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-forest)",
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--text-heading)",
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.9625rem",
                        color: "var(--text-body)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: THE TEAM (detailed profiles, alternating photo left/right) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 96px) 24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                className="pill-badge"
                style={{
                  marginBottom: "16px",
                }}
              >
                THE TEAM
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-heading)",
                  lineHeight: 1.15,
                }}
              >
                The people behind Cognixs
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "48px",
              }}
            >
              {/* Profile 1: Khushboo Daryani (Photo Left, Info Right on Desktop) */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "28px",
                  padding: "clamp(28px, 4vw, 44px)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="profile-row profile-row-normal"
              >
                <div className="profile-photo-col">
                  <ProfileAvatar
                    src="/team/khushboo.jpg"
                    alt="Khushboo Daryani"
                    initials="KD"
                    objectPosition="center 14%"
                  />
                </div>

                <div className="profile-info-col">
                  <div style={{ marginBottom: "12px" }}>
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "var(--text-heading)",
                        marginBottom: "4px",
                      }}
                    >
                      Khushboo Daryani
                    </h3>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "#4D7C0F",
                        fontWeight: 600,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      Founder · Full-Stack Developer
                    </div>
                  </div>

                  {/* Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {["3+ years", "20+ projects delivered", "Mobile & Web"].map(
                      (pill) => (
                        <span
                          key={pill}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "var(--bg-inset)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-heading)",
                            fontWeight: 600,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {pill}
                        </span>
                      )
                    )}
                  </div>

                  {/* Bio: 2 Paragraphs */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      fontSize: "0.9625rem",
                      lineHeight: 1.65,
                      color: "var(--text-body)",
                      marginBottom: "22px",
                    }}
                  >
                    <p>
                      Khushboo is a full-stack developer with 3+ years of
                      experience and 20+ projects delivered for companies across
                      different industries. She works across the whole stack:
                      smooth React Native mobile apps, responsive web interfaces,
                      and the APIs and databases behind them.
                    </p>
                    <p>
                      Her years at a digital agency taught her how to run
                      projects properly: clear timelines, clean code and on-time
                      delivery. She&apos;s also part of the core team building
                      OpenTreatment.
                    </p>
                  </div>

                  {/* Chips: What she works on */}
                  <div style={{ marginBottom: "22px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {[
                        "React Native",
                        "React",
                        "Node.js",
                        "REST APIs",
                        "Databases",
                      ].map((chip) => (
                        <span
                          key={chip}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 11px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                            backgroundColor: "var(--bg-card-subtle)",
                            color: "var(--text-heading)",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 500,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links: LinkedIn & GitHub */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/khushboo-daryani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Khushboo Daryani on LinkedIn"
                      className="profile-social-btn"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={17} />
                    </a>
                    <a
                      href="https://github.com/khushboodaryani"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Khushboo Daryani on GitHub"
                      className="profile-social-btn"
                      title="GitHub"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile 2: Lalit Chaudhary (Info Left, Photo Right on Desktop) */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "28px",
                  padding: "clamp(28px, 4vw, 44px)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="profile-row profile-row-reverse"
              >
                <div className="profile-photo-col">
                  <ProfileAvatar
                    src="/team/lalit.jpg"
                    alt="Lalit Chaudhary"
                    initials="LC"
                    objectPosition="center 42%"
                  />
                </div>

                <div className="profile-info-col">
                  <div style={{ marginBottom: "12px" }}>
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "var(--text-heading)",
                        marginBottom: "4px",
                      }}
                    >
                      Lalit Chaudhary
                    </h3>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "#4D7C0F",
                        fontWeight: 600,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      Full-Stack Developer
                    </div>
                  </div>

                  {/* Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {["3+ years", "20+ projects delivered", "Delhi NCR"].map(
                      (pill) => (
                        <span
                          key={pill}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "var(--bg-inset)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-heading)",
                            fontWeight: 600,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {pill}
                        </span>
                      )
                    )}
                  </div>

                  {/* Bio: 2 Paragraphs */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      fontSize: "0.9625rem",
                      lineHeight: 1.65,
                      color: "var(--text-body)",
                      marginBottom: "22px",
                    }}
                  >
                    <p>
                      Lalit is a full-stack developer with 3+ years of freelancing
                      experience and 20+ projects delivered for clients, from
                      business websites and online stores to booking platforms
                      and mobile apps. He enjoys taking an idea from the first
                      sketch all the way to a live product.
                    </p>
                    <p>
                      He also leads tech at OpenTreatment, a healthcare platform
                      that helps patients compare doctors, hospitals and labs by
                      price, live on the web and on Google Play. When he&apos;s
                      not coding, you&apos;ll usually find him on a Himalayan
                      trek.
                    </p>
                  </div>

                  {/* Chips: What he works on */}
                  <div style={{ marginBottom: "22px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {[
                        "Next.js",
                        "React Native",
                        "Node.js",
                        "PostgreSQL",
                        "AI & Automation",
                      ].map((chip) => (
                        <span
                          key={chip}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 11px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                            backgroundColor: "var(--bg-card-subtle)",
                            color: "var(--text-heading)",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 500,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links: LinkedIn & GitHub */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/lalit-chaudhary-1a816a21b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Lalit Chaudhary on LinkedIn"
                      className="profile-social-btn"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={17} />
                    </a>
                    <a
                      href="https://github.com/Lalitchaudhary01"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Lalit Chaudhary on GitHub"
                      className="profile-social-btn"
                      title="GitHub"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: WHAT WE BUILT TOGETHER (one wide card) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 92px) 24px",
            backgroundColor: "var(--bg-card-subtle)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div
                className="pill-badge"
                style={{
                  marginBottom: "16px",
                }}
              >
                BUILT BY US
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-heading)",
                  lineHeight: 1.15,
                }}
              >
                OpenTreatment
              </h2>
            </div>

            {/* Wide Card */}
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "28px",
                padding: "clamp(28px, 4vw, 44px)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  color: "var(--text-body)",
                  lineHeight: 1.7,
                  maxWidth: "880px",
                  margin: "0 auto 32px",
                  textAlign: "center",
                }}
              >
                A healthcare price-transparency platform for patients in India.
                Compare doctors, hospitals and labs with upfront prices, book
                visits, track appointments and keep family health records in one
                place. Built end to end: website, Android app and admin tools.
              </p>

              {/* Browser Frame Showcase */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-inset)",
                  boxShadow: "var(--shadow-lg)",
                  marginBottom: "32px",
                }}
              >
                {/* Browser Top Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 18px",
                    backgroundColor: "var(--bg-inset)",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#FF5F56",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#FFBD2E",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#27C93F",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg-card)",
                      padding: "4px 16px",
                      borderRadius: "9999px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    opentreatment.in
                  </div>

                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      background: "rgba(34, 197, 94, 0.12)",
                      color: "#16A34A",
                      fontWeight: 700,
                    }}
                  >
                    LIVE
                  </span>
                </div>

                {/* Screenshot */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9.5",
                    backgroundColor: "var(--bg-inset)",
                  }}
                >
                  <Image
                    src="/work/opentreatment-web.png"
                    alt="OpenTreatment healthcare platform"
                    fill
                    sizes="(max-width: 1120px) 100vw, 1120px"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://opentreatment.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <Globe size={16} />
                  <span>Visit opentreatment.in</span>
                  <ExternalLink size={14} style={{ opacity: 0.8 }} />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.opentreatment.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <Smartphone size={16} />
                  <span>Get the Android app</span>
                  <ExternalLink size={14} style={{ opacity: 0.8 }} />
                </a>
              </div>
            </div>

            {/* Below the card: text link */}
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <Link
                href="/#work"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--text-heading)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "color 0.15s ease",
                }}
                className="section-text-link"
              >
                <span>See all our work</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6: WHAT WE DO (compact row of 4 items) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 84px) 24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div
                className="pill-badge"
                style={{
                  marginBottom: "12px",
                }}
              >
                WHAT WE DO
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Websites",
                  line: "Websites that bring you customers",
                  icon: Globe,
                },
                {
                  title: "Mobile Apps",
                  line: "Android & iOS apps people enjoy",
                  icon: Smartphone,
                },
                {
                  title: "AI Solutions",
                  line: "Chatbots that reply even at 2 AM",
                  icon: Bot,
                },
                {
                  title: "Automation",
                  line: "Stop doing the same task twice",
                  icon: Zap,
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "18px",
                      padding: "24px 20px",
                      boxShadow: "var(--shadow-sm)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        backgroundColor: "var(--accent-lime-subtle)",
                        border: "1px solid var(--accent-lime-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-forest)",
                      }}
                    >
                      <IconComponent size={18} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-heading)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-body)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.line}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Link to explore services */}
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link
                href="/#services"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--text-heading)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "color 0.15s ease",
                }}
                className="section-text-link"
              >
                <span>Explore services</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 7: FINAL CTA (same style as homepage final CTA) */}
        {/* ======================================================== */}
        <section
          style={{
            padding: "clamp(56px, 7vw, 92px) 24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
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
                  background:
                    "radial-gradient(circle, rgba(199, 243, 107, 0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "680px",
                  margin: "0 auto",
                }}
              >
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
                  <span>DIRECT ACCESS TO DEVELOPERS</span>
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
                  Let&apos;s build something together.
                </h2>

                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    color: "#A6AEA5",
                    lineHeight: 1.6,
                    marginBottom: "36px",
                  }}
                >
                  Tell us what you&apos;re working on. You&apos;ll talk directly to
                  Lalit or Khushboo, not a sales team.
                </p>

                {/* CTA Buttons */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="btn-primary"
                    style={{
                      padding: "13px 28px",
                      fontSize: "1rem",
                    }}
                  >
                    <span>Book a free call</span>
                    <ArrowRight size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn-dark"
                    style={{
                      padding: "13px 26px",
                      fontSize: "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <MessageSquare size={17} style={{ color: "var(--accent-primary)" }} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Project Consultation & Scoping Modal */}
      <ProjectBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <style jsx>{`
        .profile-row {
          display: flex;
          align-items: center;
          gap: clamp(28px, 4vw, 48px);
        }
        .profile-row-normal {
          flex-direction: row;
        }
        .profile-row-reverse {
          flex-direction: row-reverse;
        }
        .profile-photo-col {
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
        }
        .profile-info-col {
          flex: 1;
          min-width: 0;
        }
        .profile-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--bg-inset);
          border: 1px solid var(--border-subtle);
          color: var(--text-body);
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .profile-social-btn:hover {
          background-color: var(--accent-primary);
          color: #101311;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(199, 243, 107, 0.3);
        }
        .section-text-link:hover,
        .team-story-link:hover {
          color: #4D7C0F !important;
        }

        @media (max-width: 820px) {
          .profile-row {
            flex-direction: column !important;
            text-align: left;
            align-items: flex-start;
          }
          .profile-photo-col {
            width: 100%;
            justifyContent: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
