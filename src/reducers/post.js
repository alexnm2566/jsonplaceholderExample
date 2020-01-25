import { LOAD_POSTS, ERROR_LOADING } from "../actions/types";

const initialState = {
  posts: [],
  loading: true,
  error: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS: {
      return {
        ...state,
        posts: payload,
        loading: false,
        error: ""
      };
    }
    case ERROR_LOADING: {
      return {
        ...state,
        loading: false,
        error: payload
      };
    }
    default: {
      return state;
    }
  }
}
