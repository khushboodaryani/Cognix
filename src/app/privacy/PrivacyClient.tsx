"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectBookingModal from "@/components/ProjectBookingModal";

export default function PrivacyClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ flex: 1, padding: "48px 24px 96px" }}>
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
              Privacy Policy
            </h1>

            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Last updated: [DATE]
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="legal-content">
            <p>
              Cognixs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a technology studio based in Delhi NCR, India that designs and builds websites, mobile apps, bespoke AI solutions, and business automations for businesses.
            </p>
            <p>
              This website ([cognixs.in]) and our services are operated by <strong>[LEGAL NAME]</strong>, based in <strong>New Delhi</strong>, India. Contact email: <strong>[work.cognixs@gmail.com]</strong>.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data in accordance with applicable laws, including India&rsquo;s Digital Personal Data Protection Act, 2023 (DPDPA). This Privacy Policy explains in plain, simple English what information we collect, how we handle it, who we share it with, and your rights regarding your personal data.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We only collect personal information that is necessary to communicate with you, evaluate your project requirements, deliver our services, and manage our business relationships. This includes:</p>
            <ul>
              <li>
                <strong>Information you provide directly:</strong> When you submit our contact or scoping form, request a quote, or contact us via email, phone, WhatsApp, or social media, we collect your name, email address, phone number, company name, project details, budget expectations, and any other notes or specifications you choose to share.
              </li>
              <li>
                <strong>Communication records:</strong> Notes, messages, emails, and WhatsApp inquiries exchanged between you and our studio regarding your project or consultation.
              </li>
              <li>
                <strong>Technical and analytics data:</strong> When you browse our website, our hosting provider and basic cookies automatically log standard technical data, such as your IP address, browser type, operating system, pages viewed, time spent on pages, referring URLs, and device type.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for specific, legitimate business purposes, including:</p>
            <ul>
              <li>Responding to your inquiries and scheduling scoping or consultation calls</li>
              <li>Preparing project proposals, architectural plans, and price quotes</li>
              <li>Designing, building, and delivering digital engineering and automation projects</li>
              <li>Invoicing, processing payments, and maintaining necessary accounting and tax records</li>
              <li>Ensuring website security, debugging performance issues, and preventing misuse</li>
              <li>Complying with statutory legal and regulatory obligations under Indian law</li>
            </ul>

            <h2>3. Consent and Legal Basis (DPDPA, 2023)</h2>
            <p>
              In accordance with India&rsquo;s Digital Personal Data Protection Act, 2023, we process your personal data primarily based on your freely given, specific, informed, and unambiguous consent when you submit an enquiry form or engage our studio.
            </p>
            <p>
              We may also process data under recognized legitimate uses, such as fulfilling a contract or agreed project scope requested by you, preventing fraud or security breaches, or fulfilling obligations under applicable Indian laws. You may withdraw your consent at any time by contacting us at <strong>[work.cognixs@gmail.com]</strong>.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website uses only essential cookies and basic performance mechanisms required to operate the site (for example, remembering your light or dark mode theme preference) and measuring aggregated, non-identifying traffic metrics.
            </p>
            <p>
              We do not use invasive third-party tracking cookies or advertising pixels to monitor your browsing behavior across other websites. You can disable cookies in your browser settings at any time, though some site preferences may reset.
            </p>

            <h2>5. Who We Share It With</h2>
            <p>
              <strong>We never sell, rent, or trade your personal data to anyone.</strong> We only share information with trusted third-party service providers who help us run our website and business under confidentiality obligations:
            </p>
            <ul>
              <li><strong>Hosting &amp; Edge Delivery:</strong> Vercel Inc. (cloud web hosting, edge network, and server logs)</li>
              <li><strong>Email &amp; Communications:</strong> Zoho Corporation (business email hosting and document storage)</li>
              <li><strong>Cloud Storage &amp; Documents:</strong> Google LLC (Google Workspace, Google Drive, Google Meet)</li>
              <li><strong>Messaging:</strong> Meta Platforms / WhatsApp (direct messaging and WhatsApp Cloud API for inquiries)</li>
            </ul>
            <p>
              We may also disclose your data if strictly required by Indian law, a court order, or an official governmental authority.
            </p>

            <h2>6. Storage and Security</h2>
            <p>
              We apply industry-standard technical and operational safeguards to protect your personal data from loss, unauthorized access, misuse, or alteration.
            </p>
            <p>
              <strong>Cross-border data transfer note:</strong> Some of our third-party infrastructure providers (such as Vercel and Google) operate secure cloud servers located outside India (for example, in the United States or the European Union). By using our website or submitting your contact information, you acknowledge and agree that your data may be processed and stored on these secure servers in compliance with applicable cross-border data protection standards.
            </p>

            <h2>7. How Long We Keep Your Data</h2>
            <ul>
              <li>
                <strong>General inquiries and project requests:</strong> If you submit an inquiry that does not turn into an active client project, we retain your contact details and message for up to <strong>[12]</strong> months, after which they are securely deleted or anonymized.
              </li>
              <li>
                <strong>Client project records:</strong> If you become a client, we retain contract agreements, project scopes, invoices, and communication history for as long as needed to fulfill our legal, accounting, audit, and tax requirements under Indian law (typically 7 to 8 financial years).
              </li>
            </ul>

            <h2>8. Your Rights Under Indian Law</h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you have clear rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to access:</strong> You can request a summary of the personal data we hold about you and how it is processed.</li>
              <li><strong>Right to correction and updating:</strong> You can request that inaccurate, misleading, or outdated personal data be corrected.</li>
              <li><strong>Right to erasure:</strong> You can request that we delete your personal data when it is no longer needed for the purpose it was collected.</li>
              <li><strong>Right to withdraw consent:</strong> You can withdraw consent previously given for data processing at any time.</li>
              <li><strong>Right to nominate:</strong> In the event of death or incapacity, you have the right to nominate an individual to exercise your rights.</li>
              <li><strong>Right of grievance redressal:</strong> You can raise an inquiry or grievance directly with our team if you believe your data has been mishandled.</li>
            </ul>
            <p>To exercise any of these rights, please write to us at <strong>[work.cognixs@gmail.com]</strong>.</p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may link to external websites, client projects, or social media networks (such as LinkedIn, GitHub, Instagram, and X). We do not control and are not responsible for the privacy practices or content of third-party websites. We encourage you to review their privacy policies when visiting them.
            </p>

            <h2>10. Children</h2>
            <p>
              Our website and services are intended solely for businesses, professionals, and individuals aged 18 and older. We do not knowingly collect personal data from anyone under the age of 18. If we learn that a minor has provided us with personal information, we will delete it promptly.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational, technical, or legal changes. Any updates will be posted on this page with the revised &ldquo;Last updated&rdquo; date at the top. We encourage you to review this page periodically.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, if you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
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
      `}</style>
    </div>
  );
}
