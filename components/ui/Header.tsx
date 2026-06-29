"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage, languages } from "@/context/LanguageContext";
import Link from "next/link";
import BookConsultancyPopup from "./BookConsultancyPopup";
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

const translations = {
  en: {
    home: "Home",
    contact: "Contact",
    consultation: "Book Consultation",
    explore: "Explore All Services",
    premium: "Premium UAE Services",
    businessSetupSubtitle:
      "Complete UAE company formation solutions for mainland, free zone, and offshore businesses with expert guidance.",
    attestationSubtitle:
      "Fast and secure document attestation services for personal, educational, and commercial certificates in the UAE.",
    translationSubtitle:
      "Certified and legal translation services delivered accurately by experienced multilingual professionals.",
    visasSubtitle:
      "Reliable UAE visa solutions including Golden Visa, family, investor, employment, and residency services.",
    serviceText: "UAE professional corporate service",
    location: "Dubai - United Arab Emirates",
    businessSetup: "Business Setup",
    attestation: "Attestation",
    translation: "Translation",
    visas: "Visa",
    menu: "Menu",
  },

  ar: {
    home: "الرئيسية",
    contact: "اتصل بنا",
    consultation: "احجز استشارة",
    explore: "استكشف جميع الخدمات",
    premium: "خدمات الإمارات المميزة",
    businessSetupSubtitle:
      "حلول متكاملة لتأسيس الشركات في الإمارات للمناطق الداخلية والحرة والأوفشور مع استشارات احترافية.",
    attestationSubtitle:
      "خدمات تصديق سريعة وآمنة للمستندات الشخصية والتعليمية والتجارية داخل الإمارات.",
    translationSubtitle:
      "خدمات ترجمة قانونية ومعتمدة بدقة عالية بواسطة محترفين متعددي اللغات.",
    visasSubtitle:
      "خدمات تأشيرات موثوقة في الإمارات تشمل التأشيرة الذهبية والعائلية وتأشيرات المستثمر والعمل والإقامة.",
    serviceText: "خدمات احترافية للشركات في الإمارات",
    location: "دبي - الإمارات العربية المتحدة",
    businessSetup: "تأسيس الشركات",
    attestation: "التصديقات",
    translation: "الترجمة",
    visas: "التأشيرات",
    menu: "القائمة",
  },
};

const businessSetupServices = [
  {
    slug: "mainland-company-formation",
    title: { en: "Mainland Company Formation", ar: "تأسيس شركة داخلية" },
    image: "/images/services/mainland-company.jpg",
    description: {
      en: "Complete mainland company setup solutions with licensing and approvals.",
      ar: "حلول متكاملة لتأسيس شركات البر الرئيسي مع التراخيص والموافقات.",
    },
  },
  {
    slug: "freezone-company",
    title: { en: "Free Zone Company Setup", ar: "تأسيس شركة منطقة حرة" },
    image: "/images/services/freezone-company.jpg",
    description: {
      en: "Launch your UAE free zone business with fast and streamlined processes.",
      ar: "ابدأ أعمالك في المناطق الحرة بالإمارات بإجراءات سريعة وسلسة.",
    },
  },
  {
    slug: "offshore-company",
    title: { en: "Offshore Company Formation", ar: "تأسيس شركة أوفشور" },
    image: "/images/services/offshore-company.jpg",
    description: {
      en: "Secure offshore company registration for international operations.",
      ar: "تسجيل شركات الأوفشور للعمليات التجارية الدولية بأمان وكفاءة.",
    },
  },
  {
    slug: "trade-license",
    title: { en: "Trade License Services", ar: "خدمات الرخص التجارية" },
    image: "/images/services/trade-license.jpg",
    description: {
      en: "Trade license issuance, renewal, amendments, and compliance support.",
      ar: "إصدار وتجديد وتعديل الرخص التجارية مع خدمات الامتثال.",
    },
  },
  {
    slug: "corporate-bank",
    title: { en: "Corporate Bank Account", ar: "حساب مصرفي للشركات" },
    image: "/images/services/corporate-bank.jpg",
    description: {
      en: "Corporate banking assistance for startups and established companies.",
      ar: "خدمات فتح الحسابات البنكية للشركات الناشئة والقائمة.",
    },
  },
  {
    slug: "business-consultancy",
    title: { en: "Business Consultancy", ar: "استشارات الأعمال" },
    image: "/images/services/business-consultancy.jpg",
    description: {
      en: "Strategic consultancy for company growth and UAE market expansion.",
      ar: "استشارات استراتيجية لنمو الشركات والتوسع في سوق الإمارات.",
    },
  },
];

