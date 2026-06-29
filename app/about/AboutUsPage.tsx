"use client";

import { Building2, Target, Eye, Users, Gem } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "About Us",
      subtitle:
        "Your trusted partner for business setup, visa services, attestation, and professional translation solutions in the UAE.",

      introTitle: "Who We Are",
      introDesc:
        "Perfect Zone International Business Services is a leading consultancy dedicated to helping entrepreneurs, investors, and businesses establish and grow successfully in the UAE. We provide end-to-end support with business setup, government approvals, visas, attestation, and translation services.",

      missionTitle: "Our Mission",
      missionDesc:
        "Our mission is to simplify business processes and provide reliable, transparent, and efficient services that help clients achieve their goals with confidence.",

      visionTitle: "Our Vision",
      visionDesc:
        "Our vision is to become the most trusted business services partner in the UAE by delivering excellence, innovation, and customer-focused solutions.",

      valuesTitle: "Our Core Values",
      valuesList: [
        "Integrity and transparency in every interaction",
        "Client-first approach with personalized solutions",
        "Commitment to excellence and professionalism",
        "Efficiency and timely service delivery",
        "Continuous innovation and improvement",
      ],

      teamTitle: "Our Team",
      teamDesc:
        "Our experienced professionals bring deep industry knowledge and practical expertise to guide clients through every stage of their business journey. We are committed to delivering seamless and stress-free support.",
    },

    ar: {
      title: "من نحن",
      subtitle:
        "شريكك الموثوق لتأسيس الأعمال وخدمات التأشيرات وتصديق المستندات وحلول الترجمة الاحترافية في الإمارات.",

      introTitle: "من نحن",
      introDesc:
        "بيرفكت زون للخدمات الدولية للأعمال هي شركة استشارية رائدة متخصصة في مساعدة رواد الأعمال والمستثمرين والشركات على تأسيس وتنمية أعمالهم بنجاح في دولة الإمارات. نقدم دعماً متكاملاً يشمل تأسيس الشركات والموافقات الحكومية والتأشيرات وتصديق المستندات وخدمات الترجمة.",

      missionTitle: "مهمتنا",
      missionDesc:
        "مهمتنا هي تبسيط الإجراءات التجارية وتقديم خدمات موثوقة وشفافة وفعالة تساعد عملاءنا على تحقيق أهدافهم بثقة.",

      visionTitle: "رؤيتنا",
      visionDesc:
        "رؤيتنا هي أن نكون الشريك الأكثر موثوقية في خدمات الأعمال في دولة الإمارات من خلال تقديم التميز والابتكار والحلول التي تركز على العميل.",

      valuesTitle: "قيمنا الأساسية",
      valuesList: [
        "النزاهة والشفافية في جميع التعاملات",
        "التركيز على العميل وتقديم حلول مخصصة",
        "الالتزام بالتميز والاحترافية",
        "الكفاءة وسرعة تقديم الخدمات",
        "الابتكار والتحسين المستمر",
      ],

      teamTitle: "فريقنا",
      teamDesc:
        "يتمتع فريقنا من الخبراء بخبرة واسعة ومعرفة عميقة في المجال لمساعدة العملاء في كل مرحلة من رحلتهم التجارية. نحن ملتزمون بتقديم دعم سلس وخالٍ من التعقيدات.",
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
            {/* Intro */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.introTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.introDesc}</p>
            </div>

            {/* Mission */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.missionTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {lang.missionDesc}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.visionTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {lang.visionDesc}
              </p>
            </div>

            {/* Values */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Gem className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.valuesTitle}
                </h2>
              </div>

              <ul
                className={`space-y-3 text-slate-600 list-disc ${
                  selectedLanguage === "ar" ? "pr-6" : "pl-6"
                }`}
              >
                {lang.valuesList.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Team */}
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#31a4da]" size={24} />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang.teamTitle}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{lang.teamDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
