import {Card} from "react-bootstrap";


function ItemDetail(products){
    return(
        <div>
            <p>{product?.name}</p>
            <p>{product?.description}</p>
            <Card.Img variant="bottom" src={product?.image}/>
        </div>
    )
}

export default ItemDetail;