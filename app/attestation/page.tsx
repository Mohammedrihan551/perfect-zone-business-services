import type { Metadata } from "next";
import AttestationPage from "./AttestationPage";

export const metadata: Metadata = {
  title:
    "Document Attestation Services in UAE | MOFA & Embassy Attestation | Perfect Zone International Business Services L.L.C",

  description:
    "Get fast and reliable document attestation services in Dubai and across the UAE. Perfect Zone provides MOFA attestation, embassy legalization, degree certificate attestation, marriage certificate attestation, birth certificate attestation, and commercial document attestation.",

  keywords: [
    "attestation services UAE",
    "document attestation Dubai",
    "MOFA attestation UAE",
    "embassy attestation Dubai",
    "degree certificate attestation UAE",
    "marriage certificate attestation Dubai",
    "birth certificate attestation UAE",
    "commercial document attestation",
    "certificate legalization UAE",
    "document legalization Dubai",
    "attestation company UAE",
    "Perfect Zone attestation",
  ],

  alternates: {
    canonical: "https://perfectzonehub.com/attestation",
  },

  openGraph: {
    title: "Document Attestation Services in UAE | Perfect Zone",
    description:
      "Professional document attestation and legalization services across UAE for personal, educational, and commercial documents.",
    url: "https://perfectzonehub.com/attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://perfectzonehub.com/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Document Attestation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Document Attestation Services in UAE | Perfect Zone",
    description:
      "Fast MOFA, embassy and certificate attestation services in UAE.",
    images: ["https://perfectzonehub.com/images/logo/perfect-zone-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Business Services",
};

export default function Page() {
  return <AttestationPage />;
}
