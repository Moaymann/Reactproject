import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Singlep =()=> {

const prod=useSelector((state)=>state.singlep.item)
    return(
        <div className="sp">

<h3>{prod.title}</h3>
<h4>{prod.price} (LE)</h4>
<img src={prod.image}></img>
            
        </div>
    )
}