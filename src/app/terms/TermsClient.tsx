"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectBookingModal from "@/components/ProjectBookingModal";

export default function TermsClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ flex: 1, padding: "clamp(32px, 5vw, 48px) clamp(16px, 4vw, 24px) clamp(64px, 8vw, 96px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Top Header */}
          <div style={{ marginBottom: "40px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                marginBottom: "24px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.15s ease",
              }}
              className="back-home-link"
            >
              &larr; Back to home
            </Link>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
                marginBottom: "10px",
              }}
            >
              LEGAL
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "var(--text-heading)",
                marginBottom: "10px",
              }}
            >
              Terms of Service
            </h1>

            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Last updated: [DATE]
            </div>
          </div>

          {/* Terms of Service Content */}
          <div className="legal-content">
            <p>
              Welcome to Cognixs. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of our website ([cognixs.in]) and establish the commercial foundation for digital product engineering, design, and automation services provided by Cognixs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operated by <strong>[LEGAL NAME]</strong> in <strong>New Delhi</strong>, India.
            </p>
            <p>
              By accessing our website, requesting a consultation, or engaging our studio for a project, you agree to these Terms. Please read them carefully.
            </p>

            <h2>1. Our Services and Project Proposals</h2>
            <p>
              Cognixs designs and engineers websites, mobile applications, bespoke AI agents, and business automations. The descriptions, case studies, and capability overviews on our website are provided for general informational purposes.
            </p>
            <p>
              Every active client engagement is governed by a separate written proposal, quote, or Statement of Work (SOW) agreed between Cognixs and the client. The proposal defines the specific deliverables, technical architecture, project milestones, pricing, and timelines for that engagement.
            </p>
            <p>
              <strong>Precedence:</strong> If there is any direct contradiction or conflict between these website Terms and your specific written project proposal, the terms of the project proposal will prevail.
            </p>

            <h2>2. Quotes, Invoices, and Payments</h2>
            <ul>
              <li>
                <strong>Quote Validity:</strong> Price estimates and project quotes issued by Cognixs remain valid for <strong>[15]</strong> calendar days from the date of issue, after which they may be subject to review based on availability and technical requirements.
              </li>
              <li>
                <strong>Default Payment Schedule:</strong> Unless a customized milestone schedule is agreed upon in your project proposal, our standard payment terms are:
                <ul>
                  <li><strong>[50]%</strong> advance deposit prior to the start of work; and</li>
                  <li><strong>[50]%</strong> balance payment upon completion of agreed deliverables, before final code handover, production launch, or store transfer.</li>
                </ul>
              </li>
              <li>
                <strong>Third-Party Costs:</strong> All external third-party subscriptions and infrastructure fees are paid directly by the client. This includes, but is not limited to: domain names, web/cloud hosting (such as Vercel or AWS), Apple Developer Program and Google Play Console fees, paid API services, SMS/WhatsApp messaging fees, and AI token consumption (such as OpenAI or Anthropic).
              </li>
            </ul>

            <h2>3. Changes to Project Scope</h2>
            <p>
              We scope every project carefully to ensure high velocity and predictable delivery. If you wish to add new features, adjust existing specifications, or expand project scope after kickoff, we will evaluate the request and provide a clear written estimate detailing additional costs and timeline adjustments.
            </p>
            <p>
              Work on out-of-scope requests begins only after your written confirmation or approval.
            </p>

            <h2>4. Client Responsibilities</h2>
            <p>A successful, on-time build relies on close collaboration. As a client, you agree to:</p>
            <ul>
              <li>Provide accurate, clear, and complete business information, assets, brand guidelines, and technical access required for the build.</li>
              <li>Designate a primary contact person with decision-making authority for milestone reviews and sign-offs.</li>
              <li>Review deliverables and provide consolidated, constructive feedback within the timeframes outlined in the project plan.</li>
              <li>Confirm and warrant that all content, logos, trademarks, data, and materials supplied by you do not violate any copyright, trademark, or third-party intellectual property rights.</li>
            </ul>

            <h2>5. Ownership of Work and Intellectual Property</h2>
            <ul>
              <li>
                <strong>Custom Work Handover:</strong> Upon receipt of 100% full payment of all agreed fees for the project, you own full intellectual property rights to the custom design files, graphics, and custom application source code created specifically for your project.
              </li>
              <li>
                <strong>Open-Source &amp; Third-Party Libraries:</strong> Software frameworks, standard utilities, plugins, open-source packages (such as Next.js, React Native, Node.js packages), and pre-existing third-party APIs used in your project remain governed by their respective open-source or proprietary licenses.
              </li>
              <li>
                <strong>Portfolio Showcase:</strong> We take pride in what we build. Cognixs reserves the right to feature the completed project, screenshots, and an overview of the work in our portfolio, website case studies, and social channels, unless you explicitly request otherwise in writing prior to completion.
              </li>
            </ul>

            <h2>6. Confidentiality</h2>
            <p>
              Both Cognixs and the client agree to hold all non-public business strategies, customer lists, architectural blueprints, trade secrets, and proprietary code in strict confidence. Neither party will disclose confidential information to any third party without prior written consent, except where disclosure is required by applicable law or a competent court in India.
            </p>

            <h2>7. Support After Launch</h2>
            <p>
              Every completed build includes a post-launch stabilization window (as specified in your project proposal) during which we address technical bugs or deviations from the agreed scope at no extra charge.
            </p>
            <p>
              Ongoing maintenance, operating system/framework updates, feature iterations, and dedicated SLA support beyond the initial window are provided under separate monthly sprint retainers or agreed on-demand support arrangements.
            </p>

            <h2>8. Acceptable Use of Our Website</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Attempt to compromise, probe, reverse engineer, or disrupt the website, servers, or underlying infrastructure.</li>
              <li>Transmit any viruses, malware, worms, or malicious scripts.</li>
              <li>Scrape, crawl, or harvest content, code, or personal data using automated bots without our express written permission.</li>
              <li>Submit false, fraudulent, or abusive inquiries through our contact or booking forms.</li>
            </ul>

            <h2>9. No Guaranteed Business Results; Website Provided &ldquo;As Is&rdquo;</h2>
            <p>
              We engineer robust, high-performance digital systems. However, real-world business success, conversion rates, search engine rankings, sales volumes, and customer adoption depend on numerous factors outside our control, including market conditions, pricing, customer demand, and marketing efforts. As such, we cannot and do not guarantee specific financial results or commercial outcomes.
            </p>
            <p>
              Our website and informational materials are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, statutory, or implied.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>To the fullest extent permitted under applicable Indian law:</p>
            <ul>
              <li>
                Neither Cognixs, its founders, nor its contractors will be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, lost revenue, business interruption, or loss of data, arising out of or related to our website or services.
              </li>
              <li>
                Cognixs&rsquo;s total aggregate liability for all claims arising out of or connected with any project engagement shall be strictly limited to and will not exceed the total amount actually paid by you to Cognixs for that specific project.
              </li>
            </ul>

            <h2>11. Third-Party Services and Platforms</h2>
            <p>
              Our builds frequently integrate with or run on external third-party services, including cloud hosting providers (such as Vercel or AWS), mobile app stores (Apple App Store, Google Play), payment gateways (such as Razorpay), messaging APIs (WhatsApp Cloud API), and AI platforms (such as OpenAI or Anthropic).
            </p>
            <p>
              Cognixs is not responsible for outages, service interruptions, policy shifts, account rejections, rate limits, or price changes imposed by these third-party platforms.
            </p>

            <h2>12. Ending a Project (Termination)</h2>
            <p>
              Either party may terminate an ongoing project engagement upon written notice if the other party materially breaches these Terms or the project proposal and fails to cure such breach within 14 calendar days of receiving notice.
            </p>
            <p>
              If a project is terminated early, the client will pay Cognixs for all work delivered and hours completed up to the date of termination. Once paid, Cognixs will hand over all paid-for deliverables and work completed to date. All advance milestone deposits are non-refundable to the extent work has already been performed.
            </p>

            <h2>13. Governing Law and Jurisdiction</h2>
            <p>
              These Terms, all project agreements, and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of India.
            </p>
            <p>
              Any legal action, suit, or proceeding arising under or relating to these Terms or our services will be subject to the exclusive jurisdiction of the competent courts in <strong>New Delhi</strong>, India.
            </p>

            <h2>14. Changes to These Terms</h2>
            <p>
              We reserve the right to revise or update these Terms of Service at any time. The updated version will be published on this page with the revised &ldquo;Last updated&rdquo; date. Your continued use of our website or services after any modifications indicates your acceptance of the updated Terms.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions or require clarification regarding these Terms of Service, please reach out to us at:
            </p>
            <div
              style={{
                backgroundColor: "var(--bg-card-subtle)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                padding: "24px",
                marginTop: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ fontWeight: 700, color: "var(--text-heading)", marginBottom: "8px" }}>
                [LEGAL NAME] (Cognixs)
              </div>
              <div style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                <div><strong>Location:</strong> New Delhi, India</div>
                <div><strong>Contact Email:</strong> [work.cognixs@gmail.com]</div>
                <div><strong>Website:</strong> [cognixs.in]</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Project Booking Modal */}
      <ProjectBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <style jsx>{`
        .back-home-link:hover {
          color: var(--text-heading) !important;
        }
        .legal-content h2 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-heading);
          margin-top: 40px;
          margin-bottom: 14px;
        }
        .legal-content p {
          font-size: 0.9625rem;
          line-height: 1.75;
          color: var(--text-body);
          margin-bottom: 16px;
        }
        .legal-content ul {
          padding-left: 24px;
          margin-bottom: 18px;
        }
        .legal-content li {
          font-size: 0.9625rem;
          line-height: 1.75;
          color: var(--text-body);
          margin-bottom: 8px;
        }
        .legal-content strong {
          color: var(--text-heading);
        }
        @media (max-width: 480px) {
          .legal-content ul {
            padding-left: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
