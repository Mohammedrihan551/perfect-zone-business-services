import type { Metadata } from "next";
import FreelanceVisaPage from "./FreelanceVisaPage";

export const metadata = {
  title:
    "Freelance Visa Services in UAE | UAE Freelance Permit & Residency Assistance | Perfect Zone International Business Services L.L.C",
  description:
    "Get professional freelance visa services in the UAE with Perfect Zone. We assist freelancers, consultants, remote workers, and digital professionals with freelance permits, residency visas, documentation, and approvals.",
  keywords: [
    "freelance visa UAE",
    "UAE freelance visa",
    "Dubai freelance visa",
    "freelance permit UAE",
    "freelancer visa Dubai",
    "remote worker visa UAE",
    "self employed visa UAE",
    "freelance residency visa",
    "work independently in UAE",
    "freelance license Dubai",
    "Perfect Zone freelance visa",
  ],
  openGraph: {
    title:
      "Freelance Visa Services in UAE | Perfect Zone International Business Services",
    description:
      "Apply for a UAE freelance visa with expert support. Perfect Zone helps independent professionals obtain freelance permits, residency visas, and complete legal documentation.",
    url: "https://www.perfectzone.ae/services/freelance-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/freelance-visa.jpg",
        width: 1200,
        height: 630,
        alt: "Freelance Visa Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.perfectzone.ae/services/freelance-visa",
  },
};

export default function Page() {
  return <FreelanceVisaPage />;
}
