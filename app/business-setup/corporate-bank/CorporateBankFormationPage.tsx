"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import CorporateBankPopup from "@/components/ui/CorporateBankPopup";

export default function CorporateBankFormationPage() {
  const [openPopup, setOpenPopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const { selectedLanguage, currentLanguage } = useLanguage();

  const content = {
    en: {
      heroTag: "UAE Corporate Banking Services",
      heroTitle: "Corporate Bank Account Opening in UAE",
      heroDescription:
        "Open a corporate bank account in the UAE with expert guidance. We assist businesses with bank selection, compliance documentation, KYC requirements, and account opening support for mainland, free zone, and offshore companies.",

      getService: "Get Service",

      benefitsTag: "Why Choose Our Banking Assistance",
      benefitsTitle: "Benefits of Corporate Bank Account Support",
      benefitsDescription:
        "Simplify the corporate banking process with professional assistance, proper documentation, and guidance throughout the application journey.",

      processTag: "Simple Process",
      processTitle1: "Bank Account",
      processTitle2: "Opening Process",
      processDescription:
        "Our specialists help you navigate every stage of opening a UAE corporate bank account.",
    },

    ar: {
      heroTag: "خدمات الحسابات المصرفية للشركات",
      heroTitle: "فتح حساب مصرفي للشركات في الإمارات",
      heroDescription:
        "افتح حساباً مصرفياً لشركتك في دولة الإمارات بسهولة من خلال دعم خبرائنا في اختيار البنك المناسب وتجهيز المستندات واستيفاء متطلبات الامتثال وفتح الحساب.",

      getService: "احصل على الخدمة",

      benefitsTag: "لماذا تختار خدماتنا المصرفية",
      benefitsTitle: "مزايا دعم فتح الحسابات المصرفية للشركات",
      benefitsDescription:
        "نجعل عملية فتح الحساب المصرفي أكثر سهولة من خلال الدعم الاحترافي والتوجيه الكامل في جميع المراحل.",

      processTag: "خطوات بسيطة",
      processTitle1: "عملية",
      processTitle2: "فتح الحساب المصرفي",
      processDescription:
        "يرشدك خبراؤنا خلال جميع مراحل فتح حساب مصرفي للشركات في دولة الإمارات.",
    },
  };

  const lang = selectedLanguage === "ar" ? content.ar : content.en;

  const benefits =
    selectedLanguage === "ar"
      ? [
          {
            title: "اختيار البنك المناسب",
            description:
              "المساعدة في اختيار البنك الذي يتناسب مع نشاطك التجاري ومتطلباتك المالية.",
          },
          {
            title: "إعداد المستندات",
            description: "تجهيز جميع الوثائق المطلوبة لضمان تقديم طلب متكامل.",
          },
          {
            title: "دعم الامتثال وKYC",
            description:
              "المساعدة في استيفاء متطلبات اعرف عميلك والامتثال المصرفي.",
          },
          {
            title: "تسريع الإجراءات",
            description:
              "تقليل التأخير وتحسين فرص الموافقة من خلال التقديم الصحيح.",
          },
          {
            title: "حلول للشركات الجديدة",
            description:
              "دعم خاص للشركات الناشئة والشركات الجديدة في الإمارات.",
          },
          {
            title: "متابعة حتى التفعيل",
            description:
              "متابعة مستمرة حتى تفعيل الحساب المصرفي وبدء العمليات البنكية.",
          },
        ]
      : [
          {
            title: "Right Bank Selection",
            description:
              "Identify the most suitable bank based on your business model and banking needs.",
          },
          {
            title: "Document Preparation",
            description:
              "Ensure all required corporate and shareholder documents are properly prepared.",
          },
          {
            title: "KYC & Compliance Support",
            description:
              "Receive guidance on meeting Know Your Customer and compliance requirements.",
          },
          {
            title: "Faster Processing",
            description:
              "Reduce delays and improve approval chances with a properly structured application.",
          },
          {
            title: "Support for New Businesses",
            description:
              "Specialized assistance for startups and newly incorporated UAE companies.",
          },
          {
            title: "End-to-End Assistance",
            description:
              "Continuous support until your corporate account becomes fully operational.",
          },
        ];

  const process =
    selectedLanguage === "ar"
      ? [
          {
            title: "تحليل النشاط التجاري",
            description: "مراجعة طبيعة أعمال الشركة ومتطلبات الحساب المصرفي.",
          },
          {
            title: "اختيار البنك",
            description:
              "اقتراح البنوك المناسبة بناءً على نشاط الشركة وهيكلها.",
          },
          {
            title: "تجهيز المستندات",
            description: "إعداد وتجميع المستندات المطلوبة من البنك.",
          },
          {
            title: "تقديم الطلب",
            description: "تقديم طلب فتح الحساب ومتابعة الإجراءات مع البنك.",
          },
          {
            title: "المقابلة والتحقق",
            description:
              "المساعدة في استكمال المقابلات ومتطلبات التحقق والامتثال.",
          },
          {
            title: "تفعيل الحساب",
            description: "استلام بيانات الحساب وتفعيل الخدمات المصرفية للشركة.",
          },
        ]
      : [
          {
            title: "Business Assessment",
            description:
              "Review your company structure, activities, and banking requirements.",
          },
          {
            title: "Bank Selection",
            description:
              "Identify suitable UAE banks based on your business profile.",
          },
          {
            title: "Document Preparation",
            description:
              "Prepare and organize all required account opening documents.",
          },
          {
            title: "Application Submission",
            description:
              "Submit the corporate banking application and coordinate with the bank.",
          },
          {
            title: "Compliance Verification",
            description:
              "Complete interviews, KYC checks, and compliance requirements.",
          },
          {
            title: "Account Activation",
            description:
              "Receive account details and activate corporate banking services.",
          },
        ];

  return (
    <main className="bg-white pt-28 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#162235] text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/banners/services/corporate-bank.jpg')",
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
                  onClick={() => setOpenPopup(true)}
                  className="group inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  <span className="px-4">{lang.getService}</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-300 group-hover:translate-x-0.5">
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

      {/* BENEFITS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-xl bg-[#704c9f]/10 px-3 py-1 text-xs font-semibold text-[#704c9f]">
              {lang.benefitsTag}
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">
              {lang.benefitsTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {lang.benefitsDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#31a4da]/20 hover:shadow-xl hover:shadow-[#31a4da]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#31a4da]/10 to-[#704c9f]/10 text-[#31a4da] transition duration-300 group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:text-white">
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
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
              {lang.processTitle1}
              <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                {" "}
                {lang.processTitle2}
              </span>
            </h2>

            <p className="mt-2 text-base leading-8 text-slate-600">
              {lang.processDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-200 bg-[#eef5ff] p-5 transition-all duration-300 hover:border-[#31a4da]/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#31a4da] to-[#704c9f] text-base font-semibold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  <span className="text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                    {item.title}
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      <CorporateBankPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        currentStep={currentStep}
        name={name}
        mobile={mobile}
        email={email}
        nationality={nationality}
      />
    </main>
  );
}
