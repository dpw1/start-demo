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
  const [initiated, setInitiated] = useState(false);

  const getUpsellProducts = useStore((state) => state.upsellProducts);

  function initDatabaseOnFirstInstall(value) {
    value = JSON.parse(value);
    let mustInit = false;

    let initial = {};

    initial.upsellProducts = value.hasOwnProperty("upsellProducts")
      ? value.upsellProducts
      : [];
    initial.settings = value.hasOwnProperty("settings") ? value.settings : [];

    console.log("Mustxx create new database? ", mustInit, initial);
    console.log("vaue", value);

    if (mustInit) {
      window.EcwidApp.setAppPublicConfig(JSON.stringify(initial), function (e) {
        console.log("Fresh database setup!", e);
      });
    }

    setInitiated(true);
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
  }, [storeData]);

  useEffect(() => {
    (async () => {
      if (!initiated) {
        return;
      }

      const upsell = await getUpsellProducts();
      window.upsellProducts = upsell;
      setUpsellProducts(upsell);
      console.log(`There are ${upsell.length} products with upsells.`);
    })();
  }, [initiated]);

  return (
    <div className="EasyUpsellApp">
      <div className="EasyUpsellApp-container">
        <div className="named-area">
          <div className="named-area__body">
            <div className="a-card a-card--compact">
              <div className="a-card__paddings">
                <h1 className="Products-title settings-page__title spacing--mt2">
                  EZFY Cart Upsell
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
