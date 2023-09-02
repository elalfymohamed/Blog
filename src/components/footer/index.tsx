import { Container } from "@mantine/core";

import { useStyles } from "./style";

export function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <h2 className={classes.title}>Blog</h2>
      </Container>
    </footer>
  );
}
