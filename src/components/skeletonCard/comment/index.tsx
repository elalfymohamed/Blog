import { useStyles } from "../style";

export const SkeletonCardComment = () => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.card} ${classes.card_comment}`}>
      <div className={classes.group}>
        <div className={`${classes.avatar} ${classes.animation}`} />
        <div className={`${classes.title} ${classes.animation}`} />
      </div>
      <div
        className={`${classes.content} ${classes.content_comment} ${classes.animation}`}
      />
      <div
        className={`${classes.content} ${classes.content_comment} ${classes.animation}`}
      />
      <div
        className={`${classes.content} ${classes.content_comment} ${classes.animation}`}
      />
    </div>
  );
};
