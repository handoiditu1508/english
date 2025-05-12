import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PastPerfectPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Past Perfect Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Past perfect describes:</Typography>
      <ul>
        <li>An action that was completed before another action in the past.</li>
        <li>An action that was completed before a specific time in the past.</li>
        <li>An action that was completed before a specific event in the past.</li>
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
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>by the time, by this time, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>I <HighlightSpan>had finished</HighlightSpan> my homework before I went to bed last night.</li>
        <li>She <HighlightSpan>had</HighlightSpan> already <HighlightSpan>left</HighlightSpan> when I arrived at the party.</li>
        <li>They <HighlightSpan>had lived</HighlightSpan> in Paris for five years before they moved to London.</li>
        <li>He <HighlightSpan>had</HighlightSpan> never <HighlightSpan>seen</HighlightSpan> the ocean until he went to California.</li>
        <li>By the time she called, I <HighlightSpan>had</HighlightSpan> already <HighlightSpan>eaten</HighlightSpan> dinner.</li>
      </ol>
    </Box>
  );
}

export default PastPerfectPage;
