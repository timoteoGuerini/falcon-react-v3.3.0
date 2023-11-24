import * as types from '../actions/user/types'
const initialState = {
  loading: true,
  error: null,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case types.USER_GET:
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    // case types.CLIENTE_DELETE:
    //   return {
    //     //TODO
    //   };

    default:
      return state;
  }
};

export default userReducer;
