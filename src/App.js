import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContaines"
import {CartContext} from "./components/CartContext/CartContext"
import { useState } from 'react';

function App() {

  const [cart,setcart] = useState([])

  const agreagarCarrito = (item) =>{
    setcart([...cart,item])

  }

  const EstaEnCarrito = (id) =>{
    return cart.some((item) => item.id === id)
  }

  return (

    <div className="App">

      <CartContext.Provider value={ {
        cart,
        agreagarCarrito,
        EstaEnCarrito
      } }>

        <BrowserRouter>

          <Header/>
        
          <Routes>

            <Route path='/productos' element = {<ItemListContainer/>}/>
            <Route path='/productos/:Category' element = {<ItemListContainer/>}/>
            <Route path='/Item/:categoryId' element = {<ItemDetailContainer/>}/>

  
          </Routes>
        
        </BrowserRouter>
      </CartContext.Provider>

    </div>
  );
}

export default App;
