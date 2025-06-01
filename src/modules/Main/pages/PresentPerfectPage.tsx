import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PresentPerfectPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Present Perfect Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Present perfect describes:</Typography>
      <ul>
        <li>An action that started in the past and continues to the present.</li>
        <li>An action that happened at an unspecified time in the past.</li>
        <li>An action just happened.</li>
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
            S + <HighlightSpan>has/have</HighlightSpan> + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>has/have</HighlightSpan> + not + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ...
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
            <HighlightSpan>has/have</HighlightSpan> + S + <HighlightSpan>V<sub>3/ed</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <ul>
        <li>for + (a period of time)</li>
        <li>since + (a moment in time)</li>
        <li>lately = recently</li>
        <li>yet</li>
        <li>just</li>
        <li>already</li>
        <li>up to now</li>
        <li>so far</li>
        <li>in the last (quantity) years</li>
        <li>never</li>
        <li>ever</li>
      </ul>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>I <HighlightSpan>have eaten</HighlightSpan> breakfast.</li>
        <li>She <HighlightSpan>has lived</HighlightSpan> in Paris for 5 years.</li>
        <li>They <HighlightSpan>have</HighlightSpan> just <HighlightSpan>finished</HighlightSpan> their homework.</li>
        <li>We <HighlightSpan>have</HighlightSpan> already <HighlightSpan>seen</HighlightSpan> that movie.</li>
        <li>He <HighlightSpan>has</HighlightSpan> never <HighlightSpan>been</HighlightSpan> to London.</li>
        <li><HighlightSpan>Have</HighlightSpan> you ever <HighlightSpan>tried</HighlightSpan> sushi?</li>
        <li>She <HighlightSpan>has</HighlightSpan>n't <HighlightSpan>called</HighlightSpan> me yet.</li>
        <li>They <HighlightSpan>have</HighlightSpan> not <HighlightSpan>visited</HighlightSpan> us since last year.</li>
      </ol>
    </Box>
  );
}

export default PresentPerfectPage;
