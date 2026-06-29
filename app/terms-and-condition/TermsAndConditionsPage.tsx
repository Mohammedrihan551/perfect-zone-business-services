"use client";

import {
  FileCheck,
  Shield,
  AlertCircle,
  Scale,
  ShieldAlert,
  Wallet,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsAndConditionsPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "Terms & Conditions",
      subtitle:
        "Please read these terms and conditions carefully before using our services or website.",

      introTitle: "Acceptance of Terms",
      introDesc:
        "By accessing or using Perfect Zone International Business Services website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.",

      servicesTitle: "Scope of Services",
      servicesList: [
        "Business setup and company formation consultancy",
        "Visa processing and government-related services",
        "Document attestation and legalization",
        "Translation and language support services",
        "Advisory and business support services",
      ],

      obligationsTitle: "Client Responsibilities",
      obligationsList: [
        "Provide accurate and complete information",
        "Submit valid and genuine documents",
        "Comply with applicable laws and regulations",
        "Pay service fees within agreed timelines",
      ],

      liabilityTitle: "Limitation of Liability",
      liabilityDesc:
        "Perfect Zone International Business Services shall not be liable for delays, losses, or damages caused by third-party authorities, government processing delays, incomplete documentation, or circumstances beyond our reasonable control.",

      paymentTitle: "Payments & Refunds",
      paymentDesc:
        "All fees for services must be paid as agreed before processing begins unless otherwise specified. Refund eligibility depends on service stage, government fees, and operational costs already incurred.",

      legalTitle: "Governing Law",
      legalDesc:
        "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of competent UAE courts.",
    },

    ar: {
      title: "الشروط والأحكام",
      subtitle:
        "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا أو موقعنا الإلكتروني.",

      introTitle: "قبول الشروط",
      introDesc:
        "من خلال الوصول إلى موقع وخدمات بيرفكت زون للخدمات الدولية للأعمال أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق عليها، يرجى الامتناع عن استخدام خدماتنا.",

      servicesTitle: "نطاق الخدمات",
      servicesList: [
        "استشارات تأسيس الشركات والأعمال",
        "معالجة التأشيرات والخدمات الحكومية",
        "تصديق وتوثيق المستندات",
        "خدمات الترجمة والدعم اللغوي",
        "الخدمات الاستشارية ودعم الأعمال",
      ],

      obligationsTitle: "مسؤوليات العميل",
      obligationsList: [
        "تقديم معلومات صحيحة وكاملة",
        "تقديم مستندات صالحة وحقيقية",
        "الالتزام بالقوانين واللوائح المعمول بها",
        "دفع رسوم الخدمات ضمن المواعيد المتفق عليها",
      ],

      liabilityTitle: "تحديد المسؤولية",
      liabilityDesc:
        "لا تتحمل بيرفكت زون للخدمات الدولية للأعمال مسؤولية أي تأخير أو خسائر أو أضرار ناتجة عن الجهات الخارجية أو التأخير الحكومي أو نقص المستندات أو الظروف الخارجة عن سيطرتنا المعقولة.",

      paymentTitle: "المدفوعات والاسترداد",
      paymentDesc:
        "يجب دفع جميع رسوم الخدمات وفقاً لما هو متفق عليه قبل بدء المعالجة ما لم يُذكر خلاف ذلك. تعتمد أهلية الاسترداد على مرحلة الخدمة والرسوم الحكومية والتكاليف التشغيلية التي تم تكبدها بالفعل.",

      legalTitle: "القانون الحاكم",
      legalDesc:
        "تخضع هذه الشروط والأحكام وتُفسر وفقاً لقوانين دولة الإمارات العربية المتحدة. وتخضع أي نزاعات لاختصاص المحاكم المختصة في دولة الإمارات.",
    },
  };

  const lang = content[selectedLanguage];

  return (
    <main
      className="bg-white pt-28"
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#31a4da] to-[#704c9f] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{lang.title}</h1>
          <p className="max-w-3xl mx-auto text-blue-100">{lang.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Acceptance */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.introTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.introDesc}</p>
            </div>

            {/* Services */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.servicesTitle}
                </h2>
              </div>
              <ul
                className={`space-y-3 text-slate-600 list-disc ${
                  selectedLanguage === "ar" ? "pr-6" : "pl-6"
                }`}
              >
                {lang.servicesList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.obligationsTitle}
                </h2>
              </div>
              <ul
                className={`space-y-3 text-slate-600 list-disc ${
                  selectedLanguage === "ar" ? "pr-6" : "pl-6"
                }`}
              >
                {lang.obligationsList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.liabilityTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.liabilityDesc}
              </p>
            </div>

            {/* Payment */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.paymentTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.paymentDesc}
              </p>
            </div>

            {/* Governing Law */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.legalTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.legalDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
