import Titulo from '../components/Title';
import NavBar from '../components/NavBar'
import ItemListContainer from "../components/ItemListContainer"
function Root() {
  return (<><header>
    <Titulo />
    <NavBar />
  </header><article>
      <ItemListContainer greeting={"Hola esta es mi primer pre-entrega Alexis Barrientos"} />
    </article></>
  ) ;
}

export default Root;