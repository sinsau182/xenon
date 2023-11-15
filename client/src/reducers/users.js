export default (state={isLoading:true,messageSent:false,user:{},me:{},users:[]},action)=>{
    switch (action.type) {
        case "START_LOADING" :
            return {
                ...state,
                isLoading:true
            }
        case "END_LOADING" :
            return {
                ...state,
                isLoading:false
            }
        case "GET_USERS" :
            return {...state,users:action.payload}
        case 'FETCH_USER' :
            return {
                ...state,
                 user:action.payload,
            };    
        case 'ME' :
            return {
                ...state,
                 me:action.payload,
            };    
        case "MESSAGE_SENT" :
            return {
                ...state,messageSent:true
            } ;

        case "ADD_USER" :
            return {...state,users:[...state.users,action.payload]}
        default :
            return state
    }   
}