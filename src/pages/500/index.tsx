import { useRouter } from "next/navigation";

import { Title, Text, Button, Container, Group } from "@mantine/core";

import { useStyles } from "@/styles/pages/custom500";

export default function Custom500() {
  const { classes } = useStyles();

  const router = useRouter();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button variant="white" size="md" onClick={() => router.refresh()}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
