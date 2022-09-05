import { Counter } from "../ItemCount/ItemCount"


export const ItemDetail = (itemC) =>{

    return(
       
        <div>
            <h3>Producto:{itemC.nombre}</h3>
            <p>Precio:{itemC.precio}</p>
            <p>Stock Disponible:{itemC.stock}</p>
            {/* <img></img> */}
            <Counter maxStock={20} Initial={0}/>
            
        </div>
    )
}