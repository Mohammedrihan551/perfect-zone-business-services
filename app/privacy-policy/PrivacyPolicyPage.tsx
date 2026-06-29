"use client";

import {
  ShieldCheck,
  Lock,
  FileText,
  Fingerprint,
  Handshake,
  Cookie,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "Privacy Policy",
      subtitle:
        "Perfect Zone International Business Services respects your privacy and protects your personal information. This policy explains how we collect, use, and safeguard your data.",

      introTitle: "Introduction",
      introDesc:
        "At Perfect Zone International Business Services, we value your trust. This Privacy Policy outlines how we collect, store, and process personal information when you use our website or engage with our services including business setup, visa processing, document attestation, and translation services.",

      collectTitle: "Information We Collect",
      collectList: [
        "Name, email address, phone number, and company details",
        "Passport, visa, and identification documents",
        "Billing and payment-related information",
        "Website usage analytics and cookies",
        "Communication records and service inquiries",
      ],

      usageTitle: "How We Use Your Information",
      usageList: [
        "Provide requested business and consultancy services",
        "Process legal documentation and government applications",
        "Improve customer support and communication",
        "Enhance website performance and user experience",
        "Meet legal and regulatory obligations",
      ],

      securityTitle: "Data Security",
      securityDesc:
        "We implement strict technical and organizational security measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure. Sensitive documents are handled with confidentiality and secure storage systems.",

      thirdPartyTitle: "Third-Party Disclosure",
      thirdPartyDesc:
        "We do not sell or rent your personal data. Information may only be shared with trusted government authorities, legal partners, payment providers, or service providers when necessary to deliver our services or comply with legal obligations.",

      cookiesTitle: "Cookies Policy",
      cookiesDesc:
        "Our website may use cookies and similar tracking technologies to improve browsing experience, analyze traffic, and optimize functionality. You may disable cookies through your browser settings.",

      rightsTitle: "Your Rights",
      rightsList: [
        "Request access to your stored personal data",
        "Request corrections or updates",
        "Request deletion where legally permitted",
        "Withdraw consent for marketing communications",
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      subtitle:
        "تحترم بيرفكت زون للخدمات الدولية للأعمال خصوصيتك وتحمي معلوماتك الشخصية. توضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها.",
      introTitle: "مقدمة",
      introDesc:
        "في بيرفكت زون للخدمات الدولية للأعمال، نُقدّر ثقتك بنا. توضح سياسة الخصوصية هذه كيفية جمع وتخزين ومعالجة المعلومات الشخصية عند استخدامك لموقعنا الإلكتروني أو الاستفادة من خدماتنا، بما في ذلك تأسيس الشركات ومعالجة التأشيرات وتصديق المستندات وخدمات الترجمة.",

      collectTitle: "المعلومات التي نجمعها",
      collectList: [
        "الاسم، البريد الإلكتروني، رقم الهاتف، وتفاصيل الشركة",
        "جواز السفر، التأشيرة، ووثائق الهوية",
        "معلومات الفواتير والدفع",
        "تحليلات استخدام الموقع وملفات تعريف الارتباط",
        "سجلات التواصل والاستفسارات المتعلقة بالخدمات",
      ],

      usageTitle: "كيفية استخدام معلوماتك",
      usageList: [
        "تقديم خدمات الأعمال والاستشارات المطلوبة",
        "معالجة الوثائق القانونية والطلبات الحكومية",
        "تحسين دعم العملاء ووسائل التواصل",
        "تحسين أداء الموقع وتجربة المستخدم",
        "الامتثال للمتطلبات القانونية والتنظيمية",
      ],

      securityTitle: "أمن البيانات",
      securityDesc:
        "نطبق إجراءات أمنية تقنية وتنظيمية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو سوء الاستخدام أو التعديل أو الإفصاح. يتم التعامل مع المستندات الحساسة بسرية تامة وأنظمة تخزين آمنة.",

      thirdPartyTitle: "الإفصاح للأطراف الثالثة",
      thirdPartyDesc:
        "نحن لا نبيع أو نؤجر بياناتك الشخصية. قد تتم مشاركة المعلومات فقط مع الجهات الحكومية الموثوقة أو الشركاء القانونيين أو مزودي خدمات الدفع أو مزودي الخدمات عند الضرورة لتقديم خدماتنا أو الامتثال للالتزامات القانونية.",

      cookiesTitle: "سياسة ملفات تعريف الارتباط",
      cookiesDesc:
        "قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة التصفح وتحليل حركة المرور وتحسين وظائف الموقع. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.",

      rightsTitle: "حقوقك",
      rightsList: [
        "طلب الوصول إلى بياناتك الشخصية المخزنة",
        "طلب التصحيح أو التحديث",
        "طلب حذف البيانات حيث يسمح القانون",
        "سحب الموافقة على الاتصالات التسويقية",
      ],
    },
  };

  const lang = content[selectedLanguage];

  return (
    <main
      className="bg-white pt-28"
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
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
            {/* Introduction */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.introTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.introDesc}</p>
            </div>

            {/* Information Collection */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.collectTitle}
                </h2>
              </div>
              <ul className="space-y-3 text-slate-600 list-disc pl-6">
                {lang.collectList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.usageTitle}
                </h2>
              </div>
              <ul className="space-y-3 text-slate-600 list-disc pl-6">
                {lang.usageList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Data Security */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Fingerprint className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.securityTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.securityDesc}
              </p>
            </div>

            {/* Third Party */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.thirdPartyTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.thirdPartyDesc}
              </p>
            </div>

            {/* Cookies */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.cookiesTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.cookiesDesc}
              </p>
            </div>

            {/* Rights */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.rightsTitle}
                </h2>
              </div>

              <ul className="space-y-3 text-slate-600 list-disc pl-6">
                {lang.rightsList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
