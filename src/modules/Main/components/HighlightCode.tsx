import { styled } from "@mui/material/styles";

const HighlightCode = styled("code")(({ theme }) => ({
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.contrastTextChannel} / 0.5)`,
  paddingLeft: "0.2em",
  paddingRight: "0.2em",
  borderRadius: "0.2em",
  ...theme.applyStyles("light", {
    boxShadow: theme.vars.shadows[1],
  }),
}));

export default HighlightCode;
