"use client";

import {
  HelpCircle,
  PhoneCall,
  MessageSquare,
  Clock3,
  CircleHelp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HelpSupportPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "Help & Support",
      subtitle:
        "We're here to assist you with business setup, visa services, document attestation, and translation support.",

      introTitle: "How Can We Help?",
      introDesc:
        "Perfect Zone International Business Services is committed to providing timely and reliable support for all our clients. Our team is available to assist with inquiries, documentation, and service guidance.",

      supportTitle: "Support Services",
      supportList: [
        "Business setup consultation and guidance",
        "Visa application and renewal assistance",
        "Document attestation support",
        "Translation and legal documentation services",
        "General customer support and inquiries",
      ],

      contactTitle: "Contact Support",
      contactList: [
        "Email support for detailed inquiries",
        "Phone support during business hours",
        "Live chat assistance for quick responses",
      ],

      responseTitle: "Response Time",
      responseDesc:
        "Our support team aims to respond to all inquiries within 24 business hours. Urgent requests are prioritized to ensure quick assistance.",

      faqTitle: "Frequently Asked Questions",
      faqDesc:
        "For common questions regarding our services, processing timelines, and documentation requirements, please refer to our FAQ section or contact our team directly.",
    },

    ar: {
      title: "المساعدة والدعم",
      subtitle:
        "نحن هنا لمساعدتك في تأسيس الأعمال وخدمات التأشيرات وتصديق المستندات وخدمات الترجمة.",

      introTitle: "كيف يمكننا مساعدتك؟",
      introDesc:
        "تلتزم شركة بيرفكت زون للخدمات الدولية للأعمال بتقديم دعم موثوق وسريع لجميع عملائنا. فريقنا متاح للمساعدة في الاستفسارات والوثائق والإرشاد المتعلق بالخدمات.",

      supportTitle: "خدمات الدعم",
      supportList: [
        "استشارات وإرشادات تأسيس الأعمال",
        "المساعدة في طلبات وتجديد التأشيرات",
        "الدعم في تصديق المستندات",
        "خدمات الترجمة والوثائق القانونية",
        "الدعم العام للعملاء والاستفسارات",
      ],

      contactTitle: "التواصل مع الدعم",
      contactList: [
        "الدعم عبر البريد الإلكتروني للاستفسارات التفصيلية",
        "الدعم الهاتفي خلال ساعات العمل",
        "المحادثة المباشرة للمساعدة السريعة",
      ],

      responseTitle: "وقت الاستجابة",
      responseDesc:
        "يهدف فريق الدعم لدينا إلى الرد على جميع الاستفسارات خلال 24 ساعة عمل. يتم إعطاء الأولوية للطلبات العاجلة لضمان المساعدة السريعة.",

      faqTitle: "الأسئلة الشائعة",
      faqDesc:
        "للأسئلة الشائعة المتعلقة بخدماتنا والجداول الزمنية ومتطلبات المستندات، يرجى مراجعة قسم الأسئلة الشائعة أو التواصل مباشرة مع فريقنا.",
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
            {/* Intro */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.introTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.introDesc}</p>
            </div>

            {/* Support Services */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.supportTitle}
                </h2>
              </div>
              <ul
                className={`space-y-3 text-slate-600 list-disc ${
                  selectedLanguage === "ar" ? "pr-6" : "pl-6"
                }`}
              >
                {lang.supportList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact Support */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.contactTitle}
                </h2>
              </div>
              <ul
                className={`space-y-3 text-slate-600 list-disc ${
                  selectedLanguage === "ar" ? "pr-6" : "pl-6"
                }`}
              >
                {lang.contactList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.responseTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {lang.responseDesc}
              </p>
            </div>

            {/* FAQ */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <CircleHelp className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.faqTitle}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">{lang.faqDesc}</p>
            </div>

            {/* Powered By Developer */}
            <section className="py-5">
              <div className="flex justify-center container mx-auto px-4">
                <a
                  href="https://nesconsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/logo/nescon-logo.png"
                    alt="Nescon Solutions"
                    className="h-8 w-auto object-contain"
                  />

                  <p className="mt-3 text-sm text-slate-500 font-medium">
                    {selectedLanguage === "ar"
                      ? "مدعوم بواسطة نسكون سولوشنز"
                      : "Powered by Nescon Solutions"}
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
