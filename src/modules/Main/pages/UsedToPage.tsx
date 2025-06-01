import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import Title from "../components/Title";

function UsedToPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Use / Used To / Be Used To</Title>

      <SubTitle>Use</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        <Box sx={{ textAlign: "initial", display: "inline-block" }}>
          <p><HighlightSpan>Active</HighlightSpan>: S + use + N + to V</p>
          <p><HighlightSpan>Passive</HighlightSpan>:</p>
          <ul>
            <li>S + be used + to V</li>
            <li>S + be used + for V<sub>ing</sub></li>
          </ul>
        </Box>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>
          I use this pen to write this lesson.
          <ul>
            <li>This pen is used <HighlightSpan>to write</HighlightSpan> this lesson.</li>
            <li>This pen is used <HighlightSpan>for writting</HighlightSpan> this lesson.</li>
          </ul>
        </li>
      </ol>

      <SubTitle>Used to</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
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
            S + <HighlightSpan>used to</HighlightSpan> + V<sub>1</sub>
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
            S + didn't + <HighlightSpan>use to</HighlightSpan> + V<sub>1</sub>
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
            did + S + <HighlightSpan>use to</HighlightSpan> + S + V<sub>1</sub> ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>My father <HighlightSpan>used to</HighlightSpan> play football very well when he was young.</li>
        <li>I didn't <HighlightSpan>use to</HighlightSpan> get up early last year.</li>
      </ol>

      <SubTitle>Be used to</SubTitle>

      <SubTitle2>{t("Structure")}</SubTitle2>
      <ContentBox>
        S + <HighlightSpan>be/get used to</HighlightSpan> + <HighlightSpan>V<sub>ing</sub>/N</HighlightSpan>
      </ContentBox>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>She <HighlightSpan>is used to</HighlightSpan> doing morning exercises.</li>
        <li>Tourists <HighlightSpan>are not used to</HighlightSpan> the hot weather.</li>
        <li>Last year, I <HighlightSpan>wasn't used to</HighlightSpan> working at night.</li>
      </ol>
    </Box>
  );
}

export default UsedToPage;
