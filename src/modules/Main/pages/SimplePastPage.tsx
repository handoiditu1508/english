import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function SimplePastPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Simple Past Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Simple past describes:</Typography>
      <ul>
        <li>An action that started and finished in the past.</li>
        <li>A series of completed actions in the past.</li>
        <li>An action that happened regularly in the past.</li>
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
            S + <HighlightSpan>V<sub>ed/2</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>did</HighlightSpan> + not + V + ...
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
            <HighlightSpan>did</HighlightSpan> + S + V + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>Adverbs of frequency: alway, usually, sometime, often, rarely, seldom, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          I <HighlightSpan>went</HighlightSpan> to the store yesterday.
          <ul>
            <li>I <HighlightSpan>did</HighlightSpan> not go to the store yesterday.</li>
            <li><HighlightSpan>Did</HighlightSpan> I go to the store yesterday?</li>
          </ul>
        </li>
        <li>
          She <HighlightSpan>played</HighlightSpan> soccer last week.
          <ul>
            <li>She <HighlightSpan>did</HighlightSpan> not play soccer last week.</li>
            <li><HighlightSpan>Did</HighlightSpan> she play soccer last week?</li>
          </ul>
        </li>
        <li>
          They <HighlightSpan>visited</HighlightSpan> their grandparents last summer.
          <ul>
            <li>They <HighlightSpan>did</HighlightSpan> not visit their grandparents last summer.</li>
            <li><HighlightSpan>Did</HighlightSpan> they visit their grandparents last summer?</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default SimplePastPage;
