import React,{useContext} from "react";
import { Context } from "../../context";
import "./itemCart.css";
import Button from 'react-bootstrap/Button';

const ItemCart = ({product}) => {

    const {removeItem} = useContext(Context);
    return(

        <div className="containercart" >
            <img className="imgcart" src={product.image}/>
            <div className="descript">
                <p>Nombre del Producto : {product?.name}</p>
                <p>Cantidad :{product?.quantity}</p>
                <p>Precio unidad : {product?.precio}</p>
                <p>SubTotal : ${product?.quantity * product?.precio}</p>
                <Button variant="primary" onClick={() => removeItem(product?.id)}>Eliminar</Button>
            </div>
        </div>
    )
};

export default ItemCart;