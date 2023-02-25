import { GET_REPOS, SET_DATEJUMP, SET_LANGUAGE, SET_VIEWSTYLE } from "./action";

const initState = {
  viewStyle: "grid",
  language: "all",
  dateJump: "All Time",
  theme: "dark",
  repos: [],
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, language: payload };
    case SET_DATEJUMP:
      return { ...state, dateJump: payload };
    case SET_VIEWSTYLE:
      return { ...state, viewStyle: payload };
    case GET_REPOS:
      return { ...state, repos: payload };
    default:
      return state;
  }
};
