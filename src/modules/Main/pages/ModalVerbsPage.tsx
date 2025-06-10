import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ModalVerbsPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("ModalVerbsPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("title.Modal Verbs")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>May/Might</HighlightSpan>: có thể, lẽ.</li>
          <li><HighlightSpan>Must + [have to / has to]</HighlightSpan>: phải (bắt buộc).</li>
          <li><HighlightSpan>Mustn't</HighlightSpan>: không được phép (cấm).</li>
          <li><HighlightSpan>[Don't/Doesn't] + have to</HighlightSpan>: không phải làm gì đó.</li>
          <li><HighlightSpan>Needn't + V<sub>bare</sub></HighlightSpan>: không cần thiết làm gì đó.</li>
          <li><HighlightSpan>[Don't/Doesn't] + need + to V</HighlightSpan>: không cần thiết làm gì đó.</li>
        </ul>
      </ContentBox>

      <ContentBox boxMargin>
        <p>{tPage("Inference")}</p>
        <Divider />
        <Box sx={{ textAlign: "initial" }}>
          <ol>
            <li>
              {tPage("Present")}
              <p>{t("Example")}: Mary is absent today.</p>
              <ul>
                <li>(50%) She can be ill.</li>
                <li>(90%) She must have gone to the beach.</li>
              </ul>
            </li>
            <li>
              {tPage("Past")}
              <p>{t("Example")}: Mary was absent yesterday.</p>
              <ul>
                <li>(50%) She could have been ill.</li>
                <li>(90%) She must have gone to the beach.</li>
              </ul>
            </li>
          </ol>
        </Box>
      </ContentBox>

      <ContentBox boxMargin>
        <p>{tPage("Advice")}</p>
        <Divider />
        <Box sx={{ textAlign: "initial" }}>
          <ol>
            <li>
              {tPage("Present")}
              <p>{t("Example")}: You should study hard for the next exam.</p>
            </li>
            <li>
              {tPage("Past")} ({tPage("didnt happen")})
              <p>{t("Example")}: You should have studied hard for the midterm test.</p>
            </li>
          </ol>
        </Box>
      </ContentBox>
    </Box>
  );
}

export default ModalVerbsPage;
