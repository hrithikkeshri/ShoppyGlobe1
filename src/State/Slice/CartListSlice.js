import { createSlice } from "@reduxjs/toolkit";



const CartListSlice = createSlice({
    name:"CartList",
    initialState:[],
    reducers:{
        changeCartList:(state,action)=>{
            state = action.payload;
            return state;
        },
       
    }
})
export const {changeCartList,qtyDecrement,qtyIncrement} = CartListSlice.actions;
export default CartListSlice.reducer;