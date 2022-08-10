import { legacy_createStore,applyMiddleware } from "redux";
import rootReducer from "./Reducer/index"
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
export const store=legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);