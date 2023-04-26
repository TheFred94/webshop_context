import React from "react";

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
  return (
    <article>
      <h3>{props.productdisplayname}</h3>
      <p>
        {props.brandname} - {props.season}{" "}
      </p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt="Product image" />
      <button>Add to basket</button>
    </article>
  );
}

export default Product;
