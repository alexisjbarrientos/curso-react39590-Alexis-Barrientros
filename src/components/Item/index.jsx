import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Item({product}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="bottom" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
                {product.description}
          </Card.Text>
        <Button variant="dark"><NavLink to = {`/item/${product.id}`}>Ver mas Info..</NavLink></Button>
        </Card.Body>
      </Card>
    );
}

export default Item;