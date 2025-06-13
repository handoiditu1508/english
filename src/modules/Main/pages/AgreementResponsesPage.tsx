import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function AgreementResponsesPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("AgreementResponsesPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Agreement Responses")}</Title>

      <SubTitle>{tPage("Agreeing with positive statements")}</SubTitle>
      <p>A: I like swimming.</p>
      <p>B:</p>
      <ul>
        <li>Me too.</li>
        <li>So do I.</li>
        <li>I do, too.</li>
      </ul>

      <SubTitle>{tPage("Agreeing with negative statements")}</SubTitle>
      <p>A: I don't like swimming.</p>
      <p>B:</p>
      <ul>
        <li>Me neither.</li>
        <li>Neither do I.</li>
        <li>I don't either.</li>
      </ul>
    </Box>
  );
}

export default AgreementResponsesPage;
