import { Post, LOAD_POSTS } from "./types";
import { getPosts } from "../../pages/api/dataApi";

export const loadAllPosts = (posts: Post) => ({
  type: LOAD_POSTS,
  payload: posts,
});

export const loadPosts = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return dispatch => getPosts().then(({ data }) => dispatch(loadAllPosts(data)));
};
