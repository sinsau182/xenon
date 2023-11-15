export default (state = { isLoading: true,generatingResponse:false, messages:[] }, action) => {
    switch (action.type) {
        case "START_CHAT_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "END_CHAT_LOADING":
            return {
                ...state,
                isLoading: false
            }
        case "START_GENERATING_RESPONSE":
            return {...state,generatingResponse:true};
        case "STOP_GENERATING_RESPONSE":
            return {...state,generatingResponse:false};
        case "FETCH_DRDUCK_CHAT":
            return {...state,messages:action.payload};
        case "ADD_TO_DRDUCK_CHAT":
            // console.log(action.payload);
            return {...state,messages:[...state.messages,action.payload]}
        default:
            return state
    }
}