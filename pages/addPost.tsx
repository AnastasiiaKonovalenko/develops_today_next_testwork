import React, { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { RequestApi } from "../interfaces";
import { MainAddPost, InputAddPost, FormAddPost, TextArea, SubmitAdd } from "../components/styleComponents";

const AddPost: NextPage = () => {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  return (
    <Layout>
      <MainAddPost>
        <Link href="/">
          <a>Home</a>
        </Link>
        <FormAddPost>
          <InputAddPost
            placeholder="Add Title..."
            type="text"
            id="title"
            value={title}
            onChange={(e): void => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Add Post..."
            value={post}
            onChange={(e): void => setPost(e.target.value)}
            name="post"
            id="post"
          />
          <SubmitAdd
            onClick={(e: React.MouseEvent<HTMLElement>): void => {
              e.preventDefault();
              if (!post || !title) {
                alert("Some fields are empty");
                return;
              }
              setPost("");
              setTitle("");
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              const raw = JSON.stringify({
                title: title,
                body: post,
              });

              const requestOptions: RequestApi = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
              };

              fetch("https://simple-blog-api.crew.red/posts", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log("error", error));
            }}
          >
            submit
          </SubmitAdd>
        </FormAddPost>
      </MainAddPost>
    </Layout>
  );
};

export default AddPost;
