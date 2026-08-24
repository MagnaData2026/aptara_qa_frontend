import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAssessmentQuestions } from "../hooks/useAssessment";

const ArrowRightIcon = () => (
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
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

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

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const Assessment = () => {
  const navigate = useNavigate();
  const { questions, isLoading, error, reloadQuestions } = useAssessmentQuestions();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const selectedAnswer = currentQuestion ? answers[currentQuestion.code] : undefined;
  const progress = totalQuestions
    ? ((currentQuestionIndex + 1) / totalQuestions) * 100
    : 0;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const isAssessmentComplete = useMemo(
    () =>
      totalQuestions > 0 &&
      questions.every((question) => Boolean(answers[question.code])),
    [answers, questions, totalQuestions],
  );

  const handleSelectAnswer = (answerCode) => {
    if (!currentQuestion) return;

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.code]: answerCode,
    }));
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((previous) => previous - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleContinue = () => {
    if (!currentQuestion || !selectedAnswer) return;

    if (isLastQuestion) {
      navigate("/analyzing", {
        state: {
          questions,
          answers,
        },
      });
      return;
    }

    setCurrentQuestionIndex((previous) => previous + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] px-5 text-center text-[#071D3D]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#205A9E]">
            Loading assessment
          </p>
          <h1 className="mt-3 text-2xl font-semibold">Fetching your questions</h1>
          <p className="mt-3 text-sm text-slate-500">
            Please wait while we load the latest assessment.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] px-5">
        <div className="w-full max-w-xl border border-slate-200 bg-white p-8 text-center shadow-[0_24px_70px_rgba(7,29,61,0.08)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#205A9E]">
            Assessment unavailable
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-[#071D3D]">
            We could not load the questions
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500">{error}</p>
          <button
            type="button"
            onClick={reloadQuestions}
            className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#071D3D] px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0B315E]"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] px-5">
        <div className="w-full max-w-xl border border-slate-200 bg-white p-8 text-center shadow-[0_24px_70px_rgba(7,29,61,0.08)]">
          <h1 className="text-2xl font-semibold text-[#071D3D]">
            No assessment questions available
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500">
           Please try again shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#071D3D]">
      <style>{`
        @keyframes questionFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .question-enter {
          animation: questionFade 0.35s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .question-enter {
            animation: none;
          }
        }
      `}</style>

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

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-7 lg:px-8">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#205A9E]">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </p>

              <p className="mt-1 text-xs text-slate-400">{currentQuestion.name}</p>
            </div>

            <p className="text-sm font-semibold text-[#071D3D]">
              {Math.round(progress)}%
            </p>
          </div>

          <div className="mt-4 h-[4px] overflow-hidden bg-slate-100">
            <div
              className="h-full bg-[#205A9E] transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-7 sm:py-14 lg:px-8 lg:py-16">
        <div key={currentQuestion.code} className="question-enter">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#205A9E]">
              {currentQuestion.name}
            </p>

            <h1 className="mt-4 max-w-5xl text-2xl font-semibold leading-[1.3] tracking-[-0.025em] text-[#071D3D] sm:text-3xl lg:text-[2.3rem]">
              {currentQuestion.title}
            </h1>

          </div>

          <div
            className="mx-auto mt-9 max-w-5xl space-y-3"
            role="radiogroup"
            aria-label={currentQuestion.title}
          >
            {currentQuestion.answers.map((option) => {
              const isSelected = selectedAnswer === option.code;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelectAnswer(option.code)}
                  className={`group flex w-full items-center gap-4 border px-4 py-4 text-left transition-all duration-200 sm:gap-5 sm:px-5 sm:py-5 ${
                    isSelected
                      ? "border-[#205A9E] bg-[#F1F6FB] shadow-[0_5px_20px_rgba(7,29,61,0.05)]"
                      : "border-slate-200 bg-white hover:border-[#9DB7D1] hover:bg-[#FAFCFE]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? "border-[#071D3D] bg-[#071D3D] text-white"
                        : "border-slate-300 bg-white text-[#071D3D] group-hover:border-[#205A9E]"
                    }`}
                  >
                    {option.code}
                  </div>

                  <div className="min-w-0 flex-1">
                    {option.category && (
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#205A9E]">
                        {option.category}
                      </p>
                    )}

                    <p
                      className={`text-sm leading-6 transition-colors sm:text-[15px] sm:leading-7 ${
                        isSelected
                          ? "font-semibold text-[#071D3D]"
                          : "font-medium text-slate-700"
                      }`}
                    >
                      {option.text}
                    </p>
                  </div>

                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isSelected
                        ? "border-[#205A9E] bg-[#205A9E] text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && <CheckIcon />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl items-center justify-between border-t border-slate-200 pt-7">
            <div>
              {!isFirstQuestion && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="group inline-flex min-h-12 items-center gap-2 border border-slate-300 bg-white px-5 text-sm font-semibold text-[#071D3D] transition-all duration-200 hover:border-[#071D3D] hover:bg-slate-50"
                >
                  <ArrowLeftIcon />
                  <span>Previous</span>
                </button>
              )}
            </div>

            <button
              type="button"
              disabled={isLastQuestion ? !isAssessmentComplete : !selectedAnswer}
              onClick={handleContinue}
              className={`group inline-flex min-h-12 items-center gap-3 px-6 text-sm font-semibold transition-all duration-200 sm:px-7 ${
                (isLastQuestion ? isAssessmentComplete : selectedAnswer)
                  ? "bg-[#071D3D] text-white shadow-[0_10px_25px_rgba(7,29,61,0.15)] hover:-translate-y-0.5 hover:bg-[#0B315E] hover:shadow-[0_14px_30px_rgba(7,29,61,0.20)]"
                  : "cursor-not-allowed bg-slate-200 text-slate-400"
              }`}
            >
              <span>{isLastQuestion ? "Submit Assessment" : "Continue"}</span>
              <ArrowRightIcon />
            </button>
          </div>

          <div className="mx-auto mt-5 max-w-5xl text-right">
            {!selectedAnswer ? (
              <p className="text-xs text-slate-400">Select one answer to continue</p>
            ) : (
              <p className="text-xs text-[#205A9E]">
                {isLastQuestion && isAssessmentComplete
                  ? "All questions answered"
                  : "Answer selected"}
              </p>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-white/10 bg-[#071D3D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-5 w-auto object-contain opacity-90 sm:h-6"
          />

          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} Aptara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Assessment;
