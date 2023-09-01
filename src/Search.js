import React, { useRef, useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import PopupCustom from "./PopupCustom";
import "./Search.scss";
import { useStore } from "./store/store";

import Products from "./Products";
import { applyFiltersOnProducts } from "./utils";

export default function Search() {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  let productsStored = false;

  const updateVisibleProducts = useStore(
    (state) => state.updateVisibleProducts,
  );
  const visibleProducts = useStore((state) => state.visibleProducts);
  const upsellProducts = useStore((state) => state.upsellProducts);
  const activeFilters = useStore((state) => state.activeFilters);

  useEffect(() => {
    useStore.subscribe(
      (state) => state.products,
      (e) => {
        if (productsStored) {
          return;
        }

        if (e.hasOwnProperty("items") && e.items.length >= 1) {
          setAllProducts(e);
          console.log("SEARCH!!!", e);
          productsStored = true;
        }
      },
    );
  }, []);

  useEffect(() => {
    console.log("search", allProducts);

    useStore.subscribe(
      (state) => state.activeFilters,
      (e) => {
        setSearch("");
      },
    );

    if (search.length <= 0) {
      console.log("updating all products", allProducts);
      updateVisibleProducts(allProducts);
    }

    if (allProducts && allProducts.items && allProducts.items.length >= 1) {
      console.log(activeFilters);

      let found = allProducts.items.filter((e) => {
        if (e.name.toLowerCase().includes(search.toLowerCase())) {
          return e;
        }

        return null;
      });

      /* TODO - BUG 

      can't search for products found i keep typing
      */

      /* Search again if there are filters */
      if (activeFilters && activeFilters.length >= 1) {
        found = applyFiltersOnProducts(
          allProducts,
          upsellProducts,
          activeFilters,
        ).items.filter((e) => {
          if (e.name.toLowerCase().includes(search.toLowerCase())) {
            return e;
          }

          return null;
        });
      }

      console.log("searcgable: ", "filters ", activeFilters);

      const res = JSON.parse(JSON.stringify(allProducts));
      res.items = found;

      console.log(res);

      updateVisibleProducts(res);
    }
  }, [search]);

  return (
    <div className="Search">
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
          placeholder="Search product"
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
