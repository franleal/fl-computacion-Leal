import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import { Counter } from "../ItemCount/ItemCount"
import "./ItemDetail.css"


export const ItemDetail = ({itemC}) =>{
    
    const {cart,agreagarCarrito,EstaEnCarrito} = useContext (CartContext)
    console.log(cart)
    
    
    const [cantidad,setcantidad] = useState(0)
    
    
    if (!itemC){
        return(
            <h2>cargando...</h2>
        )
    }



    const addCart = () =>{
        const cartInfo = {

            Nombre: itemC.nombre,
            precio: itemC.precio,
            id:itemC.id,
            cantidad
        }
        console.log(EstaEnCarrito(itemC.id))
        agreagarCarrito(cartInfo)
        console.log(itemC.id)
        
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

                    {
                        EstaEnCarrito(itemC.id)
                        ?   <Link to="/cart" className="btn btn-success my-2">Terminar compra</Link>
                        :   <Counter maxStock={itemC.stock} Initial={0} counter={cantidad} setCounter={setcantidad} agregar={addCart}/>
                    }
                    

                    
                </div>
            </div>

            <hr/>

        </div>
    )
}