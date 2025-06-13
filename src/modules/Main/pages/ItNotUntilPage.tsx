import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ItNotUntilPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("It Not Until")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox>
        <p><u>S + V</u><sub>(negative)</sub> + until + [clause/phrase]</p>
        <p>It [is/was] not until + [clause/phrase] + that + <u>S + V</u><sub>(affirmative)</sub></p>
      </ContentBox>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          The shop will not open until 10 o'clock.
          <ul>
            <li>It is not until 10 o'clock that the shop will open.</li>
          </ul>
        </li>
        <li>
          He didn't learn to read until he was 10.
          <ul>
            <li>It was not until he was 10 that he learned to read.</li>
          </ul>
        </li>
        <li>
          She didn't go to bed until her mother came home.
          <ul>
            <li>It was not until her mother came home that she went to bed.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default ItNotUntilPage;
