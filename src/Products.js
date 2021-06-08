import React, { useEffect, useState, useRef } from "react";
import "./Products.scss";
import Skeleton from "react-loading-skeleton";
import ProductPicker from "./ProductPicker";
import ProductItem from "./ProductItem";
import useStore from "./store/store";

export default function Products(props) {
  // const upsellProductsSubscriber = useStore.subscribe(
  //   (upsellProducts, previousupsellProducts) => {
  //     console.log("Updated upsell products: ", upsellProducts);
  //   },
  //   (state) => state.upsellProducts,
  // );

  const upsellProducts = useStore((state) => state.upsellProducts);
  const populateProducts = useStore((state) => state.populateProducts);
  const products = useStore((state) => state.products);

  useEffect(() => {
    populateProducts();

    useStore.subscribe(
      (deleteUpsellProductById, previousupsellProducts) => {
        console.log("Deleting upsell");
      },
      (state) => state.deleteUpsellProductById,
    );
  }, []);

  const ProductSkeleton = () => {
    return (
      <React.Fragment>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="Products  named-area">
      <div className="named-area__body">
        <div className="a-card a-card--compact">
          <div className="a-card__paddings">
            <h1 className="settings-page__title spacing--mt2">Products</h1>

            {products && products.hasOwnProperty("items") ? (
              products.items.map((e) => (
                <ProductItem key={e.id} product={e}></ProductItem>
              ))
            ) : (
              <ProductSkeleton></ProductSkeleton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
