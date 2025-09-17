import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../State/Slice/ProductsSlice"
import FilterProductSlice from "../State/Slice/FiilterProductSlice"
import CartList from "../State/Slice/CartListSlice";


const store = configureStore({
    reducer:{
        productList:ProductSlice,
        filterCategory:FilterProductSlice,
        cartList:CartList,
      
      
    }
})

export default store;