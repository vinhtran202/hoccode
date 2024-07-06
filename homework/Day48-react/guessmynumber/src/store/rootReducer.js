export const initialState = {
  auth: {
    isAuthenticated: false,
    use: {},
    isLoading: true,
  },
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "auth/set_user":
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: true,
          user: action.payload,
          isLoading: false,
        },
      };
    case "auth/destroy_user":
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
          user: {},
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
