import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubTitle from "../../components/SubTitle";
import SubTitle2 from "../../components/SubTitle2";
import Title from "../../components/Title";
import { introductoryVerbConversions, otherConversions, pronounConversions, tenseConversions } from "./constants";
import ConversionTable from "./ConversionTable";

function ReportedSpeechPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Reported Speech</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <p>Reported speech (also called indirect speech) is used when you tell someone what another person said - without quoting them word-for-word.</p>

      <SubTitle2>Step 1: Convert introductory verb</SubTitle2>
      <ConversionTable conversions={introductoryVerbConversions} />

      <SubTitle2>Step 2: Convert pronoun</SubTitle2>
      <ConversionTable conversions={pronounConversions} />

      <SubTitle2>Step 3: Back the tense</SubTitle2>
      <ConversionTable conversions={tenseConversions} />
      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>Notice</AlertTitle>
        Do not back the tense when introductory verb is at the present (say).
      </Alert>

      <SubTitle2>Step 4: Other conversions</SubTitle2>
      <ConversionTable conversions={otherConversions} />

      <SubTitle>Command examples</SubTitle>
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
      </ol>

      <SubTitle>Statement examples</SubTitle>
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
      </ol>

      <SubTitle>Question examples</SubTitle>
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
      </ol>
    </Box>
  );
}

export default ReportedSpeechPage;
