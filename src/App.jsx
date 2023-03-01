import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
function App() {
  return (<header>
  <Titulo/>
  <NavBar/>
  <ItemListContainer greeting={"Hola esta es mi primer pre-entrega Alexis Barrientos"}/> 
  </header>
  ) ;
}
function Titulo(){
  return(
    <div className='titulo'>
      <h1>Reabyte</h1> 
    </div>
  );
}
export default App;