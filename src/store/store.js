import create from "zustand";
import axios from "axios";
import {
  defaultSettings,
  overwriteById,
  sanitizeUpsellProducts,
} from "../utils";

import { subscribeWithSelector } from "zustand/middleware";

const productsURL = /localhost/.test(window.location.href)
  ? /* local dev */
    `https://app.ecwid.com/api/v3/37374877/products?token=${process.env.REACT_APP_TOKEN}`
  : /* production */
    `https://app.ecwid.com/api/v3/${
      window.EcwidApp.getPayload().store_id
    }/products?token=${window.EcwidApp.getPayload().access_token}`;

const useStore = create(
  subscribeWithSelector((set, get) => ({
    /* ## API PRODUCTS
    ==================================== */

    /* ===============
    App settings */
    settings: defaultSettings,

    /* ===============
    All products on the store */
    products: [],

    /* ===============
    Products that are being searched/currently visible. */
    visibleProducts: [],

    /* ===============
    Products that are being searched/currently visible within a popup */
    popupVisibleProducts: [],

    /* ===============
    All filters to visualize products */
    activeFilters: [],

    /* ===============
    Get store's products and add them to the store's 'products' variable */
    populateProducts: async () => {
      const url = productsURL;

      const { data: products } = await axios.get(url);

      window.store__products = products;

      set({
        products,
        visibleProducts: products,
      });
    },

    /* ===============
    Update store's products. Typically used for search */
    updateVisibleProducts: async (products) => {
      set({
        visibleProducts: products,
      });
    },

    /* ===============
    Update popup visible products. Typically used for search */
    updatePopupVisibleProducts: async (products) => {
      set({
        popupVisibleProducts: products,
      });
    },

    /* Get a product from the customer's catalog by ID API  */
    getProductById: (id) => {
      return get().products.items.filter((e) => e.id === parseInt(id))[0];
    },

    /* ## UPSELL PRODUCTS
    ==================================== */

    /* Get Bundle products that will show up at the front-end. */
    upsellProducts: async () => {
      return new Promise(async (resolve, reject) => {
        const url = productsURL;

        const { data: products } = await axios.get(url);

        const upsellProducts = await sanitizeUpsellProducts(products);
        window.upsellProducts = upsellProducts;

        set({
          upsellProducts,
        });

        resolve(upsellProducts);
        return;
      });
      if (window.EcwidApp && window.EcwidApp.getPayload()) {
      }
    },

    setStoreUpsellProducts: (data) => {
      console.log("data: ", data);
      set({
        upsellProducts: data,
      });
    },

    /* Adds a product to the upsell */
    addUpsellProduct: async (parentID, bundleID) => {
      let bundle;
      let bundleProducts =
        typeof get().upsellProducts === "function"
          ? await get().upsellProducts()
          : await get().upsellProducts;

      const _parentProduct =
        bundleProducts.length >= 1 &&
        bundleProducts.filter((e) => e.id === parentID);

      let parentProduct = _parentProduct.length >= 1 ? _parentProduct[0] : null;

      /* Adds parent to bundle to show it up on front-end later on */
      const parent = get().getProductById(parentID);

      const bundleProduct = get().getProductById(bundleID);

      /* If it's an already existing product, adds the extra bundle to it */
      if (parentProduct) {
        const existingBundles = () => {
          const _existing = parentProduct.bundle;

          if (Symbol.iterator in Object(_existing)) {
            return [..._existing];
          }

          return [_existing];
        };

        bundle = [...existingBundles(), bundleProduct];

        bundleProducts = bundleProducts.filter((e) => e.id !== parentID);

        console.log(bundleProducts);
      }

      /* In this "one-line-if-else", if the product is having a bundle for the first time,
      it is added to the last line, adding both the parent and the first bundle. ([parent, bundleProduct]) */
      const currentProduct = {
        id: parentID,
        bundle:
          bundle && bundle.length >= 1
            ? [...new Set(bundle)]
            : [parent, bundleProduct],
      };

      const _bundle =
        Symbol.iterator in Object(bundleProducts) ? [...bundleProducts] : [];

      const _updated = [..._bundle, currentProduct];
      const updated = await sanitizeUpsellProducts(_updated);

      console.log("updated -- ", updated);

      /* Save into Ecwid's database */
      if (window.EcwidApp) {
        const settings = await get().settings;

        try {
          const payload = JSON.stringify({ settings, upsellProducts: updated });

          console.log("payload: ", { upsellProducts: updated });

          window.EcwidApp.setAppPublicConfig(payload, function () {
            console.log("New upsell product saved!");
          });
        } catch (err) {
          console.error(
            "Couldn't save upsell product. [store.js - addUpsellProduct()]",
          );
        }
      }

      console.log("updated: ", updated);

      set({
        upsellProducts: updated,
      });
    },

    /* Get the bundle/upsell products of a specific product ID */
    getUpsellProductById: async (id) => {
      let bundleProducts =
        typeof get().upsellProducts === "function"
          ? await get().upsellProducts()
          : await get().upsellProducts;

      const upsell = bundleProducts.filter((e) => e.id === id);

      const res = upsell.length >= 1 ? upsell[0].bundle : [];
      console.log("Bundle products:", upsell, bundleProducts, id, res);
      return res;
    },

    deleteUpsellProductById: async (parentID, bundleID) => {
      let bundleProducts =
        typeof get().upsellProducts === "function"
          ? await get().upsellProducts()
          : await get().upsellProducts;

      let updated = [];

      const parent = bundleProducts.find((e) => e.id === parentID);

      if (!parent) {
        console.log("parent is undefined!!!");
        return;
      }

      console.log("deleted bundle from parent: ", parent, parentID, bundleID);
      const updatedBundle = parent.bundle.filter((e) => e.id !== bundleID);

      /* If deleting the last item, remove parent as well.
    We use the number "1" because we always add the parent as an upsell. */
      if (updatedBundle.length <= 1) {
        updated = bundleProducts.filter((e) => e.id !== parentID);
      } else {
        updated = bundleProducts;
      }

      parent.bundle = updatedBundle;

      console.log("Updated after delete: ", updated);

      if (window.EcwidApp) {
        const settings = await get().settings;

        try {
          window.EcwidApp.setAppPublicConfig(
            JSON.stringify({ settings, upsellProducts: updated }),
            function () {
              console.log("Public config saved!");
            },
          );

          console.log("Saved upsell products in Database");
        } catch (err) {}
      }

      set({
        upsellProducts: updated,
      });
    },

    setSettings: async (newSettings) => {
      if (!newSettings) {
        throw new Error("no settings object");
      }

      const upsellProducts =
        typeof get().upsellProducts === "function"
          ? await get().upsellProducts()
          : await get().upsellProducts;

      const currentSettings = await get().settings;

      var updatedSettings = Object.assign({}, currentSettings, newSettings);

      if (window.EcwidApp) {
        try {
          const payload = { settings: updatedSettings, upsellProducts };

          window.EcwidApp.setAppPublicConfig(
            JSON.stringify(payload),
            function (e) {
              console.log("Public config saved. Payload: ", payload);
            },
          );

          console.log("Saved settings in Database");
        } catch (err) {}
      }

      set({
        settings: updatedSettings,
      });
    },

    setActiveFilters: async (newFilters = null) => {
      if (!newFilters) {
        return;
      }

      console.log(newFilters);

      set({
        activeFilters: newFilters,
      });
    },

    /* ## POPUP PRODUCTS
    ==================================== */

    /* Get current product being edited in the Popup. */
    getCurrentPopupProduct: undefined,

    /* Updates current product being edited in the popup. */
    setCurrentPopupProduct: (id) => {
      set({
        getCurrentPopupProduct: id,
      });
    },
  })),
);

export { useStore };
