import { ADD_ONE, MINUS_ONE, SET_USER_LIST } from "./action";

const initialState = {
  users: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
}

export default reducer;
