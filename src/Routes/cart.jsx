import React, { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import ItemCart from "../components/itemCart";

function Cart() {
  const { cartsAdded, totalPrice } = useContext(Context);

  if (cartsAdded.length === 0) {
    return (
      <div>
        <p>No hay productos en el carrito</p>
        <Link to="/">
          <button>hacer compras</button>
        </Link>
      </div>
    );
  }

  return (
        <div>
            {cartsAdded.map(product => <ItemCart key={product?.id} product={product}/>)}
            <p>Total A Pagar :{totalPrice()}</p>
        </div>
  );
}

export default Cart;

