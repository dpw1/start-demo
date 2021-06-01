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

  addUpsellProduct: (product) => {
    /* TODO 
double check whether id already exists, if so, add bundle to existing id */

    const _upsellProducts = get().upsellProducts;

    // _upsellProducts.filter( e => e.)

    const updated = [...get().upsellProducts, product];

    set({
      upsellProducts: updated,
    });
  },

  /* Current parent product being edited in the Popup. */
  currentProduct: undefined,

  /* Updates current product. */
  setCurrentProduct: (id) => {
    set({
      currentProduct: id,
    });
  },
}));

export default useStore;
