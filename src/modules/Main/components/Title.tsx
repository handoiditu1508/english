import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

const Title = styled((props: TypographyProps) => <Typography variant="h1" {...props} />)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderBottom: theme.vars.shape.mediumBorder,
}));

export default Title;
