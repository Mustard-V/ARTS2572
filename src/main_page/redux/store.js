import { createStore, combineReducers } from "redux";
import ingredientReducer from "./reducers/ingredient";
import tagReducer from "./reducers/tag";
import blackListReducer from "./reducers/blackList";

let rootReducer = combineReducers({
    ingredient: ingredientReducer,
    tag: tagReducer,
    blackList: blackListReducer,
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
