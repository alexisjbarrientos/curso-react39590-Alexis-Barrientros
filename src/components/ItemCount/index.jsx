import "./itemcount.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [count, setCount] = useState(inicial);

  const lower = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <Button variant="dark" disabled={count <= 1} onClick={lower}>
        -
      </Button>
      <span className="number">{count}</span>
      <Button variant="dark" disabled={count >= stock} onClick={increase}>
        +
      </Button>
      <div className="button-conte">
        <Button variant="dark" disabled={stock <=1} onClick={() => onAdd(count)}>
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;




