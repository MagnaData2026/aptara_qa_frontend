import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Assessment from "./pages/Assessment";
import Analyzing from "./pages/Analyzing";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Assessment Questions */}
        <Route path="/assessment" element={<Assessment />} />

        {/* AI Analysis Loading Page */}
        <Route path="/analyzing" element={<Analyzing />} />

        {/* Personalized Result */}
        <Route path="/result" element={<Result />} />

        {/* Invalid URL fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;