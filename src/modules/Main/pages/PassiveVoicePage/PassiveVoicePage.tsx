import { BreakpointsContext } from "@/contexts/breakpoints";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box, Divider, Grid2, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ContentBox from "../../components/ContentBox";
import HighlightCode from "../../components/HighlightCode";
import HighlightSpan from "../../components/HighlightSpan";
import SubTitle from "../../components/SubTitle";
import SubTitle2 from "../../components/SubTitle2";
import Title from "../../components/Title";
import { otherExamples, tenseExamples } from "./constants";

function PassiveVoicePage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("PassiveVoicePage");
  const { xs } = useContext(BreakpointsContext);

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Passive Voice")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + V + O (+ Adv) (+ adverb of time)</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: O + be V<sub>3/ed</sub> (+ Adv) (+ by S) (+ adverb of time)</li>
        </ul>
      </ContentBox>

      <SubTitle>{tPage("How to conjugate be")}</SubTitle>
      <ol>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: V<sub>1/s/es</sub> / don't / doesn't</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: am / is / are</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: V<sub>2/ed</sub> / didn't</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: was / were</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: [am / is / are / was / were] + V<sub>ing</sub></p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: [am / is / are / was / were] + being</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: [has / have / had] + V<sub>3/ed</sub></p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: [has / have / had] + been</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: can / could / will / would / may / might/ ought to / be going to / have to + V<sub>1</sub></p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: [can / could / will / would / may / might/ ought to / be going to / have to] + be</p>
        </li>
      </ol>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>cleans</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>is cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>cleaned</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>was cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>is cleaning</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>is being cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>had cleaned</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>had been cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>must clean</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>must be cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>has to clean</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>has to be cleaned</HighlightSpan> by Mary.</p>
        </li>
        <li>
          <p><HighlightSpan>{t("Active")}</HighlightSpan>: Mary <HighlightSpan>is going to clean</HighlightSpan> the house.</p>
          <p><HighlightSpan>{t("Passive")}</HighlightSpan>: The house <HighlightSpan>is going to be cleaned</HighlightSpan> by Mary.</p>
        </li>
      </ol>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>{t("Note")}</AlertTitle>
        <ul>
          <li>{tPage("Omit")} <HighlightSpan>by [him/her/us/them]</HighlightSpan>.</li>
          <li>{tPage("Keep")} "by Mary", "by Tom" or "by my teacher".</li>
        </ul>
      </Alert>

      <SubTitle>{tPage("Passive voice for each tense")}</SubTitle>
      <Box sx={{ marginBottom: 2 }}>
        {xs
          ? (
            <Stack spacing={1}>
              {tenseExamples.map((example, index) => (
                <ContentBox key={index} sx={{ paddingBottom: 0 }}>
                  <Typography color="primary" fontWeight={500}>{t(example.tense)}</Typography>
                  <Divider variant="fullWidth" sx={{ marginTop: 2 }} />
                  <Table size="small" sx={{ th: { color: theme.palette.primary.main } }}>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder, fontWeight: 500 }}>
                          {tPage("Active Voice")}
                        </TableCell>
                        <TableCell align="center">{example.activeForm}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder, borderBottom: "none", fontWeight: 500 }}>
                          {t("Passive Voice")}
                        </TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none" }}>{example.passiveForm}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ContentBox>
              ))}
            </Stack>
          )
          : (
            <Table aria-label="tense example" size="small" sx={{ th: { color: theme.palette.primary.main } }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRight: theme.shape.smallBorder }}>{t("Tense")}</TableCell>
                  <TableCell align="center">{tPage("Active Voice")}</TableCell>
                  <TableCell align="center">{t("Passive Voice")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tenseExamples.map((example, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder }}>{t(example.tense)}</TableCell>
                    <TableCell align="center">{example.activeForm}</TableCell>
                    <TableCell align="center">{example.passiveForm}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
      </Box>

      <SubTitle>{tPage("Modal verbs in passive voice")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + <HighlightCode>can/could/may/might/will</HighlightCode> + V<sub>bare</sub> + O</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: O + <HighlightCode>can/could/may/might/will</HighlightCode> be + V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + <HighlightCode>am/is/are</HighlightCode> going to V<sub>bare</sub> + O</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: O + <HighlightCode>am/is/are</HighlightCode> going to be V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + <HighlightCode>has/have/had/ought</HighlightCode> to V<sub>bare</sub> + O</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: O + <HighlightCode>has/have/had/ought</HighlightCode> to be V<sub>3/ed</sub> (by S)</li>
        </ul>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          They can't make tea with cold water.
          <ul>
            <li>Tea can't be made with cold water.</li>
          </ul>
        </li>
        <li>
          They will hold the meeting before May Day.
          <ul>
            <li>The meeting will be held before May Day.</li>
          </ul>
        </li>
        <li>
          They have to repair the engine of the car.
          <ul>
            <li>The engine of the car has to be repaired.</li>
          </ul>
        </li>
        <li>
          They may use this room for the classroom.
          <ul>
            <li>The room may be used for the classroom.</li>
          </ul>
        </li>
        <li>
          You must clean the wall before you paint it.
          <ul>
            <li>The wall must be cleaned before you paint it.</li>
          </ul>
        </li>
        <li>
          Will you invite her to your wedding party?
          <ul>
            <li>Will she be invited to your wedding party?</li>
          </ul>
        </li>
        <li>
          Is she going to write a poem?
          <ul>
            <li>Is a poem going to be written?</li>
          </ul>
        </li>
        <li>
          Must we finish the test before ten?
          <ul>
            <li>Must the test be finished before ten?</li>
          </ul>
        </li>
        <li>
          How can they open this safe?
          <ul>
            <li>How can this safe be opened?</li>
          </ul>
        </li>
        <li>
          Someone will tell him that news.
          <ul>
            <li>That news will be told to him.</li>
          </ul>
        </li>
        <li>
          My friend can answer this question.
          <ul>
            <li>This question can be answered by my friend.</li>
          </ul>
        </li>
        <li>
          The manager should sign these contracts today.
          <ul>
            <li>These contracts should be signed by the manager today.</li>
          </ul>
        </li>
        <li>
          My parents are going to buy a car tomorrow.
          <ul>
            <li>A car is going to be bought by my parents tomorrow.</li>
          </ul>
        </li>
        <li>
          The teacher is going to tell a story.
          <ul>
            <li>A story is going to be told by the teacher.</li>
          </ul>
        </li>
        <li>
          We must take good care of books borrowed from the library.
          <ul>
            <li>Books borrowed from the library must be taken good care of.</li>
          </ul>
        </li>
        <li>
          We can never find him at home for he is always on the move.
          <ul>
            <li>He can never be found at home for he is always on the move.</li>
          </ul>
        </li>
        <li>
          They have to do this job at once.
          <ul>
            <li>This job has to be done at once.</li>
          </ul>
        </li>
        <li>
          French doctors are going to perform the operation.
          <ul>
            <li>The operation is going to be performed by French doctors.</li>
          </ul>
        </li>
        <li>
          Someone must have stolen the jewelry while she was out.
          <ul>
            <li>The jewelry must have been stolen while she was out.</li>
          </ul>
        </li>
        <li>
          You must wash this dress in cold water.
          <ul>
            <li>This dress must be washed in cold water.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{tPage("Causative form")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + <HighlightCode>have/has/had</HighlightCode> + [someone] + V<sub>bare</sub> + [something]</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: S + <HighlightCode>have/has/had</HighlightCode> + [something] + V<sub>3/ed</sub> (by [someone])</li>
          <li><HighlightSpan>{tPage("Active example")}</HighlightSpan>: She had the plumber fix the sink.</li>
          <li><HighlightSpan>{tPage("Passive example")}</HighlightSpan>: She had the sink fixed (by the plumber).</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>{t("Active")}</HighlightSpan>: S + <HighlightCode>get/gets/got</HighlightCode> + [someone] + to V<sub>bare</sub> + [something]</li>
          <li><HighlightSpan>{t("Passive")}</HighlightSpan>: S + <HighlightCode>get/gets/got</HighlightCode> + [something] + V<sub>3/ed</sub> (by [someone])</li>
          <li><HighlightSpan>{tPage("Active example")}</HighlightSpan>: They got the lawyer to sign the documents.</li>
          <li><HighlightSpan>{tPage("Passive example")}</HighlightSpan>: They got the documents signed (by the lawyer).</li>
        </ul>
      </ContentBox>

      <SubTitle>{tPage("Other examples")}</SubTitle>
      <Grid2 container spacing={1}>
        {otherExamples.map((example, index) => (
          <Grid2
            key={index}
            size={{
              xs: 12,
              md: 6,
              xl: 4,
            }}>
            <ContentBox sx={{ height: "100%", boxSizing: "border-box" }}>
              <Typography color="primary" fontWeight={500}>{example.activeForm}</Typography>
              <Divider />
              <Box component="ul" textAlign="initial">
                {example.passiveForms.map((passiveForm, index) => (
                  <li key={index}>{passiveForm}</li>
                ))}
              </Box>
            </ContentBox>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default PassiveVoicePage;
