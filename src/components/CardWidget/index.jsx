import carrito from "../../assets/img/carrito.png"
import "./cardwidget.css"
import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";



function CardWidget (){
    const {cartsAdded} = useContext (Context);
    return(
        <Link to ="/cart">
        <buttom className="car">
            <img src={carrito} />
            {cartsAdded.length}
        </buttom>
        </Link>
    );
}
export default CardWidget;