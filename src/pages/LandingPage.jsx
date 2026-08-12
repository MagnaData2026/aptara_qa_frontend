import { useNavigate } from "react-router-dom";

const discoveryItems = [
  {
    number: "01",
    title: "L&D Maturity",
    description:
      "Understand where your learning and development function stands today.",
  },
  {
    number: "02",
    title: "Key Challenges",
    description:
      "Identify the biggest barriers limiting learning effectiveness and growth.",
  },
  {
    number: "03",
    title: "Learning Model",
    description:
      "Review how learning is currently designed, delivered, and supported.",
  },
  {
    number: "04",
    title: "Team Capacity",
    description:
      "Understand whether your current team and resources can support your goals.",
  },
  {
    number: "05",
    title: "Future Ambition",
    description:
      "Clarify what your L&D function should achieve over the next 12 months.",
  },
];

const steps = [
  {
    number: "01",
    title: "Answer",
    description: "Respond to five focused questions about your L&D function.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Your responses are evaluated against the key areas of L&D maturity.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Receive a personalized snapshot highlighting priorities and opportunities.",
  },
];

const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const CheckIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/assessment");
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-950">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes progressGrow {
          from {
            width: 0%;
          }

          to {
            width: 40%;
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        .fade-one {
          animation: fadeUp 0.7s ease-out both;
        }

        .fade-two {
          animation: fadeUp 0.7s 0.1s ease-out both;
        }

        .fade-three {
          animation: fadeUp 0.7s 0.2s ease-out both;
        }

        .fade-four {
          animation: fadeUp 0.7s 0.3s ease-out both;
        }

        .float-card {
          animation: floatCard 5s ease-in-out infinite;
        }

        .progress-grow {
          animation: progressGrow 1.3s 0.4s ease-out both;
        }

        .soft-pulse {
          animation: softPulse 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-one,
          .fade-two,
          .fade-three,
          .fade-four,
          .float-card,
          .progress-grow,
          .soft-pulse {
            animation: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          HEADER
      ====================================================== */}

      {/* ======================================================
    HEADER
====================================================== */}

      <header className="relative z-50 bg-[#071D3D] shadow-sm">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
          {/* Aptara Logo */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center"
            aria-label="Aptara home"
          >
            <img
              src="/aptaraLogo.png"
              alt="Aptara"
              className="h-6 w-auto object-contain sm:h-7"
            />
          </button>

          <div className="flex items-center gap-6">
            <span className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-blue-100/80 sm:block">
              L&D Assessment
            </span>

            <button
              onClick={handleGetStarted}
              className="group flex items-center gap-2 border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-[#071D3D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg"
            >
              Get Started
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-150px] top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-50 blur-3xl" />

            <div className="absolute bottom-[-100px] left-[-180px] h-[400px] w-[400px] rounded-full bg-slate-100/80 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(#08295B 1px, transparent 1px), linear-gradient(90deg, #08295B 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
            {/* LEFT */}
            <div className="max-w-3xl">
              <p className="fade-one mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#205A9E]">
                Learning & Development Assessment
              </p>

              <h1 className="fade-two max-w-3xl text-[2.9rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#071D3D] sm:text-6xl lg:text-[4.35rem]">
                Understand where your
                <span className="block text-[#205A9E]">
                  L&D function stands.
                </span>
              </h1>

              <p className="fade-three mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Get a clearer view of your current learning environment,
                identify the challenges that matter most, and discover where
                your L&D function can create greater impact.
              </p>

              <div className="fade-four mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleGetStarted}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#08295B] px-8 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(8,41,91,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d376f] hover:shadow-[0_18px_45px_rgba(8,41,91,0.25)]"
                >
                  Get Started
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={scrollToHowItWorks}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 border border-slate-300 bg-white px-8 text-sm font-semibold text-[#08295B] transition-all duration-300 hover:border-[#08295B] hover:bg-slate-50"
                >
                  How It Works
                </button>
              </div>

              <div className="fade-four mt-8 flex items-center gap-4 text-sm text-slate-500">
                <span>5 questions</span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span>About 2 minutes</span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span>Personalized result</span>
              </div>
            </div>

            {/* ==================================================
                RIGHT SURVEY PREVIEW
            ================================================== */}

            <div className="fade-three relative mx-auto w-full max-w-[620px] lg:mx-0">
              {/* Soft background glow */}
              <div className="soft-pulse pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 rounded-full bg-blue-100/60 blur-3xl sm:block" />

              <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_15px_40px_rgba(7,29,61,0.10)] sm:rounded-2xl sm:shadow-[0_25px_70px_rgba(7,29,61,0.12)]">
                <img
                  src="/aptaraLanding.png"
                  alt="Aptara Learning and Development"
                  className="
        block
        h-auto
        w-full
        object-contain
        lg:h-[600px]
      "
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            VALUE STRIP
        ====================================================== */}

        <section className="border-y border-slate-200 bg-[#F7F9FC]">
          <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-7 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            <div className="py-7 md:px-7 md:first:pl-0">
              <p className="text-sm font-semibold text-[#08295B]">
                Focused assessment
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Five questions designed to surface meaningful L&D priorities.
              </p>
            </div>

            <div className="py-7 md:px-7">
              <p className="text-sm font-semibold text-[#08295B]">
                Quick to complete
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Complete the assessment in approximately two minutes.
              </p>
            </div>

            <div className="py-7 md:px-7">
              <p className="text-sm font-semibold text-[#08295B]">
                Clear outcome
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Receive a personalized snapshot based on your responses.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================
            WHAT YOU'LL DISCOVER
        ====================================================== */}

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#205A9E]">
                  What you'll discover
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071D3D] sm:text-5xl">
                  See your L&D function more clearly.
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                  The assessment looks beyond individual questions to give you a
                  clearer picture of where your learning function is today and
                  where attention may be needed next.
                </p>
              </div>

              <div className="border-t border-slate-200">
                {discoveryItems.map((item) => (
                  <div
                    key={item.number}
                    className="group grid gap-4 border-b border-slate-200 py-7 transition-all duration-300 sm:grid-cols-[60px_190px_1fr] sm:items-start"
                  >
                    <span className="text-xs font-semibold text-[#205A9E]">
                      {item.number}
                    </span>

                    <h3 className="text-lg font-semibold text-[#071D3D] transition-colors duration-300 group-hover:text-[#205A9E]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            HOW IT WORKS
        ====================================================== */}

        <section
          id="how-it-works"
          className="relative overflow-hidden bg-[#071D3D] py-24 text-white sm:py-28"
        >
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-[#205A9E]/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                How it works
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Simple questions.
                <br />
                Useful direction.
              </h2>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-7"
                >
                  <span className="text-sm font-semibold text-blue-300">
                    {step.number}
                  </span>

                  <h3 className="mt-7 text-2xl font-semibold">{step.title}</h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            RESULT PREVIEW
        ====================================================== */}

        <section className="bg-[#F7F9FC] py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-7 lg:grid-cols-2 lg:px-8">
            {/* Result Card */}
            <div className="relative">
              <div className="border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(7,29,61,0.08)] sm:p-9">
                <div className="border-b border-slate-200 pb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#205A9E]">
                    Your L&D Snapshot
                  </p>

                  <div className="mt-7 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">
                        Current L&D maturity
                      </p>

                      <h3 className="mt-2 text-4xl font-semibold tracking-tight text-[#071D3D]">
                        Scaling
                      </h3>
                    </div>

                    <span className="text-5xl font-light text-slate-200">
                      03
                    </span>
                  </div>
                </div>

                <div className="grid gap-6 py-7 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">
                      Primary Priority
                    </p>

                    <p className="mt-2 text-lg font-semibold text-[#071D3D]">
                      Capacity
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">
                      Future Focus
                    </p>

                    <p className="mt-2 text-lg font-semibold text-[#071D3D]">
                      Sustainable Growth
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-7">
                  <p className="text-sm leading-7 text-slate-600">
                    Your L&D function has established foundations and is
                    positioned for growth, but capacity and scalability may
                    require greater attention.
                  </p>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    "Established learning foundations",
                    "Opportunity to improve scalability",
                    "Capacity is an important next priority",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center bg-[#EAF2FA] text-[#205A9E]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Text */}
            <div className="lg:pl-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#205A9E]">
                Your result
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071D3D] sm:text-5xl">
                Turn your responses into a clearer view of what comes next.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                At the end of the assessment, you'll receive a personalized
                snapshot that highlights your current position, key priority,
                and potential area of focus.
              </p>

              <button
                onClick={handleGetStarted}
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#08295B] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d376f]"
              >
                Start Assessment
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-white px-5 py-20 sm:px-7 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl border border-slate-200 bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(7,29,61,0.06)] sm:px-12 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#205A9E]">
              L&D Assessment
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#071D3D] sm:text-5xl">
              Ready to understand your L&D function?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
              Complete five focused questions and discover what your current
              learning environment may need next.
            </p>

            <button
              onClick={handleGetStarted}
              className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#08295B] px-9 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(8,41,91,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d376f]"
            >
              Get Started
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-5 text-xs text-slate-400">
              5 questions · Approximately 2 minutes · Personalized assessment
            </p>
          </div>
        </section>
      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#071D3D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-6 w-auto object-contain sm:h-7"
          />

          <p className="text-xs text-blue-100/70">
            © {new Date().getFullYear()} Aptara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
