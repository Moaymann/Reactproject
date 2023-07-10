import React from "react";
import { useDispatch } from "react-redux";
import { cartslice } from "../redux/cartslice";
import { useNavigate } from "react-router-dom";
import { singleslice } from "../redux/singlep";

export const Card=(props)=>{

    const dispatch= useDispatch()

    const added= (t)=> {
        t.classList.add('clicked')
    } 

    const navigate= useNavigate()

    return(
        <div className="single-product" >
                        <img src={props.dataa.image} alt={props.dataa.title} />
                        <h5>Product Name: {props.dataa.title}</h5>
                        <h6>Price {props.dataa.price} L.E</h6>
                        <p>Pieces in stock : ({props.dataa.rating.count})</p>
                        <div>
                            <button onClick={(e)=>{
                                dispatch(cartslice.actions.addtocart(props.dataa))
                            added(e.target)

                            }}>Add to my cart</button>
                            <button onClick={()=>{
                                navigate(`${props.dataa.id}`)
                                dispatch(singleslice.actions.getprod(props.dataa))
                                
                                }}>Show More</button>
                        </div>
                        
                     </div>
    )
}