import { useStyles } from "../style";

export const SkeletonCardPost = () => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.card} ${classes.card_post}`}>
      <div
        className={`${classes.title} ${classes.title_post} ${classes.animation}`}
      />
      <div className={`${classes.content} ${classes.animation}`} />
      <div className={`${classes.content} ${classes.animation}`} />
      <div className={classes.group}>
        <div className={`${classes.avatar} ${classes.animation}`} />
        <div className={`${classes.title} ${classes.animation}`} />
      </div>
    </div>
  );
};
