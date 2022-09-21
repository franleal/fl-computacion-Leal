import "../ItemListContainer/ItemListContainer.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../FireBase/Config"
import { collection,getDocs,query,where} from "firebase/firestore"


export const ItemListContainer = () =>{
    
    const [Productos,setProductos] = useState ([])

    const {Category} = useParams()

    useEffect(()=>{

        const productosRef = collection(db,'productos')

        const q = Category ? query(productosRef, where('category', '==', Category) ) : productosRef

        getDocs(q)
            .then((resp)=>{
                const prodsDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(prodsDB)

                setProductos(prodsDB)

            })
            

    }, [Category])

    return( 
        <div className="ItemListContainer">
            <ItemList productos = {Productos}/>
        </div>
        
    )
}