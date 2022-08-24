import './Header.css';
import  { Carrito } from '../CartWidget';

export const Header = () =>{
    return(
        <header className="Header">
            
            <h1 className="Title">FL-Computacion</h1>

            <nav className="Nav">
                <a className="Links">productos</a>
                <a className="Links">Ubicacion</a>
                <a className="Links">PC armada</a>
            </nav>

            <Carrito/>

        </header>
    )
}
