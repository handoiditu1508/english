import { styled, Typography, TypographyProps } from "@mui/material";

const SubTitle2 = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export default SubTitle2;
