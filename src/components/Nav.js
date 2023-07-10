import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6"
import { useSelector } from "react-redux";

export const Nav =()=> {

const userr= useSelector((state)=>state.user.user)

    return(
        <div className="nav-bar">
           <NavLink to=''>Home </NavLink>
            <NavLink to='products'>Products </NavLink>
            <NavLink to='cart'> Cart<FaCartPlus/> </NavLink>
           
            {
               JSON.stringify (userr)!== '{}' ?  <p> {userr.username}</p> :  <NavLink to='login'>Login </NavLink>
            }
        </div>
    )
}