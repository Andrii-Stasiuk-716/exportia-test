import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

export const initialState = {
  loading: false,
  errors: false,
  list: []
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.errors = false;
    },
    getPostsError: (state) => {
      state.loading = false;
      state.errors = true;
    },
    addPost: (state, { payload }) => {
      state.list = [{
        userId: 1,
        id: state.list.length + 1,
        title: payload.title,
        body: payload.body
      }, ...state.list]
    }
  }
});

const postsActionCreator = getApiActionCreator("posts");
export const postsActions = {
  ...postsActionCreator("getPosts"),
  ...postsActionCreator("addPost"),
};
export default postsSlice.reducer;
