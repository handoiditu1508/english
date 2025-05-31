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
const RelativeClausesPage = React.lazy(() => import("@/modules/Main/pages/RelativeClausesPage"));
const ModalVerbsPage = React.lazy(() => import("@/modules/Main/pages/ModalVerbsPage"));
const AdvClausesOfTimePage = React.lazy(() => import("@/modules/Main/pages/AdvClausesOfTimePage"));
const SubjunctiveMoodPage = React.lazy(() => import("@/modules/Main/pages/SubjunctiveMoodPage"));
const MakingQuestionsPage = React.lazy(() => import("@/modules/Main/pages/MakingQuestionsPage"));
const VerbFormsPage = React.lazy(() => import("@/modules/Main/pages/VerbFormsPage"));
const TheAdjPage = React.lazy(() => import("@/modules/Main/pages/TheAdjPage"));
const UsedToPage = React.lazy(() => import("@/modules/Main/pages/UsedToPage"));
const WhichConnectorPage = React.lazy(() => import("@/modules/Main/pages/WhichConnectorPage"));
const TransformationPage = React.lazy(() => import("@/modules/Main/pages/TransformationPage"));
const BecauseAlthoughPage = React.lazy(() => import("@/modules/Main/pages/BecauseAlthoughPage"));
const PurposePage = React.lazy(() => import("@/modules/Main/pages/PurposePage"));
const ArticlesPage = React.lazy(() => import("@/modules/Main/pages/ArticlesPage"));
const ItNotUntilPage = React.lazy(() => import("@/modules/Main/pages/ItNotUntilPage"));
const ComparisonPage = React.lazy(() => import("@/modules/Main/pages/ComparisonPage"));
const PronunciationPage = React.lazy(() => import("@/modules/Main/pages/PronunciationPage"));
const AgreementResponsesPage = React.lazy(() => import("@/modules/Main/pages/AgreementResponsesPage"));

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
    <Route path="relative-clauses" element={<RelativeClausesPage />} />
    <Route path="modal-verbs" element={<ModalVerbsPage />} />
    <Route path="adv-clauses-of-time" element={<AdvClausesOfTimePage />} />
    <Route path="subjunctive-mood" element={<SubjunctiveMoodPage />} />
    <Route path="making-questions" element={<MakingQuestionsPage />} />
    <Route path="verb-forms" element={<VerbFormsPage />} />
    <Route path="the-adj" element={<TheAdjPage />} />
    <Route path="used-to" element={<UsedToPage />} />
    <Route path="which-connector" element={<WhichConnectorPage />} />
    <Route path="transformation" element={<TransformationPage />} />
    <Route path="because-although" element={<BecauseAlthoughPage />} />
    <Route path="purpose" element={<PurposePage />} />
    <Route path="articles" element={<ArticlesPage />} />
    <Route path="it-not-until" element={<ItNotUntilPage />} />
    <Route path="comparison" element={<ComparisonPage />} />
    <Route path="pronunciation" element={<PronunciationPage />} />
    <Route path="agreement-responses" element={<AgreementResponsesPage />} />
  </Route>
);

export default MainRoute;
