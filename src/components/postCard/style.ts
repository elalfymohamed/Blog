import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
    width: "19rem",
    height: "13rem",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "1rem",
    position: "relative",
    cursor: "pointer",
    transition: "all .3s ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.md,
    color: theme.black,
    marginTop: 0,
  },

  content: {
    display: "-webkit-box",
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },

  body: {
    padding: theme.spacing.md,
  },

  group: {
    position: "absolute",
    bottom: ".6rem",
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
