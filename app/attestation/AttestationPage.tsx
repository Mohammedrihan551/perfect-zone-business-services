"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MOFAAttestationPopup from "@/components/ui/MOFAAttestationPopup";
import EmbassyAttestationPopup from "@/components/ui/EmbassyAttestationPopup";
import DegreeCertificateAttestationPopup from "@/components/ui/DegreeCertificateAttestationPopup";
import MarriageCertificateAttestationPopup from "@/components/ui/MarriageCertificateAttestationPopup";
import BirthCertificateAttestationPopup from "@/components/ui/BirthCertificateAttestationPopup";
import CommercialDocumentAttestationPopup from "@/components/ui/CommercialDocumentAttestationPopup";
import AttestationConsultancyPopup from "@/components/ui/AttestationConsultancyPopup";

export default function AttestationPage() {
  const { selectedLanguage, currentLanguage } = useLanguage();

  const router = useRouter();

  const [openPopup, setOpenPopup] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [openServicePopup, setOpenServicePopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(2);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const handlePopup = () => {
    setCurrentStep(2);
    setOpenPopup(true);
  };

  const handleCategory = (category: string) => {
    setCurrentStep(1);
    setSelectedService(category);
    setOpenServicePopup(true);
  };

  const translations = {
    en: {
      heroTag: "UAE ATTESTATION EXPERTS",
      heroTitle: "Attestation Solutions for All Your Documents",
      heroDescription:
        "Professional attestation and legalization services for personal, educational, commercial, and embassy documents across the UAE.",

      consultation: "Get Consultation",

      startingFrom: "Starting From",

      servicesTag: "Attestation Services",
      servicesTitle: "Complete UAE",
      servicesTitleGradient: "Document Attestation Solutions",

      servicesDescription:
        "Professional attestation and legalization services for all types of documents required in the UAE.",

      processTag: "SIMPLE PROCESS",
      processTitle: "How We Handle",
      processTitleGradient: "Your Attestation",

      processDescription:
        "Our experts manage the complete attestation process from document review to final legalization.",

      learnMore: "Get Service",

      startingPrice: "AED 199",

      cardFeatures: [
        "MOFA Attestation",
        "Embassy Legalization",
        "Certificate Verification",
        "Document Collection & Delivery",
        "Dedicated Support Team",
      ],
    },

    ar: {
      heroTag: "خبراء التصديقات في الإمارات",

      heroTitle: "حلول التصديق لجميع مستنداتك",

      heroDescription:
        "خدمات احترافية لتصديق واعتماد المستندات الشخصية والتعليمية والتجارية ومستندات السفارات في جميع أنحاء الإمارات.",

      consultation: "احجز استشارة",

      startingFrom: "يبدأ من",

      servicesTag: "خدمات التصديق",
      servicesTitle: "حلول متكاملة",
      servicesTitleGradient: "لتصديق المستندات",

      servicesDescription:
        "خدمات احترافية لتصديق واعتماد جميع أنواع المستندات المطلوبة داخل الإمارات.",

      processTag: "خطوات بسيطة",
      processTitle: "كيف نقوم",
      processTitleGradient: "بتصديق مستنداتك",

      processDescription:
        "يقوم خبراؤنا بإدارة عملية التصديق بالكامل من مراجعة المستندات حتى الاعتماد النهائي.",

      learnMore: "احصل على الخدمة",

      startingPrice: "AED ١٩٩",

      cardFeatures: [
        "تصديق وزارة الخارجية",
        "اعتماد السفارات",
        "التحقق من الشهادات",
        "استلام وتسليم المستندات",
        "فريق دعم متخصص",
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
        en: "MOFA Attestation",
        ar: "تصديق وزارة الخارجية",
      },
      description: {
        en: "Complete MOFA attestation services for personal, educational and commercial documents.",
        ar: "خدمات تصديق وزارة الخارجية للمستندات الشخصية والتعليمية والتجارية.",
      },
      features: {
        en: ["Same Day Processing", "Government Approved", "Secure Handling"],
        ar: ["إنجاز في نفس اليوم", "معتمد حكومياً", "معالجة آمنة"],
      },
      image: "/images/services/mofa-attestation.jpg",
      path: "/attestation/mofa-attestation",
    },

    {
      title: {
        en: "Embassy Attestation",
        ar: "تصديق السفارة",
      },
      description: {
        en: "Reliable embassy attestation support with smooth document verification.",
        ar: "خدمات تصديق السفارات مع إجراءات تحقق سلسة وموثوقة.",
      },
      features: {
        en: ["Embassy Verification", "Fast Documentation", "Worldwide Support"],
        ar: ["اعتماد السفارة", "إجراءات سريعة", "دعم عالمي"],
      },
      image: "/images/services/embassy-attestation.jpg",
      path: "/attestation/embassy-attestation",
    },

    {
      title: {
        en: "Degree Certificate Attestation",
        ar: "تصديق الشهادة الجامعية",
      },
      description: {
        en: "Educational certificate attestation for employment and immigration purposes.",
        ar: "خدمات تصديق الشهادات التعليمية للعمل والهجرة في الإمارات.",
      },
      features: {
        en: [
          "Employment Visa Support",
          "University Verification",
          "MOFA Approval",
        ],
        ar: ["دعم تأشيرات العمل", "التحقق من الجامعة", "اعتماد وزارة الخارجية"],
      },
      image: "/images/services/degree-certificate-attestation.jpg",
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
      features: {
        en: ["Family Visa Support", "Legal Validation", "Quick Processing"],
        ar: ["دعم تأشيرات الأسرة", "اعتماد قانوني", "إجراءات سريعة"],
      },
      image: "/images/services/marriage-certificate-attestation.jpg",
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
      features: {
        en: [
          "Child Visa Processing",
          "Official Verification",
          "Express Service",
        ],
        ar: ["إجراءات تأشيرة الأطفال", "تحقق رسمي", "خدمة سريعة"],
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
      features: {
        en: [
          "Corporate Compliance",
          "Contract Legalization",
          "Business Documentation",
        ],
        ar: ["الامتثال المؤسسي", "اعتماد العقود", "المستندات التجارية"],
      },
      image: "/images/services/commercial-document-attestation.jpg",
      path: "/attestation/commercial-document-attestation",
    },
  ];

  const process = {
    en: [
      "Document Review",
      "Verification & Validation",
      "Government Processing",
      "Embassy Attestation",
      "MOFA Approval",
      "Delivery of Documents",
    ],

    ar: [
      "مراجعة المستندات",
      "التحقق والتدقيق",
      "المعالجة الحكومية",
      "تصديق السفارة",
      "اعتماد وزارة الخارجية",
      "تسليم المستندات",
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
            backgroundImage: "url('/images/hero/attestation.png')",
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
            {/* <div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="text-[12px] text-slate-400">
                      {lang.startingFrom}
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                      {lang.startingPrice}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                    <Image
                      src="/images/logo/perfect-zone-logo.png"
                      alt="Perfect Zone Logo"
                      width={40}
                      height={40}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  {lang.cardFeatures.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 transition-all duration-300 hover:border-[#31a4da]/30 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#31a4da]/15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 text-[#31a4da]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-[13px] font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
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

      <AttestationConsultancyPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        setOpenServicePopup={setOpenServicePopup}
        setSelectedService={setSelectedService}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setNationality={setNationality}
      />

      {selectedService == "MOFA Attestation" ? (
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
      ) : (
        ""
      )}
    </main>
  );
}
