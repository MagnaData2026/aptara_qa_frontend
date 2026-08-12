import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const STORAGE_KEY = "aptara-assessment-result";

const answerCardPalette = [
  { bg: "#EAF6F8", accent: "#12859B" },
  { bg: "#FFF6E7", accent: "#D98B16" },
  { bg: "#FFF0F3", accent: "#C83252" },
  { bg: "#EDF8F4", accent: "#168666" },
  { bg: "#EEF3FA", accent: "#205A9E" },
];

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

const getStoredState = () => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state || getStoredState() || {};
  const { result, questions = [], answers = {} } = routeState;

  const selectedAnswers = useMemo(
    () =>
      questions.map((question, index) => {
        const answer = question.answers.find(
          (option) => option.code === answers[question.code],
        );
        const palette = answerCardPalette[index % answerCardPalette.length];

        return {
          code: question.code,
          label: question.name,
          value: answer?.text || "No answer selected",
          ...palette,
        };
      }),
    [answers, questions],
  );

  const handleRetake = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#071D3D]">
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

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,61,0.10)]">
          <section className="bg-[#071D3D] px-6 py-7 text-white sm:px-8 lg:px-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              Assessment complete
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
              {result?.reportTitle || "Thank you for completing the assessment"}
            </h1>
          </section>

          {!!selectedAnswers.length && (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-6 sm:px-7 lg:px-8">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {selectedAnswers.map((item) => (
                  <div
                    key={item.code}
                    className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-[4px]"
                      style={{ backgroundColor: item.accent }}
                    />

                    <div
                      className="absolute right-3 top-3 h-7 w-7 rounded-full opacity-70"
                      style={{ backgroundColor: item.bg }}
                    />

                    <div className="relative">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.13em]"
                        style={{ color: item.accent }}
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
          )}

          <section className="px-5 py-9 sm:px-8 sm:py-10 lg:px-10">
            <div className="mx-auto max-w-6xl">
              {result?.summary && (
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] px-6 py-6 shadow-[0_5px_18px_rgba(7,29,61,0.04)] sm:px-8 sm:py-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#205A9E]">
                    Assessment Summary
                  </p>

                  <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600 sm:text-base">
                    {result.summary}
                  </p>
                </div>
              )}

              {(result?.recommendation || result?.nextStep) && (
                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  {result?.recommendation && (
                    <div className="rounded-xl border border-[#e9eff7] bg-[#dee6ef] px-6 py-6 shadow-[0_5px_18px_rgba(7,29,61,0.04)]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#205A9E]">
                        Recommendation
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {result.recommendation}
                      </p>
                    </div>
                  )}

                  {result?.nextStep && (
                    <div className="rounded-xl border border-[#C4E5DD] bg-[#EFFAF7] px-6 py-6 shadow-[0_5px_18px_rgba(7,29,61,0.04)]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#168666]">
                        Next Step
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {result.nextStep}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <p className="mt-5 text-center text-xs leading-7 text-slate-600 sm:text-base">
                Thank you for sharing your L&amp;D priorities with us. Your responses have been captured successfully.
              </p>

              <div className="mt-8 flex justify-center border-t border-slate-200 pt-7">
                <button
                  type="button"
                  onClick={handleRetake}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#205A9E] transition-colors duration-200 hover:text-[#071D3D]"
                >
                  <ArrowLeftIcon />
                  Restart Assessment
                </button>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F3F6F9] px-6 py-4 sm:px-8">
            <div className="flex flex-col gap-2 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <span>L&D Assessment</span>
              <span>Response received</span>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-4 bg-[#071D3D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-5 w-auto object-contain sm:h-6"
          />

          <p className="text-[11px] text-white/50">
            (c) {new Date().getFullYear()} Aptara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;
