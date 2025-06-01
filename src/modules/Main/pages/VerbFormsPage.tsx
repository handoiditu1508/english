import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import HighlightSpan from "../components/HighlightSpan";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function VerbFormsPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>Verb Forms</Title>

      <SubTitle>{t("Structure")} 1</SubTitle>
      <ContentBox boxMargin><HighlightSpan>V</HighlightSpan> + (O) + V<sub>bare</sub></ContentBox>
      <ul>
        <li><HighlightSpan>let</HighlightSpan> - để</li>
        <li><HighlightSpan>make</HighlightSpan> - làm, khiến</li>
        <li><HighlightSpan>help</HighlightSpan> - giúp</li>
        <li><HighlightSpan>would rather</HighlightSpan> - thích</li>
        <li><HighlightSpan>had better = should</HighlightSpan> - nên</li>
        <li><HighlightSpan>used to</HighlightSpan> - đã từng</li>
      </ul>

      <SubTitle>{t("Structure")} 2</SubTitle>
      <ContentBox boxMargin><HighlightSpan>V</HighlightSpan> + V<sub>ing</sub></ContentBox>
      <ul>
        <li><HighlightSpan>enjoy</HighlightSpan> - thích</li>
        <li><HighlightSpan>finish</HighlightSpan> - hoàn thành</li>
        <li><HighlightSpan>miss</HighlightSpan> - mong nhớ</li>
        <li><HighlightSpan>give up</HighlightSpan> - bỏ cuộc</li>
        <li><HighlightSpan>practise = practice</HighlightSpan> - luyện tập</li>
        <li><HighlightSpan>avoid</HighlightSpan> - tránh xa</li>
        <li><HighlightSpan>find</HighlightSpan> - tìm</li>
        <li><HighlightSpan>mind</HighlightSpan> - phiền</li>
        <li><HighlightSpan>delay = postpone</HighlightSpan> - hoãn lại, trì hoãn</li>
        <li><HighlightSpan>suggest</HighlightSpan> - đề nghị</li>
        <li><HighlightSpan>keep</HighlightSpan> - giữ</li>
        <li><HighlightSpan>prefer Ving to Ving</HighlightSpan> - thích cái gì hơn cái gì</li>
        <li><HighlightSpan>look forward to</HighlightSpan> - trông mong</li>
        <li><HighlightSpan>be/get used to</HighlightSpan> - quen với</li>
        <li><HighlightSpan>be busy</HighlightSpan> - bận rộn</li>
        <li><HighlightSpan>be worth</HighlightSpan> - xứng đáng</li>
        <li><HighlightSpan>can't help</HighlightSpan> - không thể dừng lại</li>
        <li><HighlightSpan>It's no good/use</HighlightSpan> - không tốt, không hiệu quả</li>
        <li><HighlightSpan>would you mind</HighlightSpan> - bạn có muốn, bạn có phiền</li>
        <li><HighlightSpan>have difficulty/trouble</HighlightSpan> - gặp khó khăn, gặp rắc rối</li>
      </ul>

      <SubTitle>{t("Structure")} 3</SubTitle>
      <ContentBox boxMargin><HighlightSpan>V</HighlightSpan> + (O) + to V</ContentBox>
      <ul>
        <li><HighlightSpan>help</HighlightSpan> - giúp</li>
        <li><HighlightSpan>hope</HighlightSpan> - hi vọng</li>
        <li><HighlightSpan>ask</HighlightSpan> - hỏi, yêu cầu</li>
        <li><HighlightSpan>want</HighlightSpan> - muốn</li>
        <li><HighlightSpan>tell</HighlightSpan> - nói</li>
        <li><HighlightSpan>plan</HighlightSpan> - lên kế hoạch</li>
        <li><HighlightSpan>arrange</HighlightSpan> - sắp xếp</li>
        <li><HighlightSpan>decide</HighlightSpan> - quyết định</li>
        <li><HighlightSpan>warn</HighlightSpan> - cảnh báo</li>
        <li><HighlightSpan>would like</HighlightSpan> - muốn</li>
        <li><HighlightSpan>seem</HighlightSpan> - dường như</li>
        <li><HighlightSpan>too ... to</HighlightSpan> - quá ... đến nỗi</li>
        <li><HighlightSpan>enough ... to</HighlightSpan> - đủ ... để</li>
        <li><HighlightSpan>what/how + to V</HighlightSpan></li>
        <li><HighlightSpan>Adj + to V</HighlightSpan></li>
        <li><HighlightSpan>it take(s) + (O) + to V</HighlightSpan></li>
      </ul>

      <SubTitle>{t("Structure")} 4</SubTitle>
      <ol>
        <li>
          <HighlightSpan>stop</HighlightSpan>
          <ul>
            <li><HighlightSpan>V<sub>ing</sub></HighlightSpan> - ngưng hẳn</li>
            <li><HighlightSpan>to V</HighlightSpan> - ngưng để</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>try</HighlightSpan>
          <ul>
            <li><HighlightSpan>V<sub>ing</sub></HighlightSpan> - thử</li>
            <li><HighlightSpan>to V</HighlightSpan> - cố gắng</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>need</HighlightSpan>
          <ul>
            <li><HighlightSpan>V<sub>ing</sub></HighlightSpan> - cần được làm (chủ ngữ thường là vật)</li>
            <li><HighlightSpan>to V</HighlightSpan> - cần phải làm (chủ ngữ thường là người)</li>
          </ul>
        </li>
        <li>
          <HighlightSpan>remember/forget/regret</HighlightSpan>
          <ul>
            <li><HighlightSpan>V<sub>ing</sub></HighlightSpan> - chỉ việc đã làm rồi</li>
            <li><HighlightSpan>to V</HighlightSpan> - chỉ việc chưa/sẽ làm</li>
          </ul>
        </li>
      </ol>
    </Box>
  );
}

export default VerbFormsPage;
