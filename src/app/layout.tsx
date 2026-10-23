import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

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
    default: "Cognixs | Elite Digital Product & AI Automation Engineering Studio",
    template: "%s | Cognixs",
  },
  description:
    "Cognixs architects and deploys high-velocity digital experiences—custom web platforms, native mobile applications, bespoke LLM agents, and end-to-end business workflows. Smart tech that works while you sleep.",
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
    title: "Cognixs | Smart Tech That Works While You Sleep",
    description:
      "We design and build digital products that cut busywork and help your business grow. Websites, Mobile Apps, Custom AI Solutions, and Enterprise Automations.",
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
    title: "Cognixs | Elite Digital Product & AI Automation Studio",
    description:
      "Smart tech that works while you sleep. We’ve already made the mistakes. You get the results.",
    images: ["/assets/logo/logo-full-light.svg"],
    creator: "@cognixs_in",
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
        email: "hello@cognixs.in",
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
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
