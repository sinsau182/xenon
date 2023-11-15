import * as api from "../api"

export const getQuestions = ({page}) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            const { data } = await api.fetchQuestions(page);
            // console.log(data.data[0]);
            dispatch({ type: 'FETCH_ALL', payload: data });
            dispatch({ type: "END_LOADING" })
      } catch (err) {
            console.log(err);
      }

      //  const action = {type:'FETCH_ALL',payload: []}
}

export const addQuestion = ({question,navigate}) => async (dispatch) => {
      try {
            dispatch({ type: "START_ADDING_QUESTION" })
            const { data } = await api.addQuestion(question);
            console.log({data})
            dispatch({ type: "CREATE", payload: data })
            dispatch({ type: "QUESTION_ADDED" })
            navigate('/questions');
      } catch (err) {
            console.log(err);
      }
}
export const getQuestionsBySearch = (searchQuery) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            const { data: { data } } = await api.getQuestionsBySearch(searchQuery);
            // console.log(data);
            dispatch({ type: "SEARCH_QUESTIONS", payload: data });
            dispatch({ type: "END_LOADING" })

      } catch (error) {
            console.log(error);
      }
}
export const addAnswer=({id,answer,creator})=>async (dispatch)=>{
      try {
            dispatch({ type: "START_ADDING_ANSWER" })
            const {data}=await api.addAnswer({id,answer,creator});
            dispatch({type:"ADD_ANSWER",payload:data});
            dispatch({ type: "ANSWER_ADDED" });

      } catch (error) {
            console.log(error);
      }
}
export const addVote=({questionId,userId})=>async (dispatch)=>{
      try {
            // dispatch({ type: "START_ADDING_ANSWER" })
            const {data}=await api.addVote({questionId,userId});
            dispatch({type:"ADD_ANSWER",payload:data});
            // dispatch({ type: "ANSWER_ADDED" });

      } catch (error) {
            console.log(error);
      }
}
export const updateQuestion = (id, question) => async (dispatch) => {
      try {
            const { data } = await api.updateQuestion(id, question);
            dispatch({ type: "UPDATE", payload: data });
      } catch (err) {
            console.log(err);
      }
}
export const getQuestion=(id)=>async (dispatch)=>{
      try {
            dispatch({ type: "START_LOADING" })
            const {data}=await api.fetchQuestion(id);
            // console.log(data);
            dispatch({type:"FETCH_QUESTION", payload:data});
            dispatch({ type: "END_LOADING" })
               
      } catch (error) {
            console.log(error);
      }
}
export const deleteQuestion = (id) => async (dispatch) => {
      try {
            dispatch({ type: "DELETING" })
            await api.deleteQuestion(id);
            dispatch({ type: "DELETE", payload: id });
            dispatch({ type: "DELETED" })

      } catch (err) {
            console.log(err);
      }
}

export const getMyQuestions=(_id)=>async (dispatch)=>{
      try {
            dispatch({ type: "START_LOADING" })
            const {data}=await api.myQuestions(_id);
            dispatch({ type: "MY_QUESTIONS", payload:data});
            dispatch({ type: "END_LOADING" })
      } catch (error) {
            console.log(error);
      }
}
export const getMyAnsweredQuestions=(_id)=>async (dispatch)=>{
      try {
            dispatch({ type: "START_LOADING" })
            const {data}=await api.myAnsweredQuestions(_id);
            dispatch({ type: "MY_ANSWERED_QUESTIONS", payload:data});
            dispatch({ type: "END_LOADING" })
      } catch (error) {
            console.log(error);
      }
}