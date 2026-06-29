import type { Metadata } from "next";
import BirthCertificateAttestationPage from "./BirthCertificateAttestationPage";

export const metadata = {
  title:
    "Birth Certificate Attestation Services in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Get professional birth certificate attestation services in the UAE for child sponsorship, family visa, school admission, immigration, residency, passport applications, and legal documentation. Fast and secure processing across all Emirates.",
  keywords: [
    "birth certificate attestation",
    "birth certificate attestation UAE",
    "birth certificate attestation Dubai",
    "certificate attestation UAE",
    "child sponsorship documents UAE",
    "family visa birth certificate attestation",
    "birth certificate legalization",
    "MOFA birth certificate attestation",
    "embassy attestation UAE",
    "document attestation Dubai",
    "birth certificate verification UAE",
    "legal document attestation",
    "Perfect Zone birth certificate attestation",
  ],
  alternates: {
    canonical:
      "https://www.perfectzone.ae/services/birth-certificate-attestation",
    languages: {
      en: "https://www.perfectzone.ae/services/birth-certificate-attestation",
      ar: "https://www.perfectzone.ae/ar/services/birth-certificate-attestation",
    },
  },
  openGraph: {
    title: "Birth Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Reliable birth certificate attestation services for family visa, child sponsorship, immigration, and official legal use in the UAE.",
    url: "https://www.perfectzone.ae/services/birth-certificate-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzone.ae/images/banners/services/birth-certificate-attestation.jpg",
        width: 1200,
        height: 630,
        alt: "Birth Certificate Attestation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birth Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Fast and secure birth certificate attestation services across the UAE.",
    images: [
      "https://www.perfectzone.ae/images/banners/services/birth-certificate-attestation.jpg",
    ],
  },
};

export default function Page() {
  return <BirthCertificateAttestationPage />;
}
