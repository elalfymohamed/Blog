import { usePathname } from "next/navigation";
import Link from "next/link";

import { Header, Container, Group } from "@mantine/core";

import { useStyles } from "./styles";

import { links } from "./common/navLinks";

export function HeaderMenu() {
  const { classes, cx } = useStyles();

  const pathname = usePathname();

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <h2 className={classes.title}>Blog</h2>

        <Group spacing={5}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={cx(classes.link, {
                [classes.linkActive]: pathname === link.link,
              })}
            >
              {link.label}
            </Link>
          ))}
        </Group>
      </Container>
    </Header>
  );
}
