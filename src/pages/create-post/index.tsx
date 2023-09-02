import { useState, useEffect } from "react";

import {
  Container,
  Textarea,
  Button,
  TextInput,
  Group,
  Select,
  Loader,
  Notification,
} from "@mantine/core";

import { QueryClient, useMutation } from "@tanstack/react-query";

import { useFormik } from "formik";

import * as yup from "yup";

import { useStyles } from "@/styles/pages/createPost";

import { SEO } from "@/components";

import { createPost, fetchData } from "@/api";

import { Post, User } from "@/libs/types";

const validationSchema = yup.object({
  title: yup
    .string()
    .max(100, "title max 100 characters is required")
    .required("title is required"),
  body: yup
    .string()
    .min(50, "body min 50 characters is required")
    .required("body is required"),
  userId: yup.string().required("author is required"),
});

interface UserProps {
  label: string;
  value: string;
}

export default function Page({ users }: { users: UserProps[] }) {
  const [status, setStatus] = useState({
    isError: false,
    isSuccess: false,
  });

  const { classes } = useStyles();

  const { isLoading, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (data: Post | object | undefined) => {
      const isSuccess = typeof data === "object" && "id" in data;

      setStatus({
        isError: !isSuccess,
        isSuccess: isSuccess,
      });

      isSuccess && formik.resetForm();
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      userId: "1",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      mutate(values);
    },
  });

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setStatus({
        isError: false,
        isSuccess: false,
      });
    }, 3000);

    return () => clearTimeout(TimeOut);
  }, [status.isError, status.isSuccess]);

  return (
    <>
      <SEO title="Create post" description="blog - create post" />
      {(status.isError || status.isSuccess) && (
        <Notification
          withCloseButton={false}
          withBorder
          color={status.isError ? "red" : "teal"}
          title={status.isError ? "Error" : "Success"}
          className={classes.notification}
        >
          {status.isError ? "Something went wrong, try again" : "Post created"}
        </Notification>
      )}
      <section className={classes.section}>
        <Container className={classes.inner}>
          <h1 className={classes.title}>Create Post</h1>
          <div className={classes.controlForm}>
            <form onSubmit={formik.handleSubmit}>
              <Group className={classes.inputGroup}>
                <TextInput
                  label="Title"
                  placeholder="Enter title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.errors.title}
                  name="title"
                  type="text"
                  withAsterisk
                  className={classes.input}
                  radius="md"
                  aria-label="Enter Title"
                />
                <Select
                  label="Author"
                  placeholder="Select author"
                  data={users}
                  defaultValue={formik.values.userId}
                  onChange={formik.handleChange}
                  error={formik.errors.userId}
                  name="userId"
                  withAsterisk
                  radius="md"
                  className={classes.select}
                  aria-label="Select author"
                />
              </Group>
              <Textarea
                label="Body"
                placeholder="Enter body"
                value={formik.values.body}
                onChange={formik.handleChange}
                error={formik.errors.body}
                name="body"
                withAsterisk
                minRows={4}
                radius="md"
                aria-label="Enter body"
              />
              <Button
                type="submit"
                className={classes.submit}
                aria-label="Submit data"
                disabled={isLoading}
              >
                {isLoading ? <Loader size="sm" /> : "Submit"}
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchData("users"),
  });

  const users = queryClient.getQueryData(["users"]) as User[];

  if (!Array.isArray(users)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users: users.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      })),
    },
  };
}
