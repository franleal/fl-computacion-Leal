import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

export const CartProvaider = ({children}) => {
    
    const [cart,setCart] = useState([])

    const agreagarCarrito = (item) =>{
        setCart([...cart,item])
    }

    const EstaEnCarrito = (id) =>{
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc,itemC) => acc + itemC.cantidad, 0)
    }
    
    const cartTotal = () =>{
        return cart.reduce((acc,itemC) => acc + itemC.precio * itemC.cantidad,0)
    }

    const removeCart = () =>{
        setCart([])
    }

    const terminarCompra = (id) =>{
        Swal.fire({
            title: "Compra exitosa!",
            text: `Numero de compra: ${id}`,
            icon: 'success'
        })
        setCart([])
       
    }

    const removeCartItem = (id) => {  
        setCart(cart.filter((itemC) => itemC.id !== id ))
    }

    return(
        
        <CartContext.Provider value={ {
            cart,
            agreagarCarrito,
            EstaEnCarrito,
            cartQuantity, 
            cartTotal,
            removeCart,
            removeCartItem,
            terminarCompra
            } }>
                {children}

        </CartContext.Provider>
    )
}