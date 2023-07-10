import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { cartslice } from "../redux/cartslice";

export const Cart =() => {

    const productdata=useSelector((state)=>state.cart.items)

    const arr= productdata.filter((value,index,self)=>
    index === self.findIndex((t)=>(
       t.id===value.id

    ))
    )


    const dispatch =useDispatch()


    return (
        <div>
{
   productdata.length == 0? <h3>No Items found in cart</h3> :  
    arr?.map((r)=><div className="single-product" >
   <img src={r.image} alt={r.title} />
   <h5>Product Name: {r.title}</h5>
   <h6>Price {r.price} L.E</h6>
   <p>Pieces in stock : ({r.rating.count})</p>
   <div>
       
       <button onClick={()=>dispatch(cartslice.actions.removefromcart(r))}>Remove from cart</button>
   </div>
</div>
) 
}

        </div>
    )
}