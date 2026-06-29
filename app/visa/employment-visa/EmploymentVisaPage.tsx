"use client";

import MainlandCompanyPopup from "@/components/ui/MainlandCompanyPopup";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import EmploymentVisaPopup from "@/components/ui/EmploymentVisaPopup";

export default function EmploymentVisaPage() {
  const [openPopup, setOpenPopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const { selectedLanguage, currentLanguage } = useLanguage();

  const content = {
    en: {
      heroTag: "UAE Employment Visa Services",
      heroTitle: "Employment Visa Assistance in UAE",
      heroDescription:
        "Professional UAE employment visa services for companies and employees. We assist with work permits, employment visas, labor approvals, status changes, and residency visa processing across the UAE.",
      getService: "Get Service",

      benefitsTag: "Why Choose Our Employment Visa Services",
      benefitsTitle: "Benefits of UAE Employment Visa",
      benefitsDescription:
        "Simplify the UAE employment visa process with expert assistance for documentation, approvals, work permits, visa issuance, and compliance requirements.",

      processTag: "Simple Process",
      processTitle1: "Employment Visa",
      processTitle2: "Application Process",
      processDescription:
        "Our specialists handle every stage of the employment visa process to ensure timely approvals and smooth onboarding for employees.",
    },

    ar: {
      heroTag: "خدمات تأشيرة العمل في الإمارات",
      heroTitle: "خدمات المساعدة في تأشيرة العمل في الإمارات",
      heroDescription:
        "خدمات احترافية لتأشيرات العمل في الإمارات تشمل تصاريح العمل والموافقات العمالية وتغيير الحالة وإصدار الإقامة للموظفين في مختلف إمارات الدولة.",
      getService: "احصل على الخدمة",

      benefitsTag: "لماذا تختار خدمات تأشيرة العمل لدينا",
      benefitsTitle: "مزايا تأشيرة العمل الإماراتية",
      benefitsDescription:
        "احصل على دعم متكامل لإجراءات تأشيرة العمل في الإمارات بما يشمل المستندات والموافقات الحكومية وتصاريح العمل وإصدار الإقامة.",

      processTag: "خطوات بسيطة",
      processTitle1: "عملية",
      processTitle2: "تأشيرة العمل",
      processDescription:
        "يتولى خبراؤنا جميع مراحل إصدار تأشيرة العمل لضمان سرعة الإنجاز والامتثال للمتطلبات القانونية.",
    },
  };

  const lang = selectedLanguage === "ar" ? content.ar : content.en;

  const benefits =
    selectedLanguage === "ar"
      ? [
          {
            title: "إصدار تصاريح العمل",
            description:
              "المساعدة في الحصول على تصاريح العمل والموافقات المطلوبة.",
          },
          {
            title: "إصدار الإقامة",
            description: "استكمال إجراءات الإقامة للموظفين داخل دولة الإمارات.",
          },
          {
            title: "تجهيز المستندات",
            description: "مراجعة وإعداد جميع الوثائق المطلوبة للتقديم.",
          },
          {
            title: "متابعة الموافقات الحكومية",
            description: "التنسيق مع الجهات المختصة لتسريع عملية الموافقة.",
          },
          {
            title: "تغيير الحالة",
            description: "إدارة إجراءات تغيير الحالة للموظفين المؤهلين.",
          },
          {
            title: "الامتثال القانوني",
            description: "ضمان الالتزام بلوائح العمل والهجرة في الإمارات.",
          },
        ]
      : [
          {
            title: "Work Permit Processing",
            description:
              "Assistance with obtaining work permits and labor approvals.",
          },
          {
            title: "Residency Visa Issuance",
            description:
              "Complete UAE residency visa processing for employees.",
          },
          {
            title: "Document Preparation",
            description:
              "Professional preparation and verification of all documents.",
          },
          {
            title: "Government Approval Support",
            description: "Coordination with authorities for faster processing.",
          },
          {
            title: "Status Change Assistance",
            description:
              "Manage status change procedures for eligible applicants.",
          },
          {
            title: "Regulatory Compliance",
            description:
              "Ensure compliance with UAE labor and immigration regulations.",
          },
        ];

  const process =
    selectedLanguage === "ar"
      ? [
          {
            title: "الاستشارة الأولية",
            description: "مراجعة متطلبات صاحب العمل والموظف.",
          },
          {
            title: "إعداد المستندات",
            description: "جمع وتجهيز جميع الوثائق المطلوبة للتقديم.",
          },
          {
            title: "الحصول على تصريح العمل",
            description: "إصدار تصريح العمل والموافقات العمالية اللازمة.",
          },
          {
            title: "تقديم طلب التأشيرة",
            description: "تقديم طلب تأشيرة العمل إلى الجهات المختصة.",
          },
          {
            title: "الفحص الطبي والهوية",
            description: "استكمال الفحص الطبي وإجراءات الهوية الإماراتية.",
          },
          {
            title: "إصدار الإقامة",
            description: "استلام تأشيرة الإقامة واستكمال الإجراءات النهائية.",
          },
        ]
      : [
          {
            title: "Initial Consultation",
            description: "Review employer and employee visa requirements.",
          },
          {
            title: "Document Preparation",
            description:
              "Collect and prepare all necessary supporting documents.",
          },
          {
            title: "Work Permit Approval",
            description:
              "Obtain labor approvals and work permit authorization.",
          },
          {
            title: "Visa Application Submission",
            description:
              "Submit the employment visa application to relevant authorities.",
          },
          {
            title: "Medical Test & Emirates ID",
            description:
              "Complete medical fitness tests and Emirates ID procedures.",
          },
          {
            title: "Residency Visa Issuance",
            description:
              "Receive the residency visa and complete final formalities.",
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
              "url('/images/banners/services/employment-visa.jpg')",
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
      <EmploymentVisaPopup
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
