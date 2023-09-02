import { Group } from "@mantine/core";

import { useStyles } from "./style";

import { Comment } from "@/libs/types";

import { CommentCard, LoadingCardComment } from "@/components";

export default function Comments({ comments }: { comments: Comment[] }) {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Comments</h2>
      {comments?.length ? (
        <Group>
          {comments.map((item) => (
            <CommentCard key={item.id} {...item} />
          ))}
        </Group>
      ) : (
        <LoadingCardComment />
      )}
    </section>
  );
}
