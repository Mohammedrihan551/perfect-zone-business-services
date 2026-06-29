import type { Metadata } from "next";
import BusinessTranslationPage from "./BusinessTranslationPage";

export const metadata = {
  title:
    "Business Translation Services in UAE | Corporate Translation Experts | Perfect Zone International Business Services L.L.C",
  description:
    "Professional business translation services in the UAE for contracts, corporate communications, financial reports, company profiles, proposals, presentations, and commercial documents. Accurate, confidential, and industry-specific translations for global business success.",
  keywords: [
    "business translation UAE",
    "business translation Dubai",
    "corporate translation services UAE",
    "commercial document translation",
    "contract translation UAE",
    "financial report translation Dubai",
    "company profile translation UAE",
    "professional business translators",
    "Arabic business translation",
    "English to Arabic business translation",
    "corporate communication translation",
    "Perfect Zone business translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/business-translation",
  },
  openGraph: {
    title:
      "Business Translation Services in UAE | Corporate Translation Experts | Perfect Zone",
    description:
      "Certified business translation services for contracts, reports, proposals, and corporate documents with accuracy and confidentiality.",
    url: "https://www.perfectzonehub.com/services/business-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/business-translation.jpg",
        width: 1200,
        height: 630,
        alt: "Business Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Translation Services in UAE | Perfect Zone",
    description:
      "Fast, accurate, and confidential business translation services for contracts, reports, and corporate documents in the UAE.",
    images: ["/images/banners/services/business-translation.jpg"],
  },
};

export default function Page() {
  return <BusinessTranslationPage />;
}
