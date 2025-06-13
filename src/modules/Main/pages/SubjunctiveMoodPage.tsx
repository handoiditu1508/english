import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function SubjunctiveMoodPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("SubjunctiveMoodPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Subjunctive Mood")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <p>{tPage("This is a special sentence structure used to express")}:</p>
      <ul>
        <li>{tPage("Necessity")}</li>
        <li>{tPage("Urgency")}</li>
        <li>{tPage("Importance")}</li>
        <li>{tPage("Suggestions")}</li>
      </ul>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        It is + <HighlightSpan>essential / vital / important / crucial / imperative / suggested</HighlightSpan> (+ that) + S (+ should) + V<sub>bare</sub>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>It is <HighlightSpan>important</HighlightSpan> (that) she (should) be here on time.</li>
        <li>It is <HighlightSpan>crucial</HighlightSpan> (that) he (should) follow the rules.</li>
        <li>It is <HighlightSpan>suggested</HighlightSpan> (that) we (should) take a break.</li>
        <li>It is <HighlightSpan>imperative</HighlightSpan> (that) the form (should) be filled out.</li>
      </ol>
    </Box>
  );
}

export default SubjunctiveMoodPage;
