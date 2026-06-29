import type { Metadata } from "next";
import EmbassyAttestationPage from "./EmbassyAttestationPage";

export const metadata = {
  title:
    "Embassy Attestation Services in UAE | Certificate & Document Attestation | Perfect Zone International Business Services L.L.C",
  description:
    "Get fast and reliable embassy attestation services in the UAE for personal, educational, commercial, and legal documents. Perfect Zone provides secure document handling, embassy coordination, verification, and hassle-free attestation support across all Emirates.",
  keywords: [
    "embassy attestation UAE",
    "embassy attestation Dubai",
    "certificate attestation UAE",
    "document attestation UAE",
    "educational certificate attestation",
    "commercial document attestation",
    "legal document attestation",
    "consulate attestation UAE",
    "embassy legalization UAE",
    "attestation services Dubai",
    "document authentication UAE",
    "Perfect Zone embassy attestation",
  ],
  alternates: {
    canonical: "/services/embassy-attestation",
  },
  openGraph: {
    title: "Embassy Attestation Services in UAE | Fast Document Authentication",
    description:
      "Professional embassy attestation services for certificates, legal papers, educational, and commercial documents across the UAE with end-to-end support.",
    url: "https://www.perfectzonehub.com/services/embassy-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/embassy-attestation.webp",
        width: 1200,
        height: 630,
        alt: "Embassy Attestation Services in UAE",
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
  return <EmbassyAttestationPage />;
}
