import type { Metadata } from "next";
import LegalTranslationPage from "./LegalTranslationPage";

export const metadata = {
  title:
    "Legal Translation Services in UAE | Certified Translators | Perfect Zone International Business Services L.L.C",
  description:
    "Professional legal translation services in the UAE for contracts, certificates, court documents, immigration papers, and business records. Certified translations accepted by UAE ministries, courts, embassies, and government authorities.",
  keywords: [
    "legal translation UAE",
    "legal translation Dubai",
    "certified legal translation services",
    "document translation UAE",
    "Arabic legal translation",
    "English to Arabic translation UAE",
    "court document translation Dubai",
    "certified translators UAE",
    "official translation services UAE",
    "immigration document translation",
    "contract translation UAE",
    "Perfect Zone legal translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/legal-translation",
  },
  openGraph: {
    title:
      "Legal Translation Services in UAE | Certified Translators | Perfect Zone",
    description:
      "Certified legal translation services for official documents, contracts, certificates, and court papers accepted by UAE authorities.",
    url: "https://www.perfectzonehub.com/services/legal-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/legal-translation.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Translation Services in UAE | Perfect Zone",
    description:
      "Fast, accurate, and certified legal translation services accepted by courts, embassies, and government authorities in the UAE.",
    images: ["/images/banners/services/legal-translation.jpg"],
  },
};

export default function Page() {
  return <LegalTranslationPage />;
}
