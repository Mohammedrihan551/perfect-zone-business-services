import type { Metadata } from "next";
import MarriageCertificateAttestationPage from "./MarriageCertificateAttestationPage";

export const metadata = {
  title:
    "Marriage Certificate Attestation Services in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Get reliable marriage certificate attestation services in the UAE for spouse visa, family sponsorship, residency, immigration, and legal documentation. Fast, secure, and professional processing across all Emirates.",
  keywords: [
    "marriage certificate attestation",
    "marriage certificate attestation UAE",
    "marriage certificate attestation Dubai",
    "attestation services UAE",
    "family visa document attestation",
    "spouse visa certificate attestation",
    "marriage certificate legalization",
    "MOFA marriage certificate attestation",
    "embassy attestation UAE",
    "certificate attestation Dubai",
    "marriage certificate verification UAE",
    "legal document attestation",
    "Perfect Zone marriage certificate attestation",
  ],
  alternates: {
    canonical:
      "https://www.perfectzone.ae/services/marriage-certificate-attestation",
    languages: {
      en: "https://www.perfectzone.ae/services/marriage-certificate-attestation",
      ar: "https://www.perfectzone.ae/ar/services/marriage-certificate-attestation",
    },
  },
  openGraph: {
    title: "Marriage Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Professional marriage certificate attestation services for spouse sponsorship, residency, immigration, and legal purposes in the UAE.",
    url: "https://www.perfectzone.ae/services/marriage-certificate-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzone.ae/images/banners/services/marriage-certificate-attestation.jpg",
        width: 1200,
        height: 630,
        alt: "Marriage Certificate Attestation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Fast and secure marriage certificate attestation services across the UAE.",
    images: [
      "https://www.perfectzone.ae/images/banners/services/marriage-certificate-attestation.jpg",
    ],
  },
};

export default function Page() {
  return <MarriageCertificateAttestationPage />;
}
