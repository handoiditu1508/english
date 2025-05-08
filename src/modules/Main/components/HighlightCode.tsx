import { styled } from "@mui/material";

const HighlightCode = styled("code")(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: `rgba(${theme.palette.primary.contrastTextChannel} / 0.5)`,
  paddingLeft: "0.2em",
  paddingRight: "0.2em",
  borderRadius: "0.2em",
  ...theme.applyStyles("light", {
    boxShadow: theme.shadows[1],
  }),
}));

export default HighlightCode;
