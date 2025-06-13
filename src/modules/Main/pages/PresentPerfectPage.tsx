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
  const { t: tPage } = useTranslation("PresentPerfectPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Present Perfect Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The present perfect tense describes")}:</Typography>
      <ul>
        <li>{tPage("concept-description-1")}</li>
        <li>{tPage("concept-description-2")}</li>
        <li>{tPage("concept-description-3")}</li>
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
        <li>for + [a period of time]</li>
        <li>since + [a point in time]</li>
        <li>lately = recently</li>
        <li>yet</li>
        <li>just</li>
        <li>already</li>
        <li>up to now</li>
        <li>so far</li>
        <li>in the last [number] years</li>
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
        <li>She <HighlightSpan>hasn't</HighlightSpan> <HighlightSpan>called</HighlightSpan> me yet.</li>
        <li>They <HighlightSpan>have</HighlightSpan> not <HighlightSpan>visited</HighlightSpan> us since last year.</li>
      </ol>
    </Box>
  );
}

export default PresentPerfectPage;
