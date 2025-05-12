import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import WarningIcon from "@mui/icons-material/Warning";
import { Alert, AlertTitle, Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import SubTitle2 from "../components/SubTitle2";
import Title from "../components/Title";

function SimplePresentPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Simple Present Tense</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <Typography>Simple present describes:</Typography>
      <ul>
        <li>An action that happens regularly.</li>
        <li>A general truth.</li>
        <li>An event that is part of a timetable/schedule.</li>
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
            S + <HighlightSpan>is/am/are</HighlightSpan> + ...
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
            S + <HighlightSpan>is/am/are</HighlightSpan> + not + ...
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
            <HighlightSpan>is/am/are</HighlightSpan> + S + ... ?
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
            S + <HighlightSpan>V<sub>1/s/es</sub></HighlightSpan> + ...
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
            S + <HighlightSpan>do/does</HighlightSpan> + not + V + ...
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
            <HighlightSpan>do/does</HighlightSpan> + S + V + ... ?
          </Typography>
        </Box>
      </ContentBox>

      <SubTitle>When to use s or es</SubTitle>
      <p>Use <HighlightSpan>es</HighlightSpan> when verb end with these characters:</p>
      <ul>
        <li><HighlightSpan>o</HighlightSpan>: {"do => does, go => goes"}</li>
        <li><HighlightSpan>s</HighlightSpan>: {"miss => misses"}</li>
        <li><HighlightSpan>ch</HighlightSpan>: {"watch => watches"}</li>
        <li><HighlightSpan>x</HighlightSpan>: {"fix => fixes"}</li>
        <li><HighlightSpan>sh</HighlightSpan>: {"wash => washes"}</li>
      </ul>
      <p>Use <HighlightSpan>s</HighlightSpan> when verb does not end with those characters above.</p>

      <SubTitle>{t("Signs to recognize")}</SubTitle>
      <p>Adverbs of frequency:</p>
      <ul>
        <li>always = often</li>
        <li>usually = frequently</li>
        <li>generally = normally = regularly</li>
        <li>sometimes = occasionally</li>
        <li>rarely = seldom</li>
        <li>never</li>
      </ul>
      <Alert severity="info" variant="outlined" icon={<WarningIcon fontSize="inherit" />} sx={{ marginTop: 2 }}>
        <AlertTitle>Notice</AlertTitle>
        Sometime ≠ Sometimes
        <ul>
          <li>Sometime = one time, unspecified point in time</li>
          <li>Sometimes = some times, occasionally</li>
        </ul>
      </Alert>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          The sun <HighlightSpan>rises</HighlightSpan> in the East.
          <ul>
            <li>The sun <HighlightSpan>does</HighlightSpan> not rise in the East.</li>
            <li><HighlightSpan>Does</HighlightSpan> the sun rise in the East?</li>
          </ul>
        </li>
        <li>
          I often <HighlightSpan>go</HighlightSpan> to school by bike.
          <ul>
            <li>I <HighlightSpan>do</HighlightSpan> not go to school by bike.</li>
            <li><HighlightSpan>Do</HighlightSpan> I go to school by bike?</li>
          </ul>
        </li>
        <li>
          I <HighlightSpan>have</HighlightSpan> English class on Tuesday.
          <ul>
            <li>I <HighlightSpan>do</HighlightSpan> not have English class on Tuesday.</li>
            <li><HighlightSpan>Do</HighlightSpan> I have English class on Tuesday?</li>
          </ul>
        </li>
        <li>
          I <HighlightSpan>go</HighlightSpan> to school every day.
          <ul>
            <li>I <HighlightSpan>do</HighlightSpan> not go to school every day.</li>
            <li><HighlightSpan>Do</HighlightSpan> I go to school every day?</li>
          </ul>
        </li>
        <li>
          Hanoi <HighlightSpan>is</HighlightSpan> the capital of Vietnam.
          <ul>
            <li>Hanoi <HighlightSpan>is</HighlightSpan> not the capital of Vietnam.</li>
            <li><HighlightSpan>Is</HighlightSpan> Hanoi the capital of Vietnam?</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default SimplePresentPage;
