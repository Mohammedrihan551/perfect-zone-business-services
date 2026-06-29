import type { Metadata } from "next";
import SitemapPage from "./SitemapPage";

export const metadata = {
  title: "Sitemap - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Browse the complete sitemap of Perfect Zone International Business Services. Explore business setup, visa services, attestation, translation, and important company pages in the UAE.",
  keywords: [
    "sitemap UAE",
    "Perfect Zone sitemap",
    "business setup services UAE",
    "visa services UAE",
    "attestation services UAE",
    "translation services UAE",
    "website sitemap",
    "business consultancy pages UAE",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/sitemap",
  },
  openGraph: {
    title: "Sitemap | Perfect Zone International Business Services UAE",
    description:
      "Explore all pages and services available on Perfect Zone International Business Services including business setup, visas, attestation, and translation services.",
    url: "https://www.perfectzonehub.com/sitemap",
    siteName: "Perfect Zone International Business Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Sitemap - Perfect Zone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Perfect Zone International Business Services UAE",
    description:
      "Browse all services and pages offered by Perfect Zone International Business Services in the UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },
};

export default function Page() {
  return <SitemapPage />;
}
