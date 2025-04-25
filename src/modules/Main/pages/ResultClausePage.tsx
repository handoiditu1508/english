import { Box, Divider } from "@mui/material";
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
        <p>S + V + <HighlightSpan>so + adj + that</HighlightSpan> + S + V</p>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
        <p>S + V + <HighlightSpan>such (a/an) + adj + N + that</HighlightSpan> + S + V</p>
      </FormulaBox>
      <SubTitle>{t("Examples")}</SubTitle>
      <ExampleTabs
        englishExample={
          <ol>
            <li>
              The ice was thick. There was no danger of the skater falling through.
              <ul>
                <li>The ice was <HighlightSpan>so thick that</HighlightSpan> there was no danger of the skater falling through.</li>
                <li>It was <HighlightSpan>such thick ice that</HighlightSpan> there was no danger of the skater falling through.</li>
              </ul>
            </li>
            <li>
              She looked ill. Her parents took her to the hospital.
              <ul>
                <li>She looked <HighlightSpan>so ill that</HighlightSpan> her parents took her to the hospital.</li>
                <li>It was <HighlightSpan>such an ill look that</HighlightSpan> her parents took her to the hospital.</li>
              </ul>
            </li>
            <li>
              The bath was relaxing. He went to sleep in it.
              <ul>
                <li>The bath was <HighlightSpan>so relaxing that</HighlightSpan> he went to sleep in it.</li>
                <li>It was <HighlightSpan>such a relaxing bath that</HighlightSpan> he went to sleep in it.</li>
              </ul>
            </li>
            <li>
              They were surprised. They could hardly speak.
              <ul>
                <li>They were <HighlightSpan>so surprised that</HighlightSpan> they could hardly speak.</li>
                <li>It was <HighlightSpan>such a surprise that</HighlightSpan> they could hardly speak.</li>
              </ul>
            </li>
            <li>
              He sounded sorry. I just had to forgive him.
              <ul>
                <li>He sounded <HighlightSpan>so sorry that</HighlightSpan> I just had to forgive him.</li>
                <li>It was <HighlightSpan>such a sorry sound that</HighlightSpan> I just had to forgive him.</li>
              </ul>
            </li>
            <li>
              I was excited about going away. I couldn't sleep.
              <ul>
                <li>I was <HighlightSpan>so excited about going away that</HighlightSpan> I couldn't sleep.</li>
                <li>Going away is <HighlightSpan>so exciting that</HighlightSpan> I couldn't sleep</li>
                <li>It was <HighlightSpan>such an exciting thought about going away that</HighlightSpan> I couldn't sleep.</li>
              </ul>
            </li>
            <li>
              The water was very dirty. We decided not to go swimming.
              <ul>
                <li>The water was <HighlightSpan>so dirty that</HighlightSpan> we decided not to go swimming.</li>
                <li>It was <HighlightSpan>such dirty water that</HighlightSpan> we decided not to go swimming.</li>
              </ul>
            </li>
            <li>
              She speaks English very well. You would think it was her native language.
              <ul>
                <li>She speaks English <HighlightSpan>so well that</HighlightSpan> you would think it was her native language.</li>
                <li>It is <HighlightSpan>such good English that</HighlightSpan> you would think it was her native language.</li>
                <li>She is <HighlightSpan>such a good English speaker that</HighlightSpan> you would think it was her native language.</li>
              </ul>
            </li>
            <li>
              The road is <HighlightSpan>so narrow that</HighlightSpan> it's difficult for two cars to pass each other.
              <ul>
                <li>It is <HighlightSpan>such a narrow road that</HighlightSpan> it's difficult for two cars to pass each other.</li>
              </ul>
            </li>
            <li>
              The weather was <HighlightSpan>so warm that</HighlightSpan> I didn't need a coat.
              <ul>
                <li>It was <HighlightSpan>such warm weather that</HighlightSpan> I didn't need a coat.</li>
              </ul>
            </li>
          </ol>
        }
        vietnameseExample={
          <ol>
            <li>
              Băng rất dày. Không có nguy hiểm cho người trượt băng bị rơi xuống.
              <ul>
                <li>Băng <HighlightSpan>dày đến mức mà</HighlightSpan> không có nguy hiểm cho người trượt băng bị rơi xuống.</li>
                <li>Đó là <HighlightSpan>một lớp băng dày đến mức mà</HighlightSpan> không có nguy hiểm cho người trượt băng bị rơi xuống.</li>
              </ul>
            </li>
            <li>
              Cô ấy trông ốm. Cha mẹ cô ấy đã đưa cô ấy đến bệnh viện.
              <ul>
                <li>Cô ấy trông <HighlightSpan>ốm đến mức mà</HighlightSpan> cha mẹ cô ấy đã đưa cô ấy đến bệnh viện.</li>
                <li>Đó là <HighlightSpan>một vẻ ốm yếu đến mức mà</HighlightSpan> cha mẹ cô ấy đã đưa cô ấy đến bệnh viện.</li>
              </ul>
            </li>
            <li>
              Bồn tắm rất thư giãn. Anh ấy đã ngủ trong đó.
              <ul>
                <li>Bồn tắm <HighlightSpan>thư giãn đến mức mà</HighlightSpan> anh ấy đã ngủ trong đó.</li>
                <li>Đó là <HighlightSpan>một bồn tắm thư giãn đến mức mà</HighlightSpan> anh ấy đã ngủ trong đó.</li>
              </ul>
            </li>
            <li>
              Họ rất ngạc nhiên. Họ hầu như không thể nói được.
              <ul>
                <li>Họ <HighlightSpan>ngạc nhiên đến mức mà</HighlightSpan> họ hầu như không thể nói được.</li>
                <li>Đó là <HighlightSpan>một sự ngạc nhiên đến mức mà</HighlightSpan> họ hầu như không thể nói được.</li>
              </ul>
            </li>
            <li>
              Anh ấy nghe có vẻ hối lỗi. Tôi chỉ phải tha thứ cho anh ấy.
              <ul>
                <li>Anh ấy nghe có vẻ <HighlightSpan>hối lỗi đến mức mà</HighlightSpan> tôi chỉ phải tha thứ cho anh ấy.</li>
                <li>Đó là <HighlightSpan>một âm thanh hối lỗi đến mức mà</HighlightSpan> tôi chỉ phải tha thứ cho anh ấy.</li>
              </ul>
            </li>
            <li>
              Tôi rất hào hứng về việc đi xa. Tôi không thể ngủ được.
              <ul>
                <li>Tôi <HighlightSpan>hào hứng về việc đi xa đến mức mà</HighlightSpan> tôi không thể ngủ được.</li>
                <li>Việc đi xa <HighlightSpan>thú vị đến mức mà</HighlightSpan> tôi không thể ngủ được.</li>
                <li>Đó là <HighlightSpan>một ý nghĩ thú vị về việc đi xa đến mức mà</HighlightSpan> tôi không thể ngủ được.</li>
              </ul>
            </li>
            <li>
              Nước rất bẩn. Chúng tôi quyết định không đi bơi.
              <ul>
                <li>Nước <HighlightSpan>bẩn đến mức mà</HighlightSpan> chúng tôi quyết định không đi bơi.</li>
                <li>Đó là <HighlightSpan>một dòng nước bẩn đến mức mà</HighlightSpan> chúng tôi quyết định không đi bơi.</li>
              </ul>
            </li>
            <li>
              Cô ấy nói tiếng Anh rất tốt. Bạn sẽ nghĩ đó là ngôn ngữ mẹ đẻ của cô ấy.
              <ul>
                <li>Cô ấy nói tiếng Anh <HighlightSpan>tốt đến mức mà</HighlightSpan> bạn sẽ nghĩ đó là ngôn ngữ mẹ đẻ của cô ấy.</li>
                <li>Đó là <HighlightSpan>một Tiếng Anh tốt đến mức mà</HighlightSpan> bạn sẽ nghĩ đó là ngôn ngữ mẹ đẻ của cô ấy.</li>
                <li>Cô ấy là <HighlightSpan>một người nói Tiếng Anh giỏi đến mức mà</HighlightSpan> bạn sẽ nghĩ đó là ngôn ngữ mẹ đẻ của cô ấy.</li>
              </ul>
            </li>
            <li>
              Con đường <HighlightSpan>hẹp đến mức mà</HighlightSpan> rất khó để hai chiếc xe đi qua nhau.
              <ul>
                <li>Đó là <HighlightSpan>một con đường hẹp đến mức mà</HighlightSpan> rất khó để hai chiếc xe đi qua nhau.</li>
              </ul>
            </li>
            <li>
              Thời tiết <HighlightSpan>ấm đến mức mà</HighlightSpan> tôi không cần áo khoác.
              <ul>
                <li>Đó là <HighlightSpan>một thời tiết ấm đến mức mà</HighlightSpan> tôi không cần áo khoác.</li>
              </ul>
            </li>
          </ol>
        }
      />
    </Box>
  );
}

export default ResultClausePage;
