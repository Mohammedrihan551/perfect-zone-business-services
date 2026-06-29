import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact Us - Perfect Zone International Business Services L.L.C UAE",
  description:
    "Contact Perfect Zone International Business Services for expert assistance with UAE business setup, visa services, document attestation, and professional translation solutions. Reach out via phone, WhatsApp, email, or visit our office in Dubai.",
  keywords: [
    "contact business setup consultant UAE",
    "Perfect Zone contact",
    "business setup consultants Dubai",
    "visa services contact UAE",
    "document attestation services Dubai",
    "translation services Dubai",
    "company formation consultation UAE",
    "WhatsApp business consultant Dubai",
    "UAE business services office",
    "Dubai business support services",
  ],
  alternates: {
    canonical: "https://www.perfectzonehub.com/contact",
  },
  openGraph: {
    title: "Contact Perfect Zone International Business Services | UAE Experts",
    description:
      "Get in touch with Perfect Zone for trusted business setup, visa, attestation, and translation services in the UAE.",
    url: "https://www.perfectzonehub.com/contact",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/logo/perfect-zone-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Perfect Zone International Business Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Perfect Zone International Business Services",
    description:
      "Speak with our experts for business setup, visas, attestation, and translation services across the UAE.",
    images: ["/images/logo/perfect-zone-logo.png"],
  },
};

export default function Page() {
  return <ContactPage />;
}
