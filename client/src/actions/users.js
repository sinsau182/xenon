import * as api from "../api"


export const getUsers=()=> async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.getUsers();
        // console.log(data);
        dispatch({type:"GET_USERS",payload:data});
        dispatch({ type: "END_LOADING" })
    } catch (error) {
        console.log(error); 
    }
}
export const getUser=(id)=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.fetchUser(id);
        //   console.log("user",data)
          dispatch({type:"FETCH_USER", payload:data});
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}
export const getMe=({_id,navigate})=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.fetchUser(_id);
          console.log({data})
          dispatch({type:"ME", payload:data});
          navigate(`/dashboard/${_id}`);
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}
export const editProfile=({_id,picture,about})=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.editProfile({_id,picture,about});
        //   console.log({data});
          dispatch({type:"ME", payload:data});
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}

export const getUsersBySearch=(searchQuery)=> async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.getUsersBySearch(searchQuery);
        // console.log("serachedusers:",data);
        dispatch({type:"GET_USERS",payload:data});
        dispatch({ type: "END_LOADING" })
    } catch (error) {
        console.log(error); 
    }
}


export const addUser=({newUser})=>async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.addUser(newUser);
        // console.log(data);
        dispatch({type:"ADD_USER",payload:data});
        dispatch({ type: "END_LOADING" })

    } catch (error) {
        console.log(error);
    }
}
export const fetchPhoneBook=({_id})=>async (dispatch)=>{
    try {
        // dispatch({ type: "FETCHING_PHONEBOOK" })
        const {data}=await api.fetchPhoneBook({_id});
        console.log("ye h data",data);
        dispatch({type:"FETCH_PHONEBOOK",payload:data});
        dispatch({ type: "END_LOADING" })

    } catch (error) {
        console.log(error);
    }
}

export const saveContactMessage=(data)=>async (dispatch)=>{
    try {
        // dispatch({? type: "SAVING_CONTACT_MESSAGE" })
        await api.saveContactMessage(data);
        alert("Message sent.")
        dispatch({ type:"MESSAGE_SENT"})

    } catch (error) {
        console.log(error);
    }
}



