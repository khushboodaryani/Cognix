"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface DeepDiveProps {
  onOpenBooking: () => void;
}

export default function SelectedDeepDive({ onOpenBooking }: DeepDiveProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const projects = [
    {
      title: "OpenTreatment",
      client: "OpenTreatment, healthcare platform",
      industry: "HEALTHCARE",
      problem:
        "Patients and clinics struggled with offline scheduling, delayed reports, and long clinic queues.",
      engineered:
        "A healthcare platform with a web portal and mobile app, real-time doctor availability, digital records, and quick clinic search.",
      result: "Live healthcare platform with doctor booking and medical records",
      image: "/assets/projects/opentreatment-health.png",
      websiteUrl: "https://www.opentreatment.in/",
      stack: ["Next.js", "React Native", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      title: "Ember Events",
      client: "Ember Events, event management website",
      industry: "EVENTS & WEDDINGS",
      problem:
        "An event planning company needed a website that shows off their weddings, corporate and social events beautifully, and turns visitors into enquiries, without being slow on mobile.",
      engineered:
        "A fast, visual website with event galleries, service pages and an enquiry form that sends leads straight to the team's inbox, plus smooth animations that keep it feeling premium.",
      result: "Live website with galleries, service pages and instant enquiry capture",
      image: "/assets/projects/ember-events-exact.png",
      websiteUrl: "https://www.emberevents.in",
      stack: ["React", "Tailwind CSS", "EmailJS", "Framer Motion", "Vercel"],
    },
    {
      title: "Katan Saree",
      client: "Katan Saree, online saree store",
      industry: "FASHION E-COMMERCE",
      problem:
        "A handcrafted silk saree brand needed an online store that does justice to their products: rich photos, easy browsing by collection, and a smooth checkout on mobile.",
      engineered:
        "A full e-commerce website with collections, product pages, wishlist, cart and online checkout, designed to keep high-quality product images fast on mobile.",
      result: "Live online store with collections, cart and online payments",
      image: "/assets/projects/katan-saree-exact.jpg",
      websiteUrl: "https://katar-saree.vercel.app",
      stack: ["React", "Redux", "Tailwind CSS", "Stripe", "Next.js", "Express"],
    },
    {
      title: "Pick4U",
      client: "Pick4U, local delivery platform",
      industry: "LOCAL DELIVERY",
      problem:
        "A local delivery business needed customers to book pickups online instead of calling, with clear pricing and the option to track their delivery.",
      engineered:
        "A delivery booking platform with same-hour, same-day and scheduled delivery options, clear pricing, online booking, and login for customers.",
      result: "Live booking platform for same-hour, same-day and scheduled deliveries",
      image: "/assets/projects/pick4u-exact.png",
      websiteUrl: "https://pick4u.vercel.app",
      stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "Vercel"],
    },
    {
      title: "Music School",
      client: "Music school, learning website",
      industry: "EDUCATION",
      problem:
        "A music school wanted a modern website that feels as creative as the music they teach, and makes it easy for students to explore courses and meet instructors.",
      engineered:
        "A modern, animated website with course pages, instructor profiles and contact options, designed and built from Figma to live site.",
      result: "Live website showcasing courses and instructors",
      image: "/assets/projects/music-ed-tech-exact.png",
      websiteUrl: "https://music-ed-tech-beryl.vercel.app",
      stack: ["Next.js", "TypeScript", "Aceternity UI", "Tailwind CSS", "Figma"],
    },
  ];

  // Auto-scroll / Auto-swipe timer (4.5s cadence, pauses on hover or user interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const goToNext = () => setActiveTab((prev) => (prev + 1) % projects.length);
  const goToPrev = () => setActiveTab((prev) => (prev - 1 + projects.length) % projects.length);

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  const current = projects[activeTab];

  return (
    <section id="work" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        {/* Section Header with Sleek Auto-Scroll Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div>
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
              OUR WORK
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              Projects we&apos;ve built.
            </h2>
          </div>

          {/* Auto-Slide Carousel Controls & Progress Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Slide Index Counter */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              0{activeTab + 1} / 0{projects.length}
            </span>

            {/* Progress Segment Bars */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {projects.map((proj, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={proj.title}
                    type="button"
                    aria-label={`Jump to ${proj.title}`}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      height: "6px",
                      width: isActive ? "32px" : "12px",
                      borderRadius: "9999px",
                      backgroundColor: isActive ? "var(--accent-primary)" : "var(--border-strong)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                );
              })}
            </div>

            {/* Prev / Next Arrows */}
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                type="button"
                aria-label="Previous Project"
                onClick={goToPrev}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-heading)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next Project"
                onClick={goToNext}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-heading)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Master Deep Dive Split Card with Auto-Swipe on Hover Pause */}
        <div
          className="studio-card deep-dive-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "44px",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left Column: Problem, Built, Result & Live Link */}
          <div>
            <div style={{ marginBottom: "22px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}
              >
                {current.industry}
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-heading)" }}>
                {current.client}
              </h3>
            </div>

            {/* PROBLEM block */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                PROBLEM
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {current.problem}
              </p>
            </div>

            {/* WHAT WE BUILT block */}
            <div style={{ marginBottom: "22px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                WHAT WE BUILT
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {current.engineered}
              </p>
            </div>

            {/* RESULT highlighted lime callout */}
            <div
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#101311",
                padding: "13px 18px",
                borderRadius: "14px",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.925rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "22px",
                boxShadow: "0 2px 10px rgba(199, 243, 107, 0.3)",
              }}
            >
              <CheckCircle2 size={18} strokeWidth={2.5} />
              <span>{current.result}</span>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "26px" }}>
              {current.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    backgroundColor: "var(--bg-inset)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Website Link Only */}
            <div>
              {current.websiteUrl ? (
                <a
                  href={current.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    borderRadius: "9999px",
                    backgroundColor: "var(--accent-primary)",
                    color: "#101311",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-display)",
                    textDecoration: "none",
                    boxShadow: "0 2px 12px rgba(199, 243, 107, 0.35)",
                    transition: "transform 0.15s ease",
                  }}
                >
                  <Globe size={15} />
                  <span>Visit Live Website</span>
                  <ExternalLink size={13} style={{ opacity: 0.8 }} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-heading)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: 0,
                  }}
                >
                  <span>Inquire about this architecture</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Clean Visual Showcase Window */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Window Header Bar */}
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
              <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
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
                  letterSpacing: "0.04em",
                }}
              >
                LIVE
              </span>
            </div>

            {/* Uncropped, Full-Fidelity Project Screenshot */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9.5",
                backgroundColor: "var(--bg-inset)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                key={current.image}
                src={current.image}
                alt={current.client}
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                sizes="(max-width: 900px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.deep-dive-card) {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
