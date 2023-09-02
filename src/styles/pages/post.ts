import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  section: {
    marginTop: rem(40),
  },

  inner: {
    maxWidth: "60rem",
  },

  title: {
    fontSize: rem(25),
    fontWeight: 700,
    color: theme.black,
  },

  posts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: rem(16),

    [`@media (max-width: 768px)`]: {
      justifyContent: "center",
    },
  },
}));
