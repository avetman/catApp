import {combineReducers} from "@reduxjs/toolkit";
import catReducer from "./cats/catSlice.ts";
const rootReducer = combineReducers({
	cats: catReducer
})

export default rootReducer;
