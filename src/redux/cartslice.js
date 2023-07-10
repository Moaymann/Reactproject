import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

 export const cartslice =  createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.items.push(action.payload)
        },
       removefromcart :(state,action)=>{
        const newarray = state.items.filter((items)=> items.id != action.payload.id)
        state.items = newarray
       }
   

    }})

