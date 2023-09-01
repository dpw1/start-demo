import React, { useRef, useEffect, useState } from "react";
import PopupItem from "./PopupItem";

import "./PopupCustom.scss";
import { useStore } from "./store/store";
import PopupSearch from "./PopupSearch";

export default function PopupCustom({ parentID, close }) {
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
      <button className="PopupCustom-close" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="icon icon-close"
          fill="none"
          viewBox="0 0 18 17">
          <path
            d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="a-card__paddings">
        <h3 className="PopupCustom-title">Products to upsell:</h3>
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
