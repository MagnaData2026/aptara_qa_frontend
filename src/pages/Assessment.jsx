import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
  TEMPORARY UI DATA ONLY

  Later:
  - Remove this array
  - Fetch these questions from backend
  - Assessment UI will remain almost unchanged
*/

const mockQuestions = [
  {
    id: "q1",
    number: 1,
    section: "L&D Maturity Snapshot",
    title: "How would you describe where your L&D function is today?",
    helper: "Select the one that best describes your current situation.",
    options: [
      {
        id: "A",
        text: "We're building our L&D function; most training is ad-hoc or informal.",
      },
      {
        id: "B",
        text: "We have some programs in place, but they're inconsistent or outdated.",
      },
      {
        id: "C",
        text: "We have established programs and an LMS, but we're stretched thin on capacity.",
      },
      {
        id: "D",
        text: "We have a mature L&D operation and want to take it to the next level.",
      },
      {
        id: "E",
        text: "We're going through a major change that's resetting our L&D priorities.",
      },
    ],
  },

  {
    id: "q2",
    number: 2,
    section: "Biggest Pain Right Now",
    title: "What is your single biggest L&D challenge right now?",
    helper: "Choose the challenge that is having the greatest impact today.",
    options: [
      {
        id: "A",
        text: "Getting new hires productive faster.",
      },
      {
        id: "B",
        text: "Keeping up with compliance and mandatory training requirements.",
      },
      {
        id: "C",
        text: "Upskilling the team fast enough as the business or technology changes.",
      },
      {
        id: "D",
        text: "Modernising old classroom or PDF content for digital or remote delivery.",
      },
      {
        id: "E",
        text: "We don't have enough internal L&D capacity to deliver what the business needs.",
      },
      {
        id: "F",
        text: "Launching or improving an LMS or learning platform.",
      },
    ],
  },

  {
    id: "q3",
    number: 3,
    section: "Current Delivery Mix & Gaps",
    title:
      "Which statement best describes your current learning delivery situation?",
    helper:
      "Choose the option that most closely reflects your current delivery model and biggest gap.",
    options: [
      {
        id: "A",
        text: "We rely heavily on classroom or instructor-led training and need more digital learning.",
      },
      {
        id: "B",
        text: "We use virtual learning, but delivery is inconsistent across teams or locations.",
      },
      {
        id: "C",
        text: "We already use eLearning and an LMS, but adoption or reporting needs improvement.",
      },
      {
        id: "D",
        text: "We have digital learning in place, but creating and updating content takes too much time.",
      },
      {
        id: "E",
        text: "Our delivery model works, but we need more capacity to keep up with demand.",
      },
    ],
  },

  {
    id: "q4",
    number: 4,
    section: "Team & Capacity Reality",
    title:
      "Which best describes your current L&D team and how you get work done?",
    helper:
      "Choose the option that most closely reflects your team and delivery capacity.",
    options: [
      {
        id: "A",
        text: "A very small internal team handles most learning work ourselves.",
      },
      {
        id: "B",
        text: "A small team handles core work internally and uses vendors for selected projects.",
      },
      {
        id: "C",
        text: "A mid-sized team uses a mix of internal delivery and external specialists.",
      },
      {
        id: "D",
        text: "A larger team works with external partners for significant parts of delivery.",
      },
      {
        id: "E",
        text: "We're actively looking for a longer-term learning partner to extend our team.",
      },
    ],
  },

  {
    id: "q5",
    number: 5,
    section: "Success in 12 Months",
    title:
      "If you look back a year from now, what would great look like for your L&D function?",
    helper: "Choose the outcome that matters most to your organisation.",
    options: [
      {
        id: "A",
        text: "Our people are trained faster and more consistently than they are today.",
      },
      {
        id: "B",
        text: "We've successfully moved more learning from classroom-based to digital delivery.",
      },
      {
        id: "C",
        text: "We have reliable external support so our internal team can focus on strategy.",
      },
      {
        id: "D",
        text: "Our learning programmes are measurably improving business performance.",
      },
      {
        id: "E",
        text: "We're meeting compliance requirements efficiently without overwhelming the team.",
      },
      {
        id: "F",
        text: "Our L&D function is recognised internally as a strategic business partner.",
      },
    ],
  },
];

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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /*
    Example:
    {
      q1: "C",
      q2: "E",
      q3: "A"
    }
  */
  const [answers, setAnswers] = useState({});

  const currentQuestion = mockQuestions[currentQuestionIndex];

  const totalQuestions = mockQuestions.length;

  const selectedAnswer = answers[currentQuestion.id];

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const isFirstQuestion = currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex === totalQuestions - 1;

  const handleSelectAnswer = (optionId) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionId,
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
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      /*
        UI-only POC:
        Later this is where we will call backend submit API.
      */

      console.log("Assessment answers:", answers);

      navigate("/analyzing", {
        state: {
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

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="bg-[#071D3D]">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
          {/* Aptara Logo */}
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
          PROGRESS AREA
      ====================================================== */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-5 sm:px-7 lg:px-8">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#205A9E]">
                Question {currentQuestion.number} of {totalQuestions}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {currentQuestion.section}
              </p>
            </div>

            <p className="text-sm font-semibold text-[#071D3D]">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Progress Bar */}
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

      {/* ======================================================
          QUESTION
      ====================================================== */}

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-7 sm:py-14 lg:px-8 lg:py-16">
        <div
          key={currentQuestion.id}
          className="question-enter"
        >
          {/* Question heading */}
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#205A9E]">
              {currentQuestion.section}
            </p>

            <h1 className="mt-4 max-w-4xl text-2xl font-semibold leading-[1.3] tracking-[-0.025em] text-[#071D3D] sm:text-3xl lg:text-[2.15rem]">
              {currentQuestion.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
              {currentQuestion.helper}
            </p>
          </div>

          {/* ==================================================
              ANSWER OPTIONS
          ================================================== */}

          <div
            className="mx-auto mt-9 max-w-4xl space-y-3"
            role="radiogroup"
            aria-label={currentQuestion.title}
          >
            {currentQuestion.options.map((option) => {
              const isSelected =
                selectedAnswer === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() =>
                    handleSelectAnswer(option.id)
                  }
                  className={`group flex w-full items-center gap-4 border px-4 py-4 text-left transition-all duration-200 sm:gap-5 sm:px-5 sm:py-5 ${
                    isSelected
                      ? "border-[#205A9E] bg-[#F1F6FB] shadow-[0_5px_20px_rgba(7,29,61,0.05)]"
                      : "border-slate-200 bg-white hover:border-[#9DB7D1] hover:bg-[#FAFCFE]"
                  }`}
                >
                  {/* Option Letter */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? "border-[#071D3D] bg-[#071D3D] text-white"
                        : "border-slate-300 bg-white text-[#071D3D] group-hover:border-[#205A9E]"
                    }`}
                  >
                    {option.id}
                  </div>

                  {/* Option Text */}
                  <div className="min-w-0 flex-1">
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

                  {/* Radio */}
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

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div className="mx-auto mt-10 flex max-w-4xl items-center justify-between border-t border-slate-200 pt-7">
            {/* Previous */}
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

            {/* Continue / Submit */}
            <button
              type="button"
              disabled={!selectedAnswer}
              onClick={handleContinue}
              className={`group inline-flex min-h-12 items-center gap-3 px-6 text-sm font-semibold transition-all duration-200 sm:px-7 ${
                selectedAnswer
                  ? "bg-[#071D3D] text-white shadow-[0_10px_25px_rgba(7,29,61,0.15)] hover:-translate-y-0.5 hover:bg-[#0B315E] hover:shadow-[0_14px_30px_rgba(7,29,61,0.20)]"
                  : "cursor-not-allowed bg-slate-200 text-slate-400"
              }`}
            >
              <span>
                {isLastQuestion
                  ? "Submit Assessment"
                  : "Continue"}
              </span>

              <ArrowRightIcon />
            </button>
          </div>

          {/* Bottom Hint */}
          <div className="mx-auto mt-5 max-w-4xl text-right">
            {!selectedAnswer ? (
              <p className="text-xs text-slate-400">
                Select one answer to continue
              </p>
            ) : (
              <p className="text-xs text-[#205A9E]">
                Answer selected
              </p>
            )}
          </div>
        </div>
      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="mt-8 border-t border-white/10 bg-[#071D3D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-7 lg:px-8">
          <img
            src="/aptaraLogo.png"
            alt="Aptara"
            className="h-5 w-auto object-contain opacity-90 sm:h-6"
          />

          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} Aptara
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Assessment;