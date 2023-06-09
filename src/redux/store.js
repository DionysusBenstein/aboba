import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { thunk } from "./middlewares";

export const store = createStore(reducer, applyMiddleware(thunk));
