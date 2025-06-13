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

function SimplePastPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("SimplePastPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{tPage("Simple Past Tense")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>{tPage("The simple past tense describes")}:</Typography>
      <ul>
        <li>{tPage("concept-description-1")}</li>
        <li>{tPage("concept-description-2")}</li>
        <li>{tPage("concept-description-3")}</li>
      </ul>

      <SubTitle>{t("Structure")}</SubTitle>

      <SubTitle2>To be</SubTitle2>
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
            S + <HighlightSpan>was/were</HighlightSpan> + ...
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
            S + <HighlightSpan>was/were</HighlightSpan> + not + ...
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
            <HighlightSpan>was/were</HighlightSpan> + S + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle2>Verb</SubTitle2>
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
            S + <HighlightSpan>did</HighlightSpan> + not + V + ...
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
            <HighlightSpan>did</HighlightSpan> + S + V + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <ul>
        <li>ago</li>
        <li>last [week/month/year/etc.]</li>
        <li>yesterday</li>
        <li>in the past</li>
        <li>in [a year in the past]</li>
        <li>when I was young</li>
      </ul>

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
        <li>
          I <HighlightSpan>woke</HighlightSpan> up early, <HighlightSpan>brushed</HighlightSpan> my teeth,&nbsp;
          <HighlightSpan>ate</HighlightSpan> breakfast, and <HighlightSpan>left</HighlightSpan> for work.
        </li>
      </ol>
    </Box>
  );
}

export default SimplePastPage;
