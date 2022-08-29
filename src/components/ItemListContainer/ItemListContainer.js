import "../ItemListContainer/ItemListContainer.css"
import { Counter } from "../ItemListContainer/ItemCount"

export const ItemList = () =>{

    return(
        <div className="ItemContainer">
            <h2>Producto:</h2>
            <p>Precio:</p>
            <Counter maxStock={20} Initial={0}/>
        </div>
    )
}