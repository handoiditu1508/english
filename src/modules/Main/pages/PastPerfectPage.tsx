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
  const { t: tPage } = useTranslation("PastPerfectPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Past Perfect Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The past perfect tense describes")}:</Typography>
      <ul>
        <li>{tPage("concept-description-1")}</li>
        <li>{tPage("concept-description-2")}</li>
        <li>{tPage("concept-description-3")}</li>
      </ul>
      <p>{tPage("The prior action uses")} <HighlightSpan>had + V3</HighlightSpan>; {tPage("the latter action uses")} <HighlightSpan>V<sub>2</sub> ({t("Simple Past")})</HighlightSpan>.</p>

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
            S + <HighlightSpan>had</HighlightSpan> + not + <HighlightSpan>V<sub>ed/3</sub></HighlightSpan> + ...
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

      <SubTitle>{t("Notes")}</SubTitle>

      <ContentBox boxMargin>when + [Simple Past], [Simple Past]</ContentBox>
      <p>{tPage("note-1")}</p>
      <p>{t("Example")}:</p>
      <ul>
        <li>When he <HighlightSpan>opened</HighlightSpan> the window, the bird <HighlightSpan>flew</HighlightSpan> out.</li>
      </ul>

      <ContentBox boxMargin>[when / as soon as / once] + [Past Perfect], [Simple Past]</ContentBox>
      <p>{tPage("note-2")}</p>
      <p>{t("Example")}:</p>
      <ul>
        <li>When he <HighlightSpan>had finished</HighlightSpan> his homework, he <HighlightSpan>went</HighlightSpan> out.</li>
      </ul>

      <ContentBox boxMargin>[Past Perfect] before [Simple Past]</ContentBox>
      <p>{t("Example")}:</p>
      <ul>
        <li>They <HighlightSpan>had been</HighlightSpan> rich before they <HighlightSpan>came</HighlightSpan> here.</li>
      </ul>

      <ContentBox boxMargin>[Simple Past] after [Past Perfect]</ContentBox>
      <p>{t("Example")}:</p>
      <ul>
        <li>They <HighlightSpan>came</HighlightSpan> here after they <HighlightSpan>had been</HighlightSpan> rich.</li>
      </ul>

      <ContentBox boxMargin>by the time + [Simple Past], [Past Perfect]</ContentBox>
      <p>{t("Example")}:</p>
      <ul>
        <li>By the time we <HighlightSpan>got</HighlightSpan> there, the film <HighlightSpan>had started</HighlightSpan>.</li>
      </ul>
    </Box>
  );
}

export default PastPerfectPage;
