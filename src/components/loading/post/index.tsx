import { useStyles } from "../style";

import { SkeletonCardPost } from "../../skeletonCard/post";

export const LoadingCardPost = ({ count = 6 }: { count?: number }) => {
  const { classes } = useStyles();

  return (
    <section className={classes.loading}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <SkeletonCardPost key={index} />
        ))}
    </section>
  );
};
