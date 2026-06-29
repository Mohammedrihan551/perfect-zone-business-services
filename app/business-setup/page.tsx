import type { Metadata } from "next";
import BusinessSetupPage from "./BusinessSetupPage";

export const metadata: Metadata = {
  title:
    "Business Setup in UAE | Company Formation Services Dubai | Perfect Zone International Business Services L.L.C",
  description:
    "Start your business in Dubai and UAE with Perfect Zone. Expert assistance for mainland, free zone, offshore company formation, trade license, visas, bank account opening and PRO services.",

  keywords: [
    "business setup UAE",
    "company formation Dubai",
    "business setup Dubai",
    "mainland company formation",
    "free zone company setup",
    "offshore company UAE",
    "trade license Dubai",
    "corporate bank account UAE",
    "company registration UAE",
    "business consultancy UAE",
    "startup setup Dubai",
    "investor visa UAE",
    "PRO services Dubai",
    "Perfect Zone",
  ],

  alternates: {
    canonical: "https://perfectzonehub.com/business-setup",
  },

  openGraph: {
    title: "Business Setup in UAE | Perfect Zone",
    description:
      "Professional business setup solutions in Dubai and UAE. Mainland, Free Zone, Offshore company formation and trade license services.",
    url: "https://perfectzonehub.com/business-setup",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Business Setup Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Setup in UAE | Perfect Zone",
    description:
      "Launch your UAE company with expert guidance from Perfect Zone.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <BusinessSetupPage />;
}
