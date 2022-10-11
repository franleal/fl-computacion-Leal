import { useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { addDoc,collection } from "firebase/firestore"
import { db } from "../../FireBase/Config"
import "../CheckOut/CheckOut.css"


export const Checkout = () =>{

    const{cart,cartTotal,terminarCompra} = useContext(CartContext) 

    const [value,setValue] = useState({
        tarjeta:'',
        codigo:'',
        nombre:'',
        email:'',
        telefono:'',
        direccion:'',
        apellido:'',
    })

    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const orden ={ 
            comprador: value,
            productos: cart,
            Total: cartTotal()
            
        }

        if (value.nombre.length < 2 ){
            alert('nombre incorrecto')
            return
        }

        if (value.telefono.length < 11 ){
            alert('telefono incorrecto')
            return
        }

        const ordenesRef = collection(db,'ordenes')

        addDoc(ordenesRef,orden)
            .then((doc)=> {
                console.log(doc.id)
                terminarCompra(doc.id)
            })
    }

    if (cart.length === 0) {
        return <Navigate to = '/'/>
    }


    return(
        <div className="checkOut_context">
            <h2 className="checkOut_Title">Check Out</h2>
            <p className="checkOut_p">Ingrese sus datos para terminar con la compra</p>
            <form onSubmit={handleSubmit} className="checkOut_form">
                <input type={'number'} placeholder='Numero de tarjeta' onChange={handleInputChange} value={value.tarjeta} name='tarjeta' className="checkOut_input"/>
                <input type={'number'} placeholder='codigo de seguridad de tarjeta' onChange={handleInputChange} value={value.codigo} name='codigo' className="checkOut_input"/>
                <input type={'text'} placeholder='Nombre' onChange={handleInputChange} value={value.nombre} name='nombre' className="checkOut_input"/>
                <input type={'text'} placeholder='Apellido' onChange={handleInputChange} value={value.apellido} name='apellido' className="checkOut_input"/>
                <input type={'email'} placeholder='Email' onChange={handleInputChange} value={value.email} name='email' className="checkOut_input"/>
                <input type={'tel'} placeholder='Telefeno' onChange={handleInputChange} value={value.telefono} name='telefono' className="checkOut_input"/>
                <input type={'text'} placeholder='Direccion' onChange={handleInputChange} value={value.direccion} name='direccion' className="checkOut_input"/>
                
                
                <button type="submit" className="checkOut_enviar">Enviar</button>
            </form>
        </div>
    )
}