import React from "react";
import axios from "axios";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";
import { MainWithoutGrid } from "../components/styleComponents";
import { PostInterface } from "../interfaces";

const Post: NextPage<PostInterface> = (post: PostInterface) => {
  return (
    <Layout>
      <MainWithoutGrid>
        <Link href="/">
          <a>Home</a>
        </Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </MainWithoutGrid>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }): Promise<PostInterface> => {
  const res = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}`);
  const post = await res.data;
  console.log(query);
  return post;
};

export default Post;
