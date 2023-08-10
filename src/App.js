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
  const setSettings = useStore((state) => state.setSettings);

  function initDatabaseOnFirstInstall(value) {
    value = JSON.parse(value);
    let mustInit = false;

    let initial = {};

    initial.upsellProducts = value.hasOwnProperty("upsellProducts")
      ? value.upsellProducts
      : [];
    initial.settings = value.hasOwnProperty("settings") ? value.settings : [];

    console.log("!Must create new database? ", mustInit, initial);
    console.log("vaue", value);

    if (mustInit) {
      window.EcwidApp.setAppPublicConfig(JSON.stringify(initial), function (e) {
        console.log("Fresh database setup!", e);
      });
    }

    setUpsellProducts(initial.upsellProducts);
    setSettings(initial.settings);

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

    if (!window.EcwidApp.getPayload()) {
      /* Used for dev */
      initDatabaseOnFirstInstall(
        JSON.stringify({
          upsellProducts: [],
          settings: defaultSettings,
        }),
      );
    }

    if (window.EcwidApp && window.EcwidApp.getPayload() && !initiated) {
      window.EcwidApp.getAppPublicConfig(function (value) {
        console.log("has init?", initiated);

        initDatabaseOnFirstInstall(value);
      });
    }
  }, []);

  return (
    <div className="EasyUpsellApp">
      <div className="EasyUpsellApp-container">
        <div className="named-area">
          <div className="named-area__body">
            <div className="a-card a-card--compact">
              <div className="a-card__paddings">
                <h1 className="EasyUpsellApp-title settings-page__title spacing--mt2">
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
