"use client";

import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
  currentStep: any;
  name: any;
  mobile: any;
  email: any;
  nationality: any;
}

export default function DegreeCertificateAttestationPopup({
  open,
  onClose,
  currentStep,
  name,
  mobile,
  email,
  nationality,
}: Props) {
  const [step, setStep] = useState(currentStep ? currentStep : 1);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const { selectedLanguage } = useLanguage();
  const isArabic = selectedLanguage === "ar";

  const t = isArabic
    ? {
        popupTitle: "استشارة مجانية",
        popupSubtitle: "أكمل النموذج وسيتواصل معك خبراؤنا.",
        setupTag: "خدمات تصديق شهادة الدرجة العلمية",

        step: "الخطوة",
        of: "من",
        complete: "مكتمل",

        fullName: "الاسم الكامل *",
        mobile: "رقم الهاتف *",
        email: "البريد الإلكتروني *",
        nationality: "الجنسية *",

        certificateType: "نوع الشهادة *",
        issuingCountry: "بلد إصدار الشهادة *",
        certificateCount: "عدد الشهادات *",
        purpose: "الغرض من التصديق *",

        universityVerified: "هل الشهادة موثقة من الجامعة؟",
        mofaRequired: "هل تحتاج تصديق الخارجية؟",
        urgentService: "خدمة مستعجلة؟",
        translationRequired: "هل تحتاج ترجمة؟",

        timeline: "الجدول الزمني",
        budget: "الميزانية",
        notes: "أي متطلبات إضافية...",

        select: "اختر",
        back: "رجوع",
        continue: "متابعة",
        submitEmail: "إرسال عبر البريد",
        submitWhatsapp: "إرسال عبر واتساب",
      }
    : {
        popupTitle: "Get Your Free Consultation",
        popupSubtitle: "Complete the form and our experts will contact you.",
        setupTag: "Degree Certificate Attestation Services",

        step: "Step",
        of: "of",
        complete: "Complete",

        fullName: "Full Name *",
        mobile: "Mobile Number *",
        email: "Email Address *",
        nationality: "Nationality *",

        certificateType: "Certificate Type *",
        issuingCountry: "Issuing Country *",
        certificateCount: "Number of Certificates *",
        purpose: "Purpose of Attestation *",

        universityVerified: "University Verified Already?",
        mofaRequired: "Need MOFA Attestation?",
        urgentService: "Need Urgent Service?",
        translationRequired: "Need Translation Service?",

        timeline: "Service Timeline",
        budget: "Budget",
        notes: "Any additional requirements...",

        select: "Select",
        back: "Back",
        continue: "Continue",
        submitEmail: "Submit Email",
        submitWhatsapp: "Submit WhatsApp",
      };

  const [form, setForm] = useState({
    name: name ? name : "",
    mobile: mobile ? mobile : "",
    email: email ? email : "",
    nationality: nationality ? nationality : "",

    certificateType: "",
    issuingCountry: "",
    certificateCount: "",
    purpose: "",

    universityVerified: "",
    mofaRequired: "",
    urgentService: "",
    translationRequired: "",

    timeline: "",
    notes: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isValidPhone = (phone: string) => {
    return /^\d{8,15}$/.test(phone.replace(/\D/g, ""));
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) {
        newErrors.name = "Full Name is required";
      }

      if (!form.mobile.trim()) {
        newErrors.mobile = "Mobile Number is required";
      } else if (!isValidPhone(form.mobile)) {
        newErrors.mobile = "Please enter a valid mobile number";
      }

      if (!form.email.trim()) {
        newErrors.email = "Email Address is required";
      } else if (!isValidEmail(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!form.nationality) {
        newErrors.nationality = "Please select your nationality";
      }
    }

    if (step === 2) {
      if (!form.certificateType)
        newErrors.certificateType = "Please select certificate type";

      if (!form.issuingCountry)
        newErrors.issuingCountry = "Please select issuing country";

      if (!form.certificateCount)
        newErrors.certificateCount = "Please select Number of Certificate";

      if (!form.purpose) newErrors.purpose = "Please select purpose";
    }

    if (step === 3) {
    }

    if (step === 4) {
      if (!form.timeline) newErrors.timeline = "Please select setup timeline";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateStep();

    if (!isValid) {
      const firstErrorField = document.querySelector("[data-error='true']");

      firstErrorField?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleSubmitEmail = () => {
    if (!validateStep()) return;
    const subject = "Degree Certificate Attestation Inquiry";

    const body = `
DEGREE CERTIFICATE ATTESTATION SERVICE

Full Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
Nationality: ${form.nationality}

Certificate Type: ${form.certificateType}
Issuing Country: ${form.issuingCountry}
Certificate Count: ${form.certificateCount}
Purpose: ${form.purpose}

University Verified: ${form.universityVerified}
MOFA Required: ${form.mofaRequired}
Urgent Service: ${form.urgentService}
Translation Required: ${form.translationRequired}

Timeline: ${form.timeline}

Additional Notes:
${form.notes}
`;

    window.location.href = `mailto:info@perfectzonehub.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    onClose();
  };

  const handleSubmitWhatsApp = () => {
    if (!validateStep()) return;
    const message = `
*Degree Certificate Attestation Inquiry*

Full Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
Nationality: ${form.nationality}

Certificate Type: ${form.certificateType}
Issuing Country: ${form.issuingCountry}
Certificate Count: ${form.certificateCount}
Purpose: ${form.purpose}

University Verified: ${form.universityVerified}
MOFA Required: ${form.mofaRequired}
Urgent Service: ${form.urgentService}
Translation Required: ${form.translationRequired}

Timeline: ${form.timeline}

Additional Notes:
${form.notes}
`;

    const phone = "971521279636";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#162235] text-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-white/10 bg-[#162235] p-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="rounded-full bg-gradient-to-r from-[#31a4da]/20 to-[#704c9f]/20 px-2 py-1 text-[10px] sm:px-3 sm:text-xs md:text-sm font-medium whitespace-nowrap">
                {t.setupTag}
              </span>

              <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                {t.popupTitle}
              </h2>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                {t.popupSubtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-sm sm:text-base transition hover:bg-white/20"
            >
              ✕
            </button>
          </div>

          {/* Steps */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-400">
              <span>
                {t.step} {step} {t.of} 4
              </span>
              <span>
                {step * 25}% {t.complete}
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] transition-all duration-500"
                style={{
                  width: `${step * 25}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label={t.fullName}
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.mobile}
                </label>

                <PhoneInput
                  country="ae"
                  enableSearch
                  disableSearchIcon
                  searchPlaceholder={
                    selectedLanguage === "ar"
                      ? "ابحث عن الدولة..."
                      : "Search country..."
                  }
                  value={form.mobile}
                  onChange={(phone) => {
                    setForm((prev) => ({
                      ...prev,
                      mobile: phone,
                    }));

                    if (errors.mobile) {
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "",
                      }));
                    }
                  }}
                  containerClass="custom-phone-container phone-ltr"
                  inputClass={`custom-phone-input ${
                    errors.mobile ? "custom-phone-error" : ""
                  }`}
                  buttonClass="custom-phone-button"
                  dropdownClass="custom-phone-dropdown"
                />

                {errors.mobile && (
                  <p className="mt-2 text-sm text-red-400">{errors.mobile}</p>
                )}
              </div>

              <Input
                label={t.email}
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />

              <CountrySelect
                label={t.nationality}
                value={form.nationality}
                error={errors.nationality}
                isArabic={isArabic}
                onChange={(country) =>
                  setForm((prev) => ({
                    ...prev,
                    nationality: country,
                  }))
                }
              />
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label={t.certificateType}
                name="certificateType"
                value={form.certificateType}
                onChange={handleChange}
                options={[
                  "Bachelor Degree",
                  "Master Degree",
                  "Diploma Certificate",
                  "PhD Certificate",
                  "Professional Certificate",
                  "Other",
                ]}
                error={errors.certificateType}
              />

              <CountrySelect
                label={t.issuingCountry}
                value={form.issuingCountry}
                error={errors.issuingCountry}
                isArabic={isArabic}
                onChange={(country) =>
                  setForm((prev) => ({
                    ...prev,
                    issuingCountry: country,
                  }))
                }
              />

              <Select
                label={t.certificateCount}
                name="certificateCount"
                value={form.certificateCount}
                onChange={handleChange}
                options={["1", "2-5", "5+"]}
                error={errors.certificateCount}
              />

              <Select
                label={t.purpose}
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                options={[
                  "Employment Visa",
                  "Higher Education",
                  "Migration",
                  "Professional Licensing",
                  "Other",
                ]}
                error={errors.purpose}
              />
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label={t.universityVerified}
                name="universityVerified"
                value={form.universityVerified}
                onChange={handleChange}
                options={["Yes", "No", "Not Sure"]}
                error={errors.universityVerified}
              />

              <Select
                label={t.mofaRequired}
                name="mofaRequired"
                value={form.mofaRequired}
                onChange={handleChange}
                options={["Yes", "No", "Not Sure"]}
                error={errors.mofaRequired}
              />

              <Select
                label={t.urgentService}
                name="urgentService"
                value={form.urgentService}
                onChange={handleChange}
                options={["Yes", "No"]}
                error={errors.urgentService}
              />

              <Select
                label={t.translationRequired}
                name="translationRequired"
                value={form.translationRequired}
                onChange={handleChange}
                options={["Yes", "No"]}
                error={errors.translationRequired}
              />
            </div>
          )}

          {step === 4 && (
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label={t.timeline}
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                options={[
                  "Same Day",
                  "Within 2-3 Days",
                  "Within 1 Week",
                  "Flexible",
                ]}
                error={errors.timeline}
              />

              <div className="md:col-span-2">
                <textarea
                  rows={2}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder={t.notes}
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
                />
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left Side */}
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 px-3 py-3 text-xs sm:text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-30"
            >
              <span className="px-2 sm:px-4">{t.back}</span>
            </button>

            {/* Right Side */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className="group w-full sm:w-auto inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-xs sm:text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  <span className="px-2 sm:px-4">{t.continue}</span>

                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white transition duration-300 group-hover:translate-x-0.5">
                    {/* Arrow SVG */}
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
              ) : (
                <>
                  <button
                    onClick={handleSubmitEmail}
                    className="group w-full sm:w-auto inline-flex items-center justify-between gap-2 rounded-full border border-white/10 px-2 py-1.5 text-xs sm:text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90"
                  >
                    <span className="px-2 sm:px-4">{t.submitEmail}</span>
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
                      {/* Email SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#704c9f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l8.293 5.293a1 1 0 001.414 0L21 8"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                  </button>

                  <button
                    onClick={handleSubmitWhatsApp}
                    className="group w-full sm:w-auto inline-flex items-center justify-between gap-2 rounded-full bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-2 py-1.5 text-xs sm:text-[13px] font-medium tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:opacity-90"
                  >
                    <span className="px-2 sm:px-4">{t.submitWhatsapp}</span>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, error, ...props }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        {...props}
        data-error={!!error}
        className={`w-full rounded-lg px-4 py-2 outline-none transition-all
        ${
          error
            ? "border border-red-500 bg-red-500/10"
            : "border border-white/10 bg-white/5"
        }`}
      />

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}

function Select({ label, options, error, ...props }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <div className="relative">
        <select
          {...props}
          data-error={!!error}
          className={`w-full appearance-none rounded-lg px-4 py-2 pr-12 outline-none transition-all
          ${
            error
              ? "border border-red-500 bg-red-500/10"
              : "border border-white/10 bg-white/5"
          }`}
        >
          <option value="">Select</option>

          {options.map((item: string) => (
            <option key={item} value={item} className="text-black">
              {item}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}

function CountrySelect({
  value,
  onChange,
  error,
  isArabic,
  label,
}: {
  value: string;
  onChange: (country: string) => void;
  error?: string;
  isArabic?: boolean;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const COUNTRIES: { name: string; iso2: string }[] = [
    { name: "Afghanistan", iso2: "af" },
    { name: "Albania", iso2: "al" },
    { name: "Algeria", iso2: "dz" },
    { name: "Andorra", iso2: "ad" },
    { name: "Angola", iso2: "ao" },
    { name: "Argentina", iso2: "ar" },
    { name: "Armenia", iso2: "am" },
    { name: "Australia", iso2: "au" },
    { name: "Austria", iso2: "at" },
    { name: "Azerbaijan", iso2: "az" },
    { name: "Bahrain", iso2: "bh" },
    { name: "Bangladesh", iso2: "bd" },
    { name: "Belarus", iso2: "by" },
    { name: "Belgium", iso2: "be" },
    { name: "Benin", iso2: "bj" },
    { name: "Bhutan", iso2: "bt" },
    { name: "Bolivia", iso2: "bo" },
    { name: "Bosnia and Herzegovina", iso2: "ba" },
    { name: "Botswana", iso2: "bw" },
    { name: "Brazil", iso2: "br" },
    { name: "Brunei", iso2: "bn" },
    { name: "Bulgaria", iso2: "bg" },
    { name: "Burkina Faso", iso2: "bf" },
    { name: "Cambodia", iso2: "kh" },
    { name: "Cameroon", iso2: "cm" },
    { name: "Canada", iso2: "ca" },
    { name: "Chile", iso2: "cl" },
    { name: "China", iso2: "cn" },
    { name: "Colombia", iso2: "co" },
    { name: "Congo", iso2: "cg" },
    { name: "Costa Rica", iso2: "cr" },
    { name: "Croatia", iso2: "hr" },
    { name: "Cuba", iso2: "cu" },
    { name: "Cyprus", iso2: "cy" },
    { name: "Czech Republic", iso2: "cz" },
    { name: "Denmark", iso2: "dk" },
    { name: "Ecuador", iso2: "ec" },
    { name: "Egypt", iso2: "eg" },
    { name: "Ethiopia", iso2: "et" },
    { name: "Finland", iso2: "fi" },
    { name: "France", iso2: "fr" },
    { name: "Georgia", iso2: "ge" },
    { name: "Germany", iso2: "de" },
    { name: "Ghana", iso2: "gh" },
    { name: "Greece", iso2: "gr" },
    { name: "Guatemala", iso2: "gt" },
    { name: "Honduras", iso2: "hn" },
    { name: "Hungary", iso2: "hu" },
    { name: "Iceland", iso2: "is" },
    { name: "India", iso2: "in" },
    { name: "Indonesia", iso2: "id" },
    { name: "Iran", iso2: "ir" },
    { name: "Iraq", iso2: "iq" },
    { name: "Ireland", iso2: "ie" },
    { name: "Israel", iso2: "il" },
    { name: "Italy", iso2: "it" },
    { name: "Jamaica", iso2: "jm" },
    { name: "Japan", iso2: "jp" },
    { name: "Jordan", iso2: "jo" },
    { name: "Kazakhstan", iso2: "kz" },
    { name: "Kenya", iso2: "ke" },
    { name: "Kuwait", iso2: "kw" },
    { name: "Kyrgyzstan", iso2: "kg" },
    { name: "Laos", iso2: "la" },
    { name: "Latvia", iso2: "lv" },
    { name: "Lebanon", iso2: "lb" },
    { name: "Libya", iso2: "ly" },
    { name: "Lithuania", iso2: "lt" },
    { name: "Luxembourg", iso2: "lu" },
    { name: "Malaysia", iso2: "my" },
    { name: "Maldives", iso2: "mv" },
    { name: "Mali", iso2: "ml" },
    { name: "Malta", iso2: "mt" },
    { name: "Mauritius", iso2: "mu" },
    { name: "Mexico", iso2: "mx" },
    { name: "Moldova", iso2: "md" },
    { name: "Mongolia", iso2: "mn" },
    { name: "Morocco", iso2: "ma" },
    { name: "Mozambique", iso2: "mz" },
    { name: "Myanmar", iso2: "mm" },
    { name: "Namibia", iso2: "na" },
    { name: "Nepal", iso2: "np" },
    { name: "Netherlands", iso2: "nl" },
    { name: "New Zealand", iso2: "nz" },
    { name: "Nicaragua", iso2: "ni" },
    { name: "Nigeria", iso2: "ng" },
    { name: "Norway", iso2: "no" },
    { name: "Oman", iso2: "om" },
    { name: "Pakistan", iso2: "pk" },
    { name: "Palestine", iso2: "ps" },
    { name: "Panama", iso2: "pa" },
    { name: "Paraguay", iso2: "py" },
    { name: "Peru", iso2: "pe" },
    { name: "Philippines", iso2: "ph" },
    { name: "Poland", iso2: "pl" },
    { name: "Portugal", iso2: "pt" },
    { name: "Qatar", iso2: "qa" },
    { name: "Romania", iso2: "ro" },
    { name: "Russia", iso2: "ru" },
    { name: "Rwanda", iso2: "rw" },
    { name: "Saudi Arabia", iso2: "sa" },
    { name: "Senegal", iso2: "sn" },
    { name: "Serbia", iso2: "rs" },
    { name: "Sierra Leone", iso2: "sl" },
    { name: "Singapore", iso2: "sg" },
    { name: "Slovakia", iso2: "sk" },
    { name: "Slovenia", iso2: "si" },
    { name: "Somalia", iso2: "so" },
    { name: "South Africa", iso2: "za" },
    { name: "South Korea", iso2: "kr" },
    { name: "South Sudan", iso2: "ss" },
    { name: "Spain", iso2: "es" },
    { name: "Sri Lanka", iso2: "lk" },
    { name: "Sudan", iso2: "sd" },
    { name: "Sweden", iso2: "se" },
    { name: "Switzerland", iso2: "ch" },
    { name: "Syria", iso2: "sy" },
    { name: "Taiwan", iso2: "tw" },
    { name: "Tajikistan", iso2: "tj" },
    { name: "Tanzania", iso2: "tz" },
    { name: "Thailand", iso2: "th" },
    { name: "Tunisia", iso2: "tn" },
    { name: "Turkey", iso2: "tr" },
    { name: "Turkmenistan", iso2: "tm" },
    { name: "Uganda", iso2: "ug" },
    { name: "Ukraine", iso2: "ua" },
    { name: "United Arab Emirates", iso2: "ae" },
    { name: "United Kingdom", iso2: "gb" },
    { name: "United States", iso2: "us" },
    { name: "Uruguay", iso2: "uy" },
    { name: "Uzbekistan", iso2: "uz" },
    { name: "Venezuela", iso2: "ve" },
    { name: "Vietnam", iso2: "vn" },
    { name: "Yemen", iso2: "ye" },
    { name: "Zambia", iso2: "zm" },
    { name: "Zimbabwe", iso2: "zw" },
  ];

  const selectedCountry = COUNTRIES.find((c) => c.name === value);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative">
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-error={!!error}
        className={`flex w-full items-center justify-between rounded-lg px-4 py-2
        ${
          error
            ? "border border-red-500 bg-red-500/10"
            : "border border-white/10 bg-white/5"
        }`}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          {selectedCountry && (
            <img
              src={`https://flagcdn.com/w40/${selectedCountry.iso2}.png`}
              alt={selectedCountry.name}
              className="h-5 w-7 rounded"
            />
          )}

          <span className="truncate">
            {selectedCountry?.name ||
              (isArabic ? "اختر الجنسية" : "Select Nationality")}
          </span>
        </div>

        {/* Custom Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-white/10 bg-[#162235] shadow-xl">
          {/* Search */}
          <div className="border-b border-white/10 p-3">
            <input
              type="text"
              placeholder={isArabic ? "ابحث عن الدولة..." : "Search country..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1 outline-none"
            />
          </div>

          {/* Country List */}
          <div className="max-h-30 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.iso2}
                  type="button"
                  onClick={() => {
                    onChange(country.name);
                    setSearch("");
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-white/10"
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.iso2}.png`}
                    alt={country.name}
                    className="h-5 w-7 rounded"
                  />

                  <span>{country.name}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-400">
                {isArabic ? "لم يتم العثور على دولة" : "No country found"}
              </div>
            )}
          </div>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
