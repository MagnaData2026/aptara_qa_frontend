import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAssessmentSubmission } from "../hooks/useAssessment";

const analysisSteps = [
  "Understanding your L&D maturity",
  "Identifying your biggest challenge",
  "Assessing your current capacity",
  "Mapping your future priorities",
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const Analyzing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitAnswers } = useAssessmentSubmission();

  const questions = useMemo(() => location.state?.questions || [], [location.state]);
  const answers = useMemo(() => location.state?.answers || {}, [location.state]);

  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    if (!questions.length) {
      navigate("/assessment", { replace: true });
      return undefined;
    }

    const stepTimers = analysisSteps.map((_, index) =>
      setTimeout(() => {
        setCompletedSteps(index + 1);
      }, 450 + index * 450),
    );

    const submitTimer = setTimeout(async () => {
      try {
        const result = await submitAnswers({ questions, answers });
        const payload = { result, questions, answers };
        sessionStorage.setItem("aptara-assessment-result", JSON.stringify(payload));

        navigate("/result", {
          replace: true,
          state: payload,
        });
      } catch (submissionError) {
        const payload = {
          errorMessage: submissionError.message,
          questions,
          answers,
        };
        sessionStorage.setItem("aptara-assessment-result", JSON.stringify(payload));

        navigate("/result", {
          replace: true,
          state: payload,
        });
      }
    }, 2500);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(submitTimer);
    };
  }, [answers, navigate, questions, submitAnswers]);

  const progress = (completedSteps / analysisSteps.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FC] text-[#071D3D]">
      <style>{`
        @keyframes analyzingSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes analyzingPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.75;
          }
        }

        @keyframes analyzingFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .analyzing-spinner {
          animation: analyzingSpin 1.5s linear infinite;
        }

        .analyzing-pulse {
          animation: analyzingPulse 2.5s ease-in-out infinite;
        }

        .analyzing-fade {
          animation: analyzingFadeUp 0.45s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .analyzing-spinner,
          .analyzing-pulse,
          .analyzing-fade {
            animation: none !important;
          }
        }
      `}</style>

      <header className="bg-[#071D3D]">
        <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
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

      <main className="flex flex-1 items-center justify-center px-5 py-14 sm:px-7">
        <div className="w-full max-w-3xl">
          <div className="relative overflow-hidden border border-slate-200 bg-white px-6 py-12 shadow-[0_25px_70px_rgba(7,29,61,0.08)] sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-24 w-24 items-center justify-center">
                <div className="analyzing-pulse absolute h-24 w-24 rounded-full bg-[#EAF2FA]" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#C9D9E8] bg-white">
                  <div className="analyzing-spinner h-12 w-12 rounded-full border-[3px] border-slate-100 border-t-[#205A9E]" />
                  <div className="absolute h-3 w-3 rounded-full bg-[#071D3D]" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#205A9E]">
                  Analyzing your responses
                </p>

                <h1 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#071D3D] sm:text-4xl">
                  Building your L&D profile
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  We&apos;re validating your responses and loading the best available summary for your selected combination.
                </p>
              </div>

              <div className="mx-auto mt-9 max-w-xl">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Preparing your insights
                  </span>

                  <span className="text-xs font-semibold text-[#071D3D]">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-[4px] overflow-hidden bg-slate-100">
                  <div
                    className="h-full bg-[#205A9E] transition-all duration-500 ease-out"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mx-auto mt-9 max-w-xl space-y-3">
                {analysisSteps.map((step, index) => {
                  const completed = index < completedSteps;
                  const active = index === completedSteps;

                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-4 border px-4 py-4 transition-all duration-500 sm:px-5 ${
                        completed
                          ? "border-[#C9D9E8] bg-[#F4F8FC]"
                          : active
                            ? "border-slate-200 bg-white"
                            : "border-slate-100 bg-slate-50/50"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          completed
                            ? "bg-[#071D3D] text-white"
                            : active
                              ? "border-2 border-[#205A9E] bg-white"
                              : "border border-slate-200 bg-white"
                        }`}
                      >
                        {completed ? (
                          <CheckIcon />
                        ) : active ? (
                          <div className="h-2 w-2 rounded-full bg-[#205A9E]" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-slate-200" />
                        )}
                      </div>

                      <span
                        className={`text-sm ${
                          completed || active
                            ? "font-medium text-[#071D3D]"
                            : "font-medium text-slate-400"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 text-center text-xs text-slate-400">
                This will only take a moment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analyzing;