const attestationServices = [
  {
    slug: "mofa-attestation",
    title: { en: "MOFA Attestation", ar: "تصديق وزارة الخارجية" },
    image: "/images/services/mofa-attestation.jpg",
    description: {
      en: "Complete MOFA attestation services for personal, educational, and commercial documents.",
      ar: "خدمات تصديق وزارة الخارجية للمستندات الشخصية والتعليمية والتجارية.",
    },
  },
  {
    slug: "embassy-attestation",
    title: { en: "Embassy Attestation", ar: "تصديق السفارة" },
    image: "/images/services/embassy-attestation.jpg",
    description: {
      en: "Reliable embassy attestation support with smooth document verification processes.",
      ar: "خدمات تصديق السفارات مع إجراءات تحقق سلسة وموثوقة.",
    },
  },
  {
    slug: "degree-certificate-attestation",
    title: {
      en: "Degree Certificate Attestation",
      ar: "تصديق شهادة الدرجة العلمية",
    },
    image: "/images/services/degree-certificate-attestation.jpg",
    description: {
      en: "Educational certificate attestation services for UAE employment and immigration.",
      ar: "خدمات تصديق الشهادات التعليمية للعمل والهجرة في الإمارات.",
    },
  },
  {
    slug: "marriage-certificate-attestation",
    title: { en: "Marriage Certificate Attestation", ar: "تصديق شهادة الزواج" },
    image: "/images/services/marriage-certificate-attestation.jpg",
    description: {
      en: "Marriage certificate legalization and attestation for official UAE use.",
      ar: "تصديق واعتماد شهادات الزواج للاستخدام الرسمي في الإمارات.",
    },
  },
  {
    slug: "birth-certificate-attestation",
    title: { en: "Birth Certificate Attestation", ar: "تصديق شهادة الميلاد" },
    image: "/images/services/birth-certificate-attestation.jpg",
    description: {
      en: "Birth certificate attestation services with secure and fast processing.",
      ar: "خدمات تصديق شهادات الميلاد بسرعة وأمان.",
    },
  },
  {
    slug: "commercial-document-attestation",
    title: {
      en: "Commercial Document Attestation",
      ar: "تصديق المستندات التجارية",
    },
    image: "/images/services/commercial-document-attestation.jpg",
    description: {
      en: "Commercial document legalization for business setup and corporate compliance.",
      ar: "تصديق المستندات التجارية لتأسيس الأعمال والامتثال المؤسسي.",
    },
  },
];

const translationServices = [
  {
    slug: "legal-translation",
    title: { en: "Legal Translation", ar: "الترجمة القانونية" },
    image: "/images/services/legal-translation.jpg",
    description: {
      en: "Professional legal translation services for contracts, agreements, and official documents.",
      ar: "خدمات ترجمة قانونية احترافية للعقود والاتفاقيات والمستندات الرسمية.",
    },
  },
  {
    slug: "certified-translation",
    title: { en: "Certified Translation", ar: "الترجمة المعتمدة" },
    image: "/images/services/certified-translation.jpg",
    description: {
      en: "Certified translation solutions accepted by UAE government authorities and embassies.",
      ar: "خدمات ترجمة معتمدة مقبولة لدى الجهات الحكومية والسفارات في الإمارات.",
    },
  },
  {
    slug: "medical-translation",
    title: { en: "Medical Translation", ar: "الترجمة الطبية" },
    image: "/images/services/medical-translation.jpg",
    description: {
      en: "Accurate medical translation services for reports, prescriptions, and healthcare documents.",
      ar: "خدمات ترجمة طبية دقيقة للتقارير والوصفات والمستندات الصحية.",
    },
  },
  {
    slug: "technical-translation",
    title: { en: "Technical Translation", ar: "الترجمة التقنية" },
    image: "/images/services/technical-translation.jpg",
    description: {
      en: "Specialized technical translation for manuals, engineering documents, and specifications.",
      ar: "ترجمة تقنية متخصصة للكتيبات والمستندات الهندسية والمواصفات.",
    },
  },
  {
    slug: "business-translation",
    title: { en: "Business Translation", ar: "ترجمة الأعمال" },
    image: "/images/services/business-translation.jpg",
    description: {
      en: "Business translation services for corporate communication, reports, and presentations.",
      ar: "خدمات ترجمة تجارية للتواصل المؤسسي والتقارير والعروض التقديمية.",
    },
  },
  {
    slug: "website-translation",
    title: { en: "Website Translation", ar: "ترجمة المواقع الإلكترونية" },
    image: "/images/services/website-translation.jpg",
    description: {
      en: "Multilingual website translation solutions for global audience engagement and growth.",
      ar: "حلول ترجمة متعددة اللغات للمواقع الإلكترونية للوصول إلى جمهور عالمي.",
    },
  },
];

