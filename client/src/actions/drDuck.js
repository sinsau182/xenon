import * as api from "../api"

export const ask=({content,userId}) =>async (dispatch)=>{
    try {

        dispatch({type:"START_GENERATING_RESPONSE"});
        const {data}=await api.askToDrDuck({content,userId});
        console.log({data})
        dispatch({type:"ADD_TO_DRDUCK_CHAT",payload:data});
        dispatch({type:"STOP_GENERATING_RESPONSE"});
    } catch (error) {
        console.log({error});
    }
}

export const fetchDrDuckChat=(userId)=>async(dispatch)=>{
    try {
        dispatch({type:"START_CHAT__LOADING"});
        const {data}=await api.fetchDrDuckChat(userId);
        // console.log({data});
        dispatch({type:"FETCH_DRDUCK_CHAT",payload:data});
        dispatch({type:"END_CHAT_LOADING"});
    } catch (error) {
        console.log({error});
    }
}