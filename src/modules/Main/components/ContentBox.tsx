import { Box, BoxProps, dividerClasses, styled } from "@mui/material";

export type ContentBoxProps = BoxProps & {
  boxMargin?: boolean;
};

const ContentBox = styled((props: ContentBoxProps) => <Box {...props} />, {
  shouldForwardProp: (prop) => prop !== "boxMargin",
})(({ theme, boxMargin }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  border: theme.shape.largeBorder,
  [`.${dividerClasses.root}`]: {
    margin: theme.spacing(2, -2),
  },
  ...(boxMargin && {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }),
}));

export default ContentBox;
