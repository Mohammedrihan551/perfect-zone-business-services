"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import BookConsultancyPopup from "./BookConsultancyPopup";
import MainlandCompanyPopup from "./MainlandCompanyPopup";
import FreeZoneCompanyPopup from "./FreezoneCompanyPopup";
import OffshoreCompanyPopup from "./OffshoreCompanyPopup";
import TradeLicensePopup from "./TradeLicensePopup";
import CorporateBankPopup from "./CorporateBankPopup";
import BusinessConsultancyPopup from "./BusinessConsultancyPopup";
import MOFAAttestationPopup from "./MOFAAttestationPopup";
import EmbassyAttestationPopup from "./EmbassyAttestationPopup";
import DegreeCertificateAttestationPopup from "./DegreeCertificateAttestationPopup";
import MarriageCertificateAttestationPopup from "./MarriageCertificateAttestationPopup";
import BirthCertificateAttestationPopup from "./BirthCertificateAttestationPopup";
import CommercialDocumentAttestationPopup from "./CommercialDocumentAttestationPopup";
import LegalTranslationPopup from "./LegalTranslationPopup";
import CertifiedTranslationPopup from "./CertifiedTranslationPopup";
import MedicalTranslationPopup from "./MedicalTranslationPopup";
import TechnicalTranslationPopup from "./TechnicalTranslationPopup";
import BusinessTranslationPopup from "./BusinessTranslationPopup";
import WebsiteTranslationPopup from "./WebsiteTranslationPopup";
import GoldenVisaPopup from "./GoldenVisaPopup";
import FamilyVisaPopup from "./FamilyVisaPopup";
import EmploymentVisaPopup from "./EmploymentVisaPopup";
import InvestorVisaPopup from "./InvestorVisaPopup";
import PartnerVisaPopup from "./PartnerVisaPopup";
import FreelanceVisaPopup from "./FreelanceVisaPopup";
import CostCalculatorPopup from "./CostCalculatorPopup";

const translations = {
  en: {
    title1: "UAE Business,",
    title2: "Visa & Attestation Solutions",
    description:
      "Perfect Zone supports entrepreneurs, professionals, and families with UAE company formation, Visa processing, Translation, Attestation, and PRO services.",
    button: "Cost Calculator",
    tag: "PERFECT ZONE UAE SERVICES",
    years: "Years",
    clients: "Clients",
    support: "Support",
  },

  ar: {
    title1: "الأعمال في الإمارات،",
    title2: "حلول التأشيرات والتصديقات",
    description:
      "تدعم بيرفكت زون رواد الأعمال والمهنيين والعائلات من خلال تأسيس الشركات في الإمارات، ومعالجة التأشيرات، وخدمات الترجمة، والتصديقات، وخدمات العلاقات العامة.",
    button: "حاسبة التكلفة",
    tag: "خدمات بيرفكت زون الإمارات",
    years: "سنوات",
    clients: "عملاء",
    support: "دعم",
  },
};

export default function HeroSection() {
  const { selectedLanguage, currentLanguage } = useLanguage();

  const t =
    translations[selectedLanguage as keyof typeof translations] ||
    translations.en;

  const [openPopup, setOpenPopup] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [openServicePopup, setOpenServicePopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(2);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const handlePopup = () => {
    setOpenPopup(true);
  };

  return (
    <div dir={currentLanguage.dir} className="bg-white pt-28">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#162235] text-white">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500
  bg-[url('/images/hero/mobile-hero.png')]
  lg:bg-[url('/images/hero/dubai-business.png')]
  ${selectedLanguage === "ar" ? "lg:scale-x-[-1] lg:bg-right" : "lg:bg-left"}
`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#07111f]/75" />

        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#31a4da18,transparent_28%),radial-gradient(circle_at_bottom_right,#704c9f18,transparent_34%)]" />

        {/* Extra Glow Effects */}
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#31a4da]/5 blur-[120px]" />

        {/* Container */}
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-4 pt-10 pb-5 sm:min-h-[76vh] sm:px-6 sm:py-12 lg:min-h-[84vh] lg:px-8">
          <div className="grid w-full items-center gap-8 lg:grid-cols-2">
            {/* Content */}
            <div className="flex max-w-2xl flex-col justify-center text-center md:text-left lg:text-left rtl:lg:text-right">
              {/* Tag */}
              <div className="mb-4 flex justify-center md:justify-start lg:justify-start rtl:lg:justify-end">
                <span className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1 text-[9px] font-medium tracking-[0.18em] text-white/80 backdrop-blur-md sm:px-4 sm:text-[10px]">
                  {t.tag}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[30px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[38px] lg:text-5xl xl:text-[56px]">
                {t.title1}

                <span className="bg-gradient-to-r from-[#31a4da] to-[#8c6bc7] bg-clip-text text-transparent">
                  {" "}
                  {t.title2}
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-slate-300 sm:text-sm md:text-[15px] md:mx-0 lg:mx-0 lg:max-w-xl">
                {t.description}
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start lg:justify-start rtl:lg:justify-end">
                <button
                  type="button"
                  onClick={handlePopup}
                  className="group inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
                >
                  {/* Text */}
                  <span className="px-4">{t.button}</span>

                  {/* Arrow */}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
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

            {/* Right Side Empty */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <CostCalculatorPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        setOpenServicePopup={setOpenServicePopup}
        setSelectedService={setSelectedService}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setNationality={setNationality}
      />

      {selectedService == "Mainland Company Formation" ? (
        // Business Setup
        <MainlandCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Freezone Company" ? (
        <FreeZoneCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Offshore Company" ? (
        <OffshoreCompanyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Trade License" ? (
        <TradeLicensePopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Corporate Bank" ? (
        <CorporateBankPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Business Consultancy" ? (
        <BusinessConsultancyPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "MOFA Attestation" ? (
        // Attestation Services
        <MOFAAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Embassy Attestation" ? (
        <EmbassyAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Degree Certificate Attestation" ? (
        <DegreeCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Marriage Certificate Attestation" ? (
        <MarriageCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Birth Certificate Attestation" ? (
        <BirthCertificateAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Commercial Document Attestation" ? (
        <CommercialDocumentAttestationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Legal Translation" ? (
        // Translation Services
        <LegalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Certified Translation" ? (
        <CertifiedTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Medical Translation" ? (
        <MedicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Technical Translation" ? (
        <TechnicalTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Business Translation" ? (
        <BusinessTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Website Translation" ? (
        <WebsiteTranslationPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Golden Visa" ? (
        // Visa Services
        <GoldenVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Family Visa" ? (
        <FamilyVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Employment Visa" ? (
        <EmploymentVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Investor Visa" ? (
        <InvestorVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Partner Visa" ? (
        <PartnerVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : selectedService == "Freelance Visa" ? (
        <FreelanceVisaPopup
          open={openServicePopup}
          onClose={() => setOpenServicePopup(false)}
          currentStep={currentStep}
          name={name}
          mobile={mobile}
          email={email}
          nationality={nationality}
        />
      ) : (
        ""
      )}
    </div>
  );
}
