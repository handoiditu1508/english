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

function PresentContinuousPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("PresentContinuousPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Present Continuous Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The present continuous tense describes")}:</Typography>
      <ol>
        <li>{tPage("concept-content-1")}.</li>
        <li>{tPage("concept-content-2")}.</li>
        <li>{tPage("concept-content-3")}.</li>
        <li>{tPage("concept-content-4")}.</li>
      </ol>

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
            S + <HighlightSpan>am/is/are</HighlightSpan> + not + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ...
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
            <HighlightSpan>am/is/are</HighlightSpan> + S + <HighlightSpan>V<sub>ing</sub></HighlightSpan> + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>1. {tPage("concept-content-1")}</SubTitle>

      <SubTitle2>{t("Signs to recognize")}</SubTitle2>
      <ul>
        <li>now</li>
        <li>right now</li>
        <li>at the moment</li>
        <li>at present</li>
        <li>at this time</li>
        <li>be quiet</li>
        <li>careful</li>
      </ul>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>I <HighlightSpan>am studying</HighlightSpan> English now.</li>
        <li>He <HighlightSpan>is playing</HighlightSpan> football now.</li>
        <li>They <HighlightSpan>are</HighlightSpan> not <HighlightSpan>going</HighlightSpan> to the cinema now.</li>
        <li>What <HighlightSpan>are</HighlightSpan> you <HighlightSpan>doing</HighlightSpan> now?</li>
        <li>Be quiet! The baby <HighlightSpan>is sleeping</HighlightSpan> in the room.</li>
      </ol>

      <SubTitle>2. {tPage("concept-content-2")}</SubTitle>

      <SubTitle2>{t("Signs to recognize")}</SubTitle2>
      <ul>
        <li>arrive</li>
        <li>come</li>
        <li>fly</li>
        <li>go</li>
        <li>travel</li>
      </ul>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>I <HighlightSpan>am attending</HighlightSpan> a party at 7 pm Saturday.</li>
        <li>I <HighlightSpan>am leaving</HighlightSpan> tomorrow.</li>
        <li>She <HighlightSpan>is going</HighlightSpan> to Spain next week.</li>
      </ol>

      <SubTitle>3. {tPage("concept-content-3")}</SubTitle>

      <SubTitle2>{t("Signs to recognize")}</SubTitle2>
      <ul>
        <li>always</li>
        <li>all the time</li>
        <li>forever</li>
        <li>continually</li>
        <li>constantly</li>
      </ul>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>He <HighlightSpan>is</HighlightSpan> always <HighlightSpan>borrowing</HighlightSpan> our books.</li>
        <li>You <HighlightSpan>are talking</HighlightSpan> in class all the time.</li>
      </ol>

      <SubTitle>4. {tPage("concept-content-4")}</SubTitle>

      <SubTitle2>{t("Examples")}</SubTitle2>
      <ol>
        <li>This month, her parents are on business, so she <HighlightSpan>is staying</HighlightSpan> with her best friend.</li>
        <li>I always go to school by bus, but today I <HighlightSpan>am driving</HighlightSpan> a car.</li>
      </ol>
    </Box>
  );
}

export default PresentContinuousPage;
