import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import SubTitle3 from "../components/SubTitle3";
import Title from "../components/Title";

function ArticlesPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("ArticlesPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Articles")}</Title>

      <SubTitle>{tPage("Indefinite articles")}</SubTitle>

      <SubTitle2>1. {tPage("Nouns beginning with a consonant")}</SubTitle2>
      <p>{tPage("Consonants")}:</p>
      <ul>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>

      <SubTitle3>{t("Structure")}</SubTitle3>
      <ContentBox>a + N</ContentBox>

      <SubTitle3>{t("Examples")}</SubTitle3>
      <ul>
        <li>a car</li>
        <li>a bike</li>
        <li>a university</li>
        <li>a European man</li>
      </ul>

      <SubTitle2>2. {tPage("Nouns beginning with a vowel")}</SubTitle2>
      <p>{tPage("Vowels")}:</p>
      <ul>
        <li>A</li>
        <li>E</li>
        <li>I</li>
        <li>O</li>
        <li>U</li>
      </ul>

      <SubTitle3>{t("Structure")}</SubTitle3>
      <ContentBox>an + N</ContentBox>

      <SubTitle3>{t("Examples")}</SubTitle3>
      <ul>
        <li>an apple</li>
        <li>an umbrella</li>
        <li>an hour</li>
      </ul>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        <p>{tPage("note-1")}</p>
        <p>{tPage("note-1-example-1")}</p>
        <p>{tPage("note-1-example-2")}</p>
      </Alert>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        <p>{tPage("note-2")}</p>
        <p>{tPage("note-3")}</p>
        <p>{tPage("note-4")}</p>
        <p>{tPage("note-5")}</p>
      </Alert>

      <SubTitle>{tPage("Definite articles")}</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>the + N</ContentBox>

      <SubTitle2>{tPage("use-the-subtitle")}</SubTitle2>

      <SubTitle3>1. {tPage("use-the-subtitle-1")}</SubTitle3>
      <p>
        {t("Examples")}: My mother bought&nbsp;
        <HighlightSpan>a</HighlightSpan> white shirt and&nbsp;
        <HighlightSpan>a</HighlightSpan> pink shirt.&nbsp;
        <HighlightSpan>The</HighlightSpan> white shirt is cheap but&nbsp;
        <HighlightSpan>the</HighlightSpan> pink one is very expensive.
      </p>

      <SubTitle3>2. {tPage("use-the-subtitle-2")}</SubTitle3>
      <p>{t("Examples")}: The sun, the moon, the Earth, the sky, the sea, the Internet, the world, the universe, ...</p>

      <SubTitle3>3. {tPage("use-the-subtitle-3")}</SubTitle3>
      {t("Examples")}:
      <ul>
        <li>the Pacific Ocean</li>
        <li>the Nile</li>
        <li>the Himalaya<HighlightSpan>s</HighlightSpan></li>
        <li>the Ural mountain<HighlightSpan>s</HighlightSpan></li>
        <li>the United State<HighlightSpan>s</HighlightSpan></li>
        <li>the United Nation<HighlightSpan>s</HighlightSpan></li>
      </ul>

      <SubTitle3>4. {tPage("use-the-subtitle-4")}</SubTitle3>
      <p>{t("Examples")}: the happiest boy, the most beautiful, the first, the second, the last, ...</p>

      <SubTitle3>5. {tPage("use-the-subtitle-5")}</SubTitle3>
      {t("Examples")}:
      <ul>
        <li>She plays the piano.</li>
        <li>He's learning the guitar.</li>
        <li>I can't play the violin.</li>
      </ul>

      <SubTitle3>6. The + adjective</SubTitle3>
      <p>{t("Examples")}: the rich, the poor, the young, the old, the blind, the French, the English, the Chinese, the Japanese.</p>

      <SubTitle3>7. The + of + N ({tPage("noun phrase")})</SubTitle3>
      <ul>
        <li>The method of learning English.</li>
        <li>The capital of Vietnam.</li>
      </ul>

      <SubTitle2>{tPage("not-use-the-subtitle")}</SubTitle2>

      <SubTitle3>1. {tPage("not-use-the-subtitle-1")}</SubTitle3>
      <p>{t("Examples")}: Tom, Mary, China, England, New York, London, Ho Chi Minh, ...</p>

      <SubTitle3>2. {tPage("not-use-the-subtitle-2")}</SubTitle3>
      <p>{t("Examples")}: his car, my phone, her book, ...</p>

      <SubTitle3>3. {tPage("not-use-the-subtitle-3")}</SubTitle3>
      <p>{t("Examples")}: football, basketball, tennis, badminton, volleyball, ...</p>

      <SubTitle3>4. {tPage("not-use-the-subtitle-4")}</SubTitle3>
      <p>{t("Examples")}: love, happiness, honesty, friendship, ...</p>
      <p>{tPage("Examples where you can use the")}:</p>
      <ol>
        <li>The courage he showed was inspiring.</li>
        <li>We admired the beauty of the sunset.</li>
        <li>She appreciated the advice you gave her.</li>
      </ol>
      <p>{tPage("Examples where you can not use the")}:</p>
      <ol>
        <li>Courage is important in difficult times.</li>
        <li>Love is a powerful feeling.</li>
        <li>Freedom is a basic human right.</li>
      </ol>

      <SubTitle3>5. {tPage("not-use-the-subtitle-5")}</SubTitle3>
      <p>Example: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</p>

      <SubTitle3>6. {tPage("not-use-the-subtitle-6")}</SubTitle3>
      <p>Example: breakfast, lunch, dinner, supper, ...</p>

      <SubTitle3>7. {tPage("not-use-the-subtitle-7")}</SubTitle3>
      <p>Examples: water, sugar, salt, money, rice, milk, ...</p>
      <p>{tPage("Examples where you can use the")}:</p>
      <ol>
        <li>The water in this bottle is cold.</li>
        <li>The information you gave me was helpful.</li>
        <li>The furniture in the living room is expensive.</li>
        <li>The advice she gave me helped a lot.</li>
      </ol>
      <p>{tPage("Examples where you can not use the")}:</p>
      <ol>
        <li>Water is essential for life.</li>
        <li>Knowledge is power.</li>
        <li>Happiness can not be bought.</li>
      </ol>
    </Box>
  );
}

export default ArticlesPage;
