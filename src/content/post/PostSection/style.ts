import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    minHeight: "15rem",
    position: "relative",
    marginTop: "2rem",
  },

  title: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
    color: theme.black,
    marginTop: 0,
  },

  content: {
    fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
    textTransform: "capitalize",
    color: "#0008",
  },

  body: {
    padding: 0,
  },

  inner: {
    flexDirection: "column",
  },

  group: {
    justifyContent: "flex-start",
    width: "100%",
  },

  avatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",

    overflow: "hidden",
  },
  image: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
  },
}));
