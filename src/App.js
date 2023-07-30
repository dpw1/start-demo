import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "./Products";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);

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
      console.log(window.EcwidApp);
      window.EcwidApp.getAppPublicConfig(function (value) {
        if (!value) {
          initDatabaseOnFirstInstall();
        }
      });
    }

    console.log("rr my store data: ", storeData);
  }, [storeData]);

  return (
    <div className="EasyUpsellApp">
      <div className="EasyUpsellApp-container">
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
