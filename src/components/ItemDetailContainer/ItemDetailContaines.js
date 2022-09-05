import { useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { llamadoItem } from "../../funcionesExtras/LlamadoItems"
import { useEffect} from "react"


export const ItemDetailContainer = () =>{

    const {categoryId} = useParams()

    const [ItemDetailC,setItemDetailC] = useState (null)

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
        <div >
            <ItemDetail itemC = {ItemDetailC} />
        </div>
        
    )
}