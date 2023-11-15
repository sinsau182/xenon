
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"

const store = createStore(reducers,compose(applyMiddleware(thunk)));
// console.log(store.getState());
export default store;
