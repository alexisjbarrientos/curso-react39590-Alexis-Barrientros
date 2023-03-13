import Item from "../Item";
import "./itemlist.css"

function ItemList ({products}){
    return(
        <div className="item-container">
            <ul className="item-list">
                {products.map((product , index) => (
                <Item product={product} key={product.id}/>
                ))}
            </ul>
            
        </div>
    );
}

export default ItemList;