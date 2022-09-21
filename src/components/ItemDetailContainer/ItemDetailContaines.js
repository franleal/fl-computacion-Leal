import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import {doc,getDoc} from "firebase/firestore"
import { db } from "../../FireBase/Config"


export const ItemDetailContainer = () =>{

    const [ItemDetailC,setItemDetailC] = useState (null)
    const {categoryId} = useParams()

    

    useEffect(()=>{
        const docRef = doc(db,'productos',categoryId)

        getDoc(docRef)
            .then((doc)=>{
                setItemDetailC({id: doc.id, ...doc.data()})
            })
    },[])

    return( 
        <div className="itemDetailC">
            <ItemDetail itemC = {ItemDetailC} />
        </div>
        
    )
}