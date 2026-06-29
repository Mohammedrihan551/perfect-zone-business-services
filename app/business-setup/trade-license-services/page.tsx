export default function TradeLicenseServicesPage() {
  const licenseTypes = [
    {
      title: "Commercial License",
      description:
        "Ideal for trading, retail, import, export and general commercial activities in UAE.",
    },
    {
      title: "Professional License",
      description:
        "Perfect for consultants, freelancers and service-based businesses across UAE.",
    },
    {
      title: "Industrial License",
      description:
        "Designed for manufacturing, production and industrial business operations.",
    },
    {
      title: "E-Commerce License",
      description:
        "Launch your online business legally with UAE approved e-commerce licensing.",
    },
  ];

  const services = [
    "New Trade License Registration",
    "Trade License Renewal",
    "License Amendment Services",
    "Business Activity Modification",
    "DED Approval Assistance",
    "Trade Name Reservation",
    "MOA Drafting & Documentation",
    "Corporate Compliance Support",
  ];

  const process = [
    "Business Activity Selection",
    "Trade Name Reservation",
    "Initial Government Approval",
    "Documentation Submission",
    "License Issuance",
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#1e293b] pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,164,218,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(112,76,159,0.18),transparent_30%)]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-[#31a4da] backdrop-blur-xl">
              UAE Trade License Experts
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight text-white lg:text-7xl">
              Trade License
              <span className="block bg-gradient-to-r from-[#31a4da] to-[#704c9f] bg-clip-text text-transparent">
                Services in UAE
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              Start, renew or manage your UAE trade license with complete expert
              assistance from Perfect Zone International Business Services.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl bg-gradient-to-r from-[#31a4da] to-[#704c9f] px-8 py-4 text-base font-bold text-white shadow-2xl shadow-[#31a4da]/20 transition duration-300 hover:scale-105">
                Apply for License
              </button>

              <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-[#31a4da] hover:bg-white/10">
                Speak to Consultant
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-black text-white">10K+</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Licenses Processed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">24 Hrs</h3>
                <p className="mt-1 text-sm text-slate-400">Fast Approvals</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">100%</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Compliance Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="rounded-[28px] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.15)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#31a4da]">
                      Business License
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-slate-900">
                      UAE Trade License
                    </h3>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#31a4da] to-[#704c9f] text-white shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  {[
                    "Government Approved",
                    "DED & Free Zone Assistance",
                    "Fast Processing",
                    "End-to-End Documentation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#31a4da] to-[#704c9f] text-white">
                        ✓
                      </div>

                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-[#31a4da]/10 px-5 py-2 text-sm font-semibold text-[#31a4da]">
              UAE License Categories
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Trade License Types
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Choose the right trade license category based on your business
              activity and operational goals in UAE.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {licenseTypes.map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#31a4da]/20 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#31a4da]/10 to-[#704c9f]/10 text-[#31a4da] transition duration-300 group-hover:from-[#31a4da] group-hover:to-[#704c9f] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900 transition group-hover:text-[#31a4da]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-500">
                  {item.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#31a4da] transition hover:gap-3">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-[#704c9f]/10 px-5 py-2 text-sm font-semibold text-[#704c9f]">
                End-to-End Solutions
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
                Complete Trade License Services
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-500">
                We handle the complete process from approvals and documentation
                to license issuance and renewals.
              </p>

              <div className="mt-10 space-y-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#31a4da] to-[#704c9f] text-white shadow-lg">
                      ✓
                    </div>

                    <span className="font-semibold text-slate-700">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <h3 className="text-3xl font-black text-slate-900">
                Why Choose Perfect Zone?
              </h3>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Fast Processing",
                    desc: "Quick approvals and professional handling of all UAE trade licensing requirements.",
                  },
                  {
                    title: "Dedicated Consultants",
                    desc: "Experienced business advisors guiding you through every stage.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs with clear and competitive service pricing.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#31a4da]/10 to-[#704c9f]/10 text-[#31a4da]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-[#31a4da]/10 px-5 py-2 text-sm font-semibold text-[#31a4da]">
              Simple & Fast Process
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#31a4da] to-[#704c9f] text-2xl font-black text-white shadow-lg">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#31a4da] to-[#704c9f] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl">
            Ready to Get Your
            <span className="block">UAE Trade License?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 lg:text-xl">
            Let our experts help you establish your business legally and
            efficiently in UAE.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-xl transition duration-300 hover:scale-105">
              Book Free Consultation
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
