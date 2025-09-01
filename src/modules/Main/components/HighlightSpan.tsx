import { styled } from "@mui/material/styles";

const HighlightSpan = styled("span")(({ theme }) => ({
  color: theme.vars.palette.primary.main,
}));

export default HighlightSpan;
