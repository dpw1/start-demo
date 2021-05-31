import React from "react";
import PopupItem from "./PopupItem";

import "./PopupContent.scss";
import useStore from "./store/store";

export default function PopupContent() {
  const products = useStore((state) => state.products);

  return (
    <div className="PopupContent">
      <div className="a-card__paddings">
        <h4>Please select the products to upsell: </h4>
      </div>
      {products.items.map((e) => (
        <PopupItem key={e.id} product={e}></PopupItem>
      ))}
    </div>
  );
}
