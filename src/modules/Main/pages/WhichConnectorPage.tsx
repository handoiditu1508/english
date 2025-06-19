import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function WhichConnectorPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("WhichConnectorPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Which as a Connector")}</Title>

      <SubTitle>{t("Concept")}</SubTitle>
      <p>{tPage("concept-description-1")}</p>
      <p>{tPage("concept-description-2")}</p>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>
          Mary couldn't come to the party. It was a pity.
          <ul>
            <li><HighlightSpan>Mary couldn't come to the party</HighlightSpan>, <HighlightSpan>which</HighlightSpan> was a pity.</li>
          </ul>
        </li>
        <li>
          Tom got good marks at school. This pleased his parents.
          <ul>
            <li><HighlightSpan>Tom got good marks at school</HighlightSpan>, <HighlightSpan>which</HighlightSpan> pleased his parents.</li>
          </ul>
        </li>
        <li>
          You always come late. I don't like it.
          <ul>
            <li><HighlightSpan>You always come late</HighlightSpan>, <HighlightSpan>which</HighlightSpan> I don't like.</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default WhichConnectorPage;
