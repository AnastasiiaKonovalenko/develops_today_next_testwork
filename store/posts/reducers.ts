import { PostsState, LoadPostsAction, LOAD_POSTS } from "./types";

const initialState: PostsState = {
  posts: [],
};

export const postReducer = (state = initialState, action: LoadPostsAction) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
