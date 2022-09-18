import { createContext } from "react";
import { useState } from "react";

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
            removeCartItem
            } }>
                {children}

        </CartContext.Provider>
    )
}