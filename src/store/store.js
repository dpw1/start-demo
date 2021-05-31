import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  products: [],
  populateProducts: async () => {
    const url = `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`;

    const { data: products } = await axios.get(url);

    set({
      products,
    });
  },
}));

export default useStore;
