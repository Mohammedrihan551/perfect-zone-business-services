import type { Metadata } from "next";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export const metadata = {
  title:
    "Privacy Policy - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Read the Privacy Policy of Perfect Zone International Business Services to understand how we collect, use, store, and protect your personal information for business setup, visa, attestation, and translation services in the UAE.",
  keywords: [
    "privacy policy UAE",
    "Perfect Zone privacy policy",
    "data protection business consultancy UAE",
    "website privacy policy Dubai",
    "business setup privacy policy",
    "visa service privacy policy",
    "document attestation privacy policy",
    "translation services privacy policy",
    "personal data protection UAE",
    "cookie policy UAE",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Perfect Zone International Business Services",
    description:
      "Learn how Perfect Zone protects your personal data and ensures privacy across all business services in the UAE.",
    url: "https://www.perfectzonehub.com/privacy-policy",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Perfect Zone Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Perfect Zone",
    description:
      "Understand how Perfect Zone collects, processes, and protects your personal information in compliance with privacy standards.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
