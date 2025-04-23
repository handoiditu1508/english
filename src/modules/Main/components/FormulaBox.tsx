import { Box, styled } from "@mui/material";

const FormulaBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  border: theme.shape.largeBorder,
}));

export default FormulaBox;
