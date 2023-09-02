import Image from "next/image";

import { Group } from "@mantine/core";

import { useStyles } from "../comments/style";

import { Post } from "@/libs/types";

import PostCard from "@/components/postCard";
import { LoadingCardPost } from "@/components";

export default function MorePost({ postsUserId }: { postsUserId: Post[] }) {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>More Posts</h2>
      {postsUserId.length ? (
        <Group className={classes.inner}>
          {postsUserId.map((item) => (
            <PostCard key={item.id} {...item} />
          ))}
        </Group>
      ) : (
        <LoadingCardPost count={2} />
      )}
    </section>
  );
}
