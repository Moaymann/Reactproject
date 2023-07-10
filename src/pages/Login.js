import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userslice } from "../redux/userslice";


export const Login =()=> {
   
    const [users,setusers]=useState()
    const [name,setname]=useState()
    const [pass,setpass]=useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/users').then((resp)=>setusers(resp.data)).catch((err)=>console.log(err))
    },[])

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handlelogin = ()=>{
        const user = users?.filter((r)=>{
            if(r.username== name){
                if(r.password==pass){
                    dispatch(userslice.actions.getuserdata(r))
                    navigate('/products')
                   return r
                   
                }
            }
            
        })

        console.log(user)
        if(user.length==0){
            document.querySelector('.wrong').innerHTML = ' Username or Password is incorrect'

        }
    }
    
    return(
        <div className="inputs">
            <p className="wrong"></p>
 <input type="text" placeholder="Username" onChange={(e)=>setname(e.target.value)}></input>
<input type="text" placeholder="Password"  onChange={(e)=>setpass(e.target.value)}></input>
<button onClick={()=>handlelogin()}>Login</button>

        </div>
    )
}