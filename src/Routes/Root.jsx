
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from 'react-router-dom';


function Root() {
    const params = useParams()
    const CategoryRoute= Boolean (params.id);
    
  return(
    <div>
        <ItemListContainer CategoryRoute={CategoryRoute}category={params.id}/>
    </div>
  ) ;
}

export default Root;