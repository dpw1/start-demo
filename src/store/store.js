import create from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  /* All products coming from the API */
  products: [],

  populateProducts: async () => {
    /* TODO = change this URL when on production */
    const url = `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`;

    const { data: products } = await axios.get(url);

    set({
      products,
    });
  },

  /* Products that will show up at the front-end. */
  upsellProducts: [],

  addUpsellProduct: (parentID, bundleID) => {
    /* TODO 
double check whether id already exists, if so, add bundle to existing id */

    let bundle;
    let bundleProducts = get().upsellProducts;

    // console.log("Bundle products:", bundleProducts);

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

    const updated = [...bundleProducts, currentProduct];

    console.log("updated: ", updated);

    set({
      upsellProducts: updated,
    });
  },

  /* Current parent product being edited in the Popup. */
  getCurrentProduct: undefined,

  /* Updates current product. */
  setCurrentProduct: (id) => {
    set({
      getCurrentProduct: id,
    });
  },
}));

export default useStore;
