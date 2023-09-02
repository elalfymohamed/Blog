import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  section: {
    marginTop: rem(40),
    height: "69vh",
  },

  inner: {
    maxWidth: "50rem",
  },

  title: {
    fontSize: rem(25),
    fontWeight: 700,
    color: theme.black,
  },

  controlForm: {
    marginTop: rem(16),
  },
  inputGroup: {
    width: "100%",
    marginBottom: rem(16),
    flexDirection: "row",

    "@media (max-width: 568px)": {
      flexDirection: "column",
    },
  },
  input: {
    flex: "1 1",
    "@media (max-width: 568px)": {
      width: "100%",
    },
  },

  select: {
    "@media (max-width: 568px)": {
      width: "100%",
    },
  },

  notification: {
    position: "absolute",
    top: rem(66),
    right: rem(16),
    width: "16rem",
  },

  submit: {
    marginTop: rem(16),
  },
}));
