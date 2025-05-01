import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ResultClausePage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Result Clause")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        <p>S + V + <HighlightSpan>so + adj + that</HighlightSpan> + S + V</p>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
        <p>S + V + <HighlightSpan>such (a/an) + adj + N + that</HighlightSpan> + S + V</p>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ContentBox sx={{
        textAlign: "initial",
      }}>
        <ol>
          <li>
            The ice was thick. There was no danger of the skater falling through.
            <ul>
              <li>The ice was <HighlightSpan>so thick that</HighlightSpan> there was no danger of the skater falling through.</li>
              <li>It was <HighlightSpan>such thick ice that</HighlightSpan> there was no danger of the skater falling through.</li>
            </ul>
          </li>
          <li>
            She looked ill. Her parents took her to the hospital.
            <ul>
              <li>She looked <HighlightSpan>so ill that</HighlightSpan> her parents took her to the hospital.</li>
              <li>It was <HighlightSpan>such an ill look that</HighlightSpan> her parents took her to the hospital.</li>
            </ul>
          </li>
          <li>
            The bath was relaxing. He went to sleep in it.
            <ul>
              <li>The bath was <HighlightSpan>so relaxing that</HighlightSpan> he went to sleep in it.</li>
              <li>It was <HighlightSpan>such a relaxing bath that</HighlightSpan> he went to sleep in it.</li>
            </ul>
          </li>
          <li>
            They were surprised. They could hardly speak.
            <ul>
              <li>They were <HighlightSpan>so surprised that</HighlightSpan> they could hardly speak.</li>
              <li>It was <HighlightSpan>such a surprise that</HighlightSpan> they could hardly speak.</li>
            </ul>
          </li>
          <li>
            He sounded sorry. I just had to forgive him.
            <ul>
              <li>He sounded <HighlightSpan>so sorry that</HighlightSpan> I just had to forgive him.</li>
              <li>It was <HighlightSpan>such a sorry sound that</HighlightSpan> I just had to forgive him.</li>
            </ul>
          </li>
          <li>
            I was excited about going away. I couldn't sleep.
            <ul>
              <li>I was <HighlightSpan>so excited about going away that</HighlightSpan> I couldn't sleep.</li>
              <li>Going away is <HighlightSpan>so exciting that</HighlightSpan> I couldn't sleep</li>
              <li>It was <HighlightSpan>such an exciting thought about going away that</HighlightSpan> I couldn't sleep.</li>
            </ul>
          </li>
          <li>
            The water was very dirty. We decided not to go swimming.
            <ul>
              <li>The water was <HighlightSpan>so dirty that</HighlightSpan> we decided not to go swimming.</li>
              <li>It was <HighlightSpan>such dirty water that</HighlightSpan> we decided not to go swimming.</li>
            </ul>
          </li>
          <li>
            She speaks English very well. You would think it was her native language.
            <ul>
              <li>She speaks English <HighlightSpan>so well that</HighlightSpan> you would think it was her native language.</li>
              <li>It is <HighlightSpan>such good English that</HighlightSpan> you would think it was her native language.</li>
              <li>She is <HighlightSpan>such a good English speaker that</HighlightSpan> you would think it was her native language.</li>
            </ul>
          </li>
          <li>
            The road is <HighlightSpan>so narrow that</HighlightSpan> it's difficult for two cars to pass each other.
            <ul>
              <li>It is <HighlightSpan>such a narrow road that</HighlightSpan> it's difficult for two cars to pass each other.</li>
            </ul>
          </li>
          <li>
            The weather was <HighlightSpan>so warm that</HighlightSpan> I didn't need a coat.
            <ul>
              <li>It was <HighlightSpan>such warm weather that</HighlightSpan> I didn't need a coat.</li>
            </ul>
          </li>
        </ol>
      </ContentBox>
    </Box>
  );
}

export default ResultClausePage;
