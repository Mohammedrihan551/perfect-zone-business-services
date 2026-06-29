"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookConsultancyPopup from "@/components/ui/BookConsultancyPopup";
import GoldenVisaPopup from "@/components/ui/GoldenVisaPopup";
import FamilyVisaPopup from "@/components/ui/FamilyVisaPopup";
import EmploymentVisaPopup from "@/components/ui/EmploymentVisaPopup";
import InvestorVisaPopup from "@/components/ui/InvestorVisaPopup";
import PartnerVisaPopup from "@/components/ui/PartnerVisaPopup";
import FreelanceVisaPopup from "@/components/ui/FreelanceVisaPopup";
import VisaConsultancyPopup from "@/components/ui/VisaConsultancyPopup";

export default function VisaPage() {
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
      heroTag: "UAE VISA EXPERTS",
      heroTitle: "Visa Services Made Simple in the UAE",
      heroDescription:
        "Professional visa processing solutions for investors, families, entrepreneurs, employees and freelancers across the UAE.",
      consultation: "Get Consultation",
      startingFrom: "Starting From",
      servicesTag: "Visa Services",
      servicesTitle: "Complete UAE",
      servicesTitleGradient: "Visa Solutions",
      servicesDescription:
        "Expert visa consultancy and end-to-end application support tailored to your residency and business requirements.",
      processTag: "SIMPLE PROCESS",
      processTitle: "How We Process",
      processTitleGradient: "Your Visa",
      processDescription:
        "From eligibility assessment to final approval, our experts handle every step of your UAE visa journey.",
      learnMore: "Get Service",
      startingPrice: "AED 999",
      cardFeatures: [
        "Golden Visa Assistance",
        "Fast Application Processing",
        "Documentation Support",
        "Government Liaison",
        "Dedicated Visa Consultant",
      ],
    },

    ar: {
      heroTag: "خبراء التأشيرات في الإمارات",
      heroTitle: "خدمات التأشيرات في الإمارات بكل سهولة",
      heroDescription:
        "حلول احترافية لمعالجة التأشيرات للمستثمرين والعائلات ورواد الأعمال والموظفين والمستقلين في جميع أنحاء الإمارات.",
      consultation: "احجز استشارة",
      startingFrom: "يبدأ من",
      servicesTag: "خدمات التأشيرات",
      servicesTitle: "حلول متكاملة",
      servicesTitleGradient: "لتأشيرات الإمارات",
      servicesDescription:
        "استشارات احترافية ودعم كامل لإجراءات التأشيرات بما يتناسب مع متطلبات الإقامة والأعمال.",
      processTag: "خطوات بسيطة",
      processTitle: "كيف نقوم",
      processTitleGradient: "بإصدار تأشيرتك",
      processDescription:
        "من تقييم الأهلية وحتى الموافقة النهائية، يدير خبراؤنا جميع مراحل طلب التأشيرة الخاصة بك.",
      learnMore: "احصل على الخدمة",
      startingPrice: "AED ٩٩٩",
      cardFeatures: [
        "خدمات التأشيرة الذهبية",
        "معالجة سريعة للطلبات",
        "دعم المستندات",
        "متابعة الجهات الحكومية",
        "مستشار تأشيرات متخصص",
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
        en: "Golden Visa",
        ar: "التأشيرة الذهبية",
      },
      description: {
        en: "Premium UAE Golden Visa assistance for investors, entrepreneurs and skilled professionals.",
        ar: "خدمات التأشيرة الذهبية للمستثمرين ورواد الأعمال والمهنيين المهرة.",
      },
      features: {
        en: [
          "Long-Term Residency",
          "Investor Eligibility",
          "Priority Processing",
        ],
        ar: ["إقامة طويلة الأمد", "أهلية المستثمرين", "إجراءات أولوية"],
      },
      image: "/images/services/golden-visa.jpg",
      path: "/visa/golden-visa",
    },
    {
      title: {
        en: "Family Visa",
        ar: "تأشيرة عائلية",
      },
      description: {
        en: "Smooth family visa processing with complete documentation and approvals.",
        ar: "خدمات التأشيرات العائلية بإجراءات سلسة مع التوثيق الكامل.",
      },
      features: {
        en: ["Family Sponsorship", "Document Support", "Fast Approvals"],
        ar: ["كفالة العائلة", "دعم المستندات", "موافقات سريعة"],
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
        en: "Reliable UAE employment visa services for companies and professionals.",
        ar: "حلول موثوقة لتأشيرات العمل للشركات والموظفين.",
      },
      features: {
        en: [
          "Work Permit Support",
          "Employer Processing",
          "Medical Assistance",
        ],
        ar: ["دعم تصاريح العمل", "إجراءات صاحب العمل", "المساعدة الطبية"],
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
        en: "Investor visa solutions for entrepreneurs establishing businesses in the UAE.",
        ar: "خدمات تأشيرة المستثمر لأصحاب الأعمال الراغبين في تأسيس أعمالهم في الإمارات.",
      },
      features: {
        en: ["Business Ownership", "Residency Benefits", "Corporate Support"],
        ar: ["ملكية الأعمال", "مزايا الإقامة", "دعم الشركات"],
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
        en: "Partner visa services with streamlined application and business documentation support.",
        ar: "خدمات تأشيرة الشريك مع دعم متكامل للمستندات التجارية.",
      },
      features: {
        en: [
          "Shareholder Eligibility",
          "Corporate Documentation",
          "Residency Processing",
        ],
        ar: ["أهلية المساهمين", "مستندات الشركات", "إجراءات الإقامة"],
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
        en: "Flexible visa solutions for freelancers, consultants and remote professionals.",
        ar: "حلول مرنة لتأشيرات العمل الحر للمستقلين والاستشاريين والعاملين عن بُعد.",
      },
      features: {
        en: ["Independent Work Permit", "Flexible Residency", "Quick Approval"],
        ar: ["تصريح عمل مستقل", "إقامة مرنة", "موافقة سريعة"],
      },
      image: "/images/services/freelance-visa.jpg",
      path: "/visa/freelance-visa",
    },
  ];

  const process = {
    en: [
      "Eligibility Assessment",
      "Document Collection",
      "Application Submission",
      "Government Processing",
      "Medical & Emirates ID",
      "Visa Approval & Issuance",
    ],

    ar: [
      "تقييم الأهلية",
      "جمع المستندات",
      "تقديم الطلب",
      "المعالجة الحكومية",
      "الفحص الطبي والهوية الإماراتية",
      "الموافقة وإصدار التأشيرة",
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
            backgroundImage: "url('/images/hero/visa.png')",
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
          <div className="flex max-w-2xl flex-col justify-center text-center md:text-left lg:text-left rtl:lg:text-right">
            {/* Left Content */}
            <div className="flex max-w-2xl flex-col justify-center">
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
            {process[selectedLanguage].map((item, index) => (
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

      <VisaConsultancyPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        setOpenServicePopup={setOpenServicePopup}
        setSelectedConsultancyService={setSelectedConsultancyService}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setNationality={setNationality}
      />

      {selectedService == "Golden Visa" ? (
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

      {selectedConsultancyService == "Golden Visa" ? (
        // Visa Services
        <GoldenVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Family Visa" ? (
        <FamilyVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Employment Visa" ? (
        <EmploymentVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Investor Visa" ? (
        <InvestorVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Partner Visa" ? (
        <PartnerVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={2}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedConsultancyService == "Freelance Visa" ? (
        <FreelanceVisaPopup
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
