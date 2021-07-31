export const SET_USER_LIST = "SET_USER_LIST";

export const setUserList = (payload) => {
  return {
    type: SET_USER_LIST,
    users: payload,
  };
};
