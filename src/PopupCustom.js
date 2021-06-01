import React, { useRef, useEffect } from "react";
import PopupItem from "./PopupItem";

import "./PopupCustom.scss";
import useStore from "./store/store";

export default function PopupCustom() {
  const products = useStore((state) => state.products);
  const upsellProducts = useStore((state) => state.upsellProducts);
  const upsellProductsSubscriber = useRef(useStore.getState().upsellProducts);

  useEffect(() => {
    console.log("current upsell products: ", upsellProducts);
  }, [upsellProducts]);

  return (
    <div className="PopupCustom">
      <div className="a-card__paddings">
        <h3>Please select the products to upsell: </h3>
      </div>
      {products.items.map((e) => (
        <PopupItem key={e.id} product={e}></PopupItem>
      ))}
    </div>
  );
}
