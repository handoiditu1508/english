import { Box, Table, TableBody, TableCell, TableContainer, TableRow, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

function WishClausesPage() {
  const { t } = useTranslation();
  const { t: tPage } = useTranslation("WishClausesPage");
  const theme = useTheme();

  return (
    <Box sx={{ padding: 1 }}>
      <Title>{t("Wish Clauses")}</Title>

      <SubTitle>{t("Structure")}</SubTitle>
      <TableContainer>
        <Table
          size="small"
          sx={{
            minWidth: 1000,
            th: {
              color: theme.palette.primary.main,
            },
            "td:not(:last-child), th:not(:last-child)": {
              borderRight: theme.shape.smallBorder,
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">{tPage("Wish at the present")}</TableCell>
              <TableCell>
                <p>S + wish + S + Past</p>
                <p>S + wish + S + Past Continuous</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">{tPage("Wish in the future")}</TableCell>
              <TableCell>
                <p>S + wish + S + [would / could] + V</p>
                <p>S + wish + S + were going to + V</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">{tPage("Wish in the past")}</TableCell>
              <TableCell>
                <p>S + wish + S + had + V<sub>3</sub></p>
                <p>S + wish + S + had been + V<sub>ing</sub></p>
                <p>S + wish + S + [would / could / might] + have + V<sub>3</sub></p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SubTitle>{t("Examples")}</SubTitle>
      <ol>
        <li>I wish I had a car.</li>
        <li>I wish she were studying with us now.</li>
        <li>I wish it would stop raining.</li>
        <li>We wish we could travel abroad this year.</li>
        <li>She wishes he were going to join the meeting.</li>
        <li>I wish I had studied harder.</li>
        <li>She wishes she had been paying attention during the lecture.</li>
        <li>I wish she would have told me the truth.</li>
        <li>He wishes they could have helped him.</li>
        <li>We wish it might have turned out differently.</li>
      </ol>
    </Box>
  );
}

export default WishClausesPage;
