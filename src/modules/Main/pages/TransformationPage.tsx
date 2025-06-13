import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import Title from "../components/Title";

function TransformationPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("TransformationPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Transformation")}</Title>

      <SubTitle>{tPage("How long")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>It [is / has been] + [period of time] + since + S (+ last) + V<sub>2/ed</sub></li>
          <li>S + [hasn't / haven't] + V<sub>3/ed</sub> + for + [period of time]</li>
          <li>S (+ last) + V<sub>2/ed</sub> + [period of time] + ago</li>
          <li>The last time + S (+ last) + V<sub>2/ed</sub> was + [period of time] + ago</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          It's 10 years since I last met Jane.
          <ul>
            <li>I haven't met Jane for 10 years.</li>
            <li>I last met Jane 10 years ago.</li>
            <li>The last time I met Jane was 10 years ago.</li>
          </ul>
        </li>
        <li>
          He hasn't played tennis for 2 months.
          <ul>
            <li>It has been 2 months since he last played tennis.</li>
            <li>He last played tennis 2 months ago.</li>
            <li>The last time he played tennis was 2 months ago.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Start doing something")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>
            S + <HighlightSpan>[began / started]</HighlightSpan> + <HighlightSpan>[to V/ V<sub>ing</sub>]</HighlightSpan>
              &nbsp;+ <HighlightSpan>[in [point in time] / [period of time] ago]</HighlightSpan> (in 2000 / 13 years ago)
          </li>
          <li>S + <HighlightSpan>[have / has]</HighlightSpan> + V<sub>3/ed</sub> + <HighlightSpan>[since [point in time] / for [period of time]]</HighlightSpan> (since 2000 / for 13 years)</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          You started learning English 4 years ago.
          <ul>
            <li>You have learnt English for 13 years.</li>
          </ul>
        </li>
        <li>
          He began to work in this company in 2010.
          <ul>
            <li>He has worked in this company since 2010.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Time spend doing something")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>S + spend<sub>conjugate tenses</sub> + [period of time] + V<sub>ing</sub></li>
          <li>It + take<sub>conjugate tenses</sub> + O + [period of time] + to V</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          He spends 5 years learning Chinese.
          <ul>
            <li>It takes him 5 years to learn Chinese.</li>
          </ul>
        </li>
        <li>
          He spent 5 years learning Chinese.
          <ul>
            <li>It took him 5 years to learn Chinese.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Suggestion")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>Let's + V<sub>bare</sub> ({tPage("both speaker and listener perform")})</li>
          <li>Why don't you + V<sub>bare</sub> ({tPage("only listener perform")})</li>
          <li>S + suggest + V<sub>ing</sub> ({tPage("both speaker and listener perform")})</li>
          <li>S + suggest (+ that) + S (+ should) + V<sub>bare</sub> ({tPage("only listener perform")})</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          Let's go out for a walk.
          <ul>
            <li>I suggest going out for a walk.</li>
          </ul>
        </li>
        <li>
          I say "why don't you learn English, Tom".
          <ul>
            <li>I suggest Tom learn English.</li>
          </ul>
        </li>
      </ol>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        Let's = Let us
      </Alert>

      <SubTitle>{tPage("Advice")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>S + should + V<sub>bare</sub></li>
          <li>S + had better + V<sub>bare</sub></li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          You should study harder.
          <ul>
            <li>You had better study harder.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Purpose")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        Why = What ... for
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          Why do you learn English?
          <ul>
            <li>What do you learn English for?</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Regret")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>S + regret<sub>conjugate tenses</sub> (+ not) + V<sub>ing</sub></li>
          <li>S + regret<sub>conjugate tenses</sub> (+ that) + S + [V<sub>2/ed</sub>/didn't]</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          He regrets not giving up smoking.
          <ul>
            <li>He regrets that he didn't give up smoking.</li>
          </ul>
        </li>
        <li>
          She regrets coming late.
          <ul>
            <li>She regrets that she came late.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Prefer")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>S + prefer(s) + [N/Ving] + to + [N/Ving]</li>
          <li>S + would rather + V<sub>bare</sub> + than + V<sub>bare</sub></li>
        </ul>
      </ContentBox>
      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        {tPage("Sometimes")} V<sub>ing</sub> {tPage("is a noun phrase")}.
      </Alert>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          We prefer talking to learning.
          <ul>
            <li>We'd rather talk than learn.</li>
          </ul>
        </li>
        <li>
          She prefers singing to dancing.
          <ul>
            <li>She'd rather sing than dance.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Used to")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>S + [often/usually] + V<sub>2/ed</sub></li>
          <li>S + used to + V<sub>bare</sub></li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          He often went to school late when he was young.
          <ul>
            <li>He used to go to school late when he was young.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Be used to")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li>It + be<sub>conjugate tenses</sub> + Adj (+ for O) + to V</li>
          <li>S + find<sub>conjugate tenses</sub> + it + Adj + to V</li>
          <li>S + be<sub>conjugate tenses</sub> (not) used to + V<sub>ing</sub></li>
          <li>S + have<sub>conjugate tenses</sub> (no) difficulty + V<sub>ing</sub></li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          I think learning English is difficult.
          <ul>
            <li>It is difficult for me to learn English.</li>
            <li>I find it difficult to learn English.</li>
            <li>I am not used to learning English.</li>
            <li>I have difficulty learning English.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default TransformationPage;
