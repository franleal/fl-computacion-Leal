import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { llamadoItem } from "../../funcionesExtras/LlamadoItems"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


export const ItemDetailContainer = () =>{

    const [ItemDetailC,setItemDetailC] = useState (null)
    const {categoryId} = useParams()

    console.log(categoryId)
    console.log(ItemDetailC)

    useEffect(()=>{
        llamadoItem()
            .then ((resp) => {
                setItemDetailC(resp.find((prod) => prod.id === Number(categoryId)))
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=>{

            })

    },[categoryId])

    return( 
        <div className="itemDetailC">
            <ItemDetail itemC = {ItemDetailC} />
        </div>
        
    )
}