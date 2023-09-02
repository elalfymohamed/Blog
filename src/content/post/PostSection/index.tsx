import Image from "next/image";
import Link from "next/link";

import { Text, Group } from "@mantine/core";

import { useStyles } from "./style";

import { Post } from "@/libs/types";

import profileAvatar from "/public/image/profileAvatar.png";
export default function PostSection({ author, body, title }: Post) {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Group noWrap spacing={0} className={classes.inner}>
        <Group noWrap spacing="xs" className={classes.group}>
          <div className={classes.avatar}>
            <Image
              src={profileAvatar}
              alt={`avatar author - ${author}`}
              quality={90}
              loading="lazy"
              placeholder="blur"
              className={classes.image}
            />
          </div>
          <Link href={`/posts/author/${author?.id}`}>
            <Text size="sm">{author?.name}</Text>
          </Link>
        </Group>
        <div className={classes.body}>
          <Text className={`${classes.title} `} mt="xs" mb="md">
            {title}
          </Text>
          <Text
            transform="uppercase"
            color="dimmed"
            weight={700}
            size="xs"
            className={classes.content}
          >
            {body}
          </Text>
        </div>
      </Group>
    </section>
  );
}
