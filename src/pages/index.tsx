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
      <SEO title="Blog" description="blog description" />
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

  const posts = queryClient.getQueryData(["posts"]) as Post[];
  const users = queryClient.getQueryData(["users"]) as User[];

  if (!Array.isArray(posts) || !Array.isArray(users)) {
    return {
      notFound: true,
    };
  }

  const data = posts?.map((post: Post) => {
    const user = users?.find((user: User) => user.id === post.userId) as User;
    return {
      ...post,
      author: {
        id: user.id,
        name: user.name,
      },
    };
  });

  return {
    props: {
      data,
    },
  };
}
