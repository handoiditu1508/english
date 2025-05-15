import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function TheAdjPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>The + Adj</Title>

      <SubTitle>{t("Examples")}</SubTitle>
      <ul>
        <li><HighlightSpan>The rich = rich people</HighlightSpan> - người giàu</li>
        <li><HighlightSpan>The poor = poor people</HighlightSpan> - người nghèo</li>
        <li><HighlightSpan>The blind = blind people</HighlightSpan> - người mù</li>
        <li><HighlightSpan>The young = young people</HighlightSpan> - người trẻ tuổi</li>
        <li><HighlightSpan>The old = old people</HighlightSpan> - người già</li>
        <li><HighlightSpan>The sick = sick people</HighlightSpan> - người bệnh</li>
        <li><HighlightSpan>The injured = injured people</HighlightSpan> - người bị thương</li>
        <li><HighlightSpan>The unemployed = unemployed people</HighlightSpan> - người thất nghiệp</li>
        <li><HighlightSpan>The deaf = deaf people</HighlightSpan> - người điếc</li>
        <li><HighlightSpan>The disabled = disabled people</HighlightSpan> - người khuyết tật</li>
        <li><HighlightSpan>The dead = dead people</HighlightSpan> - người chết</li>
        <li><HighlightSpan>The homeless = homeless people</HighlightSpan> - người vô gia cư</li>
        <li><HighlightSpan>The mental handicapped = mental handicapped people</HighlightSpan> - người chậm phát triển trí tuệ</li>
      </ul>
    </Box>
  );
}

export default TheAdjPage;
