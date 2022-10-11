import Button from 'react-bootstrap/Button';
import "./counter.css"

export const Counter = ({maxStock,Initial, counter, setCounter, agregar}) =>{


    const incremento = () => {
        if(counter<maxStock){
            setCounter( counter + 1 )
        }
        
    }

    const restar = () => {
        if (counter>Initial)
            setCounter( counter - 1 )
            
    }

    
    return(
        <div className="CounterContainer">
            <p className='counter_title'>Agregar producos</p>
            <div className='botonera'>
                <Button className='boton_menos' onClick={restar}>-</Button>{' '}
                <span className='span-counter'>{counter}</span>
                <Button className='boton_mas' onClick={incremento}>+</Button>{' '}
                
                <button className='boton-agregar' onClick={agregar}>Agregar al carrito</button> 
            </div>
            
            
        </div>
    )
}