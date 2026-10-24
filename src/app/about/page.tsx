import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Cognixs, Websites, Apps & AI Studio",
  description:
    "Meet Cognixs, a two-developer tech studio from Delhi NCR building websites, mobile apps and AI automations. 6+ years of combined experience and 40+ projects delivered.",
};

export default function AboutPage() {
  return <AboutClient />;
}
