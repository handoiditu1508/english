import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import SubTitle3 from "../components/SubTitle3";
import Title from "../components/Title";

function MakingQuestionsPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Making Questions</Title>

      <SubTitle>Yes/No questions</SubTitle>

      <SubTitle2>Auxiliary verbs:</SubTitle2>
      <ul>
        <li><HighlightSpan>To be</HighlightSpan>: am, is, are, was, were</li>
        <li><HighlightSpan>Modal verbs</HighlightSpan>: can, could, shall, should, will, would, may, must, might</li>
        <li><HighlightSpan>Simple Present</HighlightSpan>: do, does</li>
        <li><HighlightSpan>Simple Past</HighlightSpan>: did</li>
        <li><HighlightSpan>Perfect tenses</HighlightSpan>: have, has, had</li>
      </ul>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        Aux + S + V + ... ?
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          Mary is a good student.
          <ul>
            <li>Is Mary a good student?</li>
          </ul>
        </li>
        <li>
          They can swim well.
          <ul>
            <li>Can they swim well?</li>
          </ul>
        </li>
        <li>
          She comes early.
          <ul>
            <li>Does she come early?</li>
          </ul>
        </li>
        <li>
          They went home late.
          <ul>
            <li>Did they go home late?</li>
          </ul>
        </li>
        <li>
          He's visited Paris.
          <ul>
            <li>Has he visited Paris?</li>
          </ul>
        </li>
        <li>
          They've eaten dinner.
          <ul>
            <li>Have they eaten dinner?</li>
          </ul>
        </li>
      </ol>

      <SubTitle>WH_ questions</SubTitle>

      <SubTitle2>Question words</SubTitle2>
      <ul>
        <li><HighlightSpan>Who + S/Whom + O</HighlightSpan> (ai)</li>
        <li><HighlightSpan>What/Which</HighlightSpan> (cái gì, cái nào)</li>
        <li><HighlightSpan>Why</HighlightSpan> (tại sao)</li>
        <li><HighlightSpan>When</HighlightSpan> (khi nào)</li>
        <li><HighlightSpan>What year ... (in)</HighlightSpan> (năm nào)</li>
        <li><HighlightSpan>Where</HighlightSpan> (ở đâu)</li>
        <li><HighlightSpan>Whose + N</HighlightSpan> (của ai)</li>
        <li><HighlightSpan>What ... for</HighlightSpan> (để làm gì)</li>
        <li><HighlightSpan>How</HighlightSpan> (thế nào)</li>
        <li><HighlightSpan>How many/much</HighlightSpan> (bao nhiêu, đếm được/không đếm được)</li>
        <li><HighlightSpan>How far</HighlightSpan> (bao xa)</li>
        <li><HighlightSpan>How long</HighlightSpan> (bao lâu)</li>
        <li><HighlightSpan>How old</HighlightSpan> (bao nhiêu tuổi)</li>
        <li><HighlightSpan>How often</HighlightSpan> (bao lâu 1 lần)</li>
      </ul>

      <SubTitle2>For subject</SubTitle2>

      <SubTitle3>{t("Structure")}</SubTitle3>
      <ContentBox>
        Question word + V<sub>1/2/3/ed/s/es</sub> + ... ?
      </ContentBox>

      <SubTitle3>{t("Examples")}</SubTitle3>
      <ol>
        <li>
          Mary cleans the house.
          <ul>
            <li>Who cleans the house?</li>
          </ul>
        </li>
        <li>
          Tom went home late.
          <ul>
            <li>Who went home late?</li>
          </ul>
        </li>
        <li>
          My mother goes to the market by bus.
          <ul>
            <li>Who goes to the market by bus?</li>
          </ul>
        </li>
      </ol>

      <SubTitle2>For predicate</SubTitle2>

      <SubTitle3>{t("Structure")}</SubTitle3>
      <ContentBox>
        Question word + Aux + S + V<sub>1/2/3/ed/s/es</sub> + ... ?
      </ContentBox>

      <SubTitle3>{t("Examples")}</SubTitle3>
      <ol>
        <li>
          Mary cleans the house.
          <ul>
            <li>What does Mary clean?</li>
          </ul>
        </li>
        <li>
          My mother <HighlightSpan>usually [1]</HighlightSpan> goes to work <HighlightSpan>by bus [2]</HighlightSpan>.
          <ul>
            <li><HighlightSpan>[1]</HighlightSpan> How often does your mother go to work by bus?</li>
            <li><HighlightSpan>[2]</HighlightSpan> How does your mother usually go to work?</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default MakingQuestionsPage;
