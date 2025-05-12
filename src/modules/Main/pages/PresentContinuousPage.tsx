import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PresentContinuousPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Present Continuous Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Present continuous describes:</Typography>
      <ul>
        <li>An action that is happening at the moment of speaking.</li>
        <li>An action that is happening in the present but is not permanent.</li>
        <li>A plan that is certain to happen in the future.</li>
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
            S + <HighlightSpan>am/is/are</HighlightSpan> + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>am/is/am</HighlightSpan> + not + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            <HighlightSpan>am/is/are</HighlightSpan> + S + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>(right) now, at the moment, at present, ...</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>I <HighlightSpan>am studying</HighlightSpan> English now.</li>
        <li>I always go to school by bus, but today I <HighlightSpan>am driving</HighlightSpan> a car.</li>
        <li>I <HighlightSpan>am attending</HighlightSpan> a party at 7 pm Saturday.</li>
        <li>He <HighlightSpan>is playing</HighlightSpan> football now.</li>
        <li>They <HighlightSpan>are</HighlightSpan> not <HighlightSpan>going</HighlightSpan> to the cinema now.</li>
      </ol>
    </Box>
  );
}

export default PresentContinuousPage;
