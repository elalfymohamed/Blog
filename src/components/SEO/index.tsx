import React from "react";

import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: Props) => {
  const url = typeof window === "undefined" ? "" : window.location.href;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={"/public/next.svg"} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta name="twitter:image" content={"/public/next.svg"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@blog" />
      <meta name="twitter:creator" content="@blog" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="blog.com" />
    </Head>
  );
};
