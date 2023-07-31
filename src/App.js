import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "./store/store";

import Products from "./Products";
import Skeleton from "react-loading-skeleton";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [upsellProducts, setUpsellProducts] = useState([]);

  const storeUpsellProducts = useStore((state) => state.upsellProducts);

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
      if (window.upsellProducts) {
        return;
      }

      const upsell = await storeUpsellProducts();
      window.upsellProducts = upsell;
      setUpsellProducts(upsell);
      console.log("upsell prods: ", upsell);
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
          <Products
            upsellProducts={async () => {
              const upsell = await upsellProducts();
              console.log("beforehnd", upsell);
              return upsell;
            }}></Products>
        ) : (
          <ProductSkeleton></ProductSkeleton>
        )}
      </div>
    </div>
  );
}

export default App;
