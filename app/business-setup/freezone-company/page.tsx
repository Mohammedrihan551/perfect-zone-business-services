import type { Metadata } from "next";
import FreeZoneCompanyFormationPage from "./FreeZoneCompanyFormationPage";

export const metadata: Metadata = {
  title:
    "Free Zone Company Formation in UAE | Business Setup Consultants | Perfect Zone International Business Services L.L.C",
  description:
    "Set up your free zone company in UAE with 100% foreign ownership, tax benefits, visa support, and fast business licensing. Expert company formation services in Dubai, Sharjah, Ajman, RAK and across UAE.",
  keywords: [
    "free zone company formation UAE",
    "free zone company setup Dubai",
    "UAE free zone license",
    "business setup free zone UAE",
    "company formation UAE",
    "free zone business setup consultants",
    "Dubai free zone company registration",
    "100 foreign ownership UAE",
  ],
  alternates: {
    canonical:
      "https://www.perfectzonehub.com/services/free-zone-company-formation",
  },
  openGraph: {
    title: "Free Zone Company Formation in UAE | Perfect Zone",
    description:
      "Start your UAE free zone business with complete licensing, visa and banking support.",
    url: "https://www.perfectzonehub.com/services/free-zone-company-formation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzonehub.com/images/banners/services/freezone-company.jpg",
        width: 1200,
        height: 630,
        alt: "Free Zone Company Formation in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <FreeZoneCompanyFormationPage />;
}
