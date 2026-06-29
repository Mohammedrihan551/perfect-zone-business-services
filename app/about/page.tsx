import type { Metadata } from "next";
import AboutUsPage from "./AboutUsPage";

export const metadata = {
  title: "About Us - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Learn about Perfect Zone International Business Services, a trusted UAE consultancy providing business setup, visa services, document attestation, and professional translation solutions for entrepreneurs and companies.",
  keywords: [
    "about perfect zone",
    "Perfect Zone International Business Services",
    "business setup company UAE",
    "UAE business consultants",
    "visa services UAE",
    "document attestation UAE",
    "translation services UAE",
    "company formation consultants UAE",
    "business services Dubai",
    "entrepreneur support UAE",
  ],
  openGraph: {
    title:
      "About Perfect Zone International Business Services | Trusted UAE Business Consultants",
    description:
      "Discover Perfect Zone International Business Services — helping entrepreneurs, investors, and businesses with company formation, visas, attestation, and translation services across the UAE.",
    url: "https://www.perfectzone.ae/about-us",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/about-us-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Perfect Zone International Business Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.perfectzone.ae/about-us",
  },
};

export default function Page() {
  return <AboutUsPage />;
}
