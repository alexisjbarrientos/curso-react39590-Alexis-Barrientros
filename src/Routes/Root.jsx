import Titulo from '../components/Title';
import NavBar from '../components/NavBar';
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from 'react-router-dom';


function Root() {
    const params = useParams()
    const CategoryRoute= Boolean (params.id);
    
  return(
    <div>
        <Titulo/>
        <NavBar/>
        <ItemListContainer CategoryRoute={CategoryRoute}category={params.id}/>
    </div>
  ) ;
}

export default Root;