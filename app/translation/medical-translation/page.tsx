import type { Metadata } from "next";
import MedicalTranslationPage from "./MedicalTranslationPage";

export const metadata = {
  title:
    "Medical Translation Services in UAE | Certified Medical Translators | Perfect Zone International Business Services L.L.C",
  description:
    "Professional medical translation services in the UAE for medical reports, prescriptions, laboratory results, insurance documents, and healthcare records. Accurate translations accepted by hospitals, clinics, insurers, and government authorities.",
  keywords: [
    "medical translation UAE",
    "medical translation Dubai",
    "certified medical translation services",
    "healthcare document translation UAE",
    "medical report translation Dubai",
    "prescription translation UAE",
    "insurance document translation UAE",
    "Arabic medical translation",
    "English to Arabic medical translation",
    "hospital document translation UAE",
    "health record translation UAE",
    "Perfect Zone medical translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/medical-translation",
  },
  openGraph: {
    title:
      "Medical Translation Services in UAE | Certified Medical Translators | Perfect Zone International Business Services L.L.C",
    description:
      "Certified medical translation services for healthcare reports, prescriptions, lab results, and insurance documents accepted across the UAE.",
    url: "https://www.perfectzonehub.com/services/medical-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/medical-translation.png",
        width: 1200,
        height: 630,
        alt: "Medical Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Translation Services in UAE | Perfect Zone",
    description:
      "Fast, accurate, and confidential medical translation services for reports, prescriptions, and healthcare documents in the UAE.",
    images: ["/images/banners/services/medical-translation.png"],
  },
};

export default function Page() {
  return <MedicalTranslationPage />;
}
