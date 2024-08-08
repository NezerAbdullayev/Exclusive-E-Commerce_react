import { createSlice } from "@reduxjs/toolkit";


const initialState={
    products:{
        todays:[],
        our_products:[],
        this_month:[],
    }
}

const productsSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products.todays=action.payload.filter(product=>product?.categories === "todays")
            state.products.our_products=action.payload.filter(product=>product?.categories === "our_products")
            state.products.this_month=action.payload.filter(product=>product?.categories === "this_month")
        }
    }
})




export const  {setProducts}=productsSlice.actions

export default productsSlice.reducer