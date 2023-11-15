export default (state = { isLoading: true,deleting_question:false, question:{},myQuestions:[],myAnsweredQuestion:[], addingQuestion:false, addingAnswer: false, questions: [] }, action) => {
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
        case "DELETING":
            return {
                ...state,
                deleting_question: true
            }
        case "DELETED":
            return {
                ...state,
                deleting_question: false
            }
        case "START_ADDING_ANSWER":
            return {
                ...state,
                addingAnswer: true
            }
        case "ANSWER_ADDED":
            return {
                ...state,
                addingAnswer: false
            }
        case "START_ADDING_QUESTION":
            return {
                ...state,
                addingQuestion: true,
            }
        case "QUESTION_ADDED":
            return {
                ...state,
                addingQuestion: false,
            }
        case 'FETCH_ALL':
            // console.log(action.payload.data)
            return {
                ...state,
                questions: action.payload.data,
                currentPage: action.payload.currentPage,
                noOfPages: action.payload.noOfPages,
            };
        case 'CREATE':
            return { ...state, questions: [...state.questions, action.payload] };
        case 'DELETE':
            return { ...state, questions: state.questions.filter((question) => question._id !== action.payload) };
        case 'SEARCH_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            };
        case 'FETCH_QUESTION':
            return {
                ...state,
                question: action.payload,
            };
        case "ADD_ANSWER":
            return {
                ...state,
                question:action.payload,
            };
        case "ADD_VOTE":
            return {
                ...state,
                question:action.payload,
            };
        case "MY_QUESTIONS" :
            return {
                ...state,
                myQuestions:action.payload,
            }    
        case "MY_ANSWERED_QUESTIONS" :
            return {
                ...state,
                myAnsweredQuestions:action.payload,
            }    
        default:
            return state
    }
}