import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightCode from "../components/HighlightCode";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import Title from "../components/Title";

function RelativeClausesPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Relative Clauses</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        <p>Who + V (as the subject of a verb)</p>
        <p>(Can be used in place of whom)</p>
        <Divider sx={{ margin: 2 }} />
        Whom + S (as the object of a verb)
        <Divider sx={{ margin: 2 }} />
        Which (for things)
        <Divider sx={{ margin: 2 }} />
        <p>That (for people and things)</p>
        <p>(Can be used in place of who, whom, which)</p>
        <Divider sx={{ margin: 2 }} />
        Whose + N (possessive form)
        <Divider sx={{ margin: 2 }} />
        Where (for places)
        <Divider sx={{ margin: 2 }} />
        When (for time)
        <Divider sx={{ margin: 2 }} />
        Why (for reasons)
      </ContentBox>

      <SubTitle>Must use that:</SubTitle>
      <ol>
        <li>
          Noun refering to both person and thing
          <ul>
            <li>I saw <HighlightSpan>a man</HighlightSpan> and <HighlightSpan>a dog</HighlightSpan> <HighlightCode>that</HighlightCode> walked along the road.</li>
          </ul>
        </li>
        <li>
          Superlative
          <ul>
            <li>She is <HighlightSpan>the most beautiful girl</HighlightSpan> <HighlightCode>that</HighlightCode> I have ever met.</li>
          </ul>
        </li>
        <li>
          the 1<sup>st</sup>, the 2<sup>nd</sup>, ..., the only
          <ul>
            <li>My mother is <HighlightSpan>the first one</HighlightSpan> <u><HighlightCode>that</HighlightCode> gets</u> up early in the morning.</li>
            <li>My mother is <HighlightSpan>the first one</HighlightSpan> <u>to get</u> up early in the morning.</li>
          </ul>
        </li>
        <li>
          every_, any_, some_, none, all, little
          <ul>
            <li>Can you name <HighlightSpan>anyone</HighlightSpan> <HighlightCode>that</HighlightCode> achieves success in life?</li>
          </ul>
        </li>
        <li>
          It is/was
          <ul>
            <li><HighlightSpan>It was</HighlightSpan> the teacher <HighlightCode>that</HighlightCode> helped me the most.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>Cannot use that:</SubTitle>
      <ol>
        <li>
          After a comma
          <ul>
            <li>The girl on the street<HighlightSpan>,</HighlightSpan> <HighlightCode>who</HighlightCode> dresses in black, looks menacing.</li>
          </ul>
        </li>
        <li>
          Proper Noun
          <ul>
            <li><HighlightSpan>Mary</HighlightSpan>, <HighlightCode>who</HighlightCode> is intelligent, comes from America.</li>
          </ul>
        </li>
        <li>
          Possessive adj
          <ul>
            <li>The woman is <HighlightSpan>my aunt</HighlightSpan>, <HighlightCode>whom</HighlightCode> you saw yesterday.</li>
          </ul>
        </li>
        <li>
          this_, that_, these_, those_
          <ul>
            <li><HighlightSpan>This school</HighlightSpan>, <HighlightCode>which</HighlightCode> is old, is very beautiful and spacious.</li>
          </ul>
        </li>
        <li>
          clause, which
          <ul>
            <li><HighlightSpan>The neighborhood is very noisy</HighlightSpan>, <HighlightCode>which</HighlightCode> makes me feel tired.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>Reduced relative clauses</SubTitle>

      <SubTitle2>Reducing active relative clauses</SubTitle2>
      <p>
        Can be used to reduce <HighlightSpan>Present Continuous</HighlightSpan>, <HighlightSpan>Past Continuous</HighlightSpan>
        , <HighlightSpan>Present Perfect</HighlightSpan>, <HighlightSpan>Past Perfect</HighlightSpan> relative clauses.
      </p>
      <ol>
        <li>
          Present/Past Continuous:
          <ul>
            <li>The man <HighlightSpan>who is standing over there</HighlightSpan> is Mr. Pike.</li>
            <li>The man <HighlightSpan>standing over there</HighlightSpan> is Mr. Pike.</li>
          </ul>
        </li>
        <li>
          Present/Past Perfect:
          <ul>
            <li>The boy <HighlightSpan>who has made a cake for us</HighlightSpan> is Tom.</li>
            <li>The boy <HighlightSpan>having made a cake for us</HighlightSpan> is Tom.</li>
          </ul>
        </li>
      </ol>

      <SubTitle2>Reducing passive relative clauses</SubTitle2>
      <ol>
        <li>
          The book <HighlightSpan>which was written by Shakespeare</HighlightSpan> is very good.
          <ul>
            <li>The book <HighlightSpan>written by Shakespeare</HighlightSpan> is very good.</li>
          </ul>
        </li>
      </ol>

      <SubTitle2>Infinitive reductions</SubTitle2>
      <p>Sometimes, clauses with <HighlightSpan>the first/the only/the best + noun</HighlightSpan> are reduced with <HighlightSpan>to-infinitives</HighlightSpan>.</p>
      <ol>
        <li>
          She was the first person <HighlightSpan>who entered</HighlightSpan> the room.
          <ul>
            <li>She was the first person <HighlightSpan>to enter</HighlightSpan> the room.</li>
          </ul>
        </li>
        <li>
          My mother is the first one <HighlightSpan>that gets up early</HighlightSpan> in the morning.
          <ul>
            <li>My mother is the first one <HighlightSpan>to get up early</HighlightSpan> in the morning.</li>
          </ul>
        </li>
        <li>
          She was the first person <HighlightSpan>who arrived</HighlightSpan>.
          <ul>
            <li>She was the first person <HighlightSpan>to arrive</HighlightSpan>.</li>
          </ul>
        </li>
        <li>
          He's the last one <HighlightSpan>who left</HighlightSpan>.
          <ul>
            <li>He's the last one <HighlightSpan>to leave</HighlightSpan>.</li>
          </ul>
        </li>
        <li>
          This is the only student <HighlightSpan>who passed</HighlightSpan> the test.
          <ul>
            <li>This is the only student <HighlightSpan>to pass</HighlightSpan> the test.</li>
          </ul>
        </li>
        <li>
          She is the only person <HighlightSpan>who knows</HighlightSpan> the answer.
          <ul>
            <li>She is the only person <HighlightSpan>to know</HighlightSpan> the answer.</li>
          </ul>
        </li>
        <li>
          This is the best place <HighlightSpan>that we can</HighlightSpan> visit.
          <ul>
            <li>This is the best place <HighlightSpan>to visit</HighlightSpan>.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          <HighlightSpan>The man</HighlightSpan> is standing over there. <HighlightSpan>He</HighlightSpan> is Mr. Pike.
          <ul>
            <li>The man <HighlightCode>who</HighlightCode> is standing over there is Mr. Pike.</li>
            <li>The man <HighlightCode>that</HighlightCode> is standing over there is Mr. Pike.</li>
          </ul>
        </li>
        <li>
          This is <HighlightSpan>the man</HighlightSpan>. <HighlightSpan>He</HighlightSpan> helped me a lot.
          <ul>
            <li>This is the man <HighlightCode>who</HighlightCode> helped me a lot.</li>
            <li>This is the man <HighlightCode>that</HighlightCode> helped me a lot.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The boy</HighlightSpan> comes from China. <HighlightSpan>He</HighlightSpan> sits next to me.
          <ul>
            <li>The boy <HighlightCode>who</HighlightCode> sits next to me comes from China.</li>
            <li>The boy <HighlightCode>that</HighlightCode> sits next to me comes from China.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The woman</HighlightSpan> is my aunt. You saw <HighlightSpan>her</HighlightSpan> yesterday.
          <ul>
            <li>The woman <HighlightCode>whom</HighlightCode> you saw yesterday is my aunt.</li>
            <li>The woman <HighlightCode>who</HighlightCode> you saw yesterday is my aunt.</li>
            <li>The woman <HighlightCode>that</HighlightCode> you saw yesterday is my aunt.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The girl</HighlightSpan> is my close friend. You met <HighlightSpan>her</HighlightSpan> this morning.
          <ul>
            <li>The girl <HighlightCode>whom</HighlightCode> you met this morning is my close friend.</li>
            <li>The girl <HighlightCode>who</HighlightCode> you met this morning is my close friend.</li>
            <li>The girl <HighlightCode>that</HighlightCode> you met this morning is my close friend.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The dress</HighlightSpan> is beautiful. I bought <HighlightSpan>it</HighlightSpan> last night.
          <ul>
            <li>The dress <HighlightCode>which</HighlightCode> I bought last night is beautiful.</li>
            <li>The dress <HighlightCode>that</HighlightCode> I bought last night is beautiful.</li>
          </ul>
        </li>
        <li>
          They built <HighlightSpan>a wall</HighlightSpan>. <HighlightSpan>It</HighlightSpan> fell down after 3 weeks.
          <ul>
            <li>They built a wall <HighlightCode>which</HighlightCode> fell down after 3 weeks.</li>
            <li>They built a wall <HighlightCode>that</HighlightCode> fell down after 3 weeks.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The room</HighlightSpan> is very large. They will have a meeting in <HighlightSpan>this room</HighlightSpan>.
          <ul>
            <li>The room <HighlightCode>which</HighlightCode> they will have a meeting in is very large.</li>
            <li>The room <HighlightCode>where</HighlightCode> they will have a meeting in is very large.</li>
            <li>The room <HighlightCode>that</HighlightCode> they will have a meeting in is very large.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The boy</HighlightSpan> is Tom. You borrowed <HighlightSpan>his bike</HighlightSpan> last week.
          <ul>
            <li>The boy <HighlightCode>whose bike</HighlightCode> you borrowed last week is Tom.</li>
          </ul>
        </li>
        <li>
          Peter found <HighlightSpan>a cat</HighlightSpan>. <HighlightSpan>Its leg</HighlightSpan> was broken.
          <ul>
            <li>Peter found a cat <HighlightCode>whose leg</HighlightCode> was broken.</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>The woman</HighlightSpan> felt worried. They took <HighlightSpan>her son</HighlightSpan> to hospital.
          <ul>
            <li>The woman <HighlightCode>whose son</HighlightCode> they took to hospital felt worried.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default RelativeClausesPage;
