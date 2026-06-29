import type { Metadata } from "next";
import FamilyVisaPage from "./FamilyVisaPage";

export const metadata = {
  title:
    "UAE Family Visa Services | Family Visa Assistance in Dubai & UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Professional UAE family visa services for sponsoring spouses, children, parents, and dependents. Get expert assistance with eligibility checks, document preparation, application submission, approvals, and visa processing across the UAE.",
  keywords: [
    "UAE family visa",
    "family visa UAE",
    "Dubai family visa",
    "family visa services UAE",
    "UAE dependent visa",
    "spouse visa UAE",
    "children visa UAE",
    "parent visa UAE",
    "family sponsorship UAE",
    "residence visa UAE",
    "family visa consultant Dubai",
    "visa services UAE",
    "family residency visa",
    "sponsor family in UAE",
    "Perfect Zone family visa",
  ],
  alternates: {
    canonical: "https://www.perfectzone.ae/services/family-visa",
  },
  openGraph: {
    title: "UAE Family Visa Services | Family Visa Assistance in UAE",
    description:
      "Bring your loved ones to the UAE with complete family visa assistance. We help with sponsorship eligibility, documentation, submission, approvals, and end-to-end visa processing.",
    url: "https://www.perfectzone.ae/services/family-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/family-visa.webp",
        width: 1200,
        height: 630,
        alt: "UAE Family Visa Services",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Family Visa Services | Perfect Zone",
    description:
      "Expert assistance for UAE family visa applications, sponsorship, approvals, and residency processing.",
    images: ["/images/banners/services/family-visa.webp"],
  },
};

export default function Page() {
  return <FamilyVisaPage />;
}
