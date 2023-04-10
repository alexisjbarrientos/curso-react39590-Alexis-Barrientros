import {Card} from "react-bootstrap";
import "./Detail.css"
import ItemCount from "../ItemCount";
import { useContext, useState } from "react";
import { Context } from "../../context";



function ItemDetail({product}){
    const {onAdd} = useContext(Context);
    const [added, setAdded]= useState(0);

    function onAddProd(count) {setAdded(count);
        onAdd(product,count);
    }
return(
    
        <div className=" container">
            <div className="titleName">
                <h2>{product?.name}</h2>
                <span className="price">Precio al contado ${product?.precio}</span>
                <span className="stock"> stock : {product?.stock}</span>
                {added == 0 &&(<ItemCount inicial={1} stock={product?.stock} onAdd = {onAddProd}/>)}
            </div>
            <div className="description">
                <h3>Descripcion del Producto</h3>
                <p>{product?.description}</p>
            </div>
            <div className="image">
                <Card.Img variant="bottom" src={product?.image}/>
            </div>
        </div>
    )
}

export default ItemDetail;
