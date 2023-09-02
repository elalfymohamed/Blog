import dynamic from "next/dynamic";

import { Container } from "@mantine/core";

import { QueryClient } from "@tanstack/react-query";

import { fetchData } from "@/api";

import { LoadingCardPost, SEO } from "@/components";

import { Post, User } from "@/libs/types";

import { useStyles } from "@/styles/pages/home";

const PostCard = dynamic(() => import("@/components/postCard"));

export default function Page({ data = [] }: { data: Post[] }) {
  const { classes } = useStyles();

  return (
    <>
      <SEO
        title={`Posts author - ${data[0].author?.name}`}
        description={data[0].body}
      />
      <section className={classes.main}>
        <Container className={classes.inner}>
          <h1 className={classes.title}>Author</h1>
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
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const queryClient = new QueryClient();

  // get data users
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchData("users"),
  });

  //  data users
  const users = queryClient.getQueryData(["users"]) as User[];

  if (!Array.isArray(users)) {
    return {
      notFound: true,
    };
  }

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["postsAuthor"],
    queryFn: () => fetchData(`users/${id}/posts`),
  });

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchData("users"),
  });

  const posts = queryClient.getQueryData(["postsAuthor"]) as Post[];
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
