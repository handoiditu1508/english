import React from "react";
import { Route } from "react-router-dom";

const MainModule = React.lazy(() => import("@/modules/Main"));
const HomePage = React.lazy(() => import("@/modules/Main/pages/HomePage"));
const ResultClausePage = React.lazy(() => import("@/modules/Main/pages/ResultClausePage"));
const SimplePastPage = React.lazy(() => import("@/modules/Main/pages/SimplePastPage"));
const PastContinuousPage = React.lazy(() => import("@/modules/Main/pages/PastContinuousPage"));
const PresentPerfectPage = React.lazy(() => import("@/modules/Main/pages/PresentPerfect"));

const MainRoute = (
  <Route element={<MainModule />}>
    <Route index element={<HomePage />} />
    <Route path="simple-past" element={<SimplePastPage />} />
    <Route path="result-clause" element={<ResultClausePage />} />
    <Route path="past-continuous" element={<PastContinuousPage />} />
    <Route path="present-perfect" element={<PresentPerfectPage />} />
  </Route>
);

export default MainRoute;
