"use client";

import {
  Map,
  Briefcase,
  FileCheck,
  Languages,
  BadgeCheck,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SitemapPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "Sitemap",
      subtitle:
        "Browse all pages and services available on Perfect Zone International Business Services.",
      business: "Business Setup",
      attestation: "Attestation Services",
      translation: "Translation Services",
      visa: "Visa Services",
      other: "Other Pages",
    },
    ar: {
      title: "خريطة الموقع",
      subtitle:
        "تصفح جميع الصفحات والخدمات المتوفرة في بيرفكت زون للخدمات الدولية للأعمال.",
      business: "تأسيس الأعمال",
      attestation: "خدمات التصديق",
      translation: "خدمات الترجمة",
      visa: "خدمات التأشيرات",
      other: "صفحات أخرى",
    },
  };

  const lang = content[selectedLanguage];

  const sections = [
    {
      title: lang.business,
      links: [
        [
          "Mainland Company Formation",
          "/business-setup/mainland-company-formation",
        ],
        ["Freezone Company", "/business-setup/freezone-company"],
        ["Offshore Company", "/business-setup/offshore-company"],
        ["Trade License", "/business-setup/trade-license"],
        ["Corporate Bank", "/business-setup/corporate-bank"],
        ["Business Consultancy", "/business-setup/business-consultancy"],
      ],
    },
    {
      title: lang.attestation,
      links: [
        ["MOFA Attestation", "/attestation/mofa-attestation"],
        ["Embassy Attestation", "/attestation/embassy-attestation"],
        [
          "Degree Certificate Attestation",
          "/attestation/degree-certificate-attestation",
        ],
        [
          "Marriage Certificate Attestation",
          "/attestation/marriage-certificate-attestation",
        ],
        [
          "Birth Certificate Attestation",
          "/attestation/birth-certificate-attestation",
        ],
        [
          "Commercial Document Attestation",
          "/attestation/commercial-document-attestation",
        ],
      ],
    },
    {
      title: lang.translation,
      links: [
        ["Legal Translation", "/translation/legal-translation"],
        ["Certified Translation", "/translation/certified-translation"],
        ["Medical Translation", "/translation/medical-translation"],
        ["Technical Translation", "/translation/technical-translation"],
        ["Business Translation", "/translation/business-translation"],
        ["Website Translation", "/translation/website-translation"],
      ],
    },
    {
      title: lang.visa,
      links: [
        ["Golden Visa", "/visa/golden-visa"],
        ["Family Visa", "/visa/family-visa"],
        ["Employment Visa", "/visa/employment-visa"],
        ["Investor Visa", "/visa/investor-visa"],
        ["Partner Visa", "/visa/partner-visa"],
        ["Freelance Visa", "/visa/freelance-visa"],
      ],
    },
    {
      title: lang.other,
      links: [
        ["About Us", "/about"],
        ["Contact", "/contact"],
        ["Privacy Policy", "/privacy-policy"],
        ["Terms & Condition", "/terms-and-condition"],
        ["Help & Support", "/help-support"],
      ],
    },
  ];

  return (
    <main
      className="bg-white pt-28"
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{lang.title}</h1>
          <p className="max-w-3xl mx-auto text-blue-100">{lang.subtitle}</p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-slate-600 hover:text-[#31a4da] transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
