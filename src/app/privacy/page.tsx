import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Cognixs - Digital engineering and AI automation studio based in Delhi NCR, India.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
