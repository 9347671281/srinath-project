import { combineReducers } from 'redux'
import actionReducer from './actionReducer'
import { ShoppinReducer } from './actionReducer'
const rootReducer = combineReducers({
    actionReducer
})
export default rootReducer