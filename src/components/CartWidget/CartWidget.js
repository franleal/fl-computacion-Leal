import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import '../CartWidget/CartWidget.css'


export const Carrito = () =>{

    const {cartQuantity}=useContext(CartContext)

    return(
        <div>

            <Link to={'/Cart'} className='CartItem'><FaCartPlus/> </Link>
            <spam className='CartItem_spam'>{cartQuantity()}</spam>

        </div>
        
    )
}

