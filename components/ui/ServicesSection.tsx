"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MainlandCompanyPopup from "./MainlandCompanyPopup";
import FreeZoneCompanyPopup from "./FreezoneCompanyPopup";
import OffshoreCompanyPopup from "./OffshoreCompanyPopup";
import TradeLicensePopup from "./TradeLicensePopup";
import CorporateBankPopup from "./CorporateBankPopup";
import BusinessConsultancyPopup from "./BusinessConsultancyPopup";
import MOFAAttestationPopup from "./MOFAAttestationPopup";
import EmbassyAttestationPopup from "./EmbassyAttestationPopup";
import DegreeCertificateAttestationPopup from "./DegreeCertificateAttestationPopup";
import MarriageCertificateAttestationPopup from "./MarriageCertificateAttestationPopup";
import BirthCertificateAttestationPopup from "./BirthCertificateAttestationPopup";
import CommercialDocumentAttestationPopup from "./CommercialDocumentAttestationPopup";
import LegalTranslationPopup from "./LegalTranslationPopup";
import CertifiedTranslationPopup from "./CertifiedTranslationPopup";
import MedicalTranslationPopup from "./MedicalTranslationPopup";
import TechnicalTranslationPopup from "./TechnicalTranslationPopup";
import BusinessTranslationPopup from "./BusinessTranslationPopup";
import WebsiteTranslationPopup from "./WebsiteTranslationPopup";
import GoldenVisaPopup from "./GoldenVisaPopup";
import FamilyVisaPopup from "./FamilyVisaPopup";
import EmploymentVisaPopup from "./EmploymentVisaPopup";
import InvestorVisaPopup from "./InvestorVisaPopup";
import PartnerVisaPopup from "./PartnerVisaPopup";
import FreelanceVisaPopup from "./FreelanceVisaPopup";

