import type { Metadata } from "next";
import InvestorVisaPage from "./InvestorVisaPage";

export const metadata = {
  title:
    "Investor Visa Services in UAE | UAE Investor Residency Assistance | Perfect Zone International Business Services L.L.C",
  description:
    "Get professional UAE investor visa services with Perfect Zone. We assist entrepreneurs, shareholders, business owners, and investors with investor visa applications, approvals, documentation, and residency processing across the UAE.",
  keywords: [
    "investor visa UAE",
    "UAE investor visa",
    "investor residency UAE",
    "Dubai investor visa",
    "business investor visa UAE",
    "UAE residence visa for investors",
    "company owner visa UAE",
    "entrepreneur visa UAE",
    "investor visa consultants UAE",
    "investor visa services Dubai",
    "shareholder visa UAE",
    "business setup visa UAE",
    "UAE residency by investment",
    "investor visa assistance UAE",
    "Perfect Zone investor visa",
  ],
  alternates: {
    canonical: "https://www.perfectzone.ae/services/investor-visa",
    languages: {
      en: "https://www.perfectzone.ae/services/investor-visa",
      ar: "https://www.perfectzone.ae/ar/services/investor-visa",
    },
  },
  openGraph: {
    title: "Investor Visa Services in UAE | Perfect Zone",
    description:
      "Professional investor visa assistance in the UAE for entrepreneurs, company owners, and investors seeking residency through business ownership or investment.",
    url: "https://www.perfectzone.ae/services/investor-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/investor-visa.webp",
        width: 1200,
        height: 630,
        alt: "Investor Visa Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Visa Services in UAE | Perfect Zone",
    description:
      "Expert investor visa solutions in the UAE including application support, approvals, documentation, and residency processing.",
    images: ["/images/banners/services/investor-visa.webp"],
  },
};

export default function Page() {
  return <InvestorVisaPage />;
}
