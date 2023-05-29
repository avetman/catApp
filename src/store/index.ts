import {configureStore} from "@reduxjs/toolkit";
import {catApi} from "./cats/catApi.ts";
import rootReducer from "./rootReducer.ts";
const store = configureStore({
	reducer:{
		root: rootReducer,
		[catApi.reducerPath]: catApi.reducer
	},
	middleware:(getDefaultMiddleware) =>
			getDefaultMiddleware().concat(catApi.middleware)
})

export default store;
