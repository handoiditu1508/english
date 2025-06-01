import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Table, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function SimpleFuturePage() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Simple Future Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Simple future describes:</Typography>
      <ul>
        <li>An action that will happen in the future.</li>
        <li>A instant decision.</li>
      </ul>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingX: 2,
        }}>
          <AddCircleOutlineIcon
            color="success"
            fontSize="large"
            sx={{
              flexGrow: 0,
              flexShrink: 0,
            }}
          />
          <Typography sx={{
            flex: 1,
          }}>
            S + <HighlightSpan>will</HighlightSpan> + V + ...
          </Typography>
        </Box>
        <Divider />
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingX: 2,
        }}>
          <RemoveCircleOutlineIcon
            color="error"
            fontSize="large"
            sx={{
              flexGrow: 0,
              flexShrink: 0,
            }}
          />
          <Typography sx={{
            flex: 1,
          }}>
            S + <HighlightSpan>will</HighlightSpan> + not + V + ...
          </Typography>
        </Box>
        <Divider />
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingX: 2,
        }}>
          <HelpOutlineIcon
            color="info"
            fontSize="large"
            sx={{
              flexGrow: 0,
              flexShrink: 0,
            }}
          />
          <Typography sx={{
            flex: 1,
          }}>
            <HighlightSpan>will</HighlightSpan> + S + V + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>tomorrow, next week, in a few days, soon, later, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>I <HighlightSpan>will</HighlightSpan> go to the beach tomorrow.</li>
        <li>I <HighlightSpan>will</HighlightSpan> go with you.</li>
        <li>I <HighlightSpan>will</HighlightSpan> not go to the beach tomorrow.</li>
        <li><HighlightSpan>Will</HighlightSpan> I go to the beach tomorrow?</li>
      </ol>

      <SubTitle>These tenses can be used to describe about future</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 700,
            th: {
              color: theme.palette.primary.main,
            },
            td: {
              verticalAlign: "top",
            },
            "td:not(:last-child), th:not(:last-child)": {
              borderRight: theme.shape.smallBorder,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">will + V<sub>1</sub></TableCell>
              <TableCell align="center">be going to + V<sub>1</sub></TableCell>
              <TableCell align="center">be + V<sub>ing</sub></TableCell>
              <TableCell align="center">V<sub>s/es</sub></TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>
              That boat doesn't strong. It will sink if there is a storm.
              <ul>
                <li>Subjective prediction.</li>
              </ul>
            </TableCell>
            <TableCell>
              The explosion has maded a hole in the bottom of the boat. It is going to sink.
              <ul>
                <li>Prediction based on evidence that can be seen or heard clearly.</li>
              </ul>
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>
              I will go to the cinema next week.
              <ul>
                <li>Action decided at the moment of speaking.</li>
              </ul>
            </TableCell>
            <TableCell>
              I am going to go to the cinema next week.
              <ul>
                <li>Action planned before the moment of speaking.</li>
              </ul>
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>
              It is going to rain tomorrow.
              <ul>
                <li>Talk about natural events (human can not control).</li>
              </ul>
            </TableCell>
            <TableCell>
              I am having a party tonight.
              <ul>
                <li>Action planned before the moment of speaking (human can control).</li>
              </ul>
            </TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell>
              The train leaves at 10pm tomorrow. We land at midnight.
              <ul>
                <li>Future scheduled events such as timetables, TV shows, ...</li>
              </ul>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SimpleFuturePage;
