import "./Item.css"
import { Counter } from "../ItemCount/ItemCount"

export const Item = ({prod}) =>{
    return( 
        <div className="Item">
            <h4>{prod.nombre}</h4>
            <p>Precio: {prod.precio}</p>
            <p>Stock disponible: {prod.stock}</p>
            <Counter maxStock={20} Initial={0}/>

        </div>
    )
   
}




