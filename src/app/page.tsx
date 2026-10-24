"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesBento from "@/components/ServicesBento";
import AutomationVisualizer from "@/components/AutomationVisualizer";
import IndustriesMatrix from "@/components/IndustriesMatrix";
import SelectedDeepDive from "@/components/SelectedDeepDive";
import ProvenOutcomes from "@/components/ProvenOutcomes";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import PredictableCadence from "@/components/PredictableCadence";
import ValueProposition from "@/components/ValueProposition";
import TeamSection from "@/components/TeamSection";
import IntegrationStack from "@/components/IntegrationStack";
import FaqSection from "@/components/FaqSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ProjectBookingModal from "@/components/ProjectBookingModal";
import { scrollToSection } from "@/utils/scroll";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // If URL has a hashtag on load, remove it immediately to keep address bar clean
    if (window.location.hash) {
      const hashTarget = window.location.hash.replace("#", "");
      window.history.replaceState(null, "", window.location.pathname);
      setTimeout(() => {
        scrollToSection(hashTarget);
      }, 50);
    }

    // Check for ?section= parameter from cross-page navigation
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    if (section) {
      window.history.replaceState(null, "", window.location.pathname);
      setTimeout(() => {
        scrollToSection(section);
      }, 50);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ flex: 1 }}>
        {/* Hero Section with Live Telemetry & Clear Proposition */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Ecosystem & Integration Marquee */}
        <BrandMarquee />

        {/* 4 Core Offerings Services Bento */}
        <ServicesBento onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Live Automation Pipeline Visualizer (Interactive Showpiece) */}
        <AutomationVisualizer />

        {/* Selected Deep Dive Case Studies with Real-Time Telemetry (Work section) */}
        <SelectedDeepDive onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Proven Outcomes in Production (6 Bento Cards & Filters) */}
        <ProvenOutcomes onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Sector-Specific Bottlenecks & Solutions (Inspired by Apitide Industry Breakdown) */}
        <IndustriesMatrix onOpenBooking={() => setIsBookingOpen(true)} />

        {/* The Old Way vs The Cognixs Studio Model (High-Contrast Comparison) */}
        <ComparisonMatrix onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 4-Stage SDLC Sprint Methodology */}
        <PredictableCadence />

        {/* Our Experience, Your Head Start (4 Value Cards) */}
        <ValueProposition />

        {/* The Team - The people who build your product */}
        <TeamSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Indian Enterprise & Startup Integration Stack */}
        <IntegrationStack />

        {/* Frequently Asked Questions (Objection Handling & Technical Clarity) */}
        <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Verified Client Testimonials */}
        <ClientTestimonials />

        {/* High Conversion CTA */}
        <FinalCta onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Studio Footer with Watermark */}
      <Footer />

      {/* Interactive Project Booking & Scoping Modal */}
      <ProjectBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
