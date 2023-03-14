import {useEffect,useState} from "react";
import products from "../../mocks/products";
//Lista de productos
import ItemList from "../ItemList";

function ItemListContainer ({category,routeCategory}){
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const producPromise = new Promise ((resolve, reject) =>
         setTimeout(() => resolve(product),2000));

        producPromise
        .then((response) => {
            if (routeCategory){
                const filtered = response.filter((product)=> product.category ===category);
                setProducts(filtered);
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