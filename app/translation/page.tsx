import type { Metadata } from "next";
import TranslationPage from "./TranslationPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://perfectzonehub.com"),

  title:
    "Translation Services in Dubai & UAE | Perfect Zone International Business Services L.L.C",

  description:
    "Professional translation services in Dubai and across the UAE including legal, certified, medical, technical, business and website translation in 150+ languages.",

  keywords: [
    "translation services UAE",
    "legal translation Dubai",
    "certified translation UAE",
    "document translation Dubai",
    "Arabic translation UAE",
  ],

  alternates: {
    canonical: "/translation",
    languages: {
      en: "/translation",
      ar: "/ar/translation",
    },
  },

  openGraph: {
    title: "Translation Services in Dubai & UAE | Perfect Zone",
    description:
      "Certified legal, business, medical and technical translation services across the UAE.",
    url: "/translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Translation Services UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Translation Services UAE | Perfect Zone",
    description: "Professional certified translation services across UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Perfect Zone",
  creator: "Perfect Zone",
  publisher: "Perfect Zone International Business Services",
};

export default function Page() {
  return <TranslationPage />;
}
