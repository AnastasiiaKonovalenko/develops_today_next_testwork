import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { Main, Input, PostsList, Article, ContainerInput, H2 } from "../components/styleComponents";
import { PostInterface, Posts } from "../interfaces";
const newPost = "addPost";

const Home: NextPage<Posts> = (props: Posts) => {
  const [query, setQuery] = useState("");
  const filteredPosts = !query
    ? props.posts
    : props.posts.filter(post => post.title.includes(query) || post.body.includes(query));

  return (
    <Layout>
      <Main>
        <ContainerInput>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setQuery(e.target.value)}
            type="text"
            value={query}
            placeholder="Search post..."
          />

          <article>
            <Link href={`/${newPost}`} as="/posts/new">
              <a>Add Post</a>
            </Link>
          </article>
        </ContainerInput>

        <section>
          <H2>Latest posts</H2>
          <PostsList>
            {props.posts.slice(-3).map((post: PostInterface) => (
              <Article key={post.id}>
                <Link href={`/post?id=${post.id}`} as={`/posts/${post.id}`}>
                  <a>
                    <h1>{post.title}</h1>
                  </a>
                </Link>
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt="something what describe post"
                />
                <p
                  style={{
                    color: "#555",
                    fontSize: "18px",
                  }}
                >
                  {post.body.length > 120 ? `${post.body.slice(0, 120)}...` : post.body}
                </p>
              </Article>
            ))}
          </PostsList>

          <H2>All posts</H2>
          <PostsList>
            {filteredPosts.map((post: PostInterface) => (
              <article key={post.id}>
                <Link href={`/post?id=${post.id}`}>
                  <a>
                    <h1>{post.title}</h1>
                  </a>
                </Link>
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt="something what describe post"
                />
                <p
                  style={{
                    color: "#555",
                    fontSize: "18px",
                  }}
                >
                  {post.body.length > 20 ? `${post.body.slice(0, 200)}...` : post.body}
                </p>
              </article>
            ))}
          </PostsList>
        </section>
      </Main>
    </Layout>
  );
};

Home.getInitialProps = async (): Promise<Posts> => {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");
  const data = await res.data;

  return {
    posts: data,
  };
};

export default Home;
