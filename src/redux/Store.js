import { legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import ActionReducer from "./actionReducer";
const store =legacy_createStore(rootReducer)
export default store