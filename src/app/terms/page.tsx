import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service governing the use of Cognixs website and digital product engineering services.",
};

export default function TermsPage() {
  return <TermsClient />;
}
