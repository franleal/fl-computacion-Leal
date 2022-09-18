import "../Cart/Cart.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'


export const Cart = () =>{

    const{cart,cartTotal,removeCart,removeCartItem} = useContext(CartContext) 
    

    return(
        <div className="cartContainer">
            <p className="CartTitle">Mi Carrito</p>

           { cart.map((itemC) => (
                <div key={itemC.id} className="Cart">

                    <h1 className="Cart_h1">{itemC.Nombre}</h1>
                    <p className="Cart_P">Precio: {itemC.precio}</p>
                    <p className="Cart_P">Cantidad: {itemC.cantidad}</p>
                    <button onClick={() => removeCartItem(itemC.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr className="Cart_hr" />

                </div>
            ))}
            <button onClick={removeCart} className="btn btn-danger" >Vaciar carrito</button>
            <h3 className="Cart_h3">Total: ${cartTotal()}</h3>
        </div>
    )
}