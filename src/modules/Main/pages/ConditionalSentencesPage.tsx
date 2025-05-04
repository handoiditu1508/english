import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ConditionalSentencesPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Conditional Sentences</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 1000,
            th: {
              color: theme.palette.primary.main,
            },
            "td:not(:last-child), th:not(:last-child)": {
              borderRight: theme.shape.smallBorder,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">If Clause</TableCell>
              <TableCell align="center">Main Clause</TableCell>
              <TableCell align="center">Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Real present/future</TableCell>
              <TableCell>
                Simple present
                <br />(V<sub>s/es</sub>)
              </TableCell>
              <TableCell>
                <ul>
                  <li>will/can + V<sub>bare</sub></li>
                  <li>Simple present (truth)</li>
                  <li>V<sub>bare</sub> (no Subject)</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>have</HighlightSpan> a lot of money, I <HighlightSpan>will buy</HighlightSpan> a car.</li>
                  <li>If you <HighlightSpan>add</HighlightSpan> one and one, it <HighlightSpan>is</HighlightSpan> two.</li>
                  <li>If you <HighlightSpan>go</HighlightSpan> out, please <HighlightSpan>close</HighlightSpan> the door.</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Unreal present</TableCell>
              <TableCell>
                Simple past
                <br />(V<sub>2/ed</sub>)
              </TableCell>
              <TableCell>would/could + V<sub>bare</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If she <HighlightSpan>had</HighlightSpan> enough time, she <HighlightSpan>would do</HighlightSpan> that.</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Unreal past</TableCell>
              <TableCell>
                Past perfect
                <br />(had + V<sub>3/ed</sub>)
              </TableCell>
              <TableCell>would/could + have + V<sub>3/ed</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If he <HighlightSpan>had gone</HighlightSpan> to the meeting yesterday, he <HighlightSpan>would have met</HighlightSpan> her.</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" rowSpan={2}>Mixed</TableCell>
              <TableCell>
                V<sub>2/ed</sub>
                <br />{"(Present => Past)"}
              </TableCell>
              <TableCell>would/could + have + V<sub>3/ed</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>was/were</HighlightSpan> you, I <HighlightSpan>would have attended</HighlightSpan> the party <HighlightSpan>last night</HighlightSpan>.</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                had V<sub>3/ed</sub>
                <br />{"(Past => Present)"}
              </TableCell>
              <TableCell>would/could + V<sub>bare</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>hadn't stayed</HighlightSpan> up late lastnight, I <HighlightSpan>wouldn't be</HighlightSpan> tired <HighlightSpan>now</HighlightSpan>.</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SubTitle>Special cases</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ol>
          <li>
            If I <HighlightSpan>have</HighlightSpan> a lot of money, I <HighlightSpan>will buy</HighlightSpan> that car.
            <ul>
              <li><HighlightSpan>Should I have</HighlightSpan> a lot of money, I will buy that car.</li>
            </ul>
          </li>
          <li>
            If she <HighlightSpan>had</HighlightSpan> enough time now, she <HighlightSpan>would do</HighlightSpan> that.
            <ul>
              <li><HighlightSpan>Were she to have</HighlightSpan> enough time now, she would do that.</li>
            </ul>
            If I <HighlightSpan>were</HighlightSpan> you, I <HighlightSpan>wouldn't buy</HighlightSpan> that book.
            <ul>
              <li><HighlightSpan>Were I you</HighlightSpan>, I wouldn't buy that book.</li>
            </ul>
          </li>
          <li>
            If he <HighlightSpan>had gone</HighlightSpan> to the meeting yesterday, he <HighlightSpan>would have met</HighlightSpan> her.
            <ul>
              <li><HighlightSpan>Had he gone</HighlightSpan> to the meeting yesterday, he would have met her.</li>
            </ul>
          </li>
        </ol>
      </ContentBox>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>Note</AlertTitle>
        If not = Unless
      </Alert>
    </Box>
  );
}

export default ConditionalSentencesPage;
