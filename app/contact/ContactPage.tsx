"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { selectedLanguage } = useLanguage();

  const content: any = {
    en: {
      title: "Contact Us",
      subtitle1: "Get In Touch",
      subtitle2: "With Our Experts",
      description:
        "Have questions about business setup, visas, attestation, or translation services? Our team is ready to help.",
      callUs: "Call Us",
      email: "Email",
      whatsApp: "WhatsApp",
      workingHours: "Working Hours",
      phone: "+971 50 123 4567",
      time: "Monday - Saturday\n9:00 AM - 6:00 PM",
      sendMessage: "Send Message",
      officeAddress: "Office Address",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      yourMessage: "Your Message",
    },
    ar: {
      title: "اتصل بنا",
      subtitle1: "تواصل معنا",
      subtitle2: "مع خبرائنا",
      description:
        "هل لديك استفسارات حول تأسيس الأعمال أو التأشيرات أو خدمات التصديق أو الترجمة؟ فريقنا جاهز لمساعدتك.",
      callUs: "اتصل بنا",
      email: "البريد الإلكتروني",
      whatsApp: "واتساب",
      workingHours: "ساعات العمل",
      phone: "+٩٧١ ٥٠ ١٢٣ ٤٥٦٧",
      time: "من الاثنين إلى السبت\n9:00 صباحًا - 6:00 مساءً",
      sendMessage: "أرسل رسالة",
      officeAddress: "عنوان المكتب",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      yourMessage: "رسالتك",
    },
  };

  const lang = content[selectedLanguage];

  const contactCards = [
    {
      title: `${lang.callUs}`,
      value: `${lang.phone}`,
      link: "tel:+971501234567",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6"
        >
          <defs>
            <linearGradient
              id="phoneGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#31a4da" />
              <stop offset="100%" stopColor="#704c9f" />
            </linearGradient>
          </defs>

          <circle cx="256" cy="256" r="256" fill="url(#phoneGradient)" />

          <path
            fill="#fff"
            fillRule="evenodd"
            d="m412.424 349.946-.273.688c-2.577 6.578-5.166 13.149-7.88 19.677-2.331 5.61-4.743 11.241-7.408 16.7-1.593 3.26-4.116 8.409-6.676 10.969a51.473 51.473 0 0 1-8.588 6.928c-17.86 11.431-40.186 9.82-59.813 4.557-84.306-22.585-196.673-134.952-219.26-219.257-5.26-19.633-6.868-41.965 4.574-59.825a50.861 50.861 0 0 1 6.914-8.577c2.557-2.56 7.712-5.082 10.969-6.675 5.465-2.665 11.1-5.077 16.71-7.408 6.525-2.7 13.1-5.3 19.673-7.88l.685-.264a15.416 15.416 0 0 1 19.044 6.655l32.593 56.466a15.517 15.517 0 0 1-5.66 21.128c-11.529 6.661-20.727 17.023-23.444 30.311a44.606 44.606 0 0 0 8.22 36.581 347.09 347.09 0 0 0 32.12 36.355 347.2 347.2 0 0 0 36.363 32.125 44.586 44.586 0 0 0 36.584 8.221c13.276-2.714 23.65-11.918 30.306-23.447a15.508 15.508 0 0 1 21.122-5.66l56.46 32.6a15.413 15.413 0 0 1 6.665 19.032z"
          />
        </svg>
      ),
    },
    {
      title: `${lang.email}`,
      value: "info@perfectzonehub.com",
      link: "mailto:info@perfectzonehub.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6"
        >
          <defs>
            <linearGradient
              id="emailGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#31a4da" />
              <stop offset="100%" stopColor="#704c9f" />
            </linearGradient>
          </defs>

          <circle cx="256" cy="256" r="256" fill="url(#emailGradient)" />

          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M408.343 362.786a10.171 10.171 0 0 0 10.157-10.158V160.77L263.217 284.08a11.594 11.594 0 0 1-14.436 0L93.5 160.77v191.858a10.169 10.169 0 0 0 10.157 10.158zm-12.62-213.572L256 260.17 116.275 149.214z"
          />
        </svg>
      ),
    },
    {
      title: `${lang.whatsApp}`,
      value: `${lang.phone}`,
      link: "https://wa.me/971501234567",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 152 152"
          className="h-7 w-7"
        >
          <defs>
            <linearGradient
              id="whatsappGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#31a4da" />
              <stop offset="100%" stopColor="#704c9f" />
            </linearGradient>
          </defs>

          <circle cx="76" cy="76" r="76" fill="url(#whatsappGradient)" />

          <g fill="#fff">
            <path d="M102.81 49.19a37.7 37.7 0 0 0-60.4 43.62l-4 19.42a1.42 1.42 0 0 0 .23 1.13 1.45 1.45 0 0 0 1.54.6l19-4.51a37.7 37.7 0 0 0 43.6-60.26zm-5.94 47.37a29.56 29.56 0 0 1-34 5.57l-2.66-1.32-11.67 2.76v-.15L51 91.65l-1.3-2.56a29.5 29.5 0 0 1 5.43-34.27 29.53 29.53 0 0 1 41.74 0L97 55a29.52 29.52 0 0 1-.15 41.58z" />
            <path d="M95.84 88c-1.43 2.25-3.7 5-6.53 5.69-5 1.2-12.61 0-22.14-8.81l-.12-.11c-8.29-7.74-10.49-14.19-10-19.3.29-2.91 2.71-5.53 4.75-7.25a2.72 2.72 0 0 1 4.25 1l3.07 6.94a2.7 2.7 0 0 1-.33 2.76l-1.56 2a2.65 2.65 0 0 0-.21 2.95 29 29 0 0 0 5.27 5.86 31.17 31.17 0 0 0 7.3 5.23 2.65 2.65 0 0 0 2.89-.61l1.79-1.82a2.71 2.71 0 0 1 2.73-.76l7.3 2.09A2.74 2.74 0 0 1 95.84 88z" />
          </g>
        </svg>
      ),
    },
    {
      title: `${lang.workingHours}`,
      value: `${lang.time}`,
      link: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6"
        >
          <defs>
            <linearGradient
              id="clockGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#31a4da" />
              <stop offset="100%" stopColor="#704c9f" />
            </linearGradient>
          </defs>

          <circle cx="256" cy="256" r="256" fill="url(#clockGradient)" />

          {/* Clock */}
          <path
            fill="#fff"
            d="M256 112c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm56 152h-72c-8.8 0-16-7.2-16-16v-88h32v72h56v32z"
          />
        </svg>
      ),
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitWhatsApp = () => {
    const { fullName, email, phone, message } = formData;

    if (!fullName || !email || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage = `
*New Contact Form Submission*

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Message: ${message}
`;

    const whatsappURL = `https://wa.me/971521279636?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen pt-28 bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#31a4da] to-[#704c9f] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{lang.title}</h1>
          <p className="max-w-3xl mx-auto text-blue-100">{lang.description}</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pt-16 px-4 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {contactCards.map((card) => {
            const cardContent = (
              <>
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#31a4da]/10 to-[#704c9f]/10">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    <span className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                      {card.title}
                    </span>
                  </h3>
                </div>

                <p className="mt-3 text-sm break-words whitespace-pre-line">
                  <span className="text-slate-600 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                    {card.value}
                  </span>
                </p>
              </>
            );

            const commonClass =
              "group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#31a4da] hover:bg-gradient-to-r hover:from-[#31a4da]/5 hover:to-[#704c9f]/5";

            return card.link ? (
              <a
                key={card.title}
                href={card.link}
                rel="noopener noreferrer"
                className={commonClass}
              >
                {cardContent}
              </a>
            ) : (
              <div key={card.title} className={commonClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="px-4 pt-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 ">
            <h2 className="text-2xl font-bold">{lang.sendMessage}</h2>

            <div className="mt-6 space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={lang.fullName}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#31a4da]"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={lang.emailAddress}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#31a4da]"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={lang.phoneNumber}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#31a4da]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder={lang.yourMessage}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#31a4da]"
              />

              <button
                onClick={handleSubmitWhatsApp}
                className="group w-full inline-flex items-center justify-between gap-2 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90"
              >
                <span className="px-2 sm:px-4">{lang.sendMessage}</span>
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
                  {/* WhatsApp SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#704c9f]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.54 0 .25 5.29.25 11.81c0 2.08.54 4.11 1.57 5.91L0 24l6.46-1.69a11.8 11.8 0 005.6 1.42h.01c6.52 0 11.81-5.29 11.81-11.81 0-3.15-1.23-6.1-3.36-8.44zm-8.46 18.25h-.01a9.88 9.88 0 01-5.03-1.38l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.82 9.82 0 01-1.52-5.22c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 012.89 6.96c0 5.43-4.42 9.85-9.85 9.85zm5.4-7.39c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.57-.49-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.99 2.43.02 1.43 1.02 2.8 1.17 3 .15.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.56-.34z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Office Address with Map */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{lang.officeAddress}</h3>

              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.9674219295953!2d55.38262527415597!3d25.256450929300463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f438a9cf4d663%3A0x921237e1d1d1fb1!2sPERFECT%20ZONE%20INTERNATIONAL%20BUSINESS%20SERVICES%20L.L.C!5e1!3m2!1sen!2sin!4v1782204404858!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
