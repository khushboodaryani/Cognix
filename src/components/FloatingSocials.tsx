"use client";

import React, { useState } from "react";

export default function FloatingSocials() {
  const [hoveredInstagram, setHoveredInstagram] = useState(false);
  const [hoveredWhatsApp, setHoveredWhatsApp] = useState(false);

  return (
    <>
      {/* Left Side: Instagram Button */}
      <aside
        aria-label="Instagram link"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "20px",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <a
          href="https://www.instagram.com/cognixs.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Cognixs on Instagram (@cognixs.in)"
          onMouseEnter={() => setHoveredInstagram(true)}
          onMouseLeave={() => setHoveredInstagram(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "48px",
            padding: hoveredInstagram ? "0 18px 0 12px" : "0 12px",
            borderRadius: "9999px",
            background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            color: "#ffffff",
            textDecoration: "none",
            boxShadow: hoveredInstagram
              ? "0 12px 28px -4px rgba(220, 39, 67, 0.55), 0 4px 12px rgba(0, 0, 0, 0.15)"
              : "0 8px 20px -4px rgba(220, 39, 67, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)",
            transform: hoveredInstagram ? "scale(1.06) translateY(-2px)" : "scale(1)",
            transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer",
          }}
        >
          {/* Instagram SVG Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>

          {/* Label expands on hover or desktop */}
          <span
            className="social-label"
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              display: hoveredInstagram ? "inline-block" : "none",
            }}
          >
            @cognixs.in
          </span>
        </a>
      </aside>

      {/* Right Side: WhatsApp Button */}
      <aside
        aria-label="WhatsApp contact"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "20px",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <a
          href="https://wa.me/916396880866?text=Hi%20Cognixs!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cognixs on WhatsApp (+91 63968 80866)"
          onMouseEnter={() => setHoveredWhatsApp(true)}
          onMouseLeave={() => setHoveredWhatsApp(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "48px",
            padding: hoveredWhatsApp ? "0 18px 0 12px" : "0 12px",
            borderRadius: "9999px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            textDecoration: "none",
            boxShadow: hoveredWhatsApp
              ? "0 12px 28px -4px rgba(37, 211, 102, 0.6), 0 4px 12px rgba(0, 0, 0, 0.15)"
              : "0 8px 20px -4px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.1)",
            transform: hoveredWhatsApp ? "scale(1.06) translateY(-2px)" : "scale(1)",
            transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Green Pulse Ring */}
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#101311",
              border: "2px solid #ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#C7F36B",
              }}
            />
          </span>

          {/* WhatsApp SVG Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ flexShrink: 0 }}
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.891 2.796.891 3.182 0 5.767-2.587 5.767-5.766.001-3.181-2.585-5.778-5.767-5.778zm7.665 5.765c0 4.225-3.438 7.663-7.664 7.663-1.309 0-2.532-.333-3.606-.917l-4.426 1.16 1.181-4.314c-.689-1.129-1.077-2.457-1.077-3.873 0-4.225 3.439-7.663 7.665-7.663s7.665 3.438 7.665 7.664zm-3.882 2.378c-.213-.107-1.258-.621-1.453-.692-.195-.071-.337-.107-.479.107-.142.213-.551.692-.676.834-.124.142-.249.16-.462.053-.213-.107-.901-.332-1.716-1.059-.634-.565-1.062-1.264-1.187-1.477-.124-.213-.013-.328.093-.434.096-.096.213-.249.32-.373.107-.124.142-.213.213-.355.071-.142.036-.267-.018-.373-.053-.107-.479-1.155-.657-1.581-.173-.415-.349-.359-.479-.365h-.409c-.142 0-.373.053-.568.267-.195.213-.746.729-.746 1.777s.764 2.061.87 2.203c.107.142 1.505 2.298 3.647 3.223.51.22 1.054.402 1.488.54.764.242 1.459.208 2.009.126.613-.092 1.884-.77 2.15-1.513.267-.743.267-1.38.187-1.513-.08-.133-.222-.213-.435-.32z" />
          </svg>

          {/* Label expands on hover or desktop */}
          <span
            className="social-label"
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              display: hoveredWhatsApp ? "inline-block" : "none",
            }}
          >
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      <style jsx>{`
        @media (max-width: 640px) {
          aside {
            bottom: 18px !important;
          }
          aside:first-of-type {
            left: 14px !important;
          }
          aside:last-of-type {
            right: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
