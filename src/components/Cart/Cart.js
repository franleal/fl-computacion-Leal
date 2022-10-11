import "../Cart/Cart.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"


export const Cart = () =>{

    const{cart,cartTotal,removeCart,removeCartItem} = useContext(CartContext) 
    
    if(cart.length <= 0){
        return(
            <div>
                <p className="CartTitle">Mi Carrito</p>
                <p className="Cart_P">Su carrito esta vacio, agregue algo para poder comprar</p>
                <Link to='/' className="btn btn-primary">Volver a la tienda</Link>
            </div>
            
        )
    }
    

    return(
        <div className="cartContainer">
            <div>
                <p className="CartTitle">Mi Carrito</p>

                { cart.map((itemC) => (
                    <div key={itemC.id} className="Cart">

                        <h1 className="Cart_h1">{itemC.Nombre}</h1>
                        <p className="Cart_P">Precio por unidad: {itemC.precio}</p>
                        <p className="Cart_P">Cantidad: {itemC.cantidad}</p>
                        <button onClick={() => removeCartItem(itemC.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr className="Cart_hr" />
                        

                    </div>
                ))}
                <button onClick={removeCart} className="boton_vaciar" >Vaciar carrito</button>
                <Link to= {'/CheckOut'} className="boton_terminar" >Terminar mi compra</Link>
                <h3 className="Cart_h3">Total: ${cartTotal()}</h3>
            </div>    
        </div>
    )
}