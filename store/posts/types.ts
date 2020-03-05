export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
}

export const LOAD_POSTS = "LOAD_POSTS";

export interface LoadPostsAction {
  type: typeof LOAD_POSTS;
  payload: Post;
};
