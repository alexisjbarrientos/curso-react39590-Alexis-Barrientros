
import {NavLink} from "react-router-dom"
import "./title.css";

function Titulo(){
    return(
      <div className='titulo'>
       
           <h1><NavLink className="letra" to ="/">Reabyte</NavLink></h1>
    
      </div>
    );
  }

export default Titulo;