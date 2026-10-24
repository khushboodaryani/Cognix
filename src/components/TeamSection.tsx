"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

interface TeamSectionProps {
  onOpenBooking?: () => void;
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GitHubIcon({ size = 17 }: { size?: number }) {
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

function TeamAvatar({
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
        width: "76px",
        height: "76px",
        borderRadius: "50%",
        border: "2px solid var(--accent-primary)",
        boxShadow: "0 0 0 3px rgba(199, 243, 107, 0.22)",
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
            fontSize: "1.45rem",
            color: "#101311",
            letterSpacing: "-0.03em",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

export default function TeamSection({ onOpenBooking }: TeamSectionProps) {
  return (
    <section id="team" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Centered Section Header */}
        <div style={{ maxWidth: "760px", margin: "0 auto 52px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "12px",
            }}
          >
            THE TEAM
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--text-heading)",
              marginBottom: "16px",
            }}
          >
            The people who{" "}
            <span
              style={{
                display: "inline-block",
                backgroundColor: "var(--accent-primary)",
                color: "#101311",
                padding: "2px 14px",
                borderRadius: "14px",
                transform: "rotate(-1deg)",
                boxShadow: "0 4px 14px rgba(199, 243, 107, 0.35)",
              }}
            >
              build your product.
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
              color: "var(--text-body)",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            No sales layer, no hand-offs. You work directly with the two developers who design, build and ship your project.
          </p>
        </div>

        {/* 2 Profile Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "stretch",
          }}
          className="team-cards-grid"
        >
          {/* Card 1: Khushboo Daryani */}
          <div
            className="studio-card team-card"
            style={{
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "24px",
              height: "100%",
            }}
          >
            <div>
              {/* Profile Top Row */}
              <div
                className="team-profile-top"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <TeamAvatar
                  src="/team/khushboo.jpg"
                  alt="Khushboo Daryani"
                  initials="KD"
                  objectPosition="center 14%"
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                    }}
                  >
                    Khushboo Daryani
                  </h3>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginBottom: "10px",
                    }}
                  >
                    Founder · Full-Stack Developer
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "var(--accent-lime-subtle)",
                      border: "1px solid var(--accent-lime-border)",
                      color: "var(--accent-forest)",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    3+ years · 20+ projects delivered
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-body)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                Full-stack developer with 3+ years of experience and 20+ projects delivered for companies across different industries, from mobile apps to full web platforms. Works across the whole stack: smooth React Native apps, responsive web interfaces, and the APIs and databases behind them. Part of the core team building OpenTreatment, a healthcare platform live on the web and Google Play.
              </p>

              {/* Skills Chips */}
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {["React Native", "React", "Node.js", "REST APIs", "Databases", "Full-Stack"].map((skill) => (
                    <span
                      key={skill}
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
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links / Icon Buttons */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/khushboo-daryani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Khushboo Daryani on LinkedIn"
                className="team-icon-btn"
                title="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href="https://github.com/khushboodaryani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Khushboo Daryani on GitHub"
                className="team-icon-btn"
                title="GitHub"
              >
                <GitHubIcon size={17} />
              </a>
            </div>
          </div>

          {/* Card 2: Lalit Chaudhary */}
          <div
            className="studio-card team-card"
            style={{
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "24px",
              height: "100%",
            }}
          >
            <div>
              {/* Profile Top Row */}
              <div
                className="team-profile-top"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <TeamAvatar
                  src="/team/lalit.jpg"
                  alt="Lalit Chaudhary"
                  initials="LC"
                  objectPosition="center 42%"
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                    }}
                  >
                    Lalit Chaudhary
                  </h3>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginBottom: "10px",
                    }}
                  >
                    Full-Stack Developer
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "var(--accent-lime-subtle)",
                      border: "1px solid var(--accent-lime-border)",
                      color: "var(--accent-forest)",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    3+ years · 20+ projects delivered
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-body)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                Full-stack developer with 3+ years of freelancing experience and 20+ projects delivered for clients. Builds web and mobile products end to end, from first screen to launch. Also leads tech at OpenTreatment, a healthcare platform live on the web and Google Play.
              </p>

              {/* Skills Chips */}
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {["Next.js", "React Native", "Node.js", "PostgreSQL", "AI & Automation"].map((skill) => (
                    <span
                      key={skill}
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
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links / Icon Buttons */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/lalit-chaudhary-1a816a21b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lalit Chaudhary on LinkedIn"
                className="team-icon-btn"
                title="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href="https://github.com/Lalitchaudhary01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lalit Chaudhary on GitHub"
                className="team-icon-btn"
                title="GitHub"
              >
                <GitHubIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Read Our Full Story Link */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--text-heading)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            className="team-story-link"
          >
            <span>Read our full story</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Stats Strip Below Cards */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "44px",
          }}
          className="team-stats-strip"
        >
          <div
            className="pill-badge"
            style={{
              padding: "8px 18px",
              fontSize: "0.8125rem",
              letterSpacing: "normal",
              textTransform: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Check size={14} style={{ color: "#84CC16" }} />
            <span>6+ years of combined experience</span>
          </div>

          <div
            className="pill-badge"
            style={{
              padding: "8px 18px",
              fontSize: "0.8125rem",
              letterSpacing: "normal",
              textTransform: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Check size={14} style={{ color: "#84CC16" }} />
            <span>40+ projects delivered between us</span>
          </div>

          <div
            className="pill-badge"
            style={{
              padding: "8px 18px",
              fontSize: "0.8125rem",
              letterSpacing: "normal",
              textTransform: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Check size={14} style={{ color: "#84CC16" }} />
            <span>Web, Android &amp; iOS</span>
          </div>
        </div>

        {/* Muted CTA line under strip */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
          }}
        >
          Want to talk to us directly?{" "}
          <button
            type="button"
            onClick={() => {
              if (onOpenBooking) {
                onOpenBooking();
              }
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "inherit",
              fontSize: "inherit",
              color: "var(--text-heading)",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              marginLeft: "4px",
              transition: "color 0.15s ease",
            }}
            className="team-cta-link"
          >
            Book a free call &rarr;
          </button>
        </div>
      </div>

      <style jsx>{`
        .team-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          color: var(--text-heading);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-icon-btn:hover {
          background-color: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #101311;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(199, 243, 107, 0.35);
        }
        .team-cta-link:hover {
          color: #84CC16 !important;
        }

        @media (max-width: 860px) {
          :global(.team-cards-grid) {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          :global(.team-stats-strip) {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          :global(.team-stats-strip .pill-badge) {
            justify-content: center !important;
            width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          :global(.team-card) {
            padding: 22px 18px !important;
          }
        }
        @media (max-width: 440px) {
          :global(.team-profile-top) {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
