import type { Metadata } from "next";
import CorporateBankFormationPage from "./CorporateBankFormationPage";

export const metadata = {
  title:
    "Corporate Bank Account Opening in UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Open a corporate bank account in the UAE with expert assistance from Perfect Zone. We help mainland, free zone, and offshore companies with bank selection, KYC compliance, documentation, and account activation.",
  keywords: [
    "corporate bank account UAE",
    "business bank account UAE",
    "company bank account opening Dubai",
    "corporate banking services UAE",
    "UAE bank account for companies",
    "business banking Dubai",
    "offshore bank account UAE",
    "free zone corporate bank account",
    "mainland company bank account",
    "Perfect Zone corporate banking",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/corporate-bank-account-opening",
  },
  openGraph: {
    title: "Corporate Bank Account Opening in UAE | Perfect Zone",
    description:
      "Professional assistance for corporate bank account opening in the UAE, including documentation, compliance support, and bank selection for all business types.",
    url: "https://www.perfectzonehub.com/corporate-bank-account-opening",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/corporate-bank.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Bank Account Opening in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Bank Account Opening in UAE | Perfect Zone",
    description:
      "Get expert assistance for opening a UAE corporate bank account for mainland, free zone, and offshore businesses.",
    images: ["/images/banners/services/corporate-bank.jpg"],
  },
};

export default function Page() {
  return <CorporateBankFormationPage />;
}
