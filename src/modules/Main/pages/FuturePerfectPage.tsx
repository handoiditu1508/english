import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function FuturePerfectPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("FuturePerfectPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Future Perfect Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The future perfect tense describes")}:</Typography>
      <ul>
        <li>{tPage("concept-description-1")}</li>
        <li>{tPage("concept-description-2")}</li>
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
            S + <HighlightSpan>will have</HighlightSpan> + not + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ...
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
            <HighlightSpan>will</HighlightSpan> + S + <HighlightSpan>have</HighlightSpan> + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>by the time, by the end of, by next week/month/year, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>They <HighlightSpan>will have built</HighlightSpan> the bridge by the end of this year.</li>
      </ol>
    </Box>
  );
}

export default FuturePerfectPage;
