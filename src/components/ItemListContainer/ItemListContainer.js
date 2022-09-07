import "../ItemListContainer/ItemListContainer.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { llamadoItem } from "../../funcionesExtras/LlamadoItems"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{
    
    const [Productos,setProductos] = useState ([])

    const {Category} = useParams()
    console.log(Category)

    useEffect(()=>{
        llamadoItem()
            .then ( (resp) => {
                if (!Category) {
                    setProductos(resp)
                } else{
                    setProductos(resp.filter((prod) => prod.category === Category))
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=>{

            })

    },[Category])

    return( 
        <div className="ItemListContainer">
            <ItemList productos = {Productos}/>
        </div>
        
    )
}