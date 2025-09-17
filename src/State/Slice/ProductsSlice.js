import { createSlice } from "@reduxjs/toolkit";


const ProductsSlice = createSlice({
    name:"ProductsSlice",
    initialState:[],
    reducers:{
        changeList:(state,action)=>{
            state = action.payload
            return state
        }
    },
})
export const {changeList} = ProductsSlice.actions;
export default ProductsSlice.reducer;