import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PresentPerfectContinuosPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1, ...theme.typography.body1 }}>
      <Title>Present Perfect Continuos Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Present perfect continuos describes:</Typography>
      <ul>
        <li>An action that started in the past and is still continuing.</li>
        <li>An action that started in the past and has just finished.</li>
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
            S + <HighlightSpan>has/have been</HighlightSpan> + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>has/have</HighlightSpan> + not + <HighlightSpan>been</HighlightSpan> + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            <HighlightSpan>has/have</HighlightSpan> + S + <HighlightSpan>been</HighlightSpan> + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>for (a length of time), since (a starting point), lately, recently, all day, all week, ...</Typography>
      {/*
      example:
      They have been living here since 2010.
      I'm tired because I have been running.
      I’ve been reading for two hours.
       */}
    </Box>
  );
}

export default PresentPerfectContinuosPage;
