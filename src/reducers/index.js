import {combineReducers} from 'redux'
import listReducer from './listReducer'
import changePageReducer from './changePageReducer'

const combinedReducers = combineReducers({
	list: listReducer,
	pageNumber: changePageReducer
})

export default combinedReducers