export default function FloatingContactButtons() {
  return (
    <div className="fixed right-0 top-[60%] z-50 -translate-y-1/2 lg:block">
      <div className="overflow-hidden rounded-l-2xl border-b border-l border-t border-slate-200 bg-white shadow-xl">
        {/* Call */}
        <a
          href="tel:+971521234567"
          className="flex h-12 w-12 items-center justify-center border-b border-slate-200 transition-all duration-300 hover:bg-[#31a4da]/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7"
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
        </a>

        {/* Email */}
        <a
          href="mailto:info@perfectzonehub.com"
          className="flex h-12 w-12  items-center justify-center border-b border-slate-200 bg-white transition hover:bg-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7"
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
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/971521234567"
          rel="noopener noreferrer"
          className="flex h-12 w-12  items-center justify-center bg-white transition hover:bg-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 152 152"
            className="h-8 w-8"
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
        </a>
      </div>
    </div>
  );
}
