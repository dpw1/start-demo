import create from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  /* ## API PRODUCTS
  ==================================== */
  products: [],

  /* ===============
  Get store's products and populate the store's 'products' variable */
  populateProducts: async () => {
    /* TODO = change this URL when on production */

    const url = /localhost/.test(window.location.href)
      ? `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`
      : `https://app.ecwid.com/api/v3/${
          window.EcwidApp.getPayload().store_id
        }/products?token=${window.EcwidApp.getPayload().access_token}`;

    const { data: products } = await axios.get(url);

    set({
      products,
    });
  },

  /* Get a product from the customer's catalog by ID API  */
  getProductById: (id) => {
    return get().products.items.filter((e) => e.id === parseInt(id))[0];
  },

  /* ## UPSELL PRODUCTS
  ==================================== */

  /* Get Bundle products that will show up at the front-end. */
  upsellProducts: () => {
    if (window.EcwidApp && window.EcwidApp.getPayload()) {
      return new Promise(async (resolve, reject) => {
        let data = [];
        window.EcwidApp.getAppPublicConfig(function (value) {
          const _data = JSON.parse(value);
          data = data = _data.upsellProducts;
          console.log("xxx ECWID DB DATA", data);
          resolve(data);
        });
      });
    }

    return [];
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

    console.log(
      `Adding the bundle product ${bundleID} to ${
        parentProduct ? `parent ${parentProduct.id}` : `new parent.`
      }`,
    );

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

    const sanitizeBundleProducts = () => {
      return Symbol.iterator in Object(bundleProducts)
        ? [...bundleProducts]
        : [];
    };

    const sanitizedBundleProducts = sanitizeBundleProducts();

    const updated = [...sanitizedBundleProducts, currentProduct];

    /* Save into Ecwid's database */
    if (window.EcwidApp) {
      try {
        window.EcwidApp.setAppPublicConfig(
          JSON.stringify({ upsellProducts: updated }),
          function () {
            console.log("New upsell product saved!");
          },
        );
      } catch (err) {
        console.error(
          "Couldn't save upsell product. [store.js - addUpsellProduct()]",
        );
      }
    }

    // console.log("updated: ", updated);

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

    console.log(bundleProducts);

    // console.log("Bundle products:", bundleProducts);

    const upsell = bundleProducts.filter((e) => e.id === id);
    return upsell.length >= 1 ? upsell[0].bundle : [];
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
      try {
        window.EcwidApp.setAppPublicConfig(
          JSON.stringify({ upsellProducts: updated }),
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
}));

export default useStore;
