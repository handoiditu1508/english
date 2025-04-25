import { Box, styled } from "@mui/material";

const FormulaBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  textAlign: "center",
  border: theme.shape.largeBorder,
  ...theme.typography.body1,
}));

export default FormulaBox;
