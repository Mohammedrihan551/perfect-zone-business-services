import type { Metadata } from "next";
import TermsAndConditionsPage from "./TermsAndConditionsPage";

export const metadata = {
  title:
    "Terms & Conditions - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Read the Terms & Conditions of Perfect Zone International Business Services. Understand service scope, client responsibilities, payments, refunds, liability limitations, and governing laws for business setup, visa, attestation, and translation services in the UAE.",
  keywords: [
    "terms and conditions UAE",
    "business setup terms UAE",
    "visa service terms UAE",
    "document attestation terms",
    "translation service policy UAE",
    "payment refund policy UAE",
    "Perfect Zone terms and conditions",
    "legal terms business consultancy UAE",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/terms-and-conditions",
  },
  openGraph: {
    title:
      "Terms & Conditions | Perfect Zone International Business Services UAE",
    description:
      "Review our Terms & Conditions covering services, payments, refunds, client obligations, liability, and legal jurisdiction in the UAE.",
    url: "https://www.perfectzonehub.com/terms-and-conditions",
    siteName: "Perfect Zone International Business Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - Perfect Zone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Terms & Conditions | Perfect Zone International Business Services UAE",
    description:
      "Read the legal terms governing our business setup, visa, attestation, and translation services in the UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
