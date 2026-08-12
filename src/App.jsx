import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
// import AssessmentPage from "./pages/AssessmentPage";
// import AnalyzingPage from "./pages/AnalyzingPage";
// import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Assessment Questions */}
        {/* <Route path="/assessment" element={<AssessmentPage />} /> */}

        {/* AI Analysis Loading Page */}
        {/* <Route path="/analyzing" element={<AnalyzingPage />} /> */}

        {/* Personalized Result */}
        {/* <Route path="/result" element={<ResultPage />} /> */}

        {/* Invalid URL fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;