import type { Metadata } from "next";
import MainlandCompanyFormationPage from "./MainlandCompanyFormationPage";

export const metadata: Metadata = {
  title:
    "Mainland Company Formation in UAE | Business Setup Consultants Dubai | Perfect Zone International Business Services L.L.C",
  description:
    "Set up your mainland company in UAE with Perfect Zone International Business Services. Get trade license, visa processing, bank account support, and complete business setup assistance in Dubai, Abu Dhabi, Sharjah and across UAE.",
  keywords: [
    "mainland company formation UAE",
    "business setup in Dubai",
    "mainland license UAE",
    "company formation Dubai",
    "UAE trade license",
    "start business in UAE",
    "mainland business setup consultants",
    "Dubai company registration",
  ],
  alternates: {
    canonical:
      "https://www.perfectzonehub.com/services/mainland-company-formation",
  },
  openGraph: {
    title: "Mainland Company Formation in UAE | Perfect Zone",
    description:
      "Professional mainland company formation services in UAE with licensing, visas and banking support.",
    url: "https://www.perfectzonehub.com/services/mainland-company-formation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzonehub.com/images/banners/services/mainland-company.webp",
        width: 1200,
        height: 630,
        alt: "Mainland Company Formation in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <MainlandCompanyFormationPage />;
}
