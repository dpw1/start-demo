import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "./Filter.scss";
import Select from "react-dropdown-select";
import { useStore } from "./store/store";
import {
  applyFiltersOnProducts,
  availableFilters,
  convertUpsellProductsToObject,
  findEqualById,
} from "./utils";

const selectedValues = [];

export const Filter = () => {
  const [upsellProducts, setUpsellProducts] = useState([]);

  const storeUpsellProducts = useStore((state) => state.upsellProducts);
  const products = useStore((state) => state.products);
  const setActiveFilters = useStore((state) => state.setActiveFilters);
  const visibleProducts = useStore((state) => state.visibleProducts);
  const updateVisibleProducts = useStore(
    (state) => state.updateVisibleProducts,
  );

  useEffect(() => {
    console.log("my upsell prods", upsellProducts);
    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        console.log("upsell products update from app!", e);
        setUpsellProducts(e);
      },
    );

    setUpsellProducts(storeUpsellProducts);
  }, []);

  return (
    <div className="Filter">
      <Select
        options={availableFilters}
        placeholder={"Filter"}
        multi
        contentRenderer={({ props, state }) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <b style={{ marginRight: 5 }}>{state.values.length}</b> Filter
              {state.values.length !== 1 ? "s" : ""} -- {upsellProducts.length}
            </div>
          );
        }}
        values={availableFilters.filter((data) =>
          selectedValues.includes(data.label),
        )}
        onChange={(filters) => {
          if (filters.length <= 0) {
            console.log("all prods", products);
            updateVisibleProducts(products);
            setActiveFilters([]);
            return;
          }

          console.log("NEW CODE filters aand upsell", filters, upsellProducts);
          setActiveFilters(filters);

          const update = applyFiltersOnProducts(
            visibleProducts,
            upsellProducts,
            filters,
          );

          console.log(
            "filter update",
            update,
            "--- visible prods",
            visibleProducts,
          );
          if (!update) {
            updateVisibleProducts(products);
          }

          updateVisibleProducts(update);
        }}
      />
    </div>
  );
};
