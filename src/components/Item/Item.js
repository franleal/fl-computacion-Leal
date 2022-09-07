 import "./Item.css"
 import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';

function Item({prod}) {
  return (
    <Card className="card">
    <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <div>
            <p>Precio: {prod.precio}</p>
            <p>Stock disponible: {prod.stock}</p>
        </div>
        <Link to = { `/Item/${prod.id}` }className="btn btn-primary my-2">Ver mas</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;