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

export default function CTASection() {
  const { selectedLanguage } = useLanguage();

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
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="rounded-3xl  border-white/15 bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-6 py-10 text-white lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                {selectedLanguage === "ar" ? "ابدأ اليوم" : "Start Today"}
              </span>

              <h2 className="mt-5 text-2xl font-semibold leading-snug lg:text-3xl">
                {selectedLanguage === "ar"
                  ? "هل أنت مستعد لإطلاق عملك في الإمارات؟"
                  : "Ready To Launch Your UAE Business?"}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                {selectedLanguage === "ar"
                  ? "تحدث مع خبرائنا اليوم واحصل على حل مخصص لتأسيس أعمالك في الإمارات يناسب احتياجاتك."
                  : "Speak with our experts today and get a customized UAE business setup solution tailored to your requirements."}
              </p>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col gap-3 lg:items-end">
              {/* Book Consultation */}
              <button
                onClick={handlePopup}
                className="group flex items-center justify-between rounded-full bg-white px-3 py-1.5  text-sm font-semibold text-slate-900 transition-all duration-300 hover:shadow-lg"
              >
                <span className="whitespace-nowrap px-2">
                  {selectedLanguage === "ar"
                    ? "احجز استشارة مجانية"
                    : "Book Free Consultation"}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] transition-transform duration-300 group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-8 w-8"
                  >
                    <defs>
                      <linearGradient
                        id="consultationGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#31a4da" />
                        <stop offset="100%" stopColor="#704c9f" />
                      </linearGradient>
                    </defs>

                    {/* Circle Background */}
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      fill="url(#consultationGradient)"
                    />

                    {/* Icon */}
                    <path
                      fill="#fff"
                      d="M14.444 22.826a5.906 5.906 0 0 0-.572.233c-.883.436-2.1 1.224-2.1 1.224a.5.5 0 0 1-.751-.563s.356-1.18.435-1.999a2.897 2.897 0 0 0 0-.398A6.984 6.984 0 0 1 9 16c0-3.863 3.137-7 7-7s7 3.137 7 7a7.004 7.004 0 0 1-8.556 6.826zM19.5 14.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 19.5 14.5zm-7 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12.5 14.5zm3.5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 16 14.5z"
                    />
                    <path
                      fill="#fff"
                      d="M6.5 16a.5.5 0 0 1-1 0c0-5.796 4.704-10.5 10.5-10.5S26.5 10.204 26.5 16 21.796 26.5 16 26.5a.5.5 0 0 1 0-1c5.244 0 9.5-4.256 9.5-9.5S21.244 6.5 16 6.5 6.5 10.756 6.5 16z"
                    />
                  </svg>
                </span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/971521279636?text=Hello%20Perfect%20Zone,%20I%20need%20assistance.",
                  )
                }
                className="group flex items-center justify-between rounded-full border border-white/30 px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                <span className="whitespace-nowrap px-2">
                  {selectedLanguage === "ar"
                    ? "تواصل عبر واتساب"
                    : "WhatsApp Us"}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 152 152"
                    className="h-8 w-8"
                  >
                    <circle cx="76" cy="76" r="76" fill="#25D366" />

                    <g fill="#fff">
                      <path d="M102.81 49.19a37.7 37.7 0 0 0-60.4 43.62l-4 19.42a1.42 1.42 0 0 0 .23 1.13 1.45 1.45 0 0 0 1.54.6l19-4.51a37.7 37.7 0 0 0 43.6-60.26zm-5.94 47.37a29.56 29.56 0 0 1-34 5.57l-2.66-1.32-11.67 2.76v-.15L51 91.65l-1.3-2.56a29.5 29.5 0 0 1 5.43-34.27 29.53 29.53 0 0 1 41.74 0L97 55a29.52 29.52 0 0 1-.15 41.58z" />
                      <path d="M95.84 88c-1.43 2.25-3.7 5-6.53 5.69-5 1.2-12.61 0-22.14-8.81l-.12-.11c-8.29-7.74-10.49-14.19-10-19.3.29-2.91 2.71-5.53 4.75-7.25a2.72 2.72 0 0 1 4.25 1l3.07 6.94a2.7 2.7 0 0 1-.33 2.76l-1.56 2a2.65 2.65 0 0 0-.21 2.95 29 29 0 0 0 5.27 5.86 31.17 31.17 0 0 0 7.3 5.23 2.65 2.65 0 0 0 2.89-.61l1.79-1.82a2.71 2.71 0 0 1 2.73-.76l7.3 2.09A2.74 2.74 0 0 1 95.84 88z" />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookConsultancyPopup
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
    </section>
  );
}
