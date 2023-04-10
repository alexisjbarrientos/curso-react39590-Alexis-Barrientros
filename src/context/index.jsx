import {createContext, useState} from "react";

 export const Context = createContext();
 export function CustomProvider({ children}) {
   
   const [cartsAdded, setcartsAdded] =useState([]);

   function onAdd(product,quantity) {
      const readyAdded = inCart(product);

      if(readyAdded){

            const cartToModify = cartsAdded.find((cartsAdded) => cartsAdded.id === product.id);

            const cartModified = { ...cartToModify,quantity:cartToModify.quantity+quantity};

            setcartsAdded((prevState) => prevState.map((cartsAdded) => cartsAdded.id === product.id ? cartModified : cartsAdded));
      }
      else{
         setcartsAdded ((prevState) => prevState.concat({ ...product, quantity}));
      }
   }
   const totalPrice = () => {
      return cartsAdded.reduce((prev, item) => prev + item.quantity * item.price, 0);
    };
    
   const removeItem = (id) => setcartsAdded(cartsAdded.filter(product => product.id !== id));

   const  clearItem = () => setcartsAdded([]);

   function inCart(product){
      return cartsAdded.some((cartsAdded) => cartsAdded.id === product.id);
   }

    return (
      <Context.Provider value = {{cartsAdded,onAdd,removeItem,totalPrice}}>
      {children}
      </Context.Provider>
      );
 }




