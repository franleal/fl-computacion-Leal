import { useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { addDoc,collection } from "firebase/firestore"
import { db } from "../../FireBase/Config"


export const Checkout = () =>{

    const{cart,cartTotal,terminarCompra} = useContext(CartContext) 

    const [value,setValue] = useState({
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
        <div>
            <h2>Check Out</h2>

            <form onSubmit={handleSubmit}>
                <input type={'text'} placeholder='Nombre' onChange={handleInputChange} value={value.nombre} name='nombre'/>
                <input type={'text'} placeholder='Apellido' onChange={handleInputChange} value={value.apellido} name='apellido'/>
                <input type={'email'} placeholder='Email' onChange={handleInputChange} value={value.email} name='email'/>
                <input type={'tel'} placeholder='Telefeno' onChange={handleInputChange} value={value.telefono} name='telefono'/>
                <input type={'text'} placeholder='Direccion' onChange={handleInputChange} value={value.direccion} name='direccion'/>
                
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}