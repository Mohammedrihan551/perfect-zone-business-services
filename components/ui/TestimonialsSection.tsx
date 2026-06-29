"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { selectedLanguage } = useLanguage();

  const testimonials = [
    {
      name: "Ahmed Raza",
      image: "/images/testimonials/ahmed-raza.png",
      role: {
        en: "Business Owner",
        ar: "صاحب عمل",
      },
      company: {
        en: "Dubai Mainland Setup",
        ar: "تأسيس شركات دبي البر الرئيسي",
      },
      review: {
        en: "Perfect Zone made my UAE business setup process incredibly smooth. Their team handled everything professionally with fast approvals and constant updates.",
        ar: "جعلت شركة Perfect Zone عملية تأسيس أعمالي في الإمارات سلسة للغاية. تعامل فريقهم باحترافية عالية مع موافقات سريعة وتحديثات مستمرة.",
      },
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      image: "/images/testimonials/sarah-johnson.png",
      role: {
        en: "HR Manager",
        ar: "مديرة موارد بشرية",
      },
      company: {
        en: "Legal Translation Client",
        ar: "عميل خدمات الترجمة القانونية",
      },
      review: {
        en: "We needed urgent legal translations and MOFA attestation for multiple documents. The service quality and turnaround time exceeded expectations.",
        ar: "احتجنا إلى ترجمة قانونية عاجلة وتصديق من وزارة الخارجية لعدة مستندات. تجاوزت جودة الخدمة وسرعة الإنجاز توقعاتنا.",
      },
      rating: 5,
    },
    {
      name: "Biju Thomas",
      image: "/images/testimonials/biju-thomas.png",
      role: {
        en: "Investor",
        ar: "مستثمر",
      },
      company: {
        en: "Golden Visa Applicant",
        ar: "متقدم على التأشيرة الذهبية",
      },
      review: {
        en: "From consultation to approval, the entire Golden Visa process was transparent and stress-free. Highly recommended for UAE immigration services.",
        ar: "من الاستشارة حتى الموافقة، كانت عملية التأشيرة الذهبية شفافة وخالية من التوتر. أنصح بشدة بخدمات الهجرة في الإمارات.",
      },
      rating: 5,
    },
  ];

  return (
    <section className="bg-slate-950  text-white py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#31a4da]"></span>
            {selectedLanguage === "ar"
              ? "موثوق في جميع أنحاء الإمارات"
              : "Trusted Across UAE"}
          </div>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            {selectedLanguage === "ar" ? "ماذا يقول عملاؤنا" : "What Our"}{" "}
            <span className="bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
              {selectedLanguage === "ar" ? "العملاء" : "Clients Say"}
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
            {selectedLanguage === "ar"
              ? "خدمات أعمال متميزة في الإمارات موثوقة من رواد الأعمال والمستثمرين والمحترفين."
              : "Premium UAE business services trusted by entrepreneurs, investors, and professionals."}
          </p>
        </div>

        {/* Testimonials - 3 IN ONE LINE (SQUARE CARDS) */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#31a4da]/30 hover:bg-white/[0.06]"
            >
              {/* Review */}
              <div>
                <p className="text-sm leading-6 text-slate-300">
                  “
                  {selectedLanguage === "ar"
                    ? testimonial.review.ar
                    : testimonial.review.en}
                  ”
                </p>

                {/* Stars */}
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Client */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#31a4da]/20"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {testimonial.name}
                    </h4>

                    <p className="text-xs text-slate-400">
                      {selectedLanguage === "ar"
                        ? testimonial.role.ar
                        : testimonial.role.en}
                    </p>

                    <p className="text-xs text-[#31a4da]">
                      {selectedLanguage === "ar"
                        ? testimonial.company.ar
                        : testimonial.company.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
