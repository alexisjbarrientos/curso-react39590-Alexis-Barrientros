import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({product}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
                {product.description} <br />
               <p>Precio : {product.precio}</p> 
          </Card.Text>
          <Button variant="dark">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    );
}

export default Item;