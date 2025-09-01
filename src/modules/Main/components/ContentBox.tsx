import Box, { BoxProps } from "@mui/material/Box";
import { dividerClasses } from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

export type ContentBoxProps = BoxProps & {
  boxMargin?: boolean;
};

const ContentBox = styled((props: ContentBoxProps) => <Box {...props} />, {
  shouldForwardProp: (prop) => prop !== "boxMargin",
})(({ theme, boxMargin }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  border: theme.vars.shape.largeBorder,
  [`.${dividerClasses.root}`]: {
    margin: theme.spacing(2, -2),
  },
  ...(boxMargin && {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }),
}));

export default ContentBox;
