"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Globe, Smartphone, Bot, Workflow, ExternalLink, HeartPulse, Sparkles, TrendingUp, Layers, Activity, Building2, Database } from "lucide-react";

interface ProvenOutcomesProps {
  onOpenBooking: () => void;
}

export default function ProvenOutcomes({ onOpenBooking }: ProvenOutcomesProps) {
  const projects = [
    {
      title: "OpenTreatment — Healthcare",
      category: "Mobile",
      metric: "~1,200+ Consultations · HIPAA Compliant",
      desc: "Healthcare platform helping patients find and reach verified doctors, hospitals, and diagnostic labs across web and mobile.",
      badge: "LIVE & ON STORE",
      stack: "Next.js · React Native · Node.js · PostgreSQL",
      icon: HeartPulse,
    },
    {
      title: "Multi-Tenant SaaS CRM",
      category: "SaaS & CRM",
      metric: "24 Business Tenants · RLS Partitioned",
      desc: "Cloud multi-tenant CRM engine with dynamic PostgreSQL Row-Level Security tenant isolation, automated SSL domain routing, RBAC user admin, and real-time telemetry.",
      badge: "MULTI-TENANT SAAS",
      stack: "Next.js · Node.js · PostgreSQL (RLS) · Redis · BullMQ · Docker",
      icon: Building2,
    },
    {
      title: "TicketCRM — Helpdesk Support",
      category: "SaaS & CRM",
      metric: "~280 Monthly Inflow · 3.5h MTTR · SLA Monitored",
      desc: "SLA-driven enterprise ticketing platform with BullMQ routing, business-hour tracking, and real-time queues.",
      badge: "ENTERPRISE SUPPORT",
      stack: "React · Node.js · Express · Redis · BullMQ · Socket.IO",
      icon: Workflow,
    },
    {
      title: "Pick4U — Hyperlocal Delivery",
      category: "Websites",
      metric: "~1,400+ Orders Handled · On-Demand Dispatch",
      desc: "Fast, reliable on-demand intra-city delivery platform with live parcel dispatch, transparent pricing tiers, and automated routing.",
      badge: "HYPERLOCAL LOGISTICS",
      stack: "Next.js · React · Tailwind CSS · Node.js · Express",
      icon: Globe,
    },
    {
      title: "Makaan Marketplace API",
      category: "Websites",
      metric: "~650 Active Listings · Optimized Search",
      desc: "High-throughput real-estate marketplace API connecting builders, dealers, and buyers with automated Sharp S3 image compression.",
      badge: "SCALABLE API",
      stack: "Node.js · Express · PostgreSQL · Sequelize · AWS S3",
      icon: Globe,
    },
    {
      title: "Katan Saree Storefront",
      category: "Websites",
      metric: "+26% Mobile Conversion · Fast Web UX",
      desc: "High-performance luxury saree digital storefront engineered for global customers with multi-currency checkout and sub-second speed.",
      badge: "GLOBAL D2C",
      stack: "React · Redux · Tailwind · Stripe",
      icon: Globe,
    },
    {
      title: "Ember Events Jaipur",
      category: "Websites",
      metric: "~28 Curated Celebrations · High Client Satisfaction",
      desc: "Bespoke wedding and experiential event booking platform for premier Rajasthan celebration management.",
      badge: "SHOWCASE PORTAL",
      stack: "React · JavaScript · CSS · Vercel",
      icon: Globe,
    },
    {
      title: "Music Ed-Tech Platform",
      category: "Websites",
      metric: "Interactive Audio · Fluid Navigation",
      desc: "Modern and interactive music learning platform built with Next.js, TypeScript, Aceternity UI, and real-time audio modules.",
      badge: "INTERACTIVE EDTECH",
      stack: "Next.js · TypeScript · Aceternity UI · Tailwind",
      icon: Globe,
    },
    {
      title: "FINEbuddy Financial Dashboard",
      category: "Design",
      metric: "Responsive FinTech UX · Clear Analytics",
      desc: "Personal finance and investment management dashboard turning dense financial analytics into clear, confident daily decision-making tools.",
      badge: "FINTECH PRODUCT",
      stack: "Product Design · Dashboard · Data UX",
      icon: Layers,
    },
    {
      title: "Hit It! Fitness Gamification",
      category: "Mobile",
      metric: "+18% Daily Workout Retention",
      desc: "Product design and gamification system using habit loops, streaks, and tactile micro-interactions to lift workout engagement.",
      badge: "MOBILE UX",
      stack: "Product Design · UX Architecture · Mobile",
      icon: Activity,
      hasExternalLinks: false,
    },
    {
      title: "WhatsApp Message Scheduler",
      category: "Automation",
      metric: "Published in UX Collective Bootcamp",
      desc: "Frictionless native scheduled-message UX pattern designed to feel invisible within everyday messaging habits and queue syncs.",
      badge: "FEATURE ARCHITECTURE",
      stack: "UX Design · Systems Design · Published",
      icon: Workflow,
      hasExternalLinks: false,
    },
    {
      title: "CODEDECK Real-Time Platform",
      category: "Websites",
      metric: "Real-Time Multi-Cursor Sync",
      desc: "Developer-focused web platform for collaborative code editing, syntax evaluation, and real-time live paired programming.",
      badge: "DEV PLATFORM",
      stack: "Web Design · UI Systems · Product",
      icon: Globe,
      hasExternalLinks: false,
    },
  ];

  return (
    <section id="outcomes" className="section-padding" style={{ backgroundColor: "var(--bg-canvas)", position: "relative" }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "36px" }}>
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
            PORTFOLIO
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
            Proven outcomes in production.
          </h2>
        </div>

        {/* 6 Bento Outcome Cards in 3x2 Grid */}
        <div
          className="outcomes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="studio-card outcome-card"
                onClick={onOpenBooking}
                style={{
                  padding: "28px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "260px",
                }}
              >
                <div>
                  {/* Top Row with Badge & Arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--bg-inset)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-heading)",
                      }}
                    >
                      {item.badge}
                    </span>

                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--bg-inset)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-heading)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Wireframe Mockup Pill inside Card */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-inset)",
                      borderRadius: "12px",
                      padding: "12px",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-card)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} color="#101311" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: "6px", width: "70%", backgroundColor: "var(--border-strong)", borderRadius: "3px", marginBottom: "4px" }} />
                      <div style={{ height: "4px", width: "45%", backgroundColor: "var(--accent-primary)", borderRadius: "3px" }} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "var(--text-heading)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-body)",
                      lineHeight: 1.55,
                      marginBottom: "16px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "#16A34A",
                      fontWeight: 700,
                    }}
                  >
                    {item.metric}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.stack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .outcomes-grid {
            gap: 16px !important;
          }
          :global(.outcome-card) {
            padding: 20px 16px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
