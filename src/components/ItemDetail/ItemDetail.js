import { Counter } from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export const ItemDetail = ({itemC}) =>{

    if (!itemC){
        return(
            <h2>cargando...</h2>
        )
    }

    return(
        
        <div>
            <hr/>

            <div className="itemDetail">
                <img src={itemC.img} className="img"></img>

                <div className="itemDetailInfo">
                    
                    <h3 className="tituloProducto">{itemC.nombre}</h3>
                    <p className="info">Precio: ${itemC.precio}</p>
                    <p className="info">Stock Disponible: {itemC.stock}</p>

                    <p className="info">descripcion: {itemC.descripcion}</p>
                    <Counter maxStock={20} Initial={0}/>
                </div>
            </div>

            <hr/>

        </div>
    )
}