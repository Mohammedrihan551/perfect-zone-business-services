import type { Metadata } from "next";
import DegreeCertificateAttestationPage from "./DegreeCertificateAttestationPage";

export const metadata = {
  title:
    "Degree Certificate Attestation Services in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Get fast and reliable degree certificate attestation services in the UAE for employment, higher education, immigration, residency, and professional licensing. Perfect Zone offers complete certificate attestation support across all Emirates.",
  keywords: [
    "degree certificate attestation UAE",
    "certificate attestation Dubai",
    "degree attestation Abu Dhabi",
    "university certificate attestation UAE",
    "educational certificate attestation",
    "MOFA degree attestation",
    "embassy attestation UAE",
    "degree verification UAE",
    "academic certificate legalization",
    "document attestation services UAE",
    "Perfect Zone degree attestation",
  ],
  alternates: {
    canonical:
      "https://www.perfectzonehub.com/services/degree-certificate-attestation",
  },
  openGraph: {
    title: "Degree Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Professional degree certificate attestation services for employment, higher education, immigration, and professional licensing in the UAE.",
    url: "https://www.perfectzonehub.com/services/degree-certificate-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/degree-certificate-attestation.webp",
        width: 1200,
        height: 630,
        alt: "Degree Certificate Attestation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Degree Certificate Attestation Services in UAE | Perfect Zone",
    description:
      "Fast and secure degree certificate attestation services across the UAE.",
    images: ["/images/banners/services/degree-certificate-attestation.webp"],
  },
};

export default function Page() {
  return <DegreeCertificateAttestationPage />;
}
