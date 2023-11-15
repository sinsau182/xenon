import axios from "axios";

const API=axios.create({baseURL:"https://medverse-dynamic-server.onrender.com/"});
// const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})


export const fetchQuestions=(page)=>API.get(`/questions?page=${page}`);
export const addQuestion=(newQuestion)=>API.post("/questions",newQuestion);
export const updateQuestion=(id,updatedQuestion)=>API.patch(`/questions/${id}`,updatedQuestion);
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`);
export const getQuestionsBySearch=(searchQuery)=>API.get(`/questions/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchQuestion=(id)=>API.get(`/questions/${id}`)
export const myQuestions=(_id)=>API.get(`/questions/myQuestions/${_id}`);
export const myAnsweredQuestions=(_id)=>API.get(`/questions/myAnsweredQuestions/${_id}`);
export const addAnswer=({id,answer,creator})=>API.patch(`/questions/addAnswer/${id}`,{answer,creator});
export const addVote=({questionId,userId})=>API.patch(`/questions/addVote/${questionId}`,{userId});


export const signin=(formData)=>API.post('/users/signin',formData);
export const signup=(formData)=>API.post('/users/signup',formData);
export const googleAuth=(formData)=>API.post('/users/googleAuth',formData);

export const getUsers=()=>API.get("/users");
export const addUser=(newUser)=>API.post("/users/addUser",newUser);
export const getUsersBySearch=(searchQuery)=>API.get(`/users/search?searchQuery=${searchQuery|| 'none'}`);
export const fetchUser=(id)=>API.get(`/users/${id}`)
export const editProfile=({_id,picture,about})=>API.patch(`/users/dashboard/editProfile/${_id}`,{picture,about});
export const fetchPhoneBook=({_id})=>API.get(`/users/fetchPhoneBook/${_id}`);


//drduck
export const askToDrDuck=({content,userId})=>API.post(`/drDuck/ask/${userId}`,{content});
export const fetchDrDuckChat=(userId)=>API.get(`/drDuck/chat/${userId}`);


//contact
export const saveContactMessage=(data)=>API.post('users/saveContactMessage',data);