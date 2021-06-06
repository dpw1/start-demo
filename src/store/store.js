import create from "zustand";
import axios from "axios";

const initialData = () => {
  return [
    {
      id: 239361082,
      bundle: [359233331],
    },
    {
      id: 358944799,
      bundle: [239361082, 359233331],
    },
  ];
};

const useStore = create((set, get) => ({
  /* ## API PRODUCTS
  ==================================== */
  products: [],

  /* ===============
  Get store's products and populate  */
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

  /* Get a product from the API by ID */
  getProductById: (id) => {
    return get().products.items.filter((e) => e.id === parseInt(id))[0];
  },

  /* ## UPSELL PRODUCTS
  ==================================== */

  /* Bundle products that will show up at the front-end. */
  upsellProducts: () => {
    let data = [];

    if (window.EcwidApp && window.EcwidApp.getPayload()) {
      window.EcwidApp.getAppPublicConfig(function (value) {
        data = JSON.parse(value).upsellProducts;
        console.log("Ecwid xxx data:", data);
      });
    }

    return initialData();

    return data;
  },

  /* Adds a product to the upsell */
  addUpsellProduct: (parentID, bundleID) => {
    let bundle;
    let bundleProducts =
      typeof get().upsellProducts === "function"
        ? get().upsellProducts()
        : get().upsellProducts;

    debugger;

    const _parentProduct =
      bundleProducts.length >= 1 &&
      bundleProducts.filter((e) => e.id === parentID);
    let parentProduct = _parentProduct.length >= 1 ? _parentProduct[0] : null;

    console.log(
      `I wanna add the bundle product ${bundleID} to ${
        parentProduct ? `parent ${parentProduct.id}` : `new parent.`
      }`,
    );

    if (parentProduct) {
      const existingBundles = () => {
        const _existing = parentProduct.bundle;

        if (Symbol.iterator in Object(_existing)) {
          return [..._existing];
        }

        return [_existing];
      };

      bundle = [...existingBundles(), bundleID];

      bundleProducts = bundleProducts.filter((e) => e.id !== parentID);
    }

    const currentProduct = {
      id: parentID,
      bundle: bundle && bundle.length >= 1 ? [...new Set(bundle)] : [bundleID],
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
            console.log("Public config saved!");
          },
        );

        console.log("Saved upsell products in Database");
      } catch (err) {}
    }

    console.log("updated: ", updated);

    set({
      upsellProducts: updated,
    });
  },

  getUpsellProductById: (id) => {
    let bundleProducts =
      typeof get().upsellProducts === "function"
        ? get().upsellProducts()
        : get().upsellProducts;

    // console.log("Bundle products:", bundleProducts);

    const upsell = bundleProducts.filter((e) => e.id === id);
    return upsell.length >= 1 ? upsell[0].bundle : [];
  },

  /* ## POPUP PRODUCTS
  ==================================== */

  /* Current product being edited in the Popup. */
  getCurrentPopupProduct: undefined,

  /* Updates current product. */
  setCurrentPopupProduct: (id) => {
    set({
      getCurrentPopupProduct: id,
    });
  },
}));

export default useStore;
