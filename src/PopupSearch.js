import React, { useRef, useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import PopupCustom from "./PopupCustom";
import "./PopupSearch.scss";
import { useStore } from "./store/store";

import Products from "./Products";

export default function PopupSearch({ allProducts }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  let productsStored = false;

  const updatePopupVisibleProducts = useStore(
    (state) => state.updatePopupVisibleProducts,
  );
  const popupVisibleProducts = useStore((state) => state.popupVisibleProducts);

  const databaseProducts = useStore((state) => state.products);

  useEffect(() => {
    useStore.subscribe(
      (state) => state.popupVisibleProducts,
      (e) => {
        console.log("prods", e);
      },
    );
  }, []);

  useEffect(() => {
    console.log("popup search all produs", allProducts, search.length);

    if (search.length <= 0) {
      updatePopupVisibleProducts(allProducts);
      return;
    }

    const found = allProducts.items.filter((e) => {
      if (e.name.toLowerCase().includes(search.toLowerCase())) {
        return e;
      }

      return null;
    });

    console.log("res: ", found);

    const res = JSON.parse(JSON.stringify(popupVisibleProducts));
    res.items = found;

    console.log(res);

    updatePopupVisibleProducts(res);
  }, [search]);

  return (
    <div className="PopupSearch">
      <div className="field field--medium">
        <span className="fieldset__svg-icon" style={{}}>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"
            />
          </svg>
        </span>{" "}
        <input
          value={search}
          type="text"
          className="field__input"
          id="gwt-uid-3188"
          placeholder="Search product!"
          aria-label="Search product"
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <span className="field-state--success">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"
            />
          </svg>
        </span>{" "}
        <span className="field-state--close">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
