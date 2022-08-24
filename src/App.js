import './App.css';
import  { Header } from './components/Header/Header';
import { ItemList } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <ItemList/>

    </div>
  );
}

export default App;
