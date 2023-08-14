import React, { useEffect, useState, useRef } from "react";
import "./Products.scss";
import Skeleton from "react-loading-skeleton";
import ProductPicker from "./ProductPicker";
import ProductItem from "./ProductItem";
import { useStore } from "./store/store";
import { Placeholder } from "./Placeholder";
import NoProductsFound from "./NoProductsFound";

export default function Products({ upsellProducts }) {
  const populateProducts = useStore((state) => state.populateProducts);
  const products = useStore((state) => state.visibleProducts);

  const [upsell, setUpsell] = useState(upsellProducts);

  useEffect(() => {
    populateProducts();

    console.log("total prods", products);

    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        setUpsell(e);
        console.log("visible upsells updated, let's upd!", e);
      },
    );
  }, []);

  return (
    <div className="Products  named-area">
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
