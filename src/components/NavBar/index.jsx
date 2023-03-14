import "./navbar.css";
import CardWidget from "../CardWidget";

//import para los links de las rutas
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div className='contenedor'>
            <ul>
                <li>
                    <NavLink to={"/category/smart-tv"}>SMART TV</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/smartphone"}>SMARTPHONE</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/audio"}>AUDIO</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/pc.armadas"}>PC ARMADAS</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/ofertas"}>OFERTAS</NavLink>
                </li>
            </ul>
            <CardWidget />
        </div>
    );
}

export default NavBar;