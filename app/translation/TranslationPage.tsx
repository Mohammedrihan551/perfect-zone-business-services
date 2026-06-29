"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookConsultancyPopup from "@/components/ui/BookConsultancyPopup";
import LegalTranslationPopup from "@/components/ui/LegalTranslationPopup";
import CertifiedTranslationPopup from "@/components/ui/CertifiedTranslationPopup";
import MedicalTranslationPopup from "@/components/ui/MedicalTranslationPopup";
import TechnicalTranslationPopup from "@/components/ui/TechnicalTranslationPopup";
import BusinessTranslationPopup from "@/components/ui/BusinessTranslationPopup";
import WebsiteTranslationPopup from "@/components/ui/WebsiteTranslationPopup";
import TranslationConsultancyPopup from "@/components/ui/TranslationConsultancyPopup";

export default function TranslationPage() {
  const { selectedLanguage, currentLanguage } = useLanguage();

  const router = useRouter();

  const [openPopup, setOpenPopup] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [openServicePopup, setOpenServicePopup] = useState(false);

  const [selectedConsultancyService, setSelectedConsultancyService] =
    useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const handlePopup = () => {
    setOpenPopup(true);
  };

  const handleCategory = (category: string) => {
    setSelectedService(category);
    setOpenServicePopup(true);
  };

  const translations = {
    en: {
      heroTag: "PROFESSIONAL TRANSLATION SERVICES",

      heroTitle: "Translation Solutions for Businesses",

      heroDescription:
        "Accurate, government-approved and industry-specific translation services for legal, business, technical and personal documents.",

      consultation: "Get Consultation",

      startingFrom: "Starting From",

      servicesTag: "Translation Services",

      servicesTitle: "Professional",
      servicesTitleGradient: "Language Solutions",

      servicesDescription:
        "Certified and specialized translation services tailored for businesses, professionals, and individuals across the UAE.",

      processTag: "SIMPLE PROCESS",

      processTitle: "How We Deliver",
      processTitleGradient: "Your Translation",

      processDescription:
        "From document review to certified delivery, our experts ensure accuracy, quality and compliance.",

      learnMore: "Get Service",

      startingPrice: "AED 49",

      cardFeatures: [
        "Certified Translation",
        "Legal Translation Experts",
        "150+ Language Pairs",
        "Fast Turnaround Time",
        "Government Accepted",
      ],
    },

    ar: {
      heroTag: "خدمات الترجمة الاحترافية",

      heroTitle: "حلول ترجمة احترافية للشركات",

      heroDescription:
        "خدمات ترجمة دقيقة ومعتمدة ومتخصصة للمستندات القانونية والتجارية والفنية والشخصية.",

      consultation: "احجز استشارة",

      startingFrom: "يبدأ من",

      servicesTag: "خدمات الترجمة",

      servicesTitle: "حلول",
      servicesTitleGradient: "الترجمة الاحترافية",

      servicesDescription:
        "خدمات ترجمة معتمدة ومتخصصة للشركات والمهنيين والأفراد في جميع أنحاء الإمارات.",

      processTag: "خطوات بسيطة",

      processTitle: "كيف نقوم",
      processTitleGradient: "بترجمة مستنداتك",

      processDescription:
        "من مراجعة المستندات حتى التسليم النهائي المعتمد، نضمن أعلى مستويات الدقة والجودة.",

      learnMore: "احصل على الخدمة",

      startingPrice: "AED ٤٩",

      cardFeatures: [
        "ترجمة معتمدة",
        "خبراء الترجمة القانونية",
        "أكثر من 150 لغة",
        "إنجاز سريع",
        "معتمدة لدى الجهات الحكومية",
      ],
    },
  };

  const t =
    translations[selectedLanguage as keyof typeof translations] ||
    translations.en;

  const lang = t;

  const services = [
    {
      title: {
        en: "Legal Translation",
        ar: "الترجمة القانونية",
      },
      description: {
        en: "Professional legal translation services for contracts, agreements and official documents.",
        ar: "خدمات ترجمة قانونية احترافية للعقود والاتفاقيات والمستندات الرسمية.",
      },
      features: {
        en: ["Court Accepted", "Legal Experts", "Certified Accuracy"],
        ar: ["مقبولة لدى المحاكم", "خبراء قانونيون", "دقة معتمدة"],
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
        en: "Certified translations accepted by UAE authorities, ministries and embassies.",
        ar: "ترجمات معتمدة مقبولة لدى الجهات الحكومية والوزارات والسفارات.",
      },
      features: {
        en: ["Government Approved", "Embassy Accepted", "Fast Delivery"],
        ar: ["معتمدة حكومياً", "مقبولة لدى السفارات", "تسليم سريع"],
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
        en: "Accurate translation of medical reports, prescriptions and healthcare documents.",
        ar: "ترجمة دقيقة للتقارير الطبية والوصفات والمستندات الصحية.",
      },
      features: {
        en: [
          "Medical Specialists",
          "Healthcare Documents",
          "Precise Terminology",
        ],
        ar: ["مختصون طبيون", "المستندات الصحية", "مصطلحات دقيقة"],
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
        en: "Specialized translation for engineering documents, manuals and technical specifications.",
        ar: "ترجمة متخصصة للمستندات الهندسية والكتيبات والمواصفات الفنية.",
      },
      features: {
        en: ["Engineering Experts", "Technical Manuals", "Industry Standards"],
        ar: ["خبراء هندسيون", "الكتيبات الفنية", "معايير صناعية"],
      },
      image: "/images/services/technical-translation.jpg",
      path: "/translation/technical-translation",
    },

    {
      title: {
        en: "Business Translation",
        ar: "ترجمة الأعمال",
      },
      description: {
        en: "Professional business translation for reports, presentations and corporate communication.",
        ar: "خدمات ترجمة احترافية للتقارير والعروض والتواصل المؤسسي.",
      },
      features: {
        en: ["Corporate Reports", "Business Documents", "Professional Quality"],
        ar: ["تقارير الشركات", "المستندات التجارية", "جودة احترافية"],
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
        en: "Multilingual website translation solutions for global business growth.",
        ar: "حلول ترجمة متعددة اللغات للمواقع الإلكترونية للوصول إلى الأسواق العالمية.",
      },
      features: {
        en: ["SEO Friendly", "Multilingual Content", "Global Reach"],
        ar: ["متوافق مع SEO", "محتوى متعدد اللغات", "وصول عالمي"],
      },
      image: "/images/services/website-translation.jpg",
      path: "/translation/website-translation",
    },
  ];

  const process = {
    en: [
      "Document Submission",
      "Language Assessment",
      "Professional Translation",
      "Quality Review",
      "Certification & Approval",
      "Final Delivery",
    ],

    ar: [
      "استلام المستندات",
      "تقييم اللغة",
      "الترجمة الاحترافية",
      "مراجعة الجودة",
      "الاعتماد والتصديق",
      "التسليم النهائي",
    ],
  };

  return (
    <main dir={currentLanguage.dir} className="min-h-screen bg-white pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#162235] text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/translation.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#07111f]/75" />

        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#31a4da18,transparent_28%),radial-gradient(circle_at_bottom_right,#704c9f18,transparent_34%)]" />

        {/* Extra Glow Effects */}
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#31a4da]/5 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#704c9f]/5 blur-[120px]" />

        {/* Container */}
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-4 pt-10 pb-5 sm:min-h-[76vh] sm:px-6 sm:py-12 lg:min-h-[84vh] lg:px-8">
          <div className="grid w-full items-center gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex max-w-2xl flex-col justify-center text-center md:text-left lg:text-left rtl:lg:text-right">
              {/* Tag */}
              <div className="mb-4">
                <span className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1 text-[9px] font-medium tracking-[0.18em] text-white/80 backdrop-blur-md sm:px-4 sm:text-[10px]">
                  {lang.heroTag}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[30px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[38px] lg:text-5xl xl:text-[56px]">
                {lang.heroTitle}
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-lg text-[13px] leading-6 text-slate-300 sm:text-sm md:text-[15px] lg:max-w-xl">
                {lang.heroDescription}
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start lg:justify-start rtl:lg:justify-end">
                <button
                  type="button"
                  onClick={handlePopup}
                  className="group inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
                >
                  {/* Text */}
                  <span className="px-4">{lang.consultation}</span>

                  {/* Arrow */}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-[#704c9f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-4 text-center sm:gap-5 md:text-left lg:text-left rtl:lg:text-right">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    5+
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
                    {selectedLanguage == "ar" ? "سنوات" : "Years"}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    3K+
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
                    {selectedLanguage == "ar" ? "عملاء" : "Clients"}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    24/7
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
                    {selectedLanguage == "ar" ? "دعم" : "Support"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#31a4da]" />

            <span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
              {lang.servicesTag}
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {lang.servicesTitle}
            <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
              {" "}
              {lang.servicesTag}
            </span>
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
            {lang.servicesDescription}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => router.push(service.path)}
              className="cursor-pointer group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5"
            >
              {/* Service Image */}
              <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src={service.image}
                  alt={service.title[selectedLanguage as "en" | "ar"]}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                <span className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                  {service.title[selectedLanguage as "en" | "ar"]}
                </span>
              </h3>

              <div className="my-2 h-px w-[50%] bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.title[selectedLanguage as "en" | "ar"]}
              </p>

              {/* Features */}
              <div className="mt-5 space-y-2.5">
                {service.features[selectedLanguage as "en" | "ar"].map(
                  (feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f]" />

                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategory(service.title.en);
                }}
                className="mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] pl-4 pr-2 py-2 text-sm font-medium text-white transition duration-300 hover:opacity-90"
              >
                <span>{lang.learnMore}</span>

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
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#31a4da]/20 bg-[#31a4da]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#704c9f]">
              <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
              {lang.processTag}
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {lang.processTitle}
              <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                {" "}
                {lang.processTitleGradient}
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {process[selectedLanguage as "en" | "ar"].map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-200 bg-[#eef5ff] p-5 transition-all duration-300 hover:border-[#31a4da]/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#31a4da] to-[#704c9f] text-base font-semibold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                    {item}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {lang.processDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TranslationConsultancyPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        setOpenServicePopup={setOpenServicePopup}
        setSelectedConsultancyService={setSelectedConsultancyService}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setNationality={setNationality}
      />

      {selectedService == "Legal Translation" ? (
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
      ) : (
        ""
      )}

      {selectedConsultancyService == "Legal Translation" ? (
        // Translation Services
        <LegalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Certified Translation" ? (
        <CertifiedTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Medical Translation" ? (
        <MedicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Technical Translation" ? (
        <TechnicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Business Translation" ? (
        <BusinessTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Website Translation" ? (
        <WebsiteTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : (
        ""
      )}
    </main>
  );
}
