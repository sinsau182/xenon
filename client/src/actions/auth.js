import * as api from "../api/index"

export const signup=(signupData,navigate)=>async (dispatch)=>{
   try {
      
      // console.log({signupData});
      const {data}=await api.signup(signupData);
      dispatch({type:"AUTH",data});
      navigate("/");

   } catch (error) {
       console.log(error);
   }
}
export const logout=(navigate)=>async(dispatch)=>{
  try {
    dispatch({type:"LOGOUT"})
    navigate("/");
  } catch (error) {
    console.log({error});
  }
}

export const signin=(formData,navigate)=>async (dispatch)=>{
  try {
    //...
    dispatch({ type: "SIGNINGIN" })
    const {data}=await api.signin(formData);
    // console.log({data})
    dispatch({ type: "SIGNINGIN_FINISHED" })
    if(data.message){
      dispatch({type:"AUTH_ERROR_MESSAGE",message:data.message})
    }else{
       dispatch({type:"AUTH",data});
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
}



export const googleAuth=(formData,navigate)=>async (dispatch)=>{
  try {
    // console.log("formdata =>" ,formData);
    const {data}=await api.googleAuth(formData);
    dispatch({type:"AUTH",data});
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}

