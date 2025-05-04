import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../../components/ContentBox";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { reportedSpeechConversions } from "./constants";

function ReportedSpeechPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Reported Speech</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <p>Reported speech (also called indirect speech) is used when you tell someone what another person said - without quoting them word-for-word.</p>

      <SubTitle>Converting from direct speech</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 600,
            th: {
              color: theme.palette.primary.main,
            },
          }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Direct Speech</TableCell>
              <TableCell align="center">Indirect Speech</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportedSpeechConversions.map((conversion, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: theme.palette.action.hover,
                  },
                  "&:last-child td, &:last-child th": {
                    border: "none",
                  },
                }}>
                <TableCell>{conversion.directSpeech}</TableCell>
                <TableCell>
                  <ul>
                    {conversion.indirectSpeech.map((indirect, index) => (
                      <li key={index}>{indirect}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SubTitle>Command examples</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
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
              <li>Ms. Han told us not to talk in class</li>
            </ul>
          </li>
        </ol>
      </ContentBox>

      <SubTitle>Statement examples</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ol>
          <li>
            They said, "We are studing English now".
            <ul>
              <li>They said (that) they were studing Englist then.</li>
              <li>They told us (that) they were studing Englist then.</li>
            </ul>
          </li>
          <li>
            Lan said, "I went to the zoo with my parents yesterday".
            <ul>
              <li>Lan said (that) she had gone to the zoo with her parent the day before.</li>
            </ul>
          </li>
          <li>
            Pete said, "I was doing my homework when she came".
            <ul>
              <li>Pete said (that) he had been doing his homework when she had come.</li>
            </ul>
          </li>
        </ol>
      </ContentBox>

      <SubTitle>Question examples</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
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
              <li>He asked me what was I doing the next Sunday.</li>
            </ul>
          </li>
          <li>
            The journalist asked, "How many survivors are there?".
            <ul>
              <li>The journalist asked me how many survivors there were.</li>
            </ul>
          </li>
        </ol>
      </ContentBox>
    </Box>
  );
}

export default ReportedSpeechPage;
