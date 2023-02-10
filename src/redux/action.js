// Action Types
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DATEJUMP = "SET_DATEJUMP";
export const SET_VIEWSTYLE = "SET_VIEWSTYLE";
export const GET_REPOS = "GET_REPOS";

//Action Creator
export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export const setDateJump = (datejump) => {
  return {
    type: SET_DATEJUMP,
    payload: datejump,
  };
};

export const setViewStyle = (viewstyle) => {
  return {
    type: SET_VIEWSTYLE,
    payload: viewstyle,
  };
};

export const getRepos = (repos) => {
  return {
    type: GET_REPOS,
    payload: repos,
  };
};
