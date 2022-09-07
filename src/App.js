import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContaines"

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>
        
        <Routes>

          <Route path='/productos' element = {<ItemListContainer/>}/>
          <Route path='/productos/:Category' element = {<ItemListContainer/>}/>
          <Route path='/Item/:categoryId' element = {<ItemDetailContainer/>}/>

  
        </Routes>
        
      </BrowserRouter>
      

    </div>
  );
}

export default App;
