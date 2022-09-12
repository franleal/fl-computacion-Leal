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
            <p>Agregar producos</p>

            <Button variant="success" onClick={incremento}>+</Button>{' '}
            <span className='span-counter'>{counter}</span>
            <Button variant="danger" onClick={restar}>-</Button>{' '}

            
            <Button variant="outline-primary" className='boton-agregar' onClick={agregar}>Agregar al carrito</Button>
            
            
        </div>
    )
}