import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import HighlightSpan from "../../components/HighlightSpan";
import SubTitle from "../../components/SubTitle";
import SubTitle2 from "../../components/SubTitle2";
import Title from "../../components/Title";
import { introductoryVerbConversions, otherConversions, pronounConversions, tenseConversions } from "./constants";
import ConversionTable from "./ConversionTable";

function ReportedSpeechPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("ReportedSpeechPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Reported Speech")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <p>{tPage("concept-details")}</p>

      <SubTitle2>{tPage("step-1")}</SubTitle2>
      <ConversionTable conversions={introductoryVerbConversions} />

      <SubTitle2>{tPage("step-2")}</SubTitle2>
      <ConversionTable conversions={pronounConversions} />

      <SubTitle2>{tPage("step-3")}</SubTitle2>
      <ConversionTable conversions={tenseConversions} />
      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        {tPage("back-tense-note")}
      </Alert>

      <SubTitle2>{tPage("step-4")}</SubTitle2>
      <ConversionTable conversions={otherConversions} />

      <SubTitle>{tPage("Command examples")}</SubTitle>
      <ol>
        <li>
          The teacher said, "Keep quiet, please".
          <ul>
            <li>The teacher told me/us/... to keep quiet.</li>
          </ul>
        </li>
        <li>
          Ms. Han said, "Don't talk in class".
          <ul>
            <li>Ms. Han told us not to talk in class.</li>
          </ul>
        </li>
        <li>
          "Don't come back before one o'clock," advised my brother.
          <ul>
            <li>My brother advised me not to come back before one o'clock.</li>
          </ul>
        </li>
        <li>
          "Cook it in butter," Mrs. Brown said to her daughter.
          <ul>
            <li>Mrs. Brown told her daughter to cook it in butter.</li>
          </ul>
        </li>
        <li>
          The pupils said to their teacher, "Please give us better marks."
          <ul>
            <li>The pupils told their teacher to give them better marks.</li>
          </ul>
        </li>
        <li>
          "Pull as hard as you can," she said to me.
          <ul>
            <li>She told me to pull as hard as I could.</li>
          </ul>
        </li>
        <li>
          "Be modest if you are a good pupil," said my father.
          <ul>
            <li>My father told me to be modest if I was a good pupil.</li>
          </ul>
        </li>
        <li>
          "Shut the door but don't lock it," she said to us.
          <ul>
            <li>She told us to shut the door but not to lock it.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Statement examples")}</SubTitle>
      <ol>
        <li>
          They said, "We are studying English now".
          <ul>
            <li>They said (that) they were studying English then.</li>
            <li>They told us (that) they were studying English then.</li>
          </ul>
        </li>
        <li>
          Lan said, "I went to the zoo with my parents yesterday".
          <ul>
            <li>Lan said (that) she had gone to the zoo with her parents the day before.</li>
          </ul>
        </li>
        <li>
          Pete said, "I was doing my homework when she came".
          <ul>
            <li>Pete said (that) he had been doing his homework when she had come.</li>
          </ul>
        </li>
        <li>
          Linda said to Tom: I will help you tomorrow.
          <ul>
            <li>Linda said to Tom she would help him the next day.</li>
          </ul>
        </li>
        <li>
          David said: I must go now, Mary.
          <ul>
            <li>David said to Mary he had to go then.</li>
            <li>David told Mary he had to go then.</li>
          </ul>
        </li>
        <li>
          They said: you may sit here, boy.
          <ul>
            <li>They said to the boy he might sit there.</li>
          </ul>
        </li>
        <li>
          Our tour guide said, "we'll be leaving around 7:00 in the morning".
          <ul>
            <li><HighlightSpan>Our tour guide told us</HighlightSpan> that we would be leaving around 7:00 in the morning.</li>
          </ul>
        </li>
        <li>
          He said to her, "You are my friend".
          <ul>
            <li>He told her she was his friend.</li>
          </ul>
        </li>
        <li>
          Johnny said to his mother, "I don't know how to do this exercise".
          <ul>
            <li>Johnny told his mother he didn't know how to do that exercise.</li>
          </ul>
        </li>
        <li>
          Paul said, "I must go home now".
          <ul>
            <li>Paul said he had to go home then.</li>
          </ul>
        </li>
        <li>
          "There's been an accident and the road is blocked," said the policeman.
          <ul>
            <li>The policeman said there had been an accident and the road was blocked.</li>
          </ul>
        </li>
        <li>
          "We are waiting for the school bus," said the children.
          <ul>
            <li>The children said they were waiting for the school bus.</li>
          </ul>
        </li>
        <li>
          Mary said, "My father died a year ago".
          <ul>
            <li>Mary said her father had died a year before.</li>
          </ul>
        </li>
        <li>
          "It isn't so foggy today as it was yesterday," said the teacher.
          <ul>
            <li>The teacher said it wasn't so foggy that day as it had been the day before.</li>
          </ul>
        </li>
        <li>
          Tom said, "New York is bigger than London".
          <ul>
            <li>Tom said New York was bigger than London.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Question examples")}</SubTitle>
      <ol>
        <li>
          She said to me, "Are you a student?".
          <ul>
            <li>She asked me if/whether I was a student.</li>
          </ul>
        </li>
        <li>
          He asked, "What are you doing next Sunday?".
          <ul>
            <li>He asked me what I was doing the following Sunday.</li>
          </ul>
        </li>
        <li>
          The journalist asked, "How many survivors are there?".
          <ul>
            <li>The journalist asked me how many survivors there were.</li>
          </ul>
        </li>
        <li>
          I asked Martha, "Are you planning to enter law school?".
          <ul>
            <li><HighlightSpan>I asked Martha</HighlightSpan> if she was planning to enter law school.</li>
          </ul>
        </li>
        <li>
          Ed just asked me, "What time does the movie begin?".
          <ul>
            <li><HighlightSpan>Ed wants to know</HighlightSpan> what time the movie begins.</li>
          </ul>
        </li>
        <li>
          Fred asked, "Can we still get tickets for the concert?".
          <ul>
            <li><HighlightSpan>Fred asked</HighlightSpan> if they could still get tickets for the concert.</li>
          </ul>
        </li>
        <li>
          Thomas said to us, "How can I help you?".
          <ul>
            <li><HighlightSpan>Thomas wants to know</HighlightSpan> how he could help us.</li>
          </ul>
        </li>
        <li>
          Eva asked, "Can you help me, John?"
          <ul>
            <li><HighlightSpan>Eva asked John</HighlightSpan> if he could help her.</li>
          </ul>
        </li>
        <li>
          Charles said, "When will the final decision be made?".
          <ul>
            <li><HighlightSpan>Charles wanted to know</HighlightSpan> when the final decision would be made.</li>
          </ul>
        </li>
        <li>
          Frank asked Elizabeth, "Where have you been all afternoon?".
          <ul>
            <li><HighlightSpan>Frank asked Elizabeth</HighlightSpan> where she had been all afternoon.</li>
          </ul>
        </li>
        <li>
          Bill just said, "What is Kim's native language?".
          <ul>
            <li><HighlightSpan>Bill wants to know</HighlightSpan> what Kim's native language is.</li>
          </ul>
        </li>
        <li>
          Yesterday Ron said to Bob, "What's the problem?".
          <ul>
            <li><HighlightSpan>Ron asked Bob</HighlightSpan> what the problem was.</li>
          </ul>
        </li>
        <li>
          I asked myself, "Am I doing the right thing?".
          <ul>
            <li><HighlightSpan>I wondered</HighlightSpan> if I was doing the right thing.</li>
          </ul>
        </li>
        <li>
          All of the farmers are asking, "When is this terrible drought going to end?"
          <ul>
            <li><HighlightSpan>All of the farmers are wondering</HighlightSpan> when this terrible drought is going to end.</li>
          </ul>
        </li>
        <li>
          George asked me, "What time do I have to be at the laboratory in the morning?".
          <ul>
            <li><HighlightSpan>George asked me</HighlightSpan> what time he had to be at the laboratory in the morning.</li>
          </ul>
        </li>
        <li>
          Beth asked, "Who should I give this message to?".
          <ul>
            <li><HighlightSpan>Beth asked me</HighlightSpan> who she should give that message to.</li>
          </ul>
        </li>
        <li>
          Nancy asked, "Why didn't you call me?".
          <ul>
            <li><HighlightSpan>Nancy wanted to know</HighlightSpan> why I hadn't called her.</li>
          </ul>
        </li>
        <li>
          "Who put salt in my coffee?" he asked.
          <ul>
            <li>He asked me who had put salt in his coffee.</li>
          </ul>
        </li>
        <li>
          My friend said, "Are you going to leave tomorrow?".
          <ul>
            <li>My friend asked if I was going to leave the next day.</li>
          </ul>
        </li>
        <li>
          "Have you done your homework?" said my mother.
          <ul>
            <li>My mother asked if I had done my homework.</li>
          </ul>
        </li>
        <li>
          I asked Bill, "What time did you go to bed last night?".
          <ul>
            <li>I asked Bill what time he had gone to bed the previous night.</li>
          </ul>
        </li>
        <li>
          "Must you go now?" said Mr. Brown.
          <ul>
            <li>Mr. Brown asked her if she had to go then.</li>
          </ul>
        </li>
        <li>
          "Whose bicycle did you borrow yesterday?" his mother asked him.
          <ul>
            <li>His mother asked him whose bicycle he had borrowed the previous day.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default ReportedSpeechPage;
