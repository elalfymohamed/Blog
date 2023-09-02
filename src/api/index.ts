import { DataFetchPost, Post } from "@/libs/types";

// const BASE_URL = process.env.NEXT_APP_BASE_URL;

export const fetchData = async (endPoint: string): Promise<unknown> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${endPoint}`,
      {
        method: "GET",
      }
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (
  data: DataFetchPost
): Promise<Post | object | undefined> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
