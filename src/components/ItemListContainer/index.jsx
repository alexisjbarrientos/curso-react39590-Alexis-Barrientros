import {useEffect,useState} from "react";
import products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer ({greeting}){
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const producPromise = new Promise ((resolve, reject) =>
         setTimeout(() => resolve(product),2000));

        producPromise
        .then((response) => setProducts(response))
        .catch((err) => console.log(err));
    },[])
    return(
        <div>
            
            <ItemList products={products}/>
        </div>
    );
}
export default ItemListContainer;