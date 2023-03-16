import {useEffect,useState} from "react";
import Products from "../../mocks/products";
//Lista de productos
import ItemList from "../ItemList";

function ItemListContainer ({category,CategoryRoute}){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const productsPromise = new Promise ((resolve, reject) =>
         setTimeout(() => resolve(Products),2000));

        productsPromise
        .then((response) => {
            if (CategoryRoute){
                const productsfiltered = response.filter((product)=> product.category ===category);
                setProducts(productsfiltered);
            }else{
                setProducts(response);
            }
        })
        .catch((err) => console.log(err));
    },[category])
    return(
        <div>
            <ItemList products={products}/>
        </div>
    );
}
export default ItemListContainer;