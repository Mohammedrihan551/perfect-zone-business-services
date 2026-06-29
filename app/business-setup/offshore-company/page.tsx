import type { Metadata } from "next";
import OffshoreCompanyFormationPage from "./OffshoreCompanyFormationPage";

export const metadata: Metadata = {
  title:
    "Offshore Company Formation in UAE | UAE Offshore Company Setup | Perfect Zone International Business Services L.L.C",
  description:
    "Set up an offshore company in UAE for international business, asset protection, tax-efficient structuring, and global banking. Expert offshore company formation services in JAFZA Offshore and RAK ICC.",
  keywords: [
    "offshore company formation UAE",
    "UAE offshore company setup",
    "JAFZA offshore company",
    "RAK ICC company formation",
    "offshore business UAE",
    "asset protection UAE",
    "international holding company UAE",
    "UAE offshore incorporation",
  ],
  alternates: {
    canonical:
      "https://www.perfectzonehub.com/services/offshore-company-formation",
  },
  openGraph: {
    title: "Offshore Company Formation in UAE | Perfect Zone",
    description:
      "Establish an offshore company in UAE with complete incorporation and banking support.",
    url: "https://www.perfectzonehub.com/services/offshore-company-formation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzonehub.com/images/banners/services/offshore-company.jpg",
        width: 1200,
        height: 630,
        alt: "Offshore Company Formation in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <OffshoreCompanyFormationPage />;
}
