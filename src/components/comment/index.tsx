import Image from "next/image";

import { Text, Group } from "@mantine/core";

import { useStyles } from "./style";

import profileAvatar from "/public/image/profileAvatar.png";

import { Comment } from "@/libs/types";

export function CommentCard({ name, body, email }: Comment) {
  const { classes } = useStyles();

  const author = email?.match(/[A-Z][a-z]+/g)?.join(" ");

  return (
    <div className={classes.comment}>
      <Group>
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
        <div className={classes.info}>
          <Text size="sm">{author}</Text>
          <Text size="sm" color="dimmed">
            {name}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {body}
      </Text>
    </div>
  );
}
