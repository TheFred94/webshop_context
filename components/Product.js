import React from "react";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

// {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
//   },

function Product(props) {
  const dispatch = useContext(DispatchContext);
  //   Takes the action ADD_PRODUCT from the reducer function in storeContext.js and delivers the payload with an object that contains the information we want to deliver to the Basket component.
  function addToBasket() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        id: props.id,
        price: props.price,
        productdisplayname: props.productdisplayname,
      },
    });
  }
  return (
    <article>
      <h3>{props.productdisplayname}</h3>
      <p>
        {props.brandname} - {props.season}{" "}
      </p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt="Product image" />
      <button onClick={addToBasket}>Add to basket</button>
    </article>
  );
}

export default Product;
