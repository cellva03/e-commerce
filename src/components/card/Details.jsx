import React from 'react';
import { useState,useEffect } from 'react';
import Cards from './Cards';
import './details.css'

const Details = () => {
    const [Products,setProducts] = useState([]);

    const Product = async()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>{
        //         setProducts(json);
        //     })
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
}
    useEffect(()=>{
        Product();
    },[]);

    // console.log(Products);
                                                        

    return (
        <>
        <h2>Products:</h2>
        <div className='card-flex'> 
        {Products.map((item,i)=>(
            <Cards 
            item = {item}
            key={i}/>
        ))
        }
        </div>
        </>
    )
}


export default Details;