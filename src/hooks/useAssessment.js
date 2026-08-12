import { useCallback, useEffect, useState } from "react";

import {
  fetchAssessmentQuestions,
  getApiErrorDetails,
  submitAssessment,
} from "../services/assessmentService";

const pendingSummaryMessage =
  "Your assessment was validated, but its summary is still being prepared. Please try again later.";

export const useAssessmentQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadInitialQuestions = async () => {
      try {
        const data = await fetchAssessmentQuestions();
        if (!isMounted) return;

        setQuestions(data.questions || []);
        setError("");
      } catch (requestError) {
        if (!isMounted) return;

        const { detail } = getApiErrorDetails(requestError);
        setError(detail || "Unable to load assessment questions.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadInitialQuestions();

    return () => {
      isMounted = false;
    };
  }, []);

  const loadQuestions = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await fetchAssessmentQuestions();
      setQuestions(data.questions || []);
      setError("");
    } catch (requestError) {
      const { detail } = getApiErrorDetails(requestError);
      setError(detail || "Unable to load assessment questions.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    questions,
    isLoading,
    error,
    reloadQuestions: loadQuestions,
  };
};

export const useAssessmentSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submitAnswers = useCallback(async ({ questions, answers }) => {
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        answers: questions.map((question) => ({
          question: question.code,
          answer: answers[question.code],
        })),
      };

      return await submitAssessment(payload);
    } catch (requestError) {
      const { status, detail } = getApiErrorDetails(requestError);
      const message = status === 503 ? pendingSummaryMessage : detail;
      setError(message);

      const submissionError = new Error(message);
      submissionError.status = status;
      submissionError.detail = detail;
      throw submissionError;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return {
    isSubmitting,
    error,
    submitAnswers,
  };
};

export const assessmentMessages = {
  pendingSummaryMessage,
};
