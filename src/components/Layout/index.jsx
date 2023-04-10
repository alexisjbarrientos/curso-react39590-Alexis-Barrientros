import { Outlet as Page } from "react-router-dom";
import NavBar from "../NavBar";
import Titulo from "../Title";



function  Layout () {
    return(
        <main>
            <Titulo/>
            <NavBar/>
            <Page/>
        </main>
    );
}


export default Layout ;