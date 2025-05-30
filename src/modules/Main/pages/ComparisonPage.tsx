import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import Title from "../components/Title";

function ComparisonPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Comparison</Title>

      <SubTitle>Short adjs</SubTitle>
      <ul>
        <li>tall, short, small, big, ... (monosyllable).</li>
        <li>happy, clever, noble, narrow, quiet, ... (disyllable, end with: y, er, e, ow, et).</li>
      </ul>

      <SubTitle>Long adjs</SubTitle>
      <p>beautiful, wonderful, comfortable, careful, expensive, intelligent, ...</p>

      <SubTitle>1. Comparison of equality</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>S<sub>1</sub> + V + ... + as + [adj/adv] + as [S<sub>2</sub>/O] + auxiliary</ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ul>
        <li>John is as tall as Mary.</li>
        <li>Hy sings as well as Lan does.</li>
      </ul>

      <SubTitle>2. Comparative</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S<sub>1</sub> + V + <HighlightSpan>[short adj] + er</HighlightSpan> + than + [S<sub>2</sub>/O] + auxiliary</p>
        <p>S<sub>1</sub> + V + <HighlightSpan>more + [long adj]</HighlightSpan> + than + [S<sub>2</sub>/O] + auxiliary</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ul>
        <li>John is taller than Mary.</li>
        <li>Hy sings better than Lan does.</li>
        <li>Tom is more careful than his brother.</li>
      </ul>

      <SubTitle>3. Superlative</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S + V + <HighlightSpan>the + [short adj] + est</HighlightSpan> + (location)</p>
        <p>S + V + <HighlightSpan>the most + [long adj]</HighlightSpan> + (location)</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ul>
        <li>John is the tallest boy in my class.</li>
        <li>Mary is the most intelligent student in my class.</li>
      </ul>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>Note</AlertTitle>
        <ul>
          <li>good/well - better - best</li>
          <li>bad/badly - worse - worst</li>
          <li>many/much - more - most</li>
          <li>little - less - least</li>
          <li>far - farther - farthest (distance)</li>
          <li>far - further - furthest (more)</li>
        </ul>
      </Alert>

      <SubTitle>{"Comparative <=> unequal comparison"}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S<sub>1</sub> + V<sub>(affirmative)</sub> + <HighlightSpan>[short adj] + er</HighlightSpan> + than + [S<sub>2</sub>/O] + auxiliary</p>
        <p>S<sub>1</sub> + V<sub>(affirmative)</sub> + <HighlightSpan>more + [long adj]</HighlightSpan> + than + [S<sub>2</sub>/O] + auxiliary</p>
        <Divider sx={{ marginY: 2 }} />
        <p>S<sub>2</sub> + V<sub>not</sub> + as + adj + as + S<sub>1</sub> + auxiliary</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          Mary is more beautiful than Jane.
          <ul>
            <li>Jane isn't as beautiful as Mary.</li>
          </ul>
        </li>
        <li>
          Jane doesn't speak French as well as Jack.
          <ul>
            <li>Jack speaks French better than Jane.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{"Superlative <=> equal comparison"}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S + V + <HighlightSpan>the + [short adj] + est</HighlightSpan> + (location)</p>
        <p>S + V + <HighlightSpan>the most + [long adj]</HighlightSpan> + (location)</p>
        <Divider sx={{ marginY: 2 }} />
        <p><HighlightSpan>No other + N<sub>singular</sub></HighlightSpan> + (location) + V<sub>bare</sub> + as + ... + as + S</p>
        <p><HighlightSpan>Nobody</HighlightSpan> + (location) + V<sub>bare</sub> + as + ... + as + S</p>
        <p><HighlightSpan>No one</HighlightSpan> + (location) + V<sub>bare</sub> + as + ... + as + S</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          He is the oldest man in my village.
          <ul>
            <li>No other man in my village is as old as him.</li>
          </ul>
        </li>
        <li>
          Nobody in my class is as intelligent as John.
          <ul>
            <li>John is the most intelligent in my class.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default ComparisonPage;
