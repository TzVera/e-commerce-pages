/* Página principal E-Commerce */

import './Ecommerce.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../components/functionsAPI/functions";

export default function Ecommerce(){

    const [products, setProducts] = useState(null);

    useEffect (() => 
        { allProducts(setProducts) }
    , []);

    return (
        <main>
          <h1 className="article_title" >ARTÍCULOS</h1>   
          {products != null ?  
          <div className="articles">
            {products.map(product => (
            <div key={product.id}>
                <Link to= {`/e-commerce/${product.id}`}> 
                <div className="product_container"> 
                    <img className="product_image" src={product.image} alt={product.title}></img> 
                    <div className="product_name">{product.title}</div> 
                </div>
                </Link>
            </div>
            ))}
            <Link className="logout" to="/login">Salir</Link>
          </div> : <h1 className="load_message" >Cargando...</h1> 
          }
        </main>
    );
} 