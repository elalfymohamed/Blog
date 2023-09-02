import dynamic from "next/dynamic";

import { Container } from "@mantine/core";

import { QueryClient } from "@tanstack/react-query";

import { fetchData } from "@/api";

import { SEO } from "@/components";

import { Post, User, Comment } from "@/libs/types";

import { useStyles } from "@/styles/pages/post";

const PostSection = dynamic(() => import("@/content/post/PostSection"));
const Comments = dynamic(() => import("@/content/post/comments"));
const MorePost = dynamic(() => import("@/content/post/morePost"));

interface Props {
  data: Post;
  comments: Comment[];
  postsUserId: Post[];
}

export default function Page({ data, comments, postsUserId }: Props) {
  const { classes } = useStyles();

  return (
    <>
      <section className={classes.section}>
        <Container className={classes.inner}>
          <h1 className={classes.title}>Post</h1>
          <PostSection {...data} />
          <Comments comments={comments} />
          <MorePost postsUserId={postsUserId} />
        </Container>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const queryClient = new QueryClient();

  // get data posts
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => fetchData("posts"),
  });

  //  data posts
  const posts = queryClient.getQueryData(["posts"]);

  if (!Array.isArray(posts)) {
    return {
      notFound: true,
    };
  }

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  // get data post by id
  await queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () => fetchData(`posts/${id}`),
  });

  // get data user
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchData("users"),
  });

  // get data comments by id post
  await queryClient.prefetchQuery({
    queryKey: ["comments"],
    queryFn: () => fetchData(`posts/${id}/comments`),
  });

  // get data more posts to user
  await queryClient.prefetchQuery({
    queryKey: ["postsUserId"],
    queryFn: () => fetchData(`users/${id}/posts`),
  });

  //  data post
  const post = queryClient.getQueryData(["post"]);
  // data user
  const users = queryClient.getQueryData(["users"]);
  // data comments
  const comments = queryClient.getQueryData(["comments"]);
  // data more posts
  const postsUserId = queryClient.getQueryData(["postsUserId"]);

  if (typeof post !== "object" || !Array.isArray(users)) {
    return {
      notFound: true,
    };
  }

  const user: User = users?.find((user: User) => user.id === post?.userId);

  const data = {
    ...post,
    author: {
      id: user.id,
      name: user.name,
    },
  } as Post;

  return {
    props: {
      data,
      comments,
      postsUserId: Array.isArray(postsUserId)
        ? postsUserId
            .map((item) => ({
              ...item,
              author: user.name,
            }))
            .slice(0, 2)
        : [],
    },
  };
}
