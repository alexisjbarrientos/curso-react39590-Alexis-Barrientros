import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import Products from "../../mocks/products";
//Lista de productos
import ItemDetail from "../ItemDetail";

function ItemDetailContainer (){
    const [product, setProduct] = useState([]);

    const {id} = useParams()


    useEffect(() => {
        const productsPromise = new Promise ((resolve, reject) =>
         setTimeout(() => resolve(Products),2000));

        productsPromise
        .then((response) => setProduct(response.find(products => products.id === Number(id))))
        .catch((err) => console.log(err));
    },[id]);
    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    );}
export default ItemDetailContainer;