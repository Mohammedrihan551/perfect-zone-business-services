import type { Metadata } from "next";
import VisaPage from "./VisaPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://perfectzonehub.com"),

  title:
    "UAE Visa Services in Dubai | Golden, Family & Investor Visa | Perfect Zone International Business Services L.L.C",

  description:
    "Professional UAE visa services in Dubai and across the UAE. Perfect Zone provides Golden Visa, Family Visa, Employment Visa, Investor Visa, Partner Visa and Freelance Visa assistance with complete documentation support.",

  keywords: [
    "UAE visa services",
    "visa services Dubai",
    "golden visa UAE",
    "family visa Dubai",
    "employment visa UAE",
    "investor visa Dubai",
    "partner visa UAE",
    "freelance visa Dubai",
    "UAE residency visa",
    "visa consultancy Dubai",
    "business visa UAE",
    "Perfect Zone visa services",
  ],

  alternates: {
    canonical: "/visa",
    languages: {
      en: "/visa",
      ar: "/ar/visa",
    },
  },

  openGraph: {
    title: "UAE Visa Services | Golden, Family & Investor Visa | Perfect Zone",
    description:
      "Expert visa consultancy and processing services for Golden Visa, Family Visa, Employment Visa and more across the UAE.",
    url: "/visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "UAE Visa Services - Perfect Zone",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UAE Visa Services | Perfect Zone",
    description:
      "Professional visa consultancy and application support across UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  applicationName: "Perfect Zone",
  creator: "Perfect Zone",
  publisher: "Perfect Zone International Business Services",
  category: "Visa Services",
};

export default function Page() {
  return <VisaPage />;
}
