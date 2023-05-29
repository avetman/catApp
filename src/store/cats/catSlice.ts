import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	category:{
		name: '',
		id: 1
	}

}
const catSlice = createSlice({
	name:'cats',
	initialState,
	reducers: {
		getCategory: (state, action) => {
			state.category = action.payload
		}
	}
})
export const selectCategory = (state) => state.root.cats.category;
export const {getCategory} = catSlice.actions;
export default catSlice.reducer;
