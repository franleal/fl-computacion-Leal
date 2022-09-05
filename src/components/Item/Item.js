import "./Item.css"
import {Link} from "react-router-dom"


export const Item = ({prod}) =>{
    return( 
        <div className="Item">
            <h4>{prod.nombre}</h4>
            <p>Precio: {prod.precio}</p>
            <p>Stock disponible: {prod.stock}</p>
            <Link to = { `/Item/${prod.id}` }className="btn btn-primary my-2">Ver mas</Link>
        </div>
    )
   
}




