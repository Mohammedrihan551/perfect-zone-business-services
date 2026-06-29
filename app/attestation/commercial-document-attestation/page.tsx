import type { Metadata } from "next";
import CommercialDocumentAttestationPage from "./CommercialDocumentAttestationPage";

export const metadata = {
  title:
    "Commercial Document Attestation Services in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Professional commercial document attestation services in the UAE for business agreements, trade licenses, certificates of incorporation, MOA, invoices, and other corporate documents. Fast, secure, and reliable attestation support.",
  keywords: [
    "commercial document attestation UAE",
    "business document attestation Dubai",
    "corporate document attestation UAE",
    "trade license attestation",
    "certificate of incorporation attestation",
    "MOA attestation UAE",
    "company document legalization UAE",
    "commercial certificate attestation",
    "embassy attestation for business documents",
    "MOFA attestation UAE",
    "document attestation services Dubai",
    "Perfect Zone commercial attestation",
  ],
  alternates: {
    canonical:
      "https://www.perfectzonehub.com/services/commercial-document-attestation",
  },
  openGraph: {
    title: "Commercial Document Attestation Services in UAE | Perfect Zone",
    description:
      "Get commercial and corporate documents attested for international business, banking, government approvals, and legal compliance with trusted UAE experts.",
    url: "https://www.perfectzonehub.com/services/commercial-document-attestation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/commercial-document-attestation.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Document Attestation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Document Attestation Services in UAE | Perfect Zone",
    description:
      "Fast and reliable commercial document attestation services for companies and businesses in the UAE.",
    images: ["/images/banners/services/commercial-document-attestation.jpg"],
  },
};

export default function Page() {
  return <CommercialDocumentAttestationPage />;
}
