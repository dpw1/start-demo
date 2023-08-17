import "./App.scss";
import React, { useEffect, useState } from "react";
import { useStore } from "./store/store";
import { shallow } from "zustand/shallow";
import Products from "./Products";
import { subscribeWithSelector } from "zustand/middleware";
import { create } from "zustand";
import Search from "./Search";
import { Placeholder } from "./Placeholder";
import Settings from "./Settings";
import { defaultSettings } from "./utils";
import { Filter } from "./Filter";
import HomepageSettings from "./HomepageSettings";
import TextContentBlock from "./TextContentBlock";
import Tutorial from "./Tutorial";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [upsellProducts, setUpsellProducts] = useState(null);
  const [initiated, setInitiated] = useState(false);

  const settings = useStore((state) => state.settings);
  const setSettings = useStore((state) => state.setSettings);

  const getUpsellProducts = useStore((state) => state.upsellProducts);

  function initDatabaseOnFirstInstall(value) {
    value = JSON.parse(value);
    let mustInit = false;

    let initial = {};

    try {
      initial.upsellProducts = value.hasOwnProperty("upsellProducts")
        ? value.upsellProducts
        : [];
    } catch (err) {
      initial.upsellProducts = [];
    }

    try {
      initial.settings = value.hasOwnProperty("settings")
        ? Object.assign({}, defaultSettings, value.settings)
        : defaultSettings;
    } catch (err) {
      initial.settings = defaultSettings;
    }

    console.log("Current database status:", value);

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
        console.log("has init?", initiated, value);

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
              <div className="EasyUpsellApp-block a-card__paddings">
                <TextContentBlock
                  title={"Checkout Upsell"}
                  subtitle={"Summary"}
                  additionalDescription={
                    "Show a carousel with products related to what your customer has added to cart on the checkout page."
                  }
                  description={"Brief explanation on how to get started."}>
                  <Tutorial></Tutorial>
                </TextContentBlock>

                <TextContentBlock
                  subtitle={"App settings"}
                  description={"Configure the app settings here."}>
                  <HomepageSettings></HomepageSettings>
                </TextContentBlock>
                {/* <HomepageSettings></HomepageSettings> */}
                {/* <Settings></Settings> */}
                {/* <div style={{ display: "flex" }}>
                  {upsellProducts && (
                    <React.Fragment>
                      <Filter upsellProducts={upsellProducts}></Filter>
                      <Search></Search>
                    </React.Fragment>
                  )}
                </div>
                {upsellProducts ? (
                  <Products upsellProducts={upsellProducts}></Products>
                ) : (
                  <Placeholder></Placeholder>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
