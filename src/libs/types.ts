export type NavLinks = {
  label: string;
  link: string;
};

// context form posts
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  author?: {
    id: number;
    name: string;
  };
}

//
export interface User {
  id: number;
  name: string;
  email: string;
}

//
export interface Comment {
  id: number;
  postId: string;
  body: string;
  email: string;
  name: string;
}

// the types of data from api - POST - create Post
export type DataFetchPost = {
  title: string;
  body: string;
  userId: string;
};
