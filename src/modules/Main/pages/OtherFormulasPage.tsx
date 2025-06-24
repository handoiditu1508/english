import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function OtherFormulasPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("OtherFormulasPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Other Formulas")}</Title>

      <SubTitle>{tPage("Formula")} 1</SubTitle>
      <ContentBox>
        sole (Adj) = only - duy nhất
        <p>Ex: sole survivor = người sống sót duy nhất</p>
        <Divider />
        those that V<sub>2</sub> = those V<sub>ing</sub>
        <p>Ex: those that won = those winning</p>
        <Divider />
        in the end = finally - cuối cùng
        <p>at the end of + N</p>
        <Divider />
        whereas = while - trong khi, nhưng ngược lại
        <p>Ex: He likes coffee, whereas I prefer tea.</p>
        <Divider />
        now that ≈ because - vì, bởi vì
        <p>Ex: The house is much warmer now that we've put in central heating.</p>
        <Divider />
        <HighlightSpan>WH + N + V</HighlightSpan> = N = S
        <p>Ex: <HighlightSpan>What he said</HighlightSpan> is true.</p>
        <p>Ex: <HighlightSpan>That he is late</HighlightSpan> is not surprising.</p>
        <Divider />
        sort of = kind of
        <Divider />
        tell [someone / something] apart = distinguish [someone / something] - phân biệt
        <p>Ex: I can't tell the twins apart.</p>
        <Divider />
        likely ≈ possible
        <p>Ex: It is likely that it will rain tomorrow.</p>
        <Divider />
        <p>a few - 1 ít</p>
        <p>a little - có ít</p>
        <p>few = little - hầu như không</p>
        <p>a few, few + N<sub>{tPage("countable")}</sub></p>
        <p>a little, little + N<sub>{tPage("uncountable")}</sub></p>
        <p>Ex: I have a few friends. (I have some friends.)</p>
        <p>Ex: I have a little money. (I have some money.)</p>
        <p>Ex: I have few friends. (I have almost no friends.)</p>
        <p>Ex: I have little money. (I have almost no money.)</p>
        <Divider />
        pay attention to = take notice of - chú ý đến, để ý đến
        <p>Ex: You should pay attention to the instructions.</p>
        <Divider />
        I was not surprised to hear that = It came as no surprise to me that
        <Divider />
        no matter what = whatever + S + V
        <p>Ex: No matter what she says, I won't change my mind.</p>
        <p>= Whatever she says, I won't change my mind.</p>
        <Divider />
        no matter how = however + [Adj / Adv] + S + V
        <p>Ex: No matter how tired she is, she keeps working.</p>
        <p>= However tired she is, she keeps working.</p>
        <Divider />
        for the time being = for a short time
        <Divider />
        as though = as if
        <p>Ex: He acts as though he knows everything.</p>
        <Divider />
        I will see to it (make sure that the job will be done)
        <p>Ex: I will see to it that the report is finished by tomorrow.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 2</SubTitle>
      <ContentBox>
        <p>Neither A nor B + <HighlightSpan>V<sub>B</sub></HighlightSpan></p>
        <p>Either A or B + <HighlightSpan>V<sub>B</sub></HighlightSpan></p>
        <p>Not only A but also B + <HighlightSpan>V<sub>B</sub></HighlightSpan></p>
        <p>Both A and B + <HighlightSpan>V<sub>B</sub></HighlightSpan></p>
        <p>Ex: Neither he nor I am going to the party.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 3</SubTitle>
      <ContentBox>
        <p>A along with B + <HighlightSpan>V<sub>A</sub></HighlightSpan></p>
        <p>A together with B + <HighlightSpan>V<sub>A</sub></HighlightSpan></p>
        <p>A accompanied by B + <HighlightSpan>V<sub>A</sub></HighlightSpan></p>
        <p>Ex: The teacher, along with the students, is going on a field trip.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 4</SubTitle>
      <ContentBox>
        <p>a number of + N<sub>{tPage("plural")}</sub> + V<sub>{tPage("plural")}</sub></p>
        <p>Ex: A number of students are studying.</p>
        <Divider />
        <p>the number of + N<sub>{tPage("plural")}</sub> + V<sub>{tPage("singular")}</sub></p>
        <p>Ex: The number of students is increasing.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 5: {tPage("reading fractions")}</SubTitle>
      <ContentBox>
        <sup>{tPage("numerator")}</sup>&frasl;<sub>{tPage("denominator")}</sub> = <sup>{tPage("cardinal numbers")}</sup>&frasl;<sub>{tPage("ordinal numbers")}</sub>
        <p>{tPage("fraction-description-1")}</p>
        <p>Ex: <HighlightSpan>1/2</HighlightSpan> = <HighlightSpan>one-half, a half</HighlightSpan></p>
        <p>Ex: <HighlightSpan>1/3</HighlightSpan> = <HighlightSpan>one-third, a third</HighlightSpan></p>
        <p>Ex: <HighlightSpan>2/3</HighlightSpan> = <HighlightSpan>two-thirds</HighlightSpan></p>
        <p>Ex: <HighlightSpan>3/4</HighlightSpan> = <HighlightSpan>three-fourths</HighlightSpan></p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 6</SubTitle>
      <ContentBox>
        a good deal of + N<sub>{tPage("uncountable")}</sub> + V<sub>{tPage("singular")}</sub>
        <p>Ex: A good deal of time has passed since we last met.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 7</SubTitle>
      <ContentBox>
        <p>former - cái trước</p>
        <p>latter - cái sau</p>
        <p>Ex: The former is more expensive than the latter.</p>
        <p>Ex: The first option is the former, and the second option is the latter.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 8</SubTitle>
      <ContentBox>
        would rather + [V<sub>bare</sub> / S + V<sub>2</sub>]
        <p>Ex: I would rather go home than stay here.</p>
      </ContentBox>

      <SubTitle>{tPage("Formula")} 9</SubTitle>
      <ContentBox>
        <p>blame [someone / something] for [something]</p>
        <p>blame [something] on [someone / something]</p>
        <p>Ex: Don't blame me for your mistakes.</p>
        <p>Ex: He blamed the accident on the weather.</p>
      </ContentBox>
    </Box>
  );
}

export default OtherFormulasPage;
