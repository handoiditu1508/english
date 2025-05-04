import React from "react";
import { Route } from "react-router-dom";

const MainModule = React.lazy(() => import("@/modules/Main"));
const HomePage = React.lazy(() => import("@/modules/Main/pages/HomePage"));
const ResultClausePage = React.lazy(() => import("@/modules/Main/pages/ResultClausePage"));
const SimplePastPage = React.lazy(() => import("@/modules/Main/pages/SimplePastPage"));
const PastContinuousPage = React.lazy(() => import("@/modules/Main/pages/PastContinuousPage"));
const PresentPerfectPage = React.lazy(() => import("@/modules/Main/pages/PresentPerfectPage"));
const SimplePresentPage = React.lazy(() => import("@/modules/Main/pages/SimplePresentPage"));
const PresentContinuousPage = React.lazy(() => import("@/modules/Main/pages/PresentContinuousPage"));
const PastPerfectPage = React.lazy(() => import("@/modules/Main/pages/PastPerfectPage"));
const SimpleFuturePage = React.lazy(() => import("@/modules/Main/pages/SimpleFuturePage"));
const FutureContinuousPage = React.lazy(() => import("@/modules/Main/pages/FutureContinuousPage"));
const FuturePerfectPage = React.lazy(() => import("@/modules/Main/pages/FuturePerfectPage"));
const PresentPerfectContinuousPage = React.lazy(() => import("@/modules/Main/pages/PresentPerfectContinuosPage"));
const PassiveVoicePage = React.lazy(() => import("@/modules/Main/pages/PassiveVoicePage"));
const ReportedSpeechPage = React.lazy(() => import("@/modules/Main/pages/ReportedSpeechPage"));
const ConditionalSentencesPage = React.lazy(() => import("@/modules/Main/pages/ConditionalSentencesPage"));

const MainRoute = (
  <Route element={<MainModule />}>
    <Route index element={<HomePage />} />
    <Route path="simple-past" element={<SimplePastPage />} />
    <Route path="result-clause" element={<ResultClausePage />} />
    <Route path="past-continuous" element={<PastContinuousPage />} />
    <Route path="present-perfect" element={<PresentPerfectPage />} />
    <Route path="simple-present" element={<SimplePresentPage />} />
    <Route path="present-continuous" element={<PresentContinuousPage />} />
    <Route path="past-perfect" element={<PastPerfectPage />} />
    <Route path="simple-future" element={<SimpleFuturePage />} />
    <Route path="future-continuous" element={<FutureContinuousPage />} />
    <Route path="future-perfect" element={<FuturePerfectPage />} />
    <Route path="present-perfect-continuous" element={<PresentPerfectContinuousPage />} />
    <Route path="passive-voice" element={<PassiveVoicePage />} />
    <Route path="reported-speech" element={<ReportedSpeechPage />} />
    <Route path="conditional-sentences" element={<ConditionalSentencesPage />} />
  </Route>
);

export default MainRoute;
