import { BreakpointsContext } from "@/contexts/breakpoints";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Alert, AlertTitle, Box, Divider, Grid2, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ContentBox from "../../components/ContentBox";
import HighlightCode from "../../components/HighlightCode";
import HighlightSpan from "../../components/HighlightSpan";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { otherExamples, tenseExamples } from "./constants";

function PassiveVoicePage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { xs } = useContext(BreakpointsContext);

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Passive Voice</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + V + O (+ Adv) (+ adverb of time)</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + be V<sub>3/ed</sub> (+ Adv) (+ by S) (+ adverb of time)</li>
        </ul>
      </ContentBox>

      <SubTitle>How to conjugate be</SubTitle>
      <ol>
        <li>
          V<sub>1/s/es</sub> / don't / doesn't
          <ul>
            <li>am / is / are</li>
          </ul>
        </li>
        <li>
          V<sub>2/ed</sub> / didn't
          <ul>
            <li>was / were</li>
          </ul>
        </li>
        <li>
          [am / is / are / was / were] + V<sub>ing</sub>
          <ul>
            <li>[am / is / are / was / were] + being</li>
          </ul>
        </li>
        <li>
          [has / have / had] + V<sub>3/ed</sub>
          <ul>
            <li>[has / have / had] + been</li>
          </ul>
        </li>
        <li>
          can / could / will / would / may / might/ ought to / be going to / have to + V<sub>1</sub>
          <ul>
            <li>[can / could / will / would / may / might/ ought to / be going to / have to] + be</li>
          </ul>
        </li>
      </ol>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          Mary <HighlightSpan>cleans</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>is cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>cleaned</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>was cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>is cleaning</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>is being cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>had cleaned</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>had been cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>must clean</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>must be cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>has to clean</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>has to be cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
        <li>
          Mary <HighlightSpan>is going to clean</HighlightSpan> the house.
          <ul>
            <li>The house <HighlightSpan>is going to be cleaned</HighlightSpan> by Mary.</li>
          </ul>
        </li>
      </ol>

      <Alert severity="info" variant="outlined" icon={<TipsAndUpdatesIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>Note</AlertTitle>
        <ul>
          <li>Omit <HighlightSpan>by [him/her/us/them]</HighlightSpan>.</li>
          <li>Keep "by Mary", "by Tom" or "by my teacher".</li>
        </ul>
      </Alert>

      <SubTitle>Passive voice for each tense</SubTitle>
      <Box sx={{ marginBottom: 2 }}>
        {xs
          ? (
            <Stack spacing={1}>
              {tenseExamples.map((example, index) => (
                <ContentBox key={index} sx={{ paddingBottom: 0 }}>
                  <Typography color="primary" fontWeight={500}>{example.tense}</Typography>
                  <Divider variant="fullWidth" sx={{ marginTop: 2 }} />
                  <Table size="small" sx={{ th: { color: theme.palette.primary.main } }}>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder, fontWeight: 500 }}>
                          Active Voice
                        </TableCell>
                        <TableCell align="center">{example.activeForm}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder, borderBottom: "none", fontWeight: 500 }}>
                          Passive Voice
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
                  <TableCell sx={{ borderRight: theme.shape.smallBorder }}>Tense</TableCell>
                  <TableCell align="center">Active Voice</TableCell>
                  <TableCell align="center">Passive Voice</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tenseExamples.map((example, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" sx={{ borderRight: theme.shape.smallBorder }}>{example.tense}</TableCell>
                    <TableCell align="center">{example.activeForm}</TableCell>
                    <TableCell align="center">{example.passiveForm}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
      </Box>

      <SubTitle>Modal verbs in passive voice</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>can/could/may/might/will</HighlightCode> + V<sub>bare</sub> + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>can/could/may/might/will</HighlightCode> be + V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>am/is/are</HighlightCode> going to V<sub>bare</sub> + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>am/is/are</HighlightCode> going to be V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>has/have/had/ought</HighlightCode> to V<sub>bare</sub> + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>has/have/had/ought</HighlightCode> to be V<sub>3/ed</sub> (by S)</li>
        </ul>
      </ContentBox>

      <SubTitle>Causative constructions</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>have/has/had</HighlightCode> + [someone] + V<sub>bare</sub> + [something]</li>
          <li><HighlightSpan>Passive</HighlightSpan>: S + <HighlightCode>have/has/had</HighlightCode> + [something] + V<sub>3/ed</sub> (by [someone])</li>
          <li><HighlightSpan>Active example</HighlightSpan>: She had the plumber fix the sink.</li>
          <li><HighlightSpan>Passive example</HighlightSpan>: She had the sink fixed (by the plumber).</li>
        </ul>
        <Divider />
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>get/gets/got</HighlightCode> + [someone] + to V<sub>bare</sub> + [something]</li>
          <li><HighlightSpan>Passive</HighlightSpan>: S + <HighlightCode>get/gets/got</HighlightCode> + [something] + V<sub>3/ed</sub> (by [someone])</li>
          <li><HighlightSpan>Active example</HighlightSpan>: They got the lawyer to sign the documents.</li>
          <li><HighlightSpan>Passive example</HighlightSpan>: They got the documents signed (by the lawyer).</li>
        </ul>
      </ContentBox>

      <SubTitle>Other examples</SubTitle>
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
