import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  comment: {
    marginTop: rem(16),
  },
  body: {
    paddingLeft: rem(64),
    paddingTop: rem(5),
  },

  info:{
    flex: "1 1"
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
