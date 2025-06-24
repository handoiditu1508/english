import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function BecauseAlthoughPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("BecauseAlthoughPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Because Although Clauses")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        <p>Because / Because of - bởi vì</p>
        <p>Although / In spite of / Despite - mặc dù</p>
        <Divider />
        <p>[Because / Although] + S + V<sub>conjugated</sub> + [Adj/Adv]</p>
        <p>Although + S + V<sub>conjugated</sub> + [Adj/Adv]</p>
        <p>= [Adj/Adv] + [as / though] + S + V<sub>conjugated</sub></p>
        <Divider />
        <p>[Because of / In spite of / Despite] + V<sub>ing</sub> ({tPage("both phrases have the same subject")})</p>
        <p>[Because of / In spite of / Despite] + [the / his / her] + Adj + N</p>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          He stayed at home <HighlightSpan>because</HighlightSpan> it rained heavily.
          <ul>
            <li>He stayed at home <HighlightSpan>because of</HighlightSpan> the heavy rain.</li>
          </ul>
        </li>
        <li>
          Mr. Pike doesn't wear glasses <HighlightSpan>although</HighlightSpan> he is old.
          <ul>
            <li>Mr. Pike doesn't wear glasses <HighlightSpan>[in spite of / despite]</HighlightSpan> his age.</li>
            <li>Mr. Pike doesn't wear glasses <HighlightSpan>[in spite of / despite]</HighlightSpan> being old.</li>
            <li>Old <HighlightSpan>[as / though]</HighlightSpan> he is, Mr. Pike doesn't wear glasses.</li>
          </ul>
        </li>
        <li>
          He stayed at home <HighlightSpan>because of</HighlightSpan> the rain.
          <ul>
            <li>He stayed at home <HighlightSpan>because</HighlightSpan> it rained.</li>
          </ul>
        </li>
        <li>
          We did the test well <HighlightSpan>despite</HighlightSpan> its difficulty.
          <ul>
            <li>We did the test well <HighlightSpan>although</HighlightSpan> it was difficult.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default BecauseAlthoughPage;
