"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
    >
      <defs>
        <linearGradient
          id="a"
          x1="328.27"
          x2="183.73"
          y1="508.05"
          y2="3.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffdb73" />
          <stop offset="0.08" stopColor="#fdad4e" />
          <stop offset="0.15" stopColor="#fb832e" />
          <stop offset="0.19" stopColor="#fa7321" />
          <stop offset="0.23" stopColor="#f6692f" />
          <stop offset="0.37" stopColor="#e84a5a" />
          <stop offset="0.48" stopColor="#e03675" />
          <stop offset="0.55" stopColor="#dd2f7f" />
          <stop offset="0.68" stopColor="#b43d97" />
          <stop offset="0.97" stopColor="#4d60d4" />
          <stop offset="1" stopColor="#4264db" />
        </linearGradient>
      </defs>

      {/* FIXED: applied gradient correctly */}
      <rect
        width="465.06"
        height="465.06"
        x="23.47"
        y="23.47"
        rx="107.23"
        ry="107.23"
        fill="url(#a)"
      />

      <path
        d="M331 115.22a66.92 66.92 0 0 1 66.65 66.65v148.26A66.92 66.92 0 0 1 331 396.78H181a66.92 66.92 0 0 1-66.65-66.65V181.87A66.92 66.92 0 0 1 181 115.22h150m0-31H181c-53.71 0-97.66 44-97.66 97.66v148.25c0 53.71 44 97.66 97.66 97.66h150c53.71 0 97.66-44 97.66-97.66V181.87c0-53.71-43.95-97.66-97.66-97.66Z"
        fill="#fff"
      />

      <path
        d="M256 198.13A57.87 57.87 0 1 1 198.13 256 57.94 57.94 0 0 1 256 198.13m0-31A88.87 88.87 0 1 0 344.87 256 88.87 88.87 0 0 0 256 167.13Z"
        fill="#fff"
      />

      <circle cx="346.81" cy="163.23" r="21.07" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
    >
      {/* Blue background shape */}
      <path
        fill="#1877f2"
        d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
      />

      {/* White "f" shape */}
      <path
        fill="#ffffff"
        d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.61 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.18a2 2 0 0 1 2.11-.45c.8.28 1.64.49 2.5.61A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M4 4l8 8 8-8" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function FooterSection() {
  const { selectedLanguage } = useLanguage();

  const service = {
    en: {
      services: "Services",
      items: [
        { label: "Business Setup", href: "/business-setup" },
        { label: "Attestation", href: "/attestation" },
        { label: "Translation", href: "/translation" },
        { label: "Visas", href: "/visa" },
      ],
    },
    ar: {
      services: "الخدمات",
      items: [
        { label: "تأسيس الشركات", href: "/business-setup" },
        { label: "التصديقات", href: "/attestation" },
        { label: "الترجمة", href: "/translation" },
        { label: "التأشيرات", href: "/visa" },
      ],
    },
  };

  const company = {
    en: {
      company: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Condition ", href: "/terms-and-condition" },
      ],
    },
    ar: {
      company: "الشركة",
      items: [
        { label: "من نحن", href: "/about" },
        { label: "اتصل بنا", href: "/contact" },
        { label: "سياسة الخصوصية", href: "/privacy-policy" },
        { label: "المساعدة والدعم", href: "/help-support" },
      ],
    },
  };

  const contact = {
    en: {
      phone: "Phone",
      email: "Email",
      office: "Office",
      address:
        "Shaikha Mahra Building - Office 312 - Al Twar Second - Dubai - United Arab Emirates",
      number: "+971 52 127 9636",
    },
    ar: {
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      office: "المكتب",
      address:
        "مبنى الشيخة مهرة - مكتب ٣١٢ - الطوار الثانية - دبي - الإمارات العربية المتحدة",
      number: "+٩٧١ ٥٢ ١٢٧ ٩٦٣٦",
    },
  };

  const links = [
    { name: "Help & Support", href: "/help-support" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="relative bg-slate-950 text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center">
                <img
                  src="/images/logo/perfect-zone-logo.png"
                  alt="Perfect Zone Logo"
                  className="h-full w-full"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Perfect Zone</h3>
                <p className="text-xs text-slate-400">
                  International Business Services
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
              {selectedLanguage === "ar"
                ? "خدمات أعمال متميزة في دولة الإمارات لدعم تأسيس الشركات والتأشيرات والتصديقات والترجمة والمعاملات الحكومية."
                : "Premium UAE business services supporting company setup, visas, attestation, translation, and government processing."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/perfectzone_businessservices/"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[#31a4da]/40"
              >
                <span className="">
                  <InstagramIcon />
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Perfect-Zone-International-Business-Services-61574150891985/"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[#31a4da]/40"
              >
                <span className="">
                  <FacebookIcon />
                </span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {service[selectedLanguage].services}
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {service[selectedLanguage].items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-block">
                    <span className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {company[selectedLanguage].company}
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {company[selectedLanguage].items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group inline-block">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-5 text-sm">
            {/* Phone */}
            <a
              href="tel:+971521279636"
              className="group flex items-start gap-3 text-slate-300"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#31a4da]/40">
                <PhoneIcon />
              </span>

              <div className="leading-tight">
                <p className="text-xs text-slate-500">
                  {contact[selectedLanguage].phone}
                </p>

                <p className="text-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                  {contact[selectedLanguage].number}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@perfectzonehub.com"
              className="group flex items-start gap-3 text-slate-300"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#31a4da]/40">
                <MailIcon />
              </span>

              <div className="leading-tight">
                <p className="text-xs text-slate-500">
                  {contact[selectedLanguage].email}
                </p>

                <p className="text-sm break-all transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                  info@perfectzonehub.com
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/XHPYUotE8VKS982EA"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-slate-300"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#31a4da]/40">
                <LocationIcon />
              </span>

              <div className="leading-tight">
                <p className="text-xs text-slate-500">
                  {contact[selectedLanguage].office}
                </p>

                <p className="text-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:bg-clip-text group-hover:text-transparent">
                  {contact[selectedLanguage].address}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-500 lg:flex-row">
          <p>© 2026 Perfect Zone International Business Services</p>

          <div className="flex gap-5">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-[#31a4da]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
