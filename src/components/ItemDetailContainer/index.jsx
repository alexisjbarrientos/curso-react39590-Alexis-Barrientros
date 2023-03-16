import {useEffect,useState} from "react";
import products from "../../mocks/products";
import Products from "../../mocks/products";
//Lista de productos
import ItemDetail from "../ItemDetail";

function ItemDetailContainer (){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const productsPromise = new Promise ((resolve, reject) =>
         setTimeout(() => resolve(Products [1]),2000));

        productsPromise
        .then((response) => setProducts(Products))
        .catch((err) => console.log(err));
    },[]);
    return(
        <div>
            <ItemDetail products={products}/>
        </div>
    );}
export default ItemDetailContainer;