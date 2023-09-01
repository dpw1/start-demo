import React, { useEffect, useState, useRef } from "react";
import "./Products.scss";
import Skeleton from "react-loading-skeleton";
import ProductPicker from "./ProductPicker";
import ProductItem from "./ProductItem";
import { useStore } from "./store/store";
import { Placeholder } from "./Placeholder";
import NoProductsFound from "./NoProductsFound";
import { Filter } from "./Filter";
import Search from "./Search";

export default function Products({ upsellProducts }) {
  const populateProducts = useStore((state) => state.populateProducts);
  const products = useStore((state) => state.visibleProducts);

  const [upsell, setUpsell] = useState(upsellProducts);

  useEffect(() => {
    populateProducts();

    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        setUpsell(e);
      },
    );
  }, []);

  return (
    <div className="Products  named-area">
      <div className="Products-intro">
        <p className="Text--h3">Products</p>
        <div className="Text--p">
          All products in your store can be found on the list below. Select one
          product to add upsells to it.
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Filter upsellProducts={upsellProducts}></Filter>
        <Search></Search>
      </div>

      <div className="Products-items">
        {products &&
        products.hasOwnProperty("items") &&
        products.items.length <= 0 ? (
          <NoProductsFound />
        ) : (
          ""
        )}
        {products && products.hasOwnProperty("items") ? (
          products.items.map((e) => (
            <ProductItem
              key={e.id}
              product={e}
              upsell={
                upsell.filter((x) => x.id === e.id).length >= 1
                  ? upsell.filter((x) => x.id === e.id)[0]
                  : []
              }></ProductItem>
          ))
        ) : (
          <Placeholder></Placeholder>
        )}
      </div>
    </div>
  );
}
