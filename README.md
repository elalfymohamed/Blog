# Blog

## Installing

- Download the dependencies with `yarn` package manager

```bash
yarn
#or
yarn install
```

- Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## NEXT.JS Page Router - SSG

## Routes

- /
- /post/:id
- /create-post
- /posts/author/:id

## Package Use

- Typescript
- Mantine UI
- React-query
- Formik
- Yup
- @mantine/notifications

## Directory Structure

```
.
|_node_modules/
|_public
|_src
|    |_api
|    |_components
|    |_content
|    |    |_post
|    |
|    |_layout
|    |
|    |_libs
|    |_pages
|    |    |_404
|    |    |_500
|    |    |_api
|    |    |_create-post
|    |    |_post
|    |    |   |_[id].tsx
|    |    |_posts
|    |    |   |_author
|    |    |       |_[id].tsx
|    |    |_app.tsx
|    |    |_index.tsx
|    |
|    |_styles
|
|_.env
|_.gitignore
|_next.config.js
|_package.json
|_README.md
```
