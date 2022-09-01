import "../ItemListContainer/ItemListContainer.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { llamadoItem } from "../../funcionesExtras/LlamadoItems"

export const ItemListContainer = () =>{
    
    const [Productos,setProductos] = useState ([])

    useEffect(()=>{
        llamadoItem()
            .then ((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=>{

            })

    },[])

    return( 
        <div className="ItemListContainer">
            <ItemList productos = {Productos}/>
        </div>
        
    )
}