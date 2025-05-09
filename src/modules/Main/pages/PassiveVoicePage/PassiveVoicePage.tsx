import { BreakpointsContext } from "@/contexts/breakpoints";
import { Box, Divider, Grid2, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import ContentBox from "../../components/ContentBox";
import HighlightCode from "../../components/HighlightCode";
import HighlightSpan from "../../components/HighlightSpan";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { otherExamples, tenseExamples } from "./constants";

function PassiveVoicePage() {
  const theme = useTheme();
  const { xs } = useContext(BreakpointsContext);

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Passive Voice</Title>

      <SubTitle>Tense's passive voice</SubTitle>
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
              <Divider variant="fullWidth" sx={{ marginY: 2 }} />
              <Box component="ul" textAlign="initial">
                {example.passiveForms.map((passiveForm, index) => (
                  <li key={index}>{passiveForm}</li>
                ))}
              </Box>
            </ContentBox>
          </Grid2>
        ))}
      </Grid2>

      <SubTitle>Modal verbs in passive voice</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>can/could/may/might/will</HighlightCode> + V<sub>bare</sub> + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>can/could/may/might/will</HighlightCode> be + V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider sx={{ marginY: 2 }} />
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>am/is/are</HighlightCode> going to V + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>am/is/are</HighlightCode> going to be V<sub>3/ed</sub> (by S)</li>
        </ul>
        <Divider sx={{ marginY: 2 }} />
        <ul>
          <li><HighlightSpan>Active</HighlightSpan>: S + <HighlightCode>has/have/had/ought</HighlightCode> to V + O</li>
          <li><HighlightSpan>Passive</HighlightSpan>: O + <HighlightCode>has/have/had/ought</HighlightCode> to be V<sub>3/ed</sub> (by S)</li>
        </ul>
      </ContentBox>
    </Box>
  );
}

export default PassiveVoicePage;
