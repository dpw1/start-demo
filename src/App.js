import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "./store/store";
import { shallow } from "zustand/shallow";
import Products from "./Products";
import Skeleton from "react-loading-skeleton";
import { subscribeWithSelector } from "zustand/middleware";
import { create } from "zustand";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [upsellProducts, setUpsellProducts] = useState(null);

  const getUpsellProducts = useStore((state) => state.upsellProducts);

  function initDatabaseOnFirstInstall() {
    window.EcwidApp.setAppPublicConfig(
      JSON.stringify({ upsellProducts: [] }),
      function () {
        console.log("New upasell product set up!");
      },
    );
  }

  useEffect(() => {
    const data = window.EcwidApp.getPayload();

    setStoreData(data);

    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        setUpsellProducts(e);
        console.log("upsell products update from app!", e);
      },
    );
  }, []);

  useEffect(() => {
    if (window.EcwidApp && window.EcwidApp.getPayload()) {
      window.EcwidApp.getAppPublicConfig(function (value) {
        if (!value) {
          initDatabaseOnFirstInstall();
        }
      });
    }

    (async () => {
      const upsell = await getUpsellProducts();
      window.upsellProducts = upsell;
      setUpsellProducts(upsell);

      console.log(`There are ${upsell.length} products with upsells.`);
    })();
  }, [storeData]);

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
    <div className="EasyUpsellApp">
      <div className="EasyUpsellApp-container">
        {upsellProducts ? (
          <Products upsellProducts={upsellProducts}></Products>
        ) : (
          <ProductSkeleton></ProductSkeleton>
        )}
      </div>
    </div>
  );
}

export default App;
