import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
       theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    maxWidth: "85rem",
  },

  title: {
    fontSize: rem(25),
    fontWeight: 700,
    color: theme.black,
  },
}));
