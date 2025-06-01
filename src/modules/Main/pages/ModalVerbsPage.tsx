import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function ModalVerbsPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Modal Verbs</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <ContentBox sx={{ textAlign: "initial" }}>
        <ul>
          <li><HighlightSpan>May/Might</HighlightSpan>: có thể, có lẻ.</li>
          <li><HighlightSpan>Must + have/has to</HighlightSpan>: phải (bắt buộc).</li>
          <li><HighlightSpan>Mustn't + have/has to</HighlightSpan>: không được phép (cấm).</li>
          <li><HighlightSpan>Do/Doesn't + have to</HighlightSpan>: không phải làm gì đó.</li>
          <li><HighlightSpan>Needn't + V<sub>bare</sub></HighlightSpan>: không cần thiết làm gì đó.</li>
          <li><HighlightSpan>Do/Doesn't + need + to V</HighlightSpan>: không cần thiết làm gì đó.</li>
        </ul>
      </ContentBox>

      <ContentBox boxMargin>
        <p>Infer</p>
        <Divider />
        <Box sx={{ textAlign: "initial" }}>
          <ol>
            <li>
              Present
              <p>Example: Mary is absent today.</p>
              <ul>
                <li>(50%) She can be ill.</li>
                <li>(90%) She must go to the beach.</li>
              </ul>
            </li>
            <li>
              Past
              <p>Example: Mary was absent yesterday.</p>
              <ul>
                <li>(50%) She could have been ill.</li>
                <li>(90%) She must have gone to the beach.</li>
              </ul>
            </li>
          </ol>
        </Box>
      </ContentBox>

      <ContentBox boxMargin>
        <p>Advise</p>
        <Divider />
        <Box sx={{ textAlign: "initial" }}>
          <ol>
            <li>
              Present
              <p>Example: You should study hard for the next exam.</p>
            </li>
            <li>
              Past (didn't happen)
              <p>Example: You should have studied hard for the midterm test.</p>
            </li>
          </ol>
        </Box>
      </ContentBox>
    </Box>
  );
}

export default ModalVerbsPage;
