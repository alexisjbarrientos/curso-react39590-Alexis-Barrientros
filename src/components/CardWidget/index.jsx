import carrito from "../../assets/img/carrito.png"
import "./cardwidget.css"
function CardWidget (){
    return(
        <div className="car">
            <img src={carrito} />
            <span>3</span>
        </div>
    );
}
export default CardWidget;