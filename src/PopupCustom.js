import React, { useRef, useEffect, useState } from "react";
import PopupItem from "./PopupItem";

import "./PopupCustom.scss";
import { useStore } from "./store/store";
import PopupSearch from "./PopupSearch";

export default function PopupCustom({ parentID }) {
  const [visibleProducts, setVisibleProducts] = useState([]);

  const products = useStore((state) => state.products);
  const popupVisibleProducts = useStore((state) => state.popupVisibleProducts);
  const updatePopupVisibleProducts = useStore(
    (state) => state.updatePopupVisibleProducts,
  );
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    console.log("updating popups visible", products);
    const filtered = JSON.parse(JSON.stringify(products));
    filtered.items = products.items.filter((e) => e.id !== parentID);
    updatePopupVisibleProducts(filtered);
    setAllProducts(filtered);
    useStore.subscribe(
      (state) => state.popupVisibleProducts,
      (e) => {
        console.log("wihtn subscribe", e);
      },
    );
  }, []);

  return (
    <div className="PopupCustom">
      <div className="a-card__paddings">
        <h3 className="PopupCustom-title">Products to upsell : </h3>
      </div>
      <PopupSearch allProducts={allProducts}></PopupSearch>
      <div className="PopupCustom-products">
        {popupVisibleProducts &&
          popupVisibleProducts.hasOwnProperty(`items`) &&
          popupVisibleProducts.items.length >= 1 &&
          popupVisibleProducts.items.map((e) => {
            return (
              <PopupItem parentID={parentID} key={e.id} product={e}></PopupItem>
            );
          })}
      </div>
    </div>
  );
}
