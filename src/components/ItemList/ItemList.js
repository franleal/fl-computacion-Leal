import "./ItemList.css"
import  Item  from "../Item/Item"


    

export const ItemList = ({productos = []}) =>{
    return(
        <div className="ItemContainer">
            <h2>Productos</h2>

            <div className="ItemContainer__Child">
                {productos.map((prod) => {
                    return (
                        <Item prod={prod} key={prod.id}/> 
                    )
                }) }
            </div>
        </div>
    )
    
}
