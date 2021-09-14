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
    addPostSuccess: (state, { payload }) => {
      state.list = [{
        userId: 1,
        id: state.list.length + 1,
        title: payload.title,
        body: payload.body
      }, ...state.list]
    },
    updatePostSuccess: (state, { payload }) => {
      state.list = state.list.map(item => {
        if(item.id == payload.id) {
          return payload
        }
        return item
      })
    }
  }
});

const postsActionCreator = getApiActionCreator("posts");
export const postsActions = {
  ...postsActionCreator("getPosts"),
  ...postsActionCreator("addPost"),
  ...postsActionCreator("updatePost"),
};
export default postsSlice.reducer;
