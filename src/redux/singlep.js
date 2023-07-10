import { createSlice } from "@reduxjs/toolkit";

const initialState={
    item:{}
}

export const singleslice= createSlice({
    name: 'singlep',
    initialState,
    reducers:{
        getprod:(state,action)=>{
            state.item=action.payload
        }
    }
})