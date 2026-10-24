import type { Metadata, Viewport } from "next";
import FloatingSocials from "@/components/FloatingSocials";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#101311" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cognixs.in"),
  title: {
    default: "Cognixs | Websites, Apps & AI Automation Studio in Delhi NCR",
    template: "%s | Cognixs",
  },
  description:
    "Cognixs designs and builds websites, mobile apps and AI automations for growing businesses in India. Clear pricing, weekly progress, no tech jargon.",
  keywords: [
    "Cognixs",
    "Digital Product Studio",
    "AI Automation Studio India",
    "Next.js Development",
    "Flutter App Development",
    "LLM Agents India",
    "WhatsApp Cloud API Automation",
    "Tally Prime Integration",
    "Zoho CRM Automation",
    "Razorpay Integration",
    "Startup Engineering Partner",
  ],
  authors: [{ name: "Cognixs Studio", url: "https://cognixs.in" }],
  creator: "Cognixs Studio",
  publisher: "Cognixs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cognixs.in",
    siteName: "Cognixs Studio",
    title: "Cognixs | Websites, Apps & AI Automation Studio in Delhi NCR",
    description:
      "Cognixs designs and builds websites, mobile apps and AI automations for growing businesses in India. Clear pricing, weekly progress, no tech jargon.",
    images: [
      {
        url: "/assets/logo/logo-full-light.svg",
        width: 1200,
        height: 630,
        alt: "Cognixs Digital Experience Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognixs | Websites, Apps & AI Automation Studio in Delhi NCR",
    description:
      "Cognixs designs and builds websites, mobile apps and AI automations for growing businesses in India. Clear pricing, weekly progress, no tech jargon.",
    images: ["/assets/logo/logo-full-light.svg"],
    creator: "@cognixs",
  },
  alternates: {
    canonical: "https://cognixs.in",
  },
  icons: {
    icon: "/assets/logo/logo-mark.svg",
    shortcut: "/assets/logo/logo-mark.svg",
    apple: "/assets/logo/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cognixs.in/#organization",
        name: "Cognixs",
        url: "https://cognixs.in",
        logo: "https://cognixs.in/assets/logo/logo-full-light.svg",
        email: "work.cognixs@gmail.com",
        description:
          "Elite digital product and AI automation engineering studio headquartered in India. Architecting websites, mobile apps, LLM agents, and enterprise workflows.",
        sameAs: [
          "https://twitter.com/cognixs_in",
          "https://linkedin.com/company/cognixs",
          "https://github.com/cognixs",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cognixs.in/#website",
        url: "https://cognixs.in",
        name: "Cognixs Digital Experience Platform",
        publisher: { "@id": "https://cognixs.in/#organization" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://cognixs.in/#service",
        name: "Cognixs Studio",
        priceRange: "$$$",
        areaServed: ["India", "Global"],
        serviceType: [
          "Custom Web Platform Engineering",
          "Cross-Platform Mobile Application Development",
          "Bespoke LLM & AI Agents",
          "Workflow Automation (WhatsApp, Tally, Zoho, Razorpay)",
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-grid-pattern">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
