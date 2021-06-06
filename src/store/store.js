import create from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  /* ## API PRODUCTS
  ==================================== */
  products: [],

  /* ===============
  Get store's products and populate  */
  populateProducts: async () => {
    /* TODO = change this URL when on production */
    const url = `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`;

    const { data: products } = await axios.get(url);

    set({
      products,
    });
  },

  getProductById: (id) => {
    return get().products.items.filter((e) => e.id === parseInt(id))[0];
  },

  /* ## UPSELL PRODUCTS
  ==================================== */

  /* Bundle products that will show up at the front-end. */
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

  getUpsellProductById: (id) => {
    let bundleProducts = get().upsellProducts;

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
