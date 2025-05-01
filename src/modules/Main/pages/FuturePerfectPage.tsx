import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function FuturePerfectPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1, ...theme.typography.body1 }}>
      <Title>Future Perfect Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Future perfect describes:</Typography>
      <ul>
        <li>An action that will be completed before a specific time in the future.</li>
        <li>An action that will be completed before another action in the future.</li>
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
            S + <HighlightSpan>will have</HighlightSpan> + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>will have</HighlightSpan> + not + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ...
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
            <HighlightSpan>will</HighlightSpan> + S + <HighlightSpan>have</HighlightSpan> + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>by the time, by the end of, by next week/month/year, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ContentBox sx={{
        textAlign: "initial",
      }}>
        <ol>
          <li>They <HighlightSpan>will have built</HighlightSpan> the bridge by the end of this year.</li>
        </ol>
      </ContentBox>
    </Box>
  );
}

export default FuturePerfectPage;
