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
  const { t: tPage } = useTranslation("ComparisonPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Comparison")}</Title>

      <SubTitle>{tPage("Short adjectives")}</SubTitle>
      <ul>
        <li>tall, short, small, big, ... ({tPage("monosyllabic")}).</li>
        <li>happy, clever, noble, narrow, quiet, ... ({tPage("disyllabic")}, {tPage("ending with")}: y, er, e, ow, or et).</li>
      </ul>

      <SubTitle>{tPage("Long adjectives")}</SubTitle>
      <p>beautiful, wonderful, comfortable, careful, expensive, intelligent, ...</p>

      <SubTitle>1. {tPage("Comparison of equality")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>S<sub>1</sub> + V + ... + as + [Adj/Adv] + as [S<sub>2</sub>/O] (+ auxiliary)</ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>John is as tall as Mary.</li>
        <li>He sings as well as Lan does.</li>
        <li>
          His assignment is different from mine.
          <ul>
            <li><HighlightSpan>My assignment</HighlightSpan> is different from his.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>2. {tPage("Comparative")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S<sub>1</sub> + V + <HighlightSpan>[short Adj] + er</HighlightSpan> + than + [S<sub>2</sub>/O] (+ auxiliary)</p>
        <p>S<sub>1</sub> + V + <HighlightSpan>more + [long Adj]</HighlightSpan> + than + [S<sub>2</sub>/O] (+ auxiliary)</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>John is taller than Mary.</li>
        <li>Hy sings better than Lan does.</li>
        <li>Tom is more careful than his brother.</li>
        <li>
          Jane is a better swimmer than Mary.
          <ul>
            <li><HighlightSpan>Jane</HighlightSpan> swims better than Mary does.</li>
          </ul>
        </li>
        <li>
          She is a far more careful driver than I am.
          <ul>
            <li><HighlightSpan>She drives</HighlightSpan> far more carefully than I am.</li>
          </ul>
        </li>
        <li>
          She is a slower and more careful driver than I am.
          <ul>
            <li><HighlightSpan>She drives</HighlightSpan> slower and more careful than I do.</li>
          </ul>
        </li>
        <li>
          Is this the cheapest pet food you have got?
          <li><HighlightSpan>Have</HighlightSpan> you got any cheaper pet food?</li>
        </li>
      </ol>

      <SubTitle>3. {tPage("Superlative")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S + V + <HighlightSpan>the + [short Adj] + est</HighlightSpan> (+ location)</p>
        <p>S + V + <HighlightSpan>the most + [long Adj]</HighlightSpan> (+ location)</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ul>
        <li>John is the tallest boy in my class.</li>
        <li>Mary is the most intelligent student in my class.</li>
      </ul>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        <ul>
          <li>good/well - better - best</li>
          <li>bad/badly - worse - worst</li>
          <li>many/much - more - most</li>
          <li>little - less - least</li>
          <li>far - farther - farthest ({tPage("distance")})</li>
          <li>far - further - furthest ({tPage("more")})</li>
        </ul>
      </Alert>

      <SubTitle>{tPage("Comparative")} {"<=>"} {tPage("Unequal comparison")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S<sub>1</sub> + V<sub>(affirmative)</sub> + <HighlightSpan>[short Adj] + er</HighlightSpan> + than + [S<sub>2</sub>/O] (+ auxiliary)</p>
        <p>S<sub>1</sub> + V<sub>(affirmative)</sub> + <HighlightSpan>more + [long Adj]</HighlightSpan> + than + [S<sub>2</sub>/O] (+ auxiliary)</p>
        <Divider />
        <p>S<sub>2</sub> + V<sub>not</sub> + as + Adj + as + S<sub>1</sub> (+ auxiliary)</p>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          Mary is more beautiful than Jane.
          <ul>
            <li>Jane is not as beautiful as Mary.</li>
          </ul>
        </li>
        <li>
          Jane doesn't speak French as well as Jack.
          <ul>
            <li>Jack speaks French better than Jane.</li>
          </ul>
        </li>
        <li>
          He doesn't play the guitar as well as Henry.
          <ul>
            <li><HighlightSpan>Henry plays</HighlightSpan> the guitar better than Bill.</li>
          </ul>
        </li>
        <li>
          Martha is more talented than Bill.
          <ul>
            <li><HighlightSpan>Bill is</HighlightSpan> not as talented as Martha.</li>
          </ul>
        </li>
        <li>
          Laura reads more quickly than her brother does.
          <ul>
            <li><HighlightSpan>Her brother</HighlightSpan> doesn't read as quickly as her.</li>
            <li><HighlightSpan>Her brother</HighlightSpan> doesn't read so quickly as she does.</li>
          </ul>
        </li>
        <li>
          He knows a lot more about it than I do.
          <ul>
            <li><HighlightSpan>I don't know</HighlightSpan> as much as he does.</li>
          </ul>
        </li>
        <li>
          Joe dances more gracefully than his partner.
          <ul>
            <li><HighlightSpan>Joe's partner</HighlightSpan> doesn't dance as gracefully as he does.</li>
          </ul>
        </li>
        <li>
          When he is old, he doesn't like to travel.
          <ul>
            <li><HighlightSpan>The older</HighlightSpan> he is, the less travelling he likes to do.</li>
          </ul>
        </li>
        <li>
          My book isn't as interesting as yours.
          <ul>
            <li><HighlightSpan>Your book is</HighlightSpan> more interesting than mine.</li>
          </ul>
        </li>
        <li>
          His car runs faster than a race car.
          <ul>
            <li><HighlightSpan>A race car</HighlightSpan> doesn't run as fast as his car.</li>
          </ul>
        </li>
        <li>
          He speaks Spanish more fluently than I do.
          <ul>
            <li><HighlightSpan>I</HighlightSpan> don't speak Spanish as fluently as him.</li>
          </ul>
        </li>
        <li>
          His watch isn't as expensive as mine.
          <ul>
            <li><HighlightSpan>My watch</HighlightSpan> is more expensive than his watch.</li>
          </ul>
        </li>
        <li>
          Tan's salary is higher than Minh's.
          <ul>
            <li><HighlightSpan>Minh's salary</HighlightSpan> isn't as high as Tan's.</li>
          </ul>
        </li>
        <li>
          Exercise 1 is more difficult than exercise 2.
          <ul>
            <li><HighlightSpan>Exercise 2</HighlightSpan> isn't as difficult as exercise 1.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Superlative")} {"<=>"} {tPage("Equal comparison")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <p>S + V + <HighlightSpan>the + [short Adj] + est</HighlightSpan> (+ location)</p>
        <p>S + V + <HighlightSpan>the most + [long Adj]</HighlightSpan> (+ location)</p>
        <Divider />
        <p><HighlightSpan>No other + N<sub>singular</sub></HighlightSpan> (+ location) + V<sub>bare</sub> + as + ... + as + S</p>
        <p><HighlightSpan>Nobody</HighlightSpan> (+ location) + V<sub>bare</sub> + as + ... + as + S</p>
        <p><HighlightSpan>No one</HighlightSpan> (+ location) + V<sub>bare</sub> + as + ... + as + S</p>
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
            <li>John is the most intelligent student in my class.</li>
          </ul>
        </li>
        <li>
          Nobody in our class is more intelligent than Jane is.
          <ul>
            <li><HighlightSpan>Jane is</HighlightSpan> the most intelligent student in this class.</li>
          </ul>
        </li>
        <li>
          No animal in the world is as big as a whale is.
          <ul>
            <li><HighlightSpan>A whale is</HighlightSpan> the biggest animal in the world.</li>
          </ul>
        </li>
        <li>
          Jack is the tallest student in this class.
          <ul>
            <li><HighlightSpan>No</HighlightSpan>body in this class is taller than Jack.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default ComparisonPage;
