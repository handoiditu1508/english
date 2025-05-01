import { BreakpointsContext } from "@/contexts/breakpoints";
import { Box, Divider, Grid2, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import ContentBox from "../../components/ContentBox";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { PassiveVoiceExample, TensePassiveVoiceExample } from "./model";

const tenseExamples: TensePassiveVoiceExample[] = [
  {
    tense: "Simple Present",
    activeForm: "She makes a cake every Sunday.",
    passiveForm: "A cake is made (by her) every Sunday.",
  },
  {
    tense: "Present Continuous",
    activeForm: "She is making a cake right now.",
    passiveForm: "A cake is being made (by her) right now.",
  },
  {
    tense: "Present Perfect",
    activeForm: "She has made a cake since 7 AM.",
    passiveForm: "A cake has been made (by her) since 7 AM.",
  },
  {
    tense: "Simple Past",
    activeForm: "She made a cake yesterday.",
    passiveForm: "A cake was made (by her) yesterday.",
  },
  {
    tense: "Past Continuous",
    activeForm: "She was making a cake at 5 PM yesterday.",
    passiveForm: "A cake was being made (by her) at 5 PM yesterday.",
  },
  {
    tense: "Past Perfect",
    activeForm: "She had made a cake before she went to bed yesterday.",
    passiveForm: "A cake had been made (by her) before she went to bed yesterday.",
  },
  {
    tense: "Simple Future",
    activeForm: "She will make a cake tomorrow.",
    passiveForm: "A cake will be made (by her) tomorrow.",
  },
  {
    tense: "Future Continuous",
    activeForm: "She will be making a cake at 5 PM tomorrow.",
    passiveForm: "A cake will be being made (by her) at 5 PM tomorrow.",
  },
  {
    tense: "Future Perfect",
    activeForm: "She will have made a cake by 7 PM tomorrow.",
    passiveForm: "A cake will have been made (by her) by 7 PM tomorrow.",
  },
  {
    tense: "Present Perfect Continuous",
    activeForm: "She has been making a cake since 7 AM.",
    passiveForm: "A cake has been being made (by her) since 7 AM.",
  },
];

const otherExamples: PassiveVoiceExample[] = [
  {
    activeForm: "People say that Dan & Anh study English very well.",
    passiveForms: [
      "It is said that Dan & Anh study English very well.",
      "Dan & Anh are said to study English very well.",
      "English is said to be studied very well by Dan & Anh.",
    ],
  },
  {
    activeForm: "They believe that Japan has produced many kinds of cars.",
    passiveForms: [
      "It is believed that Japan has produced many kinds of cars.",
      "Japan is believed to have produced many kinds of cars.",
      "Many kinds of cars are believed to have been produced by Japan.",
    ],
  },
  {
    activeForm: "They think that Mary is making a cake right now.",
    passiveForms: [
      "It is thought that Mary is making a cake right now.",
      "Mary is thought to be making a cake right now.",
      "A cake is thought to be being made by Mary right now.",
    ],
  },
];

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
    </Box>
  );
}

export default PassiveVoicePage;
