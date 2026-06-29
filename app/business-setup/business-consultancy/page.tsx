import type { Metadata } from "next";
import BusinessConsultancyPage from "./BusinessConsultancyPage";

export const metadata = {
  title:
    "Business Consultancy Services in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Grow your business with expert business consultancy services in the UAE. Perfect Zone provides strategic guidance for company formation, market entry, expansion, compliance, and operational optimization.",
  keywords: [
    "business consultancy UAE",
    "business consultant Dubai",
    "business advisory services UAE",
    "company setup consultancy UAE",
    "market entry consultancy Dubai",
    "business strategy consulting UAE",
    "business growth consultants UAE",
    "business expansion services Dubai",
    "corporate consultancy UAE",
    "Perfect Zone business consultancy",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/business-consultancy",
  },
  openGraph: {
    title: "Business Consultancy Services in UAE | Perfect Zone",
    description:
      "Professional business consultancy services in the UAE for company setup, expansion, compliance, and strategic growth.",
    url: "https://www.perfectzonehub.com/business-consultancy",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/business-consultancy.jpg",
        width: 1200,
        height: 630,
        alt: "Business Consultancy Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Consultancy Services in UAE | Perfect Zone",
    description:
      "Expert business consultancy in UAE for startups, SMEs, and investors seeking sustainable growth.",
    images: ["/images/banners/services/business-consultancy.jpg"],
  },
};

export default function Page() {
  return <BusinessConsultancyPage />;
}