const visaServices = [
  {
    slug: "golden-visa",
    title: { en: "Golden Visa", ar: "التأشيرة الذهبية" },
    image: "/images/services/golden-visa.jpg",
    description: {
      en: "UAE Golden Visa assistance for investors, entrepreneurs, and skilled professionals.",
      ar: "خدمات التأشيرة الذهبية في الإمارات للمستثمرين ورواد الأعمال والمهنيين المهرة.",
    },
  },
  {
    slug: "family-visa",
    title: { en: "Family Visa", ar: "تأشيرة عائلية" },
    image: "/images/services/family-visa.jpg",
    description: {
      en: "Smooth family visa processing services with complete documentation and approvals.",
      ar: "خدمات تأشيرات عائلية بإجراءات سلسة مع التوثيق والموافقات الكاملة.",
    },
  },
  {
    slug: "employment-visa",
    title: { en: "Employment Visa", ar: "تأشيرة العمل" },
    image: "/images/services/employment-visa.jpg",
    description: {
      en: "Reliable UAE employment visa solutions for companies and working professionals.",
      ar: "حلول موثوقة لتأشيرات العمل في الإمارات للشركات والموظفين.",
    },
  },
  {
    slug: "investor-visa",
    title: { en: "Investor Visa", ar: "تأشيرة المستثمر" },
    image: "/images/services/investor-visa.jpg",
    description: {
      en: "Investor visa support for business owners establishing operations in the UAE.",
      ar: "خدمات تأشيرة المستثمر لأصحاب الأعمال الراغبين في تأسيس أعمالهم في الإمارات.",
    },
  },
  {
    slug: "partner-visa",
    title: { en: "Partner Visa", ar: "تأشيرة الشريك" },
    image: "/images/services/partner-visa.jpg",
    description: {
      en: "Partner visa services with streamlined application and corporate documentation support.",
      ar: "خدمات تأشيرة الشريك مع دعم متكامل للطلبات والمستندات التجارية.",
    },
  },
  {
    slug: "freelance-visa",
    title: { en: "Freelance Visa", ar: "تأشيرة العمل الحر" },
    image: "/images/services/freelance-visa.jpg",
    description: {
      en: "Flexible freelance visa solutions for independent professionals and remote workers.",
      ar: "حلول مرنة لتأشيرات العمل الحر للمهنيين المستقلين والعاملين عن بُعد.",
    },
  },
];

const routes: Record<string, string> = {
  businessSetup: "/business-setup",
  attestation: "/attestation",
  translation: "/translation",
  visas: "/visa",
};

