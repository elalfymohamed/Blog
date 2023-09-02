import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    position: "relative",
    marginTop: "2rem",
    marginBottom: "2rem",
  },

  title: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
    color: theme.black,
    marginTop: 0,
  },

  inner: {
    justifyContent: "center",
  },
}));
