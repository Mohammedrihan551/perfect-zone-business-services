import type { Metadata } from "next";
import CertifiedTranslationPage from "./CertifiedTranslationPage";

export const metadata = {
  title:
    "Certified Translation Services in UAE | Approved Translators | Perfect Zone International Business Services L.L.C",
  description:
    "Professional certified translation services in the UAE for personal, educational, legal, immigration, and business documents. Official translations accepted by UAE ministries, embassies, universities, and government authorities.",
  keywords: [
    "certified translation UAE",
    "certified translation Dubai",
    "approved translation services UAE",
    "document translation UAE",
    "Arabic certified translation",
    "English to Arabic translation UAE",
    "official translation Dubai",
    "certified translators UAE",
    "educational certificate translation UAE",
    "immigration document translation UAE",
    "business document translation UAE",
    "Perfect Zone certified translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/certified-translation",
  },
  openGraph: {
    title:
      "Certified Translation Services in UAE | Approved Translators | Perfect Zone",
    description:
      "Certified translation services for personal, legal, educational, and business documents accepted by UAE authorities.",
    url: "https://www.perfectzonehub.com/services/certified-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/certified-translation.webp",
        width: 1200,
        height: 630,
        alt: "Certified Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Translation Services in UAE | Perfect Zone",
    description:
      "Fast, accurate, and certified translation services accepted by embassies, universities, and government authorities in the UAE.",
    images: ["/images/banners/services/certified-translation.webp"],
  },
};

export default function Page() {
  return <CertifiedTranslationPage />;
}
