import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContaines"
import {CartProvaider} from "./Context/CartContext/CartContext"
import {Cart} from './components/Cart/Cart'

function App() {

  return (
    <div className="App">

      <CartProvaider>

        <BrowserRouter>
          <Header/>
          <Routes>

            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/productos/:Category' element = {<ItemListContainer/>}/>
            <Route path='/Item/:categoryId' element = {<ItemDetailContainer/>}/>
            <Route path= '/Cart' element={<Cart/>}/>

  
          </Routes>
        
        </BrowserRouter>

      </CartProvaider>

    </div>
  );
}

export default App;
