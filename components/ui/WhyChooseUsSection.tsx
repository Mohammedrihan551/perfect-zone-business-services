"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUsSection() {
  const { selectedLanguage } = useLanguage();

  const features = [
    {
      title: {
        en: "Dedicated Support",
        ar: "دعم مخصص",
      },
      description: {
        en: "Get expert assistance whenever you need it.",
        ar: "احصل على دعم من الخبراء في أي وقت تحتاجه.",
      },
      icon: (
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
            strokeWidth={1.8}
            d="M3 12a9 9 0 0118 0v3a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3m-8 0v3a2 2 0 002 2h2m-6 0a2 2 0 01-2-2v-3"
          />
        </svg>
      ),
    },
    {
      title: {
        en: "Fast Processing",
        ar: "معالجة سريعة",
      },
      description: {
        en: "Quick approvals and smooth workflows.",
        ar: "موافقات سريعة وإجراءات سلسة.",
      },
      icon: (
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
            strokeWidth={1.8}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: {
        en: "Government Expertise",
        ar: "خبرة حكومية",
      },
      description: {
        en: "Deep knowledge of UAE government processes.",
        ar: "خبرة عميقة في إجراءات الحكومة الإماراتية.",
      },
      icon: (
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
            strokeWidth={1.8}
            d="M17 20h5V4H2v16h5m10 0v-8H7v8m10 0H7"
          />
        </svg>
      ),
    },
    {
      title: {
        en: "All-in-One Service",
        ar: "خدمة شاملة",
      },
      description: {
        en: "Complete business solutions under one roof.",
        ar: "حلول أعمال متكاملة في مكان واحد.",
      },
      icon: (
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
            strokeWidth={1.8}
            d="M9.75 17L15 12l-5.25-5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Content */}
          {/* Center Header */}
          <div className="mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#31a4da]" />
              <span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
                {selectedLanguage === "ar"
                  ? "لماذا يختار العملاء بروفكت زون"
                  : "Why Clients Choose Perfect Zone"}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {selectedLanguage === "ar" ? (
                <>
                  خبراء موثوقون في
                  <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                    {" "}
                    أعمال الإمارات
                  </span>
                </>
              ) : (
                <>
                  Trusted UAE{" "}
                  <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                    Business Experts
                  </span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {selectedLanguage === "ar"
                ? "نُبسط إجراءات الحكومة في الإمارات عبر تجارب رقمية احترافية، ومعالجة سريعة، واستشارات متخصصة للأعمال والأفراد."
                : "We simplify UAE government procedures through premium digital experiences, fast processing, and expert consultation for businesses and individuals."}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:border-[#31a4da]/30">
                <h3 className="text-2xl font-bold text-slate-900">10K+</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {selectedLanguage === "ar"
                    ? "طلبات ناجحة"
                    : "Successful Applications"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:border-[#704c9f]/30">
                <h3 className="text-2xl font-bold text-slate-900">99%</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {selectedLanguage === "ar"
                    ? "رضا العملاء"
                    : "Client Satisfaction"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div
            className="ml-auto flex w-full max-w-sm flex-col gap-3"
            dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#31a4da]/30 hover:bg-slate-50/50"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#31a4da] to-[#704c9f] text-white">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#31a4da]">
                    {selectedLanguage === "ar"
                      ? feature.title.ar
                      : feature.title.en}
                  </h3>

                  <p className="text-xs leading-5 text-slate-500">
                    {selectedLanguage === "ar"
                      ? feature.description.ar
                      : feature.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
