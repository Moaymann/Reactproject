import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { useDispatch } from "react-redux";
import { cartslice } from "../redux/cartslice";


export const Products =() => {

     const [data,setproducts]=useState()
    

useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then((response)=>setproducts(response.data)).catch((err)=>console.log(err))
},[])
console.log(data)
    return(
        <div className="products-main">
            <h1>Our Trending Products </h1>
            
            <div className="products-container">
                {
                    data?.map((prod)=><Card key={prod.id} dataa={prod} />)
                }
            </div>

        </div>
    )
}