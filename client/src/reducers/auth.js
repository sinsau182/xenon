const authReducer = (state = { authData: null,signingin:false, isLaoding: false, message: "" }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true
      }
    case "END_LOADING":
      return {
        ...state,
        isLoading: false
      }
    case "SIGNINGIN" :
      return {...state,signingin:true}
    case "SIGNINGIN_FINISHED" :
      return {...state,signingin:false}
    case 'AUTH':
      const { name, email, picture } = action.data.result.profile;
      const { token } = action.data;
      const { _id } = action.data.result;
      localStorage.setItem('profile', JSON.stringify({ name, email, picture, _id, token }));
      return { ...state, authData: { name, email, picture, _id, token }, message: "" };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    case "AUTH_ERROR_MESSAGE":
      return { ...state, message: action.message }
    default:
      return state;
  }
}

export default authReducer