import dynamic from "next/dynamic";

import { Container } from "@mantine/core";

import { QueryClient } from "@tanstack/react-query";

import { fetchData } from "@/api";

import { LoadingCardPost, SEO } from "@/components";

import { Post, User } from "@/libs/types";

import { useStyles } from "@/styles/pages/home";

const PostCard = dynamic(() => import("@/components/postCard"));

export default function Home({ data = [] }: { data: Post[] }) {
  const { classes } = useStyles();

  return (
    <>
      <SEO title="blog" description="blog description" />
      <main className={classes.main}>
        <Container className={classes.inner}>
          <h1 className={classes.title}>Posts</h1>
          {data.length ? (
            <section className={classes.posts}>
              {data?.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </section>
          ) : (
            <LoadingCardPost />
          )}
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => fetchData("posts"),
  });

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchData("users"),
  });

  const posts = queryClient.getQueryData(["posts"]);
  const users = queryClient.getQueryData(["users"]);

  if (!Array.isArray(posts) || !Array.isArray(users)) {
    return {
      notFound: true,
    };
  }

  const data = posts?.map((post: Post) => {
    return {
      ...post,
      author: users?.find((user: User) => user.id === post.userId)?.name,
    };
  });

  return {
    props: {
      data,
    },
  };
}
