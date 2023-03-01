import "./navbar.css";
import CardWidget from "../CardWidget";

function NavBar() {
    return (
        <div className='contenedor'>
            <ul>
                <li>
                    <a href="#">SMART TV</a>
                </li>
                <li>
                    <a href="#">CELULARES</a>
                </li>
                <li>
                    <a href="#">AUDIO</a>
                </li>
                <li>
                    <a href="#">PC ARMADAS</a>
                </li>
                <li>
                    <a href="#">OFERTAS</a>
                </li>
            </ul>
            <CardWidget />
        </div>
    );
}

export default NavBar;