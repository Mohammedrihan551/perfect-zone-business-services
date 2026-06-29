import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://perfectzonehub.com"; // Change to your real domain

  const routes = [
    "",
    "/business-setup",
    "/business-setup/mainland-company-formation",
    "/business-setup/freezone-company",
    "/business-setup/offshore-company",
    "/business-setup/trade-license",
    "/business-setup/corporate-bank",
    "/business-setup/business-consultancy",

    "/attestation",
    "/attestation/mofa-attestation",
    "/attestation/embassy-attestation",
    "/attestation/degree-certificate-attestation",
    "/attestation/marriage-certificate-attestation",
    "/attestation/birth-certificate-attestation",
    "/attestation/commercial-document-attestation",

    "/translation",
    "/translation/legal-translation",
    "/translation/certified-translation",
    "/translation/medical-translation",
    "/translation/business-translation",
    "/translation/website-translation",

    "/visa",
    "/visa/golden-visa",
    "/visa/family-visa",
    "/visa/employment-visa",
    "/visa/investor-visa",
    "/visa/partner-visa",
    "/visa/freelance-visa",

    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-condition",
    "/help-support",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
