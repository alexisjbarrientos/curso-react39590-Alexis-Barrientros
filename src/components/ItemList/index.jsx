import Item from "../Item";

function ItemList ({products}){
    return(
        <div>
            <ul>
                {products.map((products) => (
                <Item prducts={products} key={products.id}/>
                ))}
            </ul>
            
        </div>
    );
}

export default ItemList;