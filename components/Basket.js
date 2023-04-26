import React from "react";
import { useContext } from "react";
// Imports the context from the storeContext.js
import { StoreContext } from "@/contexts/storeContext";

function Basket() {
  // Tells the basket about the state of the products and puts the products that are added to the basket into state.
  const state = useContext(StoreContext);

  return (
    <div className="Basket">
      <h2>Basket</h2>
      {state.basket.map((item) => {
        return (
          <li key={item.id}>
            {/* Outputs the amount recieved from inside the Basket state when theres an item in state.  */}
            {item.productdisplayname} x {item.amount}
          </li>
        );
      })}
    </div>
  );
}

export default Basket;
