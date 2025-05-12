import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function AdvClausesOfTimePage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Adverbial Clauses of Time</Title>

      <SubTitle>Adverbs</SubTitle>
      <ContentBox>
        <Box sx={{ paddingX: 2 }}>
          when, while, since, after, before, until, by the time, as soon as, ... etc.
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ paddingX: 2 }}>
          as ≈ when/while
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ paddingX: 2, textAlign: "initial", display: "inline-block" }}>
          <p>As soon as + [Simple Past/Past Perfect], [Simple Past]</p>
          <p>= No sooner had + [Simple Past] + than + [Simple Past]</p>
          <p>= Hardly had + [Simple Past] + when + [Simple Past]</p>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ paddingX: 2, textAlign: "initial", display: "inline-block" }}>
          <p>Not until + [time/event] + did + S + V<sub>1</sub></p>
          <p>= It was not until + [time/event] + that + [Simple Past]</p>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        Only + [when/after/by/etc.] + did + S + V<sub>1</sub>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          <p>After she (graduate) <u><HighlightSpan>graduates</HighlightSpan></u>, she will get a job.</p>
          <p>After she (graduate) <u><HighlightSpan>had graduated</HighlightSpan></u>, she got a job.</p>
          <p>Before I (go) <u><HighlightSpan>went</HighlightSpan></u> to bed last night, I (finish) <u><HighlightSpan>had finished</HighlightSpan></u> my homework.</p>
        </li>
        <li>
          <p>When I arrived, he (talk) <u><HighlightSpan>was talking</HighlightSpan></u> on the phone.</p>
          <p>When I got there, they (already leave) <u><HighlightSpan>had already left</HighlightSpan></u>.</p>
          <p>When I (see) <u><HighlightSpan>see</HighlightSpan></u> him tomorrow, I (ask) <u><HighlightSpan>will ask</HighlightSpan></u> him.</p>
        </li>
        <li>
          <p>While I (walk) <u><HighlightSpan>was walking</HighlightSpan></u> home, it began to rain.</p>
        </li>
        <li>
          <p>As I arrived, he (talk) <u><HighlightSpan>was talking</HighlightSpan></u> on the phone.</p>
          <p>As I got there, they (already leave) <u><HighlightSpan>had already left</HighlightSpan></u>.</p>
          <p>As I (see) <u><HighlightSpan>see</HighlightSpan></u> him tomorrow, I (ask) <u><HighlightSpan>will ask</HighlightSpan></u> him.</p>
          <p>As I (walk) <u><HighlightSpan>was walking</HighlightSpan></u> home, it began to rain.</p>
        </li>
        <li>
          <p>I (not see) <u><HighlightSpan>haven't seen</HighlightSpan></u> him since he (move) <u><HighlightSpan>moved</HighlightSpan></u> to Paris.</p>
        </li>
        <li>
          <p>By the time he arrived, we (already leave) <u><HighlightSpan>had already left</HighlightSpan></u>.</p>
          <p>By the time he comes, we (finish) <u><HighlightSpan>will have finished</HighlightSpan></u> the work.</p>
        </li>
        <li>
          <p>As soon as it stops raining, we (leave) <u><HighlightSpan>will leave</HighlightSpan></u>.</p>
          <p><HighlightSpan>As soon as</HighlightSpan> he approached the house, the policeman stopped him.</p>
          <p>= <HighlightSpan>No sooner had</HighlightSpan> he approached the house <HighlightSpan>than</HighlightSpan> the policeman stopped him.</p>
          <p>= <HighlightSpan>Hardly had</HighlightSpan> he approached the house <HighlightSpan>when</HighlightSpan> the policeman stopped him.</p>
        </li>
        <li>
          <p><HighlightSpan>Not until</HighlightSpan> midnight <HighlightSpan>did</HighlightSpan> she leave.</p>
          <p>= <HighlightSpan>It was not until</HighlightSpan> midnight <HighlightSpan>that</HighlightSpan> she left.</p>
          <p><HighlightSpan>Not until</HighlightSpan> I opened the box <HighlightSpan>did</HighlightSpan> I realize the mistake.</p>
          <p>= <HighlightSpan>It was not until</HighlightSpan> I opened the box <HighlightSpan>that</HighlightSpan> I realized the mistake.</p>
        </li>
        <li>
          <p><HighlightSpan>Only</HighlightSpan> after the storm passed <HighlightSpan>did</HighlightSpan> we go outside.</p>
          <p><HighlightSpan>Only</HighlightSpan> then <HighlightSpan>did</HighlightSpan> he understand the truth.</p>
          <p><HighlightSpan>Only</HighlightSpan> by working hard <HighlightSpan>did</HighlightSpan> she succeed.</p>
        </li>
      </ol>
    </Box>
  );
}

export default AdvClausesOfTimePage;
