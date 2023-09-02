import Image from "next/image";
import Link from "next/link";

import { Card, Text, Group } from "@mantine/core";

import { useStyles } from "./style";

import { Post } from "@/libs/types";

import profileAvatar from "/public/image/profileAvatar.png";

export default function PostCard({ title, body, author, id }: Post) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Link href={`/post/${id}`} title={title}>
        <Group noWrap spacing={0}>
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
            <Group noWrap spacing="xs">
              <Group spacing="xs" noWrap className={classes.group}>
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
                <Text size="xs">{author}</Text>
              </Group>
            </Group>
          </div>
        </Group>
      </Link>
    </Card>
  );
}
