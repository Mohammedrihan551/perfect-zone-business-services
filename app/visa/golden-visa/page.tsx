import type { Metadata } from "next";
import GoldenVisaPage from "./GoldenVisaPage";

export const metadata = {
  title:
    "UAE Golden Visa Services | Golden Visa Consultancy | Perfect Zone International Business Services L.L.C",
  description:
    "Professional UAE Golden Visa services for investors, entrepreneurs, skilled professionals, students, and eligible residents. Get expert assistance with eligibility assessment, documentation, application, and approvals.",
  keywords: [
    "UAE Golden Visa",
    "Golden Visa UAE",
    "Golden Visa Dubai",
    "Golden Visa consultancy UAE",
    "UAE long term residency",
    "investor Golden Visa UAE",
    "entrepreneur visa UAE",
    "Golden Visa application Dubai",
    "10 year residency UAE",
    "Golden Visa services UAE",
    "UAE residency visa consultants",
    "Perfect Zone Golden Visa",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/golden-visa",
  },
  openGraph: {
    title:
      "UAE Golden Visa Services | Long-Term Residency Assistance | Perfect Zone International Business Services L.L.C",
    description:
      "Expert Golden Visa consultancy in the UAE with complete support for eligibility checks, document preparation, application, and approvals.",
    url: "https://www.perfectzonehub.com/services/golden-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/golden-visa.webp",
        width: 1200,
        height: 630,
        alt: "UAE Golden Visa Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Golden Visa Services | Perfect Zone",
    description:
      "Get professional assistance for UAE Golden Visa applications including eligibility assessment, documentation, and government approvals.",
    images: ["/images/banners/services/golden-visa.webp"],
  },
};

export default function Page() {
  return <GoldenVisaPage />;
}
