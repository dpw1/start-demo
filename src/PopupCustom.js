import React, { useRef, useEffect } from "react";
import PopupItem from "./PopupItem";

import "./PopupCustom.scss";
import useStore from "./store/store";

export default function PopupCustom({ parentID }) {
  const products = useStore((state) => state.products);

  return (
    <div className="PopupCustom">
      <div className="a-card__paddings">
        <h3>Please select the products to upsell: </h3>
      </div>
      {products.items.map((e) => {
        if (e.id === parentID) {
          return;
        }

        return <PopupItem key={e.id} product={e}></PopupItem>;
      })}
    </div>
  );
}
