import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "./store/store";
import { shallow } from "zustand/shallow";
import Products from "./Products";
import { subscribeWithSelector } from "zustand/middleware";
import { create } from "zustand";
import Search from "./Search";
import { Placeholder } from "./Placeholder";
import Settings from "./Settings";
import { defaultSettings } from "./utils";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [upsellProducts, setUpsellProducts] = useState(null);

  const getUpsellProducts = useStore((state) => state.upsellProducts);

  function initDatabaseOnFirstInstall(value) {
    let mustInit = false;

    let initial = {};

    if (!value.hasOwnProperty("upsellProducts")) {
      initial.upsellProducts = [];
      mustInit = true;
    }

    if (!value.hasOwnProperty("settings")) {
      initial.settings = defaultSettings;
      mustInit = true;
    }

    if (mustInit) {
      window.EcwidApp.setAppPublicConfig(JSON.stringify(initial), function () {
        console.log("Fresh database setup!");
      });
    }
  }

  useEffect(() => {
    const data = window.EcwidApp.getPayload();

    setStoreData(data);

    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        console.log("upsell products update from app!", e);
      },
    );

    useStore.subscribe(
      (state) => state.settings,
      (e) => {
        console.log("settings update from app!", e);
      },
    );
  }, []);

  useEffect(() => {
    if (window.EcwidApp && window.EcwidApp.getPayload()) {
      window.EcwidApp.getAppPublicConfig(function (value) {
        initDatabaseOnFirstInstall(value);
      });
    }
    (async () => {
      const upsell = await getUpsellProducts();
      window.upsellProducts = upsell;
      setUpsellProducts(upsell);
      console.log(`There are ${upsell.length} products with upsells.`);
    })();
  }, [storeData]);

  return (
    <div className="EasyUpsellApp">
      <div className="EasyUpsellApp-container">
        <div className="named-area">
          <div className="named-area__body">
            <div className="a-card a-card--compact">
              <div className="a-card__paddings">
                <h1 className="Products-title settings-page__title spacing--mt2">
                  EZFY Cart Upsell {JSON.stringify(upsellProducts)}
                </h1>
                <Settings></Settings>
                <Search></Search>
                {upsellProducts ? (
                  <Products upsellProducts={upsellProducts}></Products>
                ) : (
                  <Placeholder></Placeholder>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
