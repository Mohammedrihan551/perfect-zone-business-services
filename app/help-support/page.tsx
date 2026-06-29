import type { Metadata } from "next";
import HelpSupportPage from "./HelpSupportPage";

export const metadata = {
  title:
    "Help & Support - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Get professional help and support from Perfect Zone International Business Services for business setup, visa processing, document attestation, and translation services in the UAE. Contact our expert support team for quick assistance.",
  keywords: [
    "help and support UAE",
    "business setup support UAE",
    "visa support UAE",
    "document attestation support",
    "translation support UAE",
    "customer support business services",
    "Perfect Zone support",
    "consultancy help UAE",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/help-support",
  },
  openGraph: {
    title: "Help & Support | Perfect Zone International Business Services UAE",
    description:
      "Reach our support team for assistance with business setup, visa services, attestation, and professional translation solutions in the UAE.",
    url: "https://www.perfectzonehub.com/help-support",
    siteName: "Perfect Zone International Business Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Help & Support - Perfect Zone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help & Support | Perfect Zone International Business Services UAE",
    description:
      "Need assistance? Contact Perfect Zone for expert support in business setup, visa processing, attestation, and translation services.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },
};

export default function Page() {
  return <HelpSupportPage />;
}
