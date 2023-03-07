import {useEffect,useState} from "react"
import ItemList from "../ItemList";
import products from "../mocks/products";

function ItemListContainer ({greeting}){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const PromiseProd = new Promise ((resolve, reject) => setTimeout(()=> resolve(products),2000));

        PromiseProd
        .then((reponse) => setProducts(reponse))
        .catch((err) => console.log(err));
    },[])
    return(
        <div>
            
            <ItemList products={products}/>
        </div>
    );
}
export default ItemListContainer;