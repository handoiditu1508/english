import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReportedSpeechConversion } from "./models";

type ConversionTableProps = {
  conversions: ReportedSpeechConversion[];
};

function ConversionTable({ conversions }: ConversionTableProps) {
  const theme = useTheme();
  const { t: tPage } = useTranslation("ReportedSpeechPage");

  return (
    <TableContainer>
      <Table
        size="small"
        sx={{
          minWidth: 600,
          th: {
            color: theme.palette.primary.main,
          },
        }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">{tPage("Direct Speech")}</TableCell>
            <TableCell align="center">{tPage("Indirect Speech")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conversions.map((conversion, index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: theme.palette.action.hover,
                },
                "&:last-child td, &:last-child th": {
                  border: "none",
                },
              }}>
              <TableCell>{conversion.directSpeech}</TableCell>
              <TableCell>
                <ul>
                  {conversion.indirectSpeech.map((indirect, index) => (
                    <li key={index}>{indirect}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ConversionTable;
