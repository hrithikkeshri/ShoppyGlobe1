import { createSlice } from "@reduxjs/toolkit";


const FilterProductSlice = createSlice({
    name:"FilterProduct",
    initialState:[],
    reducers:{
        changeFilterList:(state,action)=>{
            state = action.payload;
            return state;
        }
    }
})

export const {changeFilterList} = FilterProductSlice.actions;
export default FilterProductSlice.reducer