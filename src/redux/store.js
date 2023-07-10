import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cartslice";
import { singleslice } from "./singlep";
import { userslice } from "./userslice";

const store = configureStore({
    reducer :{
cart : cartslice.reducer,
singlep : singleslice.reducer,
user: userslice.reducer
    }
})

export default store