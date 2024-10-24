/* Detalles del producto */

import './Product.css';
import '../components/elements/Return.css';
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneProduct } from "../components/functionsAPI/functions";
import Return from "../components/elements/Return";

export default function Product(){

    const {productId} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => 
        { oneProduct(productId, setProduct) }
    , [])
    
    return (
        <main>
        {product != null ?  
            <div className="details_container" >
             <div className="details">
                <h2>PRODUCTO {productId}</h2>
                <h3>Nombre: {product.title}</h3>
                <h3>Precio: {product.price}</h3>
                <h3>Descripción: {product.description}</h3>
                <button className="buy_button" >Comprar</button>
                <Return />
            </div>
            <div className="product_image_container" ><img className="product_details_image" src={product.image} alt={product.title}></img> </div>
            </div> : <h1 className="load_message" >Cargando...</h1> 
        }
        </main>
    )
}

  