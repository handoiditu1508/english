import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

const SubTitle3 = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export default SubTitle3;
