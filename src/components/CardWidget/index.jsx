import carrito from "../../assets/img/carrito.png"
import "./cardwidget.css"
function CardWidget (){
    return(
        <div className="card">
            <img src={carrito} />
            <span>3</span>
        </div>
    );
}
export default CardWidget;