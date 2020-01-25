import axios from "axios";
import { LOAD_POSTS, ERROR_LOADING } from "./types";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get(postsUrl);

    dispatch({
      type: LOAD_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_LOADING,
      payload: err.message
    });
  }
};
