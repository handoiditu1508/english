import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PastContinuousPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("PastContinuousPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Past Continuous Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The past continuous tense describes")}:</Typography>
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
            S + <HighlightSpan>was/were</HighlightSpan> + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>was/were</HighlightSpan> + not + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            <HighlightSpan>was/were</HighlightSpan> + S + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <Typography>while, at the time, at this time, but, etc.</Typography>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          I was reading a book. The phone rang.
          <ul>
            <li>I <HighlightSpan>was reading</HighlightSpan> a book when the phone rang.</li>
            <li>The phone rang while I <HighlightSpan>was reading</HighlightSpan> a book.</li>
          </ul>
        </li>
        <li>
          She was cooking dinner. The doorbell rang.
          <ul>
            <li>She <HighlightSpan>was cooking</HighlightSpan> dinner when the doorbell rang.</li>
            <li>The doorbell rang while she <HighlightSpan>was cooking</HighlightSpan> dinner.</li>
          </ul>
        </li>
        <li>
          They were playing football. It started to rain.
          <ul>
            <li>They <HighlightSpan>were playing</HighlightSpan> football when it started to rain.</li>
            <li>It started to rain while they <HighlightSpan>were playing</HighlightSpan> football.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default PastContinuousPage;