function ChevronDownIcon({
  open,
  className = "",
}: {
  open?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 transition-all duration-300 ${
        open ? "rotate-180" : ""
      } ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-stone-400 transition duration-300 group-hover/item:text-[#704c9f]"
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
  );
}

function DesktopDropdown({
  id,
  activeDropdown,
  setActiveDropdown,
  title,
  subtitle,
  items,
  language,
  t,
  route,
}: {
  id: string;
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  title: string;
  subtitle: string;
  items: any[];
  language: string;
  t: any;
  route: string;
}) {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    setActiveDropdown(null); // close dropdown immediately
    router.push(url);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="group flex items-center gap-2 text-sm font-medium tracking-wide text-slate-700 transition duration-300">
        <span className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
          {title}
        </span>
        <ChevronDownIcon className="group-hover:rotate-180 group-hover:text-[#704c9f]" />
      </button>

      {/* KEEPING DESKTOP DESIGN SAME */}
      <div
        className={`absolute left-0 top-full z-50 w-full transition-all duration-300 ${
          activeDropdown === id
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0"
        }`}
      >
        <div className="border-t border-stone-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-8">
            <div className="col-span-4">
              <span className="inline-flex rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
                {t.premium}
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {subtitle}
              </p>

              <button
                onClick={() => handleNavigation(route)}
                className="group mt-6 flex items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90"
              >
                {/* Left Text */}
                <span className="px-2">{t.explore}</span>

                {/* Right White Circle Arrow */}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#704c9f] transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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

            <div className="col-span-8 max-h-[520px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(`${route}/${item.slug}`)}
                    className="group/item flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 text-left transition duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-15 w-25 overflow-hidden rounded-xl border border-stone-200">
                        <img
                          src={item.image}
                          alt={item.title[language]}
                          className="h-full w-full  transition duration-300 group-hover/item:scale-110"
                        />{" "}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#0F172A] transition duration-300 group-hover/item:bg-gradient-to-r group-hover/item:from-[#31a4da] group-hover/item:to-[#704c9f] group-hover/item:bg-clip-text group-hover/item:text-transparent">
                          {item.title[language]}
                        </h4>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.description?.[language]}
                        </p>
                      </div>
                    </div>

                    <ArrowIcon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({
  title,
  items,
  language,
  route,
  closeMenu,
}: {
  title: string;
  items: any[];
  language: string;
  route: string;
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      {/* Main Menu Row */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[15px] font-medium text-[#0F172A]">{title}</span>

        <ChevronDownIcon open={open} />
      </button>

      {/* Dropdown Items */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="pb-3 pl-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={`${route}/${item.slug}`}
              onClick={closeMenu}
              className="flex items-center justify-between py-3 transition hover:bg-stone-50"
            >
              <div className="flex items-center gap-3">
                {/* Small Image */}
                <div className="h-8 w-8 overflow-hidden rounded-lg border border-stone-200 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="text-sm text-[#0F172A]">
                  {item.title[language]}
                </span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-stone-400"
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
            </Link>
          ))}

          <Link
            href={route}
            onClick={closeMenu}
            className="mt-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#31a4da]/5 to-[#704c9f]/5 px-3 py-3 transition hover:from-[#31a4da]/10 hover:to-[#704c9f]/10"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
              Explore All
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#704c9f]"
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [openServicePopup, setOpenServicePopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(2);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { selectedLanguage, setSelectedLanguage, currentLanguage } =
    useLanguage();

  const t =
    translations[selectedLanguage as keyof typeof translations] ||
    translations.en;

  const handlePopup = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <header
        dir={currentLanguage.dir}
        className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-md"
      >
        {/* MOBILE TOP BAR */}
        <div className="border-b border-stone-200 bg-[#0F172A] xl:hidden">
          <div className="flex items-center justify-between px-4 py-2">
            {/* LOCATION */}
            <a
              href="https://maps.app.goo.gl/NobknpmktqvjP8mt8"
              className="flex items-center gap-1.5 text-[11px] text-white/90"
            >
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
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="truncate">{t.location}</span>
            </a>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLanguage(language.code)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition duration-300 ${
                    selectedLanguage === language.code
                      ? "bg-white text-[#0F172A]"
                      : "border border-white/20 text-white"
                  }`}
                >
                  {language.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP TOP BAR */}
        <div className="hidden border-b border-white/10 bg-[#0F172A] xl:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white/90">
            <div className="flex items-center gap-6">
              <a
                href="https://maps.app.goo.gl/NobknpmktqvjP8mt8"
                className="flex items-center gap-2 tracking-wide transition duration-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>{t.location}</span>
              </a>

              <span className="h-4 w-px bg-white/20"></span>

              <a
                href="mailto:info@perfectzonehub.com"
                className="transition duration-300 hover:text-white"
              >
                info@perfectzonehub.com
              </a>
            </div>

            {/* DESKTOP LANGUAGE */}
            <div className="flex items-center gap-2">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLanguage(language.code)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition duration-300 ${
                    selectedLanguage === language.code
                      ? "bg-white text-[#0F172A]"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {language.flag} {language.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 xl:px-6">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 lg:gap-3">
            <div className="flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
              <img
                src="/images/logo/perfect-zone-logo.png"
                alt="Perfect Zone Logo"
                className="h-full w-full"
              />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-sm font-semibold tracking-wide text-transparent sm:text-base lg:text-lg">
                Perfect Zone
              </h1>

              <p className="text-[9px] tracking-[0.18em] text-stone-500 sm:text-[10px] lg:text-[12px]">
                International Business Services
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-5 xl:flex">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide text-slate-700 transition duration-300 hover:bg-gradient-to-r hover:from-[#31a4da] hover:to-[#704c9f] hover:bg-clip-text hover:text-transparent"
            >
              {t.home}
            </Link>

            <DesktopDropdown
              id="businessSetup"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              title={t.businessSetup}
              subtitle={t.businessSetupSubtitle}
              items={businessSetupServices}
              language={selectedLanguage}
              t={t}
              route="/business-setup"
            />

            <DesktopDropdown
              id="attestation"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              title={t.attestation}
              subtitle={t.attestationSubtitle}
              items={attestationServices}
              language={selectedLanguage}
              t={t}
              route="/attestation"
            />

            <DesktopDropdown
              id="translation"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              title={t.translation}
              subtitle={t.translationSubtitle}
              items={translationServices}
              language={selectedLanguage}
              t={t}
              route="/translation"
            />

            <DesktopDropdown
              id="visas"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              title={t.visas}
              subtitle={t.visasSubtitle}
              items={visaServices}
              language={selectedLanguage}
              t={t}
              route="/visa"
            />

            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide text-slate-700 transition duration-300 hover:bg-gradient-to-r hover:from-[#31a4da] hover:to-[#704c9f] hover:bg-clip-text hover:text-transparent"
            >
              {t.contact}
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden items-center xl:flex">
            <button
              onClick={handlePopup}
              className={`group inline-flex  items-center rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:opacity-90`}
            >
              {/* Text */}
              <span className="px-2">{t.consultation}</span>

              {/* Icon */}
              <span className="ltr:ml-auto rtl:mr-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M10 14h4" />
                </svg>
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-[#0F172A] transition duration-300 hover:border-[#31a4da]/30 xl:hidden"
          >
            {mobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden ${
            mobileMenu
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "max-h-0 opacity-0"
          } overflow-y-auto border-t border-stone-200 bg-white transition-all duration-300`}
        >
          <div className="px-5 py-2">
            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between border-b border-stone-200 py-4 transition hover:text-[#704c9f]"
            >
              <span className="text-[15px] font-medium text-[#0F172A]">
                {t.home}
              </span>
            </Link>

            <MobileDropdown
              title={t.businessSetup}
              items={businessSetupServices}
              language={selectedLanguage}
              route="/business-setup"
              closeMenu={() => setMobileMenu(false)}
            />

            <MobileDropdown
              title={t.attestation}
              items={attestationServices}
              language={selectedLanguage}
              route="/attestation"
              closeMenu={() => setMobileMenu(false)}
            />

            <MobileDropdown
              title={t.translation}
              items={translationServices}
              language={selectedLanguage}
              route="/translation"
              closeMenu={() => setMobileMenu(false)}
            />

            <MobileDropdown
              title={t.visas}
              items={visaServices}
              language={selectedLanguage}
              route="/visa"
              closeMenu={() => setMobileMenu(false)}
            />

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between border-b border-stone-200 py-4 transition hover:text-[#704c9f]"
            >
              <span className="text-[15px] font-medium text-[#0F172A]">
                {t.contact}
              </span>
            </Link>

            {/* MOBILE CTA */}
            <div className="py-4">
              <button
                onClick={handlePopup}
                className="mgroup flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-5 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
              >
                {/* Left Text */}
                <span className="text-[15px] font-semibold tracking-wide">
                  {t.consultation}
                </span>

                {/* Right Icon */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition duration-300 group-hover:bg-white/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 2v4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 2v4"
                    />
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14h4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <BookConsultancyPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        setOpenServicePopup={setOpenServicePopup}
        setSelectedService={setSelectedService}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setNationality={setNationality}
      />

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
      ) : selectedService == "Freezone Company" ? (
        <FreeZoneCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Offshore Company" ? (
        <OffshoreCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Trade License" ? (
        <TradeLicensePopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Corporate Bank" ? (
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
    </>
  );
}
