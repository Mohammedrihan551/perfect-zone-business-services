import type { Metadata } from "next";
import WebsiteTranslationPage from "./WebsiteTranslationPage";

export const metadata = {
  title:
    "Website Translation Services in UAE | Multilingual Website Localization | Perfect Zone International Business Services L.L.C",
  description:
    "Professional website translation services in the UAE for multilingual websites, content localization, SEO translation, eCommerce pages, blogs, and corporate websites. Expand globally with culturally adapted website content.",
  keywords: [
    "website translation UAE",
    "website localization Dubai",
    "multilingual website translation",
    "SEO translation services UAE",
    "website content translation",
    "Arabic website translation",
    "English to Arabic website translation",
    "ecommerce website translation UAE",
    "business website localization",
    "multilingual SEO UAE",
    "website translation services Dubai",
    "Perfect Zone website translation",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/services/website-translation",
  },
  openGraph: {
    title:
      "Website Translation Services in UAE | Multilingual Localization | Perfect Zone",
    description:
      "Professional website translation and localization services for global business growth, multilingual SEO, and culturally adapted digital experiences.",
    url: "https://www.perfectzonehub.com/services/website-translation",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/website-translation.jpg",
        width: 1200,
        height: 630,
        alt: "Website Translation Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Translation Services in UAE | Perfect Zone",
    description:
      "SEO-friendly multilingual website translation and localization services for businesses expanding into international markets.",
    images: ["/images/banners/services/website-translation.jpg"],
  },
};

export default function Page() {
  return <WebsiteTranslationPage />;
}
