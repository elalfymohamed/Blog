import { SkeletonCardComment } from "../../skeletonCard/comment";

import { useStyles } from "../style";

export const LoadingCardComment = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.loading}>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <SkeletonCardComment key={index} />
        ))}
    </section>
  );
};
