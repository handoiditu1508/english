import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PurposePage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Clauses and Phrases of Purpose</Title>

      <SubTitle>{t("Structure")}</SubTitle>

      <ContentBox>
        <Box sx={{ paddingX: 2, textAlign: "initial", display: "inline-block" }}>
          <ul>
            <li>S + V + <HighlightSpan>to</HighlightSpan> + V<sub>1</sub> <sup>(<HighlightSpan>not to</HighlightSpan> doesn't exist)</sup></li>
            <li>S + V + <HighlightSpan>in order (not) to</HighlightSpan> + V<sub>1</sub></li>
            <li>S + V + <HighlightSpan>so as (not) to</HighlightSpan> + V<sub>1</sub></li>
          </ul>
        </Box>
      </ContentBox>

      <ContentBox boxMargin>
        <Box sx={{ paddingX: 2, textAlign: "initial", display: "inline-block" }}>
          <ul>
            <li>S + V + <HighlightSpan>[so that / in order that]</HighlightSpan> + S + <HighlightSpan>[will/can]</HighlightSpan> <sup>(other tenses)</sup> + (not) + V<sub>1</sub></li>
            <li>S + V + <HighlightSpan>[so that / in order that]</HighlightSpan> + S + <HighlightSpan>[would/could]</HighlightSpan> <sup>(past tenses)</sup> + (not) + V<sub>1</sub></li>
          </ul>
        </Box>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          <p>I went to China <u><HighlightSpan>to learn</HighlightSpan></u> (learn) Chinese.</p>
          <p>I went to China <u><HighlightSpan>so as to learn</HighlightSpan></u> (learn) Chinese.</p>
          <p>I went to China <u><HighlightSpan>in order to learn</HighlightSpan></u> (learn) Chinese.</p>
        </li>
        <li>
          <p>John was hurrying <u><HighlightSpan>in order not to miss</HighlightSpan></u> (not miss) the bus.</p>
          <p>John was hurrying <u><HighlightSpan>so as not to miss</HighlightSpan></u> (not miss) the bus.</p>
        </li>
        <li>
          I get up early. I want to get to school on time.
          <ul>
            <li><HighlightSpan>to</HighlightSpan>: I get up early <HighlightSpan>to</HighlightSpan> get to school on time.</li>
            <li><HighlightSpan>in order to</HighlightSpan>: I get up early <HighlightSpan>in order to</HighlightSpan> get to school on time.</li>
            <li><HighlightSpan>so as to</HighlightSpan>: I get up early <HighlightSpan>so as to</HighlightSpan> get to school on time.</li>
            <li><HighlightSpan>so that</HighlightSpan>: I get up early <HighlightSpan>so that</HighlightSpan> I will get to school on time.</li>
            <li><HighlightSpan>in order that</HighlightSpan>: I get up early <HighlightSpan>in order that</HighlightSpan> I will get to school on time.</li>
          </ul>
        </li>
        <li>
          We gave him our address. We wanted him to write to us.
          <ul>
            <li><HighlightSpan>so that</HighlightSpan>: We gave him our address <HighlightSpan>so that</HighlightSpan> he could write to us.</li>
            <li><HighlightSpan>in order that</HighlightSpan>: We gave him our address <HighlightSpan>in order that</HighlightSpan> he could write to us.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default PurposePage;
