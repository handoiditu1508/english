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
  const { t: tPage } = useTranslation("ConditionalSentencesPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Conditional Sentences")}</Title>

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
              <TableCell align="center">{tPage("If Clause")}</TableCell>
              <TableCell align="center">{tPage("Main Clause")}</TableCell>
              <TableCell align="center">{t("Example")}</TableCell>
              <TableCell align="center">Advs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {tPage("Present future real condition")}
                <br />({tPage("conditional type", { typeNumber: 1 })})
              </TableCell>
              <TableCell>
                Simple present
                <br />(S + V<sub>s/es</sub>)
                <br />(be: am/is/are)
              </TableCell>
              <TableCell>
                <ul>
                  <li>S + will/can + V<sub>bare</sub></li>
                  <li>Simple present (truth)</li>
                  <li>S + V<sub>bare</sub> (no Subject)</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>have</HighlightSpan> a lot of money, I <HighlightSpan>will buy</HighlightSpan> a car.</li>
                  <li>If you <HighlightSpan>add</HighlightSpan> one and one, it <HighlightSpan>is</HighlightSpan> two.</li>
                  <li>If you <HighlightSpan>go</HighlightSpan> out, please <HighlightSpan>close</HighlightSpan> the door.</li>
                </ul>
              </TableCell>
              <TableCell>
                next
                <br />tomorrow
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                {tPage("Present unreal condition")}
                <br />({tPage("conditional type", { typeNumber: 2 })})
              </TableCell>
              <TableCell>
                Simple past
                <br />(S + V<sub>2/ed</sub>)
                <br />(be: were)
              </TableCell>
              <TableCell>S + would/could + V<sub>bare</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If she <HighlightSpan>had</HighlightSpan> enough time, she <HighlightSpan>would do</HighlightSpan> that.</li>
                </ul>
              </TableCell>
              <TableCell>
                today
                <br />now
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                {tPage("Past unreal condition")}
                <br />({tPage("conditional type", { typeNumber: 3 })})
              </TableCell>
              <TableCell>
                Past perfect
                <br />(S + had + V<sub>3/ed</sub>)
                <br />(be: had been)
              </TableCell>
              <TableCell>S + would/could + have + V<sub>3/ed</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If he <HighlightSpan>had gone</HighlightSpan> to the meeting yesterday, he <HighlightSpan>would have met</HighlightSpan> her.</li>
                </ul>
              </TableCell>
              <TableCell>
                yesterday
                <br />last
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" rowSpan={2}>{tPage("Mixed")}</TableCell>
              <TableCell>
                S + V<sub>2/ed</sub>
                <br />{"(Present => Past)"}
              </TableCell>
              <TableCell>S + would/could + have + V<sub>3/ed</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>was/were</HighlightSpan> you, I <HighlightSpan>would have attended</HighlightSpan> the party <HighlightSpan>last night</HighlightSpan>.</li>
                </ul>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>
                S + had V<sub>3/ed</sub>
                <br />{"(Past => Present)"}
              </TableCell>
              <TableCell>S + would/could + V<sub>bare</sub></TableCell>
              <TableCell>
                <ul>
                  <li>If I <HighlightSpan>hadn't stayed</HighlightSpan> up late lastnight, I <HighlightSpan>wouldn't be</HighlightSpan> tired <HighlightSpan>now</HighlightSpan>.</li>
                </ul>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SubTitle>{tPage("Special cases")}</SubTitle>
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
        <AlertTitle>{t("Note")}</AlertTitle>
        "If not" = "Unless"
      </Alert>

      <SubTitle>{tPage("Transform to if sentence")}</SubTitle>
      <ol>
        <li>{tPage("transform-description-1")}</li>
        <li>
          {tPage("transform-description-2")}
          <ul>
            <li>{tPage("transform-description-2-1")}: <HighlightSpan>{tPage("conditional type", { typeNumber: 1 })}</HighlightSpan>.</li>
            <li>{tPage("transform-description-2-2")}: <HighlightSpan>{tPage("conditional type", { typeNumber: 2 })}</HighlightSpan>.</li>
            <li>{tPage("transform-description-2-3")}: <HighlightSpan>{tPage("conditional type", { typeNumber: 3 })}</HighlightSpan>.</li>
          </ul>
        </li>
        <li>{tPage("transform-description-3")}</li>
      </ol>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          She gets bad marks because she is lazy.
          <ul>
            <li>If she weren't lazy, she wouldn't get bad marks.</li>
          </ul>
        </li>
        <li>
          It rained heavily, this is why we came to school late.
          <ul>
            <li>If it hadn't rained heavily, we wouldn't have come to school late.</li>
          </ul>
        </li>
        <li>
          Tom was ill, so he didn't go to school yesterday.
          <ul>
            <li>If Tom had not been ill, he would have gone to school yesterday.</li>
          </ul>
        </li>
        <li>
          You must do your homework or you will be punished.
          <ul>
            <li>If you don't do your homework, you will be punished.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default ConditionalSentencesPage;
