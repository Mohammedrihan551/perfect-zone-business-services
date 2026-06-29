"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import CommercialDocumentAttestationPopup from "@/components/ui/CommercialDocumentAttestationPopup";

export default function CommercialDocumentAttestationPage() {
  const [openPopup, setOpenPopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const { selectedLanguage, currentLanguage } = useLanguage();

  const content = {
    en: {
      heroTag: "Commercial Document Attestation UAE",
      heroTitle: "Commercial Document Attestation Services",
      heroDescription:
        "Authenticate commercial and corporate documents for international trade, business expansion, government approvals, banking, and legal compliance with our professional attestation services.",

      getService: "Get Service",

      benefitsTag: "Why Commercial Document Attestation",
      benefitsTitle: "Benefits of Commercial Document Attestation",
      benefitsDescription:
        "Commercial document attestation ensures your business documents are legally recognized and accepted by government authorities, banks, trade partners, and international organizations.",

      processTag: "Simple Process",
      processTitle1: "Commercial Document",
      processTitle2: "Attestation Process",
      processDescription:
        "Our experts manage the complete attestation process to ensure your business documents are accepted globally without delays.",
    },

    ar: {
      heroTag: "تصديق المستندات التجارية في الإمارات",
      heroTitle: "خدمات تصديق المستندات التجارية",
      heroDescription:
        "قم بتصديق المستندات التجارية والشركاتية لأغراض التجارة الدولية والتوسع التجاري والموافقات الحكومية والخدمات المصرفية والامتثال القانوني من خلال خدماتنا الاحترافية.",

      getService: "احصل على الخدمة",

      benefitsTag: "لماذا تصديق المستندات التجارية",
      benefitsTitle: "مزايا تصديق المستندات التجارية",
      benefitsDescription:
        "يضمن تصديق المستندات التجارية الاعتراف القانوني بمستندات شركتك وقبولها لدى الجهات الحكومية والبنوك والشركاء التجاريين والمؤسسات الدولية.",

      processTag: "خطوات بسيطة",
      processTitle1: "عملية",
      processTitle2: "تصديق المستندات التجارية",
      processDescription:
        "يتولى خبراؤنا جميع مراحل التصديق لضمان اعتماد مستندات أعمالك محلياً ودولياً دون تأخير.",
    },
  };

  const lang = selectedLanguage === "ar" ? content.ar : content.en;

  const benefits =
    selectedLanguage === "ar"
      ? [
          {
            title: "التوسع التجاري الدولي",
            description:
              "تمكين استخدام المستندات التجارية في الأسواق الدولية والمعاملات العابرة للحدود.",
          },
          {
            title: "الامتثال القانوني",
            description:
              "ضمان توافق المستندات مع المتطلبات القانونية والتنظيمية المحلية والدولية.",
          },
          {
            title: "الموافقات الحكومية",
            description:
              "الحصول على الموافقات والتراخيص الحكومية اللازمة للأنشطة التجارية.",
          },
          {
            title: "المعاملات المصرفية",
            description:
              "تسهيل فتح الحسابات المصرفية والحصول على التسهيلات المالية للشركات.",
          },
          {
            title: "تعزيز الثقة التجارية",
            description:
              "زيادة مصداقية الشركة أمام الشركاء والموردين والعملاء الدوليين.",
          },
          {
            title: "خدمة احترافية سريعة",
            description:
              "متابعة دقيقة لجميع مراحل التصديق لتوفير الوقت والجهد.",
          },
        ]
      : [
          {
            title: "International Business Expansion",
            description:
              "Use commercial documents across international markets and cross-border transactions.",
          },
          {
            title: "Legal Compliance",
            description:
              "Ensure documents meet local and international regulatory requirements.",
          },
          {
            title: "Government Approvals",
            description:
              "Support licensing, approvals, and government-related business procedures.",
          },
          {
            title: "Corporate Banking Support",
            description:
              "Facilitate corporate bank account opening and financial service applications.",
          },
          {
            title: "Business Credibility",
            description:
              "Strengthen trust with international clients, suppliers, and business partners.",
          },
          {
            title: "Fast Professional Service",
            description:
              "Expert management of the attestation process to save time and resources.",
          },
        ];

  const process =
    selectedLanguage === "ar"
      ? [
          {
            title: "مراجعة المستندات",
            description:
              "فحص المستندات التجارية وتحديد متطلبات التصديق المطلوبة.",
          },
          {
            title: "توثيق الغرفة التجارية",
            description:
              "الحصول على التصديق من الغرفة التجارية أو الجهات المختصة.",
          },
          {
            title: "تصديق الجهات الحكومية",
            description:
              "استكمال التصديقات الرسمية من الوزارات والهيئات المعنية.",
          },
          {
            title: "تصديق وزارة الخارجية",
            description: "الحصول على اعتماد وزارة الخارجية للمستندات التجارية.",
          },
          {
            title: "تصديق السفارة",
            description:
              "تقديم المستندات للسفارة أو القنصلية المختصة عند الحاجة.",
          },
          {
            title: "التسليم النهائي",
            description:
              "تسليم المستندات التجارية المصدقة وجاهزة للاستخدام الرسمي.",
          },
        ]
      : [
          {
            title: "Document Review",
            description:
              "Verify commercial documents and determine attestation requirements.",
          },
          {
            title: "Chamber of Commerce Attestation",
            description:
              "Obtain authentication from the Chamber of Commerce or relevant authority.",
          },
          {
            title: "Government Verification",
            description:
              "Complete required authentication procedures with government departments.",
          },
          {
            title: "MOFA Attestation",
            description:
              "Secure Ministry of Foreign Affairs attestation for commercial documents.",
          },
          {
            title: "Embassy Attestation",
            description:
              "Submit documents to the relevant embassy or consulate when required.",
          },
          {
            title: "Document Delivery",
            description:
              "Receive fully attested commercial documents ready for official use.",
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
              "url('/images/banners/services/commercial-document-attestation.jpg')",
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
      <CommercialDocumentAttestationPopup
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
