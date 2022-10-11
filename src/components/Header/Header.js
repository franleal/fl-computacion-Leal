import './Header.css';
import  { Carrito } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export const Header = () =>{
    return(
        <header className="Header">
            
            <Link to = "/"  className="Title">FL-Computacion</Link>

            <nav className="Nav">

                <Link to={"/"} className="Links">productos</Link>
                <NavDropdown title="Categorias"className="drop">
                    <li><Link to={"/productos/placas"} className="LinksDrop">Placas de video</Link></li>
                    <li><Link to={"/productos/monitores"} className="LinksDrop">Monitores</Link></li>
                    <li><Link to={"/productos/procesadores"} className="LinksDrop">Procesadores</Link></li>
                    <li><Link to={"/productos/placasMadres"} className="LinksDrop">Placas Madres</Link></li>
                    <li><Link to={"/productos/ram"} className="LinksDrop">Memorias Ram</Link></li>
                    <li><Link to={"/productos/gabinetes"} className="LinksDrop">Gabinetes</Link></li>
                    
                    
                </NavDropdown>
                <Link to ={"/productos/pcarmada"} className="Links">PC armada</Link>
            </nav>

            <Carrito/>

        </header>
    )
}
