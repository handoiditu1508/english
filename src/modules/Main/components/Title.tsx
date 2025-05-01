import { styled, Typography, TypographyProps } from "@mui/material";

const Title = styled((props: TypographyProps) => <Typography variant="h1" {...props} />)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderBottom: theme.shape.mediumBorder,
}));

export default Title;
