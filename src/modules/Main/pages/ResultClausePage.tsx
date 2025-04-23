import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExampleTabs from "../components/ExampleTabs";
import FormulaBox from "../components/FormulaBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ResultClausePage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Result Clause")}</Title>
      <SubTitle>{t("Structure")}</SubTitle>
      <FormulaBox>
        <Typography variant="subtitle1">S + V + <HighlightSpan>so adj that</HighlightSpan> + S + V</Typography>
      </FormulaBox>
      <SubTitle>{t("Examples")}</SubTitle>
      <ExampleTabs
        englishExample={
          <Box component="ol">
            <Typography component="li">Sarah was <HighlightSpan>so tired that</HighlightSpan> she fell asleep on the couch.</Typography>
            <Typography component="li">Tom studied <HighlightSpan>so hard that</HighlightSpan> he passed the exam with ease.</Typography>
            <Typography component="li">They ran <HighlightSpan>so fast that</HighlightSpan> they broke the school record.</Typography>
          </Box>
        }
        vietnameseExample={
          <Box component="ol">
            <Typography component="li">Sarah <HighlightSpan>mệt đến nỗi</HighlightSpan> cô ấy đã ngủ thiếp đi trên ghế sofa.</Typography>
            <Typography component="li">Tom học hành <HighlightSpan>chăm chỉ đến nỗi</HighlightSpan> anh ấy đã vượt qua kỳ thi một cách dễ dàng.</Typography>
            <Typography component="li">Họ chạy <HighlightSpan>nhanh đến nỗi</HighlightSpan> họ đã phá vỡ kỷ lục của trường.</Typography>
          </Box>
        }
      />
    </Box>
  );
}

export default ResultClausePage;
