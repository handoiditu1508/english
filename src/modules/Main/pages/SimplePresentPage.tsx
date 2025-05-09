import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function SimplePresentPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1, ...theme.typography.body1 }}>
      <Title>Simple Present Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Simple present describes:</Typography>
      <ul>
        <li>An action that happens regularly.</li>
        <li>A general truth.</li>
        <li>An event that is part of a timetable/schedule.</li>
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
            S + <HighlightSpan>V<sub>s/es</sub></HighlightSpan> + ...
          </Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
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
            S + <HighlightSpan>do/does</HighlightSpan> + not + V + ...
          </Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
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
            <HighlightSpan>do/does</HighlightSpan> + S + V + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>ago, last, yesterday, in (a year in the past), ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          The sun <HighlightSpan>rises</HighlightSpan> in the East.
          <ul>
            <li>The sun <HighlightSpan>does</HighlightSpan> not rise in the East.</li>
            <li><HighlightSpan>Does</HighlightSpan> the sun rise in the East?</li>
          </ul>
        </li>
        <li>
          I often <HighlightSpan>go</HighlightSpan> to school by bike.
          <ul>
            <li>I <HighlightSpan>do</HighlightSpan> not go to school by bike.</li>
            <li><HighlightSpan>Do</HighlightSpan> I go to school by bike?</li>
          </ul>
        </li>
        <li>
          I <HighlightSpan>have</HighlightSpan> English class on Tuesday.
          <ul>
            <li>I <HighlightSpan>do</HighlightSpan> not have English class on Tuesday.</li>
            <li><HighlightSpan>Do</HighlightSpan> I have English class on Tuesday?</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default SimplePresentPage;
