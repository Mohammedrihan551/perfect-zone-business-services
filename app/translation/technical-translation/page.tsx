import type { Metadata } from "next";
import TechnicalTranslationPage from "./TechnicalTranslationPage";

export const metadata = {
  title:
    "Technical Translation Services in UAE | Certified Technical Translators | Perfect Zone International Business Services L.L.C",
  description:
    "Professional technical translation services in the UAE for engineering documents, manuals, specifications, product documentation, safety procedures, and industrial reports. Accurate industry-specific translations for businesses across multiple sectors.",
  keywords: [
    "technical translation UAE",
    "technical translation Dubai",
    "engineering document translation",
    "manual translation UAE",
    "technical document translation",
    "industrial translation services UAE",
    "specification translation Dubai",
    "Arabic technical translation",
    "English to Arabic technical translation",
    "engineering translation services UAE",
    "product manual translation UAE",
    "Perfect Zone technical translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/technical-translation",
  },
  openGraph: {
    title:
      "Technical Translation Services in UAE | Certified Technical Translators | Perfect Zone",
    description:
      "Certified technical translation services for engineering documents, manuals, specifications, and industrial reports in the UAE.",
    url: "https://www.perfectzonehub.com/services/technical-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/technical-translation.jpg",
        width: 1200,
        height: 630,
        alt: "Technical Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Translation Services in UAE | Perfect Zone",
    description:
      "Accurate and industry-specific technical translation services for engineering, manufacturing, and industrial documents in the UAE.",
    images: ["/images/banners/services/technical-translation.jpg"],
  },
};

export default function Page() {
  return <TechnicalTranslationPage />;
}
