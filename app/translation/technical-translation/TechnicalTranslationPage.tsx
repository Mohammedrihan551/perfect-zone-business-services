"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TechnicalTranslationPopup from "@/components/ui/TechnicalTranslationPopup";

export default function TechnicalTranslationPage() {
  const [openPopup, setOpenPopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const { selectedLanguage, currentLanguage } = useLanguage();

  const content = {
    en: {
      heroTag: "Technical Translation Services",
      heroTitle: "Technical Translation Services in UAE",
      heroDescription:
        "Professional technical translation services for engineering documents, manuals, specifications, product documentation, safety procedures, and industrial reports with accurate industry terminology and multilingual expertise.",
      getService: "Get Service",

      benefitsTag: "Why Choose Our Technical Translation",
      benefitsTitle: "Key Benefits of Technical Translation Services",
      benefitsDescription:
        "Ensure precision, consistency, and compliance in technical documentation through specialized translation services tailored for engineering, manufacturing, construction, energy, and technology sectors.",

      processTag: "Simple Process",
      processTitle1: "Technical Translation",
      processTitle2: "Process",
      processDescription:
        "Our technical language specialists ensure accurate translations while preserving technical accuracy, terminology consistency, and document integrity.",
    },

    ar: {
      heroTag: "خدمات الترجمة التقنية",
      heroTitle: "خدمات الترجمة التقنية في الإمارات",
      heroDescription:
        "خدمات ترجمة تقنية احترافية للأدلة الفنية والمواصفات الهندسية ووثائق المنتجات وإجراءات السلامة والتقارير الصناعية مع ضمان الدقة في المصطلحات الفنية.",
      getService: "احصل على الخدمة",

      benefitsTag: "لماذا تختار الترجمة التقنية لدينا",
      benefitsTitle: "أهم مزايا خدمات الترجمة التقنية",
      benefitsDescription:
        "نضمن الدقة والاتساق والامتثال في الوثائق الفنية من خلال خدمات ترجمة متخصصة لقطاعات الهندسة والتصنيع والبناء والطاقة والتكنولوجيا.",

      processTag: "خطوات بسيطة",
      processTitle1: "عملية",
      processTitle2: "الترجمة التقنية",
      processDescription:
        "يقوم خبراؤنا اللغويون المتخصصون بترجمة الوثائق التقنية مع الحفاظ على الدقة الفنية واتساق المصطلحات وسلامة المحتوى.",
    },
  };

  const lang = selectedLanguage === "ar" ? content.ar : content.en;

  const benefits =
    selectedLanguage === "ar"
      ? [
          {
            title: "خبرة متخصصة في القطاعات",
            description:
              "يتم تنفيذ الترجمات بواسطة متخصصين على دراية بالمصطلحات الفنية والهندسية.",
          },
          {
            title: "دقة المصطلحات",
            description:
              "الحفاظ على الاتساق في المواصفات والأدلة والوثائق التقنية.",
          },
          {
            title: "دعم متعدد اللغات",
            description:
              "ترجمة المحتوى التقني إلى لغات متعددة مع الحفاظ على الدقة.",
          },
          {
            title: "الامتثال التنظيمي",
            description:
              "الالتزام بمتطلبات الجهات الحكومية والمعايير الصناعية المختلفة.",
          },
          {
            title: "سرية المعلومات",
            description: "معالجة آمنة للبيانات الهندسية والتجارية الحساسة.",
          },
          {
            title: "إنجاز سريع للمشاريع",
            description:
              "تسليم الترجمات بسرعة مع الحفاظ على أعلى مستويات الجودة.",
          },
        ]
      : [
          {
            title: "Industry-Specific Expertise",
            description:
              "Translations performed by professionals familiar with technical and engineering terminology.",
          },
          {
            title: "Terminology Accuracy",
            description:
              "Maintain consistency across specifications, manuals, and technical documents.",
          },
          {
            title: "Multilingual Support",
            description:
              "Translate technical content into multiple languages while preserving accuracy.",
          },
          {
            title: "Regulatory Compliance",
            description:
              "Meet industry and governmental documentation requirements across jurisdictions.",
          },
          {
            title: "Confidential Handling",
            description:
              "Secure processing of proprietary engineering and business information.",
          },
          {
            title: "Fast Project Delivery",
            description:
              "Efficient turnaround times without compromising technical precision.",
          },
        ];

  const process =
    selectedLanguage === "ar"
      ? [
          {
            title: "تقديم الوثائق",
            description:
              "إرسال الأدلة الفنية أو المواصفات أو التقارير أو الوثائق الهندسية للمراجعة.",
          },
          {
            title: "التقييم الفني",
            description:
              "يقوم المختصون بتقييم المصطلحات الفنية ومتطلبات المشروع.",
          },
          {
            title: "تخصيص المترجم",
            description:
              "تعيين مترجم متخصص يمتلك الخبرة المناسبة للمجال الفني المطلوب.",
          },
          {
            title: "الترجمة التقنية",
            description:
              "ترجمة المحتوى مع الحفاظ على الدقة الفنية والمصطلحات المتخصصة.",
          },
          {
            title: "مراجعة الجودة",
            description: "إجراء فحوصات لغوية وفنية لضمان الاتساق والجودة.",
          },
          {
            title: "التسليم النهائي",
            description:
              "استلام الوثائق التقنية المترجمة بشكل احترافي وجاهزة للاستخدام.",
          },
        ]
      : [
          {
            title: "Document Submission",
            description:
              "Submit technical manuals, specifications, reports, or engineering documents for review.",
          },
          {
            title: "Technical Assessment",
            description:
              "Our specialists evaluate terminology, complexity, and project requirements.",
          },
          {
            title: "Translation Assignment",
            description:
              "The project is assigned to translators with relevant technical expertise.",
          },
          {
            title: "Technical Translation",
            description:
              "Translate content while preserving accuracy, structure, and industry terminology.",
          },
          {
            title: "Quality Review",
            description:
              "Perform linguistic and technical quality checks to ensure consistency.",
          },
          {
            title: "Final Delivery",
            description:
              "Receive professionally translated technical documents ready for use.",
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
              "url('/images/banners/services/technical-translation.jpg')",
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
      <TechnicalTranslationPopup
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
