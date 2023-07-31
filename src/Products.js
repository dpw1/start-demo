import React, { useEffect, useState, useRef } from "react";
import "./Products.scss";
import Skeleton from "react-loading-skeleton";
import ProductPicker from "./ProductPicker";
import ProductItem from "./ProductItem";
import useStore from "./store/store";

export default function Products({ upsellProducts }) {
  // const upsellProductsSubscriber = useStore.subscribe(
  //   (upsellProducts, previousupsellProducts) => {
  //     console.log("Updated upsell products: ", upsellProducts);
  //   },
  //   (state) => state.upsellProducts,
  // );

  /* TODO - load database on load */

  const populateProducts = useStore((state) => state.populateProducts);
  const products = useStore((state) => state.products);

  useEffect(() => {
    populateProducts();

    useStore.subscribe(
      (upsellProducts, previousupsellProducts) => {
        console.log("upsell products loaded!");
      },
      (state) => state.upsellProducts,
    );
  }, []);

  return (
    <div className="Products  named-area">
      <div className="named-area__body">
        <div className="a-card a-card--compact">
          <div className="a-card__paddings">
            <h1 className="Products-title settings-page__title spacing--mt2">
              Products!!!!!
            </h1>

            {products &&
              products.hasOwnProperty("items") &&
              upsellProducts &&
              products.items.map((e) => (
                <ProductItem
                  key={e.id}
                  product={e}
                  upsell={
                    upsellProducts.filter((x) => x.id === e.id).bundle.length >=
                    1
                      ? upsellProducts.filter((x) => x.id === e.id)[0].bundle
                      : []
                  }></ProductItem>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
