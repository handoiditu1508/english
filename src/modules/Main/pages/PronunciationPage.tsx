import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function PronunciationPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("PronunciationPage");

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("title.Pronunciation")}</Title>

      <SubTitle>{tPage("Pronunciation of")} -s / -es</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 600,
            th: {
              color: theme.palette.primary.main,
            },
            "td:not(:last-child), th:not(:last-child)": {
              borderRight: theme.shape.smallBorder,
            },
          }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">{tPage("Word ends with")}</TableCell>
              <TableCell align="center">{tPage("Sound")}</TableCell>
              <TableCell align="center">{t("Examples")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>-s, -ss, -sh, -ch, -x, -z</TableCell>
              <TableCell>/iz/</TableCell>
              <TableCell>watches, wishes, boxes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Voiceless sounds: -p, -t, -k, -f</TableCell>
              <TableCell>/s/</TableCell>
              <TableCell>cups, hits, books, roofs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Voiced sounds (all other endings)</TableCell>
              <TableCell>/z/</TableCell>
              <TableCell>dogs, plays, pens, loves</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SubTitle>{tPage("Pronunciation of")} -ed</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 600,
            th: {
              color: theme.palette.primary.main,
            },
            "td:not(:last-child), th:not(:last-child)": {
              borderRight: theme.shape.smallBorder,
            },
          }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">{tPage("Word ends with")}</TableCell>
              <TableCell align="center">{tPage("Sound")}</TableCell>
              <TableCell align="center">{t("Examples")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>-t or -d</TableCell>
              <TableCell>/id/</TableCell>
              <TableCell>wanted, needed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Voiceless sounds: -p, -k, -f, -s, -sh, -ch, -x</TableCell>
              <TableCell>/t/</TableCell>
              <TableCell>kissed, washed, laughed, fixed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Voiced sounds (the rest)</TableCell>
              <TableCell>/d/</TableCell>
              <TableCell>played, opened, cleaned</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PronunciationPage;
