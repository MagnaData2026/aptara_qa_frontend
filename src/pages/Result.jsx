import React from "react";
import { useNavigate } from "react-router-dom";

const defaultProfile = {
  combinationId: "A-A-A-A-A",

  reportTitle: "L&D Readiness & Diagnostic Report",

  diagnosticTitle: "Building Foundations for Scale",

  answers: [
    {
      code: "Q1",
      label: "Maturity",
      value: "Early Stage",
      bg: "#EAF6F8",
      accent: "#12859B",
    },
    {
      code: "Q2",
      label: "Pain Point",
      value: "Onboarding",
      bg: "#FFF6E7",
      accent: "#D98B16",
    },
    {
      code: "Q3",
      label: "Modality",
      value: "Instructor Led",
      bg: "#FFF0F3",
      accent: "#C83252",
    },
    {
      code: "Q4",
      label: "Capacity",
      value: "Single Person",
      bg: "#EDF8F4",
      accent: "#168666",
    },
    {
      code: "Q5",
      label: "Goal",
      value: "Speed",
      bg: "#EEF3FA",
      accent: "#205A9E",
    },
  ],

  currentSituation:
    "You're operating a one-person L&D function where onboarding depends heavily on live, in-person instruction delivered without a standardized framework.",

  keyStrengths:
    "Hands-on training creates direct human connection with new hires, and your lean structure allows decisions to happen quickly without unnecessary organizational friction.",

  currentGap:
    "When a single facilitator controls all onboarding delivery, throughput depends heavily on individual availability. Consistency and speed may suffer as demand increases.",

  businessRisk:
    "New hires entering through an informal, instructor-dependent process can take longer to contribute, while the organization absorbs the productivity gap repeatedly without a scalable alternative.",

  strategicDirection:
    "Shift onboarding from a live-delivery-only model toward a blended approach. Document and digitize the core knowledge your instructor-led training currently carries so foundational learning can run independently, freeing live time for higher-value coaching and interaction.",

  nextStep:
    "Audit your current onboarding sessions to identify which content is repeated most often. Prioritize converting those recurring segments into reusable digital learning assets as your first scalable building block.",
};

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </svg>
);

const Result = ({ profile = defaultProfile }) => {
  const navigate = useNavigate();

  const handleRetake = () => {
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#071D3D]">
      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="bg-[#071D3D]">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-6 w-auto object-contain sm:h-7"
          />

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
            L&D Assessment
          </span>
        </div>
      </header>

      {/* ======================================================
          REPORT WRAPPER
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,61,0.10)]">
          {/* ==================================================
              REPORT HEADER
          ================================================== */}

          <section className="bg-[#071D3D] px-6 py-7 text-white sm:px-8 lg:px-10">
            {" "}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Personalized Assessment
                </p>

                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                  {profile.reportTitle}
                </h1>
              </div>

              <div className="w-fit rounded-lg border border-white/20 bg-white/[0.06] px-5 py-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55">
                  Combination ID
                </p>

                <p className="mt-1 text-sm font-bold tracking-[0.12em] text-white">
                  {profile.combinationId}
                </p>
              </div>
            </div>
          </section>

          {/* ==================================================
              5 ANSWER SUMMARY
          ================================================== */}

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-6 sm:px-7 lg:px-8">
            {" "}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {profile.answers.map((item) => (
                <div
                  key={item.code}
                  className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[4px]"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <div
                    className="absolute right-3 top-3 h-7 w-7 rounded-full opacity-70"
                    style={{
                      backgroundColor: item.bg,
                    }}
                  />

                  <div className="relative">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.13em]"
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.code} {item.label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#071D3D]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================================================
              DIAGNOSTIC BODY
          ================================================== */}

          <section className="relative px-5 py-9 sm:px-8 sm:py-10 lg:px-10">
            {/* left accent */}
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" />

            <div className="pl-2 sm:pl-4">
              {/* Heading */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#205A9E]">
                  Diagnostic Assessment
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#071D3D] sm:text-3xl">
                  {profile.diagnosticTitle}
                </h2>

                <div className="mt-5 h-px w-full bg-slate-200" />
              </div>

              {/* ==============================================
                  DIAGNOSTIC CARDS
              ============================================== */}

              <div className="mt-7 grid gap-5 lg:grid-cols-2">
                {/* Current Situation */}
                <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_5px_18px_rgba(7,29,61,0.04)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#205A9E]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#071D3D]">
                      Current Situation
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {profile.currentSituation}
                  </p>
                </div>

                {/* Strengths */}
                <div className="rounded-lg border border-slate-200 bg-[#F4FBF8] p-5 shadow-[0_5px_18px_rgba(7,29,61,0.04)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#178B72]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#071D3D]">
                      Key Strengths
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {profile.keyStrengths}
                  </p>
                </div>

                {/* Current Gap */}
                <div className="rounded-lg border border-slate-200 bg-[#FFF9EF] p-5 shadow-[0_5px_18px_rgba(7,29,61,0.04)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#E49A16]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#071D3D]">
                      Current Gap
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {profile.currentGap}
                  </p>
                </div>

                {/* Risk */}
                <div className="rounded-lg border border-slate-200 bg-[#FFF6F7] p-5 shadow-[0_5px_18px_rgba(7,29,61,0.04)] sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#D63A55]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#071D3D]">
                      Business Risk
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {profile.businessRisk}
                  </p>
                </div>
              </div>

              {/* ==============================================
                  STRATEGIC DIRECTION
              ============================================== */}

              <div className="mt-5 overflow-hidden rounded-lg bg-[#0B315E] shadow-[0_10px_25px_rgba(7,29,61,0.14)]">
                <div className="px-5 py-5 sm:px-7 sm:py-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">
                    Recommended Strategic Direction
                  </p>

                  <p className="mt-3 max-w-6xl text-sm leading-7 text-white/90">
                    {profile.strategicDirection}
                  </p>
                </div>
              </div>

              {/* ==============================================
                  NEXT STEP
              ============================================== */}

              <div className="mt-5 rounded-lg border border-[#C4E5DD] bg-[#EFFAF7] px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="w-fit shrink-0 rounded bg-[#168666] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    Action
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#071D3D]">
                      30-Day Next Step
                    </h3>

                    <p className="mt-1.5 max-w-5xl text-sm leading-7 text-slate-600">
                      {profile.nextStep}
                    </p>
                  </div>
                </div>
              </div>

              {/* ==============================================
                  RETAKE
              ============================================== */}

              <div className="mt-8 flex justify-center border-t border-slate-200 pt-7">
                <button
                  type="button"
                  onClick={handleRetake}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#205A9E] transition-colors duration-200 hover:text-[#071D3D]"
                >
                  <ArrowLeftIcon />
                  Retake Assessment
                </button>
              </div>
            </div>
          </section>

          {/* ==================================================
              REPORT FOOTER
          ================================================== */}

          <section className="border-t border-slate-200 bg-[#F3F6F9] px-6 py-4 sm:px-8">
            <div className="flex flex-col gap-2 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <span>L&D Assessment</span>

              <span>Personalized Diagnostic Report</span>
            </div>
          </section>
        </div>
      </main>

      {/* ======================================================
          PAGE FOOTER
      ====================================================== */}

      <footer className="mt-4 bg-[#071D3D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-5 w-auto object-contain sm:h-6"
          />

          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} Aptara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;
