import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import FormulaBox from "../components/FormulaBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PastPerfectPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1, ...theme.typography.body1 }}>
      <Title>Past Perfect Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Past perfect describes:</Typography>
      <ul>
        <li>An action that was completed before another action in the past.</li>
        <li>An action that was completed before a specific time in the past.</li>
        <li>An action that was completed before a specific event in the past.</li>
      </ul>

      <SubTitle>{t("Structure")}</SubTitle>
      <FormulaBox>
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
            S + <HighlightSpan>had</HighlightSpan> + <HighlightSpan>V<sub>ed/3</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>had</HighlightSpan> + not + <HighlightSpan>V<sub>ed/3</sub></HighlightSpan> + ...
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
            <HighlightSpan>had</HighlightSpan> + S + <HighlightSpan>V<sub>ed/3</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </FormulaBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>by the time, by this time, ...</Typography>
      {/*
      example:
      I had finished my homework before I went to bed last night.
       */}
    </Box>
  );
}

export default PastPerfectPage;