export default function ServicesSection() {
  const { selectedLanguage } = useLanguage();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("all");

  const [selectedService, setSelectedService] = useState("");
  const [openServicePopup, setOpenServicePopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const categories = [
    { id: "all", label: { en: "All", ar: "الكل" } },
    { id: "business", label: { en: "Business Setup", ar: "تأسيس الأعمال" } },
    { id: "attestation", label: { en: "Attestation", ar: "التصديقات" } },
    { id: "translation", label: { en: "Translation", ar: "الترجمة" } },
    { id: "visa", label: { en: "Visa", ar: "التأشيرات" } },
  ];

  const services = [
    {
      title: "Business Setup",
      description:
        "Launch your UAE company with mainland, freezone, and offshore setup solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"
          />
        </svg>
      ),
    },
    {
      title: "Golden Visa",
      description:
        "Premium UAE Golden Visa assistance for investors and professionals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19.4 15a1.65 1.65 0 00.33 1.82"
          />
        </svg>
      ),
    },
    {
      title: "Legal Translation",
      description: "Certified legal translation services in 100+ languages.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 20h9"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"
          />
        </svg>
      ),
    },
    {
      title: "MOFA Attestation",
      description: "End-to-end attestation and embassy legalization services.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12h6m-6 4h6"
          />
        </svg>
      ),
    },
    {
      title: "PRO Services",
      description:
        "Government approvals, immigration services, and PRO support.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M17 20h5V4H2v16h5"
          />
        </svg>
      ),
    },
    {
      title: "Family Visa",
      description: "Smooth UAE family visa processing and approvals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M17 20h5V4H2v16h5"
          />
        </svg>
      ),
    },
  ];

  const handleCategory = (category: string) => {
    setSelectedService(category);
    setOpenServicePopup(true);
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5ff] py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#31a4da]" />

            <span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
              {selectedLanguage === "ar"
                ? "حلول الأعمال المتميزة في الإمارات"
                : "Premium UAE Business Solutions"}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {selectedLanguage === "ar" ? (
              <>
                كل ما تحتاجه
                <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                  {" "}
                  في مكان واحد
                </span>
              </>
            ) : (
              <>
                Everything You Need
                <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                  {" "}
                  In One Place
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {selectedLanguage === "ar"
              ? "خدمات أعمال حديثة في الإمارات مع دعم متميز، وإنجاز أسرع، وتجربة سلسة."
              : "Modern UAE business services with premium support, faster processing, and a seamless experience."}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#31a4da] to-[#704c9f] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#31a4da]/40 hover:text-[#704c9f]"
              }`}
            >
              {category.label[selectedLanguage]}
            </button>
          ))}
        </div>

        {/* Services Section Wrapper */}
        <div className="space-y-10">
          {/* Business Services */}
          {(activeCategory === "all" || activeCategory === "business") && (
            <div className="mt-10 rounded-[20px] bg-[#eef5ff] p-6 md:p-8 lg:p-10">
              {/* Heading */}
              <div className="border-b border-slate-200/70 pb-6">
                {/* Top Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left Side */}
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
                      <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
                      {selectedLanguage === "ar" ? "خبراتنا" : "Our Expertise"}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                      {selectedLanguage === "ar"
                        ? "خدمات الأعمال"
                        : "Business Services"}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {selectedLanguage === "ar"
                        ? "حلول أعمال متكاملة في الإمارات لتأسيس الشركات والتأشيرات وخدمات الامتثال."
                        : "End-to-end UAE business solutions for company setup, visas, and compliance."}
                    </p>
                  </div>

                  {/* Right Side Button */}
                  <button
                    onClick={() => router.push("/business-setup")}
                    className="self-start inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-5 pr-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90"
                  >
                    <span>
                      {selectedLanguage === "ar"
                        ? "استكشف الكل"
                        : "Explore All"}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="h-px w-[15%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

              {/* Services Grid */}
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: {
                      en: "Mainland Company Formation",
                      ar: "تأسيس شركة في البر الرئيسي",
                    },
                    description: {
                      en: "Complete mainland company setup solutions with licensing and approvals.",
                      ar: "حلول متكاملة لتأسيس شركات البر الرئيسي مع التراخيص والموافقات.",
                    },
                    image: "/images/services/mainland-company.jpg",
                    path: "/business-setup/mainland-company-formation",
                  },
                  {
                    title: {
                      en: "Free Zone Company Setup",
                      ar: "تأسيس شركة في المنطقة الحرة",
                    },
                    description: {
                      en: "Launch your UAE free zone business with fast and streamlined processes.",
                      ar: "ابدأ أعمالك في المناطق الحرة بالإمارات بإجراءات سريعة وسلسة.",
                    },
                    image: "/images/services/freezone-company.jpg",
                    path: "/business-setup/freezone-company",
                  },
                  {
                    title: {
                      en: "Offshore Company Formation",
                      ar: "تأسيس شركة أوفشور",
                    },
                    description: {
                      en: "Secure offshore company registration for international operations.",
                      ar: "تسجيل شركات الأوفشور للعمليات التجارية الدولية بأمان وكفاءة.",
                    },
                    image: "/images/services/offshore-company.jpg",
                    path: "/business-setup/offshore-company",
                  },
                  {
                    title: {
                      en: "Trade License Services",
                      ar: "خدمات الرخص التجارية",
                    },
                    description: {
                      en: "Trade license issuance, renewal, amendments, and compliance support.",
                      ar: "إصدار وتجديد وتعديل الرخص التجارية مع خدمات الامتثال.",
                    },
                    image: "/images/services/trade-license.jpg",
                    path: "/business-setup/trade-license",
                  },
                  {
                    title: {
                      en: "Corporate Bank Account",
                      ar: "فتح حساب بنكي للشركات",
                    },
                    description: {
                      en: "Corporate banking assistance for startups and established companies.",
                      ar: "خدمات فتح الحسابات البنكية للشركات الناشئة والقائمة.",
                    },
                    image: "/images/services/corporate-bank.jpg",
                    path: "/business-setup/corporate-bank",
                  },
                  {
                    title: {
                      en: "Business Consultancy",
                      ar: "الاستشارات التجارية",
                    },
                    description: {
                      en: "Strategic consultancy for company growth and UAE market expansion.",
                      ar: "استشارات استراتيجية لنمو الشركات والتوسع في سوق الإمارات.",
                    },
                    image: "/images/services/business-consultancy.jpg",
                    path: "/business-setup/business-consultancy",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(service.path)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
                  >
                    {/* Top Section */}
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title[selectedLanguage as "en" | "ar"]}
                          className="h-full w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/25" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        {/* Title + Logo */}
                        <div className=" flex items-start gap-2">
                          <h3 className="text-base font-semibold leading-6 tracking-tight">
                            <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                              {service.title[selectedLanguage as "en" | "ar"]}
                            </span>
                          </h3>
                        </div>

                        <div className="my-1 h-px w-[50%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

                        {/* Description */}
                        <p className="text-xs leading-5 text-slate-600 line-clamp-2">
                          {service.title[selectedLanguage as "en" | "ar"]}
                        </p>
                      </div>
                    </div>

                    {/* Full Width Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategory(service.title.en);
                      }}
                      className="mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-4 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                    >
                      <span>
                        {selectedLanguage === "ar"
                          ? "احصل على الخدمة"
                          : "Get Service"}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attestation Services */}
          {(activeCategory === "all" || activeCategory === "attestation") && (
            <div className="mt-10 rounded-[20px] bg-white p-6 md:p-8 lg:p-10">
              {/* Heading */}
              <div className="border-b border-slate-200/70 pb-6">
                {/* Top Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left Side */}
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
                      <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
                      {selectedLanguage === "ar" ? "خبراتنا" : "Our Expertise"}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                      {selectedLanguage === "ar"
                        ? "خدمات التصديقات"
                        : "Attestation Services"}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {selectedLanguage === "ar"
                        ? "خدمات تصديق واعتماد المستندات بسرعة وموثوقية داخل الإمارات وخارجها."
                        : "Fast and reliable document attestation and legalization services in the UAE and abroad."}
                    </p>
                  </div>

                  {/* Right Side Button */}
                  <button
                    onClick={() => router.push("/attestation")}
                    className="self-start inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-5 pr-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90"
                  >
                    <span>
                      {selectedLanguage === "ar"
                        ? "استكشف الكل"
                        : "Explore All"}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="h-px w-[15%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

              {/* Services Grid */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: {
                      en: "MOFA Attestation",
                      ar: "تصديق وزارة الخارجية",
                    },
                    description: {
                      en: "Complete MOFA attestation services for personal, educational, and commercial documents.",
                      ar: "خدمات تصديق وزارة الخارجية للمستندات الشخصية والتعليمية والتجارية.",
                    },
                    image: "/images/services/mofa-attestation.jpg",
                    path: "/attestation/mofa-attestation",
                  },
                  {
                    title: {
                      en: "Embassy Attestation",
                      ar: "تصديق السفارات",
                    },
                    description: {
                      en: "Reliable embassy attestation support with smooth document verification processes.",
                      ar: "خدمات تصديق السفارات مع إجراءات تحقق سلسة وموثوقة.",
                    },
                    image: "/images/services/embassy-attestation.jpg",
                    path: "/attestation/embassy-attestation",
                  },
                  {
                    title: {
                      en: "Degree Certificate Attestation",
                      ar: "تصديق الشهادات الدراسية",
                    },
                    description: {
                      en: "Educational certificate attestation services for UAE employment and immigration.",
                      ar: "خدمات تصديق الشهادات التعليمية للعمل والهجرة في الإمارات.",
                    },
                    image:
                      "/images/services/degree-certificate-attestation.jpg",
                    path: "/attestation/degree-certificate-attestation",
                  },
                  {
                    title: {
                      en: "Marriage Certificate Attestation",
                      ar: "تصديق شهادة الزواج",
                    },
                    description: {
                      en: "Marriage certificate legalization and attestation for official UAE use.",
                      ar: "تصديق واعتماد شهادات الزواج للاستخدام الرسمي في الإمارات.",
                    },
                    image:
                      "/images/services/marriage-certificate-attestation.jpg",
                    path: "/attestation/marriage-certificate-attestation",
                  },
                  {
                    title: {
                      en: "Birth Certificate Attestation",
                      ar: "تصديق شهادة الميلاد",
                    },
                    description: {
                      en: "Birth certificate attestation services with secure and fast processing.",
                      ar: "خدمات تصديق شهادات الميلاد بسرعة وأمان.",
                    },
                    image: "/images/services/birth-certificate-attestation.jpg",
                    path: "/attestation/birth-certificate-attestation",
                  },
                  {
                    title: {
                      en: "Commercial Document Attestation",
                      ar: "تصديق المستندات التجارية",
                    },
                    description: {
                      en: "Commercial document legalization for business setup and corporate compliance.",
                      ar: "تصديق المستندات التجارية لتأسيس الأعمال والامتثال المؤسسي.",
                    },
                    image:
                      "/images/services/commercial-document-attestation.jpg",
                    path: "/attestation/commercial-document-attestation",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(service.path)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
                  >
                    {/* Top Section */}
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title[selectedLanguage as "en" | "ar"]}
                          className="h-full w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/25" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        {/* Title + Logo */}
                        <div className=" flex items-start gap-2">
                          <h3 className="text-base font-semibold leading-6 tracking-tight">
                            <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                              {service.title[selectedLanguage as "en" | "ar"]}
                            </span>
                          </h3>
                        </div>

                        <div className="my-1 h-px w-[50%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

                        {/* Description */}
                        <p className="text-xs leading-5 text-slate-600 line-clamp-2">
                          {service.title[selectedLanguage as "en" | "ar"]}
                        </p>
                      </div>
                    </div>

                    {/* Full Width Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategory(service.title.en);
                      }}
                      className="mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-4 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                    >
                      <span>
                        {selectedLanguage === "ar"
                          ? "احصل على الخدمة"
                          : "Get Service"}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Translation Services */}
          {(activeCategory === "all" || activeCategory === "translation") && (
            <div className="mt-10 rounded-[20px] bg-[#eef5ff] p-6 md:p-8 lg:p-10">
              {/* Heading */}
              <div className="border-b border-slate-200/70 pb-6">
                {/* Top Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left Side */}
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
                      <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
                      {selectedLanguage === "ar" ? "خبراتنا" : "Our Expertise"}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                      {selectedLanguage === "ar"
                        ? "خدمات الترجمة"
                        : "Translation Services"}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {selectedLanguage === "ar"
                        ? "خدمات ترجمة دقيقة ومعتمدة للمستندات القانونية والتجارية والشخصية."
                        : "Accurate and certified translation services for legal, business, and personal documents."}
                    </p>
                  </div>

                  {/* Right Side Button */}
                  <button
                    onClick={() => router.push("/translation")}
                    className="self-start inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-5 pr-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90"
                  >
                    <span>
                      {selectedLanguage === "ar"
                        ? "استكشف الكل"
                        : "Explore All"}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="h-px w-[15%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

              {/* Services Grid */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: {
                      en: "Legal Translation",
                      ar: "الترجمة القانونية",
                    },
                    description: {
                      en: "Professional legal translation services for contracts, agreements, and official documents.",
                      ar: "خدمات ترجمة قانونية احترافية للعقود والاتفاقيات والمستندات الرسمية.",
                    },
                    image: "/images/services/legal-translation.jpg",
                    path: "/translation/legal-translation",
                  },
                  {
                    title: {
                      en: "Certified Translation",
                      ar: "الترجمة المعتمدة",
                    },
                    description: {
                      en: "Certified translation solutions accepted by UAE government authorities and embassies.",
                      ar: "خدمات ترجمة معتمدة مقبولة لدى الجهات الحكومية والسفارات في الإمارات.",
                    },
                    image: "/images/services/certified-translation.jpg",
                    path: "/translation/certified-translation",
                  },
                  {
                    title: {
                      en: "Medical Translation",
                      ar: "الترجمة الطبية",
                    },
                    description: {
                      en: "Accurate medical translation services for reports, prescriptions, and healthcare documents.",
                      ar: "خدمات ترجمة طبية دقيقة للتقارير والوصفات والمستندات الصحية.",
                    },
                    image: "/images/services/medical-translation.jpg",
                    path: "/translation/medical-translation",
                  },
                  {
                    title: {
                      en: "Technical Translation",
                      ar: "الترجمة التقنية",
                    },
                    description: {
                      en: "Specialized technical translation for manuals, engineering documents, and specifications.",
                      ar: "ترجمة تقنية متخصصة للكتيبات والمستندات الهندسية والمواصفات.",
                    },
                    image: "/images/services/technical-translation.jpg",
                    path: "/translation/technical-translation",
                  },
                  {
                    title: {
                      en: "Business Translation",
                      ar: "الترجمة التجارية",
                    },
                    description: {
                      en: "Business translation services for corporate communication, reports, and presentations.",
                      ar: "خدمات ترجمة تجارية للتواصل المؤسسي والتقارير والعروض التقديمية.",
                    },
                    image: "/images/services/business-translation.jpg",
                    path: "/translation/business-translation",
                  },
                  {
                    title: {
                      en: "Website Translation",
                      ar: "ترجمة المواقع الإلكترونية",
                    },
                    description: {
                      en: "Multilingual website translation solutions for global audience engagement and growth.",
                      ar: "حلول ترجمة متعددة اللغات للمواقع الإلكترونية للوصول إلى جمهور عالمي.",
                    },
                    image: "/images/services/website-translation.jpg",
                    path: "/translation/website-translation",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(service.path)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
                  >
                    {/* Top Section */}
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title[selectedLanguage as "en" | "ar"]}
                          className="h-full w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/25" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        {/* Title + Logo */}
                        <div className=" flex items-start gap-2">
                          <h3 className="text-base font-semibold leading-6 tracking-tight">
                            <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                              {service.title[selectedLanguage as "en" | "ar"]}
                            </span>
                          </h3>
                        </div>

                        <div className="my-1 h-px w-[50%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

                        {/* Description */}
                        <p className="text-xs leading-5 text-slate-600 line-clamp-2">
                          {service.title[selectedLanguage as "en" | "ar"]}
                        </p>
                      </div>
                    </div>

                    {/* Full Width Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategory(service.title.en);
                      }}
                      className="mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-4 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                    >
                      <span>
                        {selectedLanguage === "ar"
                          ? "احصل على الخدمة"
                          : "Get Service"}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visa Services */}
          {(activeCategory === "all" || activeCategory === "visa") && (
            <div className="mt-10 rounded-[20px] bg-white p-6 md:p-8 lg:p-10">
              <div className="border-b border-slate-200/70 pb-6">
                {/* Top Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left Side */}
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
                      <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
                      {selectedLanguage === "ar" ? "خبراتنا" : "Our Expertise"}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                      {selectedLanguage === "ar"
                        ? "خدمات التأشيرات"
                        : "Visa Services"}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {selectedLanguage === "ar"
                        ? "حلول تأشيرات سريعة وموثوقة للأفراد والعائلات ورواد الأعمال في الإمارات."
                        : "Fast and reliable UAE visa solutions for individuals, families, and business professionals."}
                    </p>
                  </div>

                  {/* Right Side Button */}
                  <button
                    onClick={() => router.push("/visa")}
                    className="self-start inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-5 pr-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90"
                  >
                    <span>
                      {selectedLanguage === "ar"
                        ? "استكشف الكل"
                        : "Explore All"}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="h-px w-[15%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

              {/* Services Grid */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: {
                      en: "Golden Visa",
                      ar: "التأشيرة الذهبية",
                    },
                    description: {
                      en: "Premium UAE Golden Visa assistance for investors, entrepreneurs, and skilled professionals.",
                      ar: "خدمات التأشيرة الذهبية في الإمارات للمستثمرين ورواد الأعمال والمهنيين المهرة.",
                    },
                    image: "/images/services/golden-visa.jpg",
                    path: "/visa/golden-visa",
                  },
                  {
                    title: {
                      en: "Family Visa",
                      ar: "تأشيرة العائلة",
                    },
                    description: {
                      en: "Smooth family visa processing services with complete documentation and approvals.",
                      ar: "خدمات تأشيرات عائلية بإجراءات سلسة مع التوثيق والموافقات الكاملة.",
                    },
                    image: "/images/services/family-visa.jpg",
                    path: "/visa/family-visa",
                  },
                  {
                    title: {
                      en: "Employment Visa",
                      ar: "تأشيرة العمل",
                    },
                    description: {
                      en: "Reliable UAE employment visa solutions for companies and working professionals.",
                      ar: "حلول موثوقة لتأشيرات العمل في الإمارات للشركات والموظفين.",
                    },
                    image: "/images/services/employment-visa.jpg",
                    path: "/visa/employment-visa",
                  },
                  {
                    title: {
                      en: "Investor Visa",
                      ar: "تأشيرة المستثمر",
                    },
                    description: {
                      en: "Investor visa support for business owners establishing operations in the UAE.",
                      ar: "خدمات تأشيرة المستثمر لأصحاب الأعمال الراغبين في تأسيس أعمالهم في الإمارات.",
                    },
                    image: "/images/services/investor-visa.jpg",
                    path: "/visa/investor-visa",
                  },
                  {
                    title: {
                      en: "Partner Visa",
                      ar: "تأشيرة الشريك",
                    },
                    description: {
                      en: "Partner visa services with streamlined application and corporate documentation support.",
                      ar: "خدمات تأشيرة الشريك مع دعم متكامل للطلبات والمستندات التجارية.",
                    },
                    image: "/images/services/partner-visa.jpg",
                    path: "/visa/partner-visa",
                  },
                  {
                    title: {
                      en: "Freelance Visa",
                      ar: "تأشيرة العمل الحر",
                    },
                    description: {
                      en: "Flexible freelance visa solutions for independent professionals and remote workers.",
                      ar: "حلول مرنة لتأشيرات العمل الحر للمهنيين المستقلين والعاملين عن بُعد.",
                    },
                    image: "/images/services/freelance-visa.jpg",
                    path: "/visa/freelance-visa",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(service.path)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
                  >
                    {/* Top Section */}
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title[selectedLanguage as "en" | "ar"]}
                          className="h-full w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/25" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        {/* Title + Logo */}
                        <div className=" flex items-start gap-2">
                          <h3 className="text-base font-semibold leading-6 tracking-tight">
                            <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                              {service.title[selectedLanguage as "en" | "ar"]}
                            </span>
                          </h3>
                        </div>

                        <div className="my-1 h-px w-[50%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

                        {/* Description */}
                        <p className="text-xs leading-5 text-slate-600 line-clamp-2">
                          {service.title[selectedLanguage as "en" | "ar"]}
                        </p>
                      </div>
                    </div>

                    {/* Full Width Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategory(service.title.en);
                      }}
                      className="mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-4 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                    >
                      <span>
                        {selectedLanguage === "ar"
                          ? "احصل على الخدمة"
                          : "Get Service"}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#704c9f]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedService == "Mainland Company Formation" ? (
        // Business Setup
        <MainlandCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Free Zone Company Setup" ? (
        <FreeZoneCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Offshore Company Formation" ? (
        <OffshoreCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Trade License Services" ? (
        <TradeLicensePopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Corporate Bank Account" ? (
        <CorporateBankPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Business Consultancy" ? (
        <BusinessConsultancyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "MOFA Attestation" ? (
        // Attestation Services
        <MOFAAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Embassy Attestation" ? (
        <EmbassyAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Degree Certificate Attestation" ? (
        <DegreeCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Marriage Certificate Attestation" ? (
        <MarriageCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Birth Certificate Attestation" ? (
        <BirthCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Commercial Document Attestation" ? (
        <CommercialDocumentAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Legal Translation" ? (
        // Translation Services
        <LegalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Certified Translation" ? (
        <CertifiedTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Medical Translation" ? (
        <MedicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Technical Translation" ? (
        <TechnicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Business Translation" ? (
        <BusinessTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Website Translation" ? (
        <WebsiteTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Golden Visa" ? (
        // Visa Services
        <GoldenVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Family Visa" ? (
        <FamilyVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Employment Visa" ? (
        <EmploymentVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Investor Visa" ? (
        <InvestorVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Partner Visa" ? (
        <PartnerVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Freelance Visa" ? (
        <FreelanceVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : (
        ""
      )}
    </section>
  );
}
