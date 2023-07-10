import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:{}
}
export  const userslice=createSlice({
    name: 'user',
    initialState,
    reducers:{
        getuserdata:(state,action)=>{
            state.user=action.payload
        }
    }
 })