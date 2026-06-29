import type { Metadata } from "next";
import EmploymentVisaPage from "./EmploymentVisaPage";

export const metadata = {
  title:
    "UAE Employment Visa Services | Work Visa Assistance in Dubai & UAE | Perfect Zone International Business Services L.L.C",
  description:
    "Professional UAE employment visa services for companies and employees. Get expert assistance with work permits, labor approvals, employment visa applications, status changes, Emirates ID, and residency visa processing across the UAE.",
  keywords: [
    "UAE employment visa",
    "employment visa UAE",
    "Dubai work visa",
    "UAE work permit",
    "employment visa services UAE",
    "labor approval UAE",
    "residency visa UAE",
    "work permit processing Dubai",
    "Emirates ID visa process",
    "status change visa UAE",
    "employee visa UAE",
    "work visa consultant Dubai",
    "visa services UAE",
    "employment residency visa",
    "Perfect Zone employment visa",
  ],
  alternates: {
    canonical: "https://www.perfectzone.ae/services/employment-visa",
  },
  openGraph: {
    title: "UAE Employment Visa Services | Work Visa Assistance in UAE",
    description:
      "Complete employment visa assistance in the UAE including work permits, labor approvals, application processing, medical tests, Emirates ID, and residency visa issuance.",
    url: "https://www.perfectzone.ae/services/employment-visa",
    siteName: "Perfect Zone International Business Services",
    images: [
      {
        url: "/images/banners/services/employment-visa.jpg",
        width: 1200,
        height: 630,
        alt: "UAE Employment Visa Services",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Employment Visa Services | Perfect Zone",
    description:
      "Expert assistance for UAE employment visas, work permits, labor approvals, and residency processing.",
    images: ["/images/banners/services/employment-visa.jpg"],
  },
};

export default function Page() {
  return <EmploymentVisaPage />;
}
