import { call, put, takeLeading } from "redux-saga/effects";
import { postsActions } from "slices/posts";
import { postActions } from "slices/post";
import { fetchPosts, fetchPost, fetchComments, fetchAddPost, fetchUpdatePost } from "api/postsApi";
import { commentsActions } from "../slices/comments";

// ----- WORKERS -------------------------------------------------------
function* getPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(postsActions.getPostsSuccess(posts));
  } catch (err) {
    yield put(postsActions.getPostsError(err));
  }
}

function* addPost({ payload }) {
  try {
    yield call(fetchAddPost, payload);
    yield put(postsActions.addPostSuccess(payload));
  } catch (err) {
    yield put(postsActions.getPostsError(err));
  }
}

function* updatePost({ payload }) {
  console.log('payload', payload)
  try {
    yield call(fetchUpdatePost, payload);
    yield put(postsActions.updatePostSuccess(payload));
  } catch (err) {
    yield put(postsActions.getPostsError(err));
  }
}

function* getPost({ payload: id }) {
  try {
    const post = yield call(fetchPost, id);
    yield put(postActions.getPostSuccess(post));
  } catch (err) {
    yield put(postActions.getPostError(err));
  }
}

function* getComments({ payload: postId }) {
  try {
    const comments = yield call(fetchComments, postId);
    yield put(commentsActions.getCommentsSuccess(comments));
  } catch (err) {
    // yield errorToast({ messageText: err });
    yield put(commentsActions.getCommentsError(err));
  } finally {
    // yield put(spinner.close());
  }
}
// ---------------------------------------------------------------------

export default function* watchers() {
  yield takeLeading(postsActions.getPosts.type, getPosts);
  yield takeLeading(postActions.getPost.type, getPost);
  yield takeLeading(commentsActions.getComments.type, getComments);
  yield takeLeading(postsActions.addPost.type, addPost);
  yield takeLeading(postsActions.updatePost.type, updatePost);
}
