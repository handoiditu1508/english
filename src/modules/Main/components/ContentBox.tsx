import { Box, styled } from "@mui/material";

const ContentBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  textAlign: "center",
  border: theme.shape.largeBorder,
}));

export default ContentBox;
