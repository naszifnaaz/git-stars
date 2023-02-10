// Action Types
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DATEJUMP = "SET_DATEJUMP";
export const SET_VIEWSTYLE = "SET_VIEWSTYLE";

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
