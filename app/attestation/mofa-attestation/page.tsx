import type { Metadata } from "next";
import MofaAttestationPage from "./MofaAttestationPage";

export const metadata = {
  title:
    "MOFA Attestation Services in UAE | UAE Ministry of Foreign Affairs Attestation | Perfect Zone International Business Services L.L.C",
  description:
    "Get fast and reliable MOFA attestation services in the UAE for personal, educational, commercial, and legal documents. Perfect Zone assists with complete document verification, submission, tracking, and secure delivery across all Emirates.",
  keywords: [
    "MOFA attestation UAE",
    "MOFA attestation Dubai",
    "Ministry of Foreign Affairs attestation",
    "document attestation UAE",
    "certificate attestation UAE",
    "legal document attestation",
    "educational certificate attestation",
    "commercial document attestation",
    "MOFAIC attestation",
    "attestation services Dubai",
    "document legalization UAE",
    "Perfect Zone MOFA attestation",
  ],
  alternates: {
    canonical: "/services/mofa-attestation",
  },
  openGraph: {
    title: "MOFA Attestation Services in UAE | Fast Document Legalization",
    description:
      "Professional MOFA attestation services for personal, educational, commercial, and legal documents across the UAE. Quick processing with expert assistance.",
    url: "https://www.perfectzonehub.com/services/mofa-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/mofa-attestation.png",
        width: 1200,
        height: 630,
        alt: "MOFA Attestation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <MofaAttestationPage />;
}
