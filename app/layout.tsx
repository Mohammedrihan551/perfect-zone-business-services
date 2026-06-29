import type { Metadata } from "next";
import { DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import FooterSection from "@/components/ui/FooterSection";
import { LanguageProvider } from "@/context/LanguageContext";
import CTASection from "@/components/ui/CTASection";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfectzonehub.com"),

  title: {
    default:
      "Perfect Zone International Business Services L.L.C | UAE Business Setup & Visa Services",
    template: "%s | Perfect Zone",
  },

  description:
    "Perfect Zone International Business Services L.L.C offers expert UAE business setup, company formation, visa processing, document attestation, legal translation, PRO services, and corporate banking assistance in Dubai and across the UAE.",

  keywords: [
    "UAE business setup",
    "Dubai business setup",
    "company formation UAE",
    "mainland company formation",
    "freezone company setup",
    "offshore company formation",
    "trade license UAE",
    "golden visa UAE",
    "family visa UAE",
    "employment visa UAE",
    "investor visa UAE",
    "document attestation Dubai",
    "MOFA attestation",
    "embassy attestation",
    "legal translation Dubai",
    "certified translation UAE",
    "corporate bank account UAE",
    "business consultancy Dubai",
    "Perfect Zone",
  ],

  authors: [{ name: "Perfect Zone International Business Services L.L.C" }],
  creator: "Perfect Zone International Business Services L.L.C",
  publisher: "Perfect Zone International Business Services L.L.C",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://perfectzonehub.com",
  },

  openGraph: {
    title:
      "Perfect Zone International Business Services L.L.C | UAE Business Setup",
    description:
      "Business setup, visa services, attestation, translation, and PRO services across Dubai and UAE.",
    url: "https://perfectzonehub.com",
    siteName: "Perfect Zone",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Perfect Zone International Business Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Perfect Zone | UAE Business Setup & Visa Services",
    description:
      "Expert assistance for company formation, visas, attestation, translation, and PRO services in UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },

  category: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingContactButtons />
        <LanguageProvider>
          <Header />
          {children}
          <CTASection />
          <FooterSection />
        </LanguageProvider>
      </body>
    </html>
  );
}
