import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    height: "11rem",
    borderRadius: rem(12),
    overflow: "hidden",
    paddingTop: "1rem",
    marginBottom: "1rem",
  },

  card_comment: {
    width: "100%",
  },

  card_post: {
    width: "19rem",
  },

  group: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginBottom: ".6rem",
  },

  avatar: {
    backgroundColor: theme.colors.gray[1],
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    marginRight: "1rem",
  },

  title: {
    backgroundColor: theme.colors.gray[1],
    width: "7rem",
    height: "1rem",
    borderRadius: "1rem",
  },

  content: {
    backgroundColor: theme.colors.gray[1],
    width: "17rem",
    height: "1rem",
    borderRadius: "1rem",
    marginBottom: "1rem",
  },

  content_comment: {
    marginLeft: "3rem",
    width: "88%",
  },

  title_post: {
    marginBottom: ".6rem",
  },

  animation: {
    overflow: "hidden",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      left: "0%",
      top: "0",
      height: "100%",
      width: "20px",
      background: ` linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%)`,
      animation: "shimmer 2s infinite ease",
      filter: " blur(8px)",
    },
    "@keyframes shimmer": {
      from: {
        left: "0%",
      },
      to: {
        left: "105%",
      },
    },
  },
}));
