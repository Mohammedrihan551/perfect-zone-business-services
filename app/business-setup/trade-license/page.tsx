import type { Metadata } from "next";
import TradeLicenseFormationPage from "./TradeLicenseFormationPage";

export const metadata: Metadata = {
  title:
    "Trade License Services in UAE | License Renewal & Amendment | Perfect Zone International Business Services L.L.C",
  description:
    "Professional UAE trade license services including license issuance, renewal, amendment, cancellation, and compliance support. Expert assistance for mainland, free zone, and offshore businesses across UAE.",
  keywords: [
    "trade license services UAE",
    "trade license renewal Dubai",
    "UAE trade license",
    "business license UAE",
    "trade license amendment UAE",
    "license cancellation Dubai",
    "commercial license UAE",
    "trade license consultants UAE",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/trade-license-services",
  },
  openGraph: {
    title: "Trade License Services in UAE | Perfect Zone",
    description:
      "Get expert support for trade license issuance, renewal and amendments in UAE.",
    url: "https://www.perfectzonehub.com/services/trade-license-services",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "https://www.perfectzonehub.com/images/banners/services/trade-license.avif",
        width: 1200,
        height: 630,
        alt: "Trade License Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TradeLicenseFormationPage />;
}
