import axios from "axios";

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";
const configuredAssessmentPath =
  import.meta.env.VITE_ASSESSMENT_API_PATH?.replace(/\/$/, "") || "/api/assessment";

const apiClient = axios.create({
  baseURL: configuredBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const buildAssessmentUrl = (path) => `${configuredAssessmentPath}${path}`;

export const fetchAssessmentQuestions = async () => {
  const response = await apiClient.get(buildAssessmentUrl("/questions"));
  return response.data;
};

export const submitAssessment = async (payload) => {
  const response = await apiClient.post(
    buildAssessmentUrl("/submissions"),
    payload,
  );
  return response.data;
};

export const getApiErrorDetails = (error) => {
  const status = error?.response?.status ?? null;
  const answersError = error?.response?.data?.answers;
  const detail =
    error?.response?.data?.detail ||
    answersError?.message ||
    (Array.isArray(answersError) ? answersError[0] : null) ||
    (typeof answersError === "string" ? answersError : null) ||
    error?.message ||
    "Unable to complete assessment.";

  return {
    status,
    detail,
    errors: answersError,
  };
};
