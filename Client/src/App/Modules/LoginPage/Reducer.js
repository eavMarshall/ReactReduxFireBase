const defaultState = {
  LoginDetails: {
    username: "",
    password: ""
  },
  IsLoggingIn: false
}

export default function(state = defaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@LoginPage.UpdateLoginDetails':
      newState = Object.assign({}, state);
      if (null != action.payload.username) newState.LoginDetails.username = action.payload.username;
      if (null != action.payload.password) newState.LoginDetails.password = action.payload.password;
      return newState;
    case '@LoginPage.setIsLoggingIn':
      newState = Object.assign({}, state);
      newState.IsLoggingIn = action.payload;
      return newState;
  }
  return state;
}
