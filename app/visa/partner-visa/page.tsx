import type { Metadata } from "next";
import PartnerVisaPage from "./PartnerVisaPage";

export const metadata = {
  title:
    "Partner Visa Services in UAE | UAE Partner Residency Assistance | Perfect Zone International Business Services L.L.C",
  description:
    "Get professional UAE partner visa services with Perfect Zone. We assist business partners, shareholders, and company co-owners with partner visa applications, approvals, documentation, and residency processing across the UAE.",
  keywords: [
    "partner visa UAE",
    "UAE partner visa",
    "Dubai partner visa",
    "business partner visa UAE",
    "shareholder visa UAE",
    "company partner visa UAE",
    "UAE residency for partners",
    "partner visa services Dubai",
    "partner visa consultants UAE",
    "business ownership visa UAE",
    "investor partner visa UAE",
    "company shareholder visa Dubai",
    "UAE residency visa",
    "partner visa assistance UAE",
    "Perfect Zone partner visa",
  ],
  alternates: {
    canonical: "https://www.perfectzone.ae/services/partner-visa",
    languages: {
      en: "https://www.perfectzone.ae/services/partner-visa",
      ar: "https://www.perfectzone.ae/ar/services/partner-visa",
    },
  },
  openGraph: {
    title: "Partner Visa Services in UAE | Perfect Zone",
    description:
      "Professional UAE partner visa assistance for business partners, shareholders, and company co-owners seeking residency through business ownership.",
    url: "https://www.perfectzone.ae/services/partner-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/partner-visa.jpg",
        width: 1200,
        height: 630,
        alt: "Partner Visa Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Visa Services in UAE | Perfect Zone",
    description:
      "Expert partner visa solutions in the UAE including application support, approvals, documentation, and residency processing.",
    images: ["/images/banners/services/partner-visa.jpg"],
  },
};

export default function Page() {
  return <PartnerVisaPage />;
}
