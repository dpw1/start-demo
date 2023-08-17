import axios from "axios";

window.ezfyCategories = null;

export const defaultSettings = {
  isEnabled: true,
  appTitle: `Complete your purchase`,
  enableAddToCart: true,
};

export function getProductURLHref(productID) {
  const id = /localhost/.test(window.location.href)
    ? "37374877"
    : window.EcwidApp.getPayload().store_id;

  const url = `https://my.ecwid.com/store/${id}#product:mode=edit&id=${productID}`;

  return url;
}

export const availableFilters = [
  {
    value: "show_products_with_upsell",
    label: "Show only products with upsells",
  },
  /* TODO - alphabetical order, recently added, hide disabled */
];

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function findEqualById(arr1, arr2) {
  try {
    return arr1.filter((obj1) => arr2.some((obj2) => obj2.id === obj1.id));
  } catch (err) {
    return [];
  }
}

export function overwriteById(arr, newObj) {
  try {
    const updatedArray = arr.map((obj) =>
      obj.id === newObj.id ? newObj : obj,
    );
    return updatedArray;
  } catch (err) {
    return [];
  }
}

/* Returns object of new visible products */
export function applyFiltersOnProducts(
  visibleProducts,
  upsellProducts,
  activeFilters,
) {
  if (!activeFilters || activeFilters.length <= 0) {
    return visibleProducts;
  }

  var products = JSON.parse(JSON.stringify(visibleProducts));

  for (var each of activeFilters) {
    if (each.value === "show_products_with_upsell") {
      console.log("apply upd - products", products, upsellProducts);

      var filtered = findEqualById(products.items, upsellProducts);

      console.log("apply - filtered", filtered);
      products.items = filtered;

      return products;
    }
  }
}

/*
Cleans the bundle products removing all unnecessary properties. 

Requires an object like this:

[
    {
    "id": 123,
    "bundle": [
            {
            "id": 109109109,
            sku: sdiasjdkajs
            },
            {
            "id": 111,
            sku: xxx
            }
        ]
    }
]
*/
export async function sanitizeUpsellProducts(products) {
  return new Promise(async (resolve, reject) => {
    console.log("within sanitze: ", products);

    const productsWithUpsells = products.items.filter(
      (e) =>
        e.relatedProducts.productIds.length >= 1 ||
        e.relatedProducts.relatedCategory.enabled,
    );

    let totalOptions = (upsell) => {
      if (upsell.hasOwnProperty("options")) {
        return upsell.options.length;
      }

      if (upsell.hasOwnProperty("totalOptions")) {
        return upsell.totalOptions;
      }

      return 0;
    };

    var result = [];

    for (var each of productsWithUpsells) {
      var parentID = each.id;
      var bundle = [];

      if (!each.enabled || !each.inStock) {
        continue;
      }

      for (var _upsell of each.relatedProducts.productIds) {
        var upsell = products.items.filter((e) => e.id === _upsell)[0];

        bundle.push({
          id: upsell.id,
          name: upsell.name,
          thumbnailUrl: upsell.thumbnailUrl,
          defaultDisplayedPriceFormatted: upsell.defaultDisplayedPriceFormatted,
          compareToPriceDiscountFormatted:
            upsell.compareToPriceDiscountFormatted,
          compareToPriceFormatted: upsell.compareToPriceFormatted,
          url: upsell.url,
          totalOptions: totalOptions(upsell),
        });
      }

      /* Random categories here */
      if (each.relatedProducts.relatedCategory.enabled) {
        debugger;
        const categoryProducts = await getProductsFromCategoryWithId(
          each.relatedProducts.relatedCategory.categoryId,
        );

        debugger;

        for (var categoryProduct of categoryProducts) {
          bundle.push({
            id: categoryProduct.id,
            name: categoryProduct.name,
            thumbnailUrl: categoryProduct.thumbnailUrl,
            defaultDisplayedPriceFormatted:
              categoryProduct.defaultDisplayedPriceFormatted,
            compareToPriceDiscountFormatted:
              categoryProduct.compareToPriceDiscountFormatted,
            compareToPriceFormatted: categoryProduct.compareToPriceFormatted,
            url: categoryProduct.url,
            totalOptions: totalOptions(categoryProduct),
          });
        }
      }

      result.push({
        id: parentID,
        bundle,
      });
    }

    window.upsellProducts = result;
    console.log("cleaning: ", result);
    debugger;

    resolve(result);
  });
}

function getProductsFromCategoryWithId(id = 0) {
  return new Promise(async (resolve, reject) => {
    let categories = [];
    debugger;

    if (window.ezfyCategories) {
      categories = window.ezfyCategories;
    } else {
      const categoriesURL = /localhost/.test(window.location.href)
        ? /* local dev */
          `https://app.ecwid.com/api/v3/37374877/categories?token=${process.env.REACT_APP_TOKEN}&offset=0`
        : /* production */
          `https://app.ecwid.com/api/v3/${
            window.EcwidApp.getPayload().store_id
          }/categories?token=${
            window.EcwidApp.getPayload().access_token
          }&offset=0`;

      const { data } = await axios.get(categoriesURL);

      window.ezfyCategories = data.items;
      categories = data.items;
    }

    if (id) {
      let products;

      if (window.store__products) {
        products = window.store__products;
      } else {
        const productsURL = /localhost/.test(window.location.href)
          ? /* local dev */
            `https://app.ecwid.com/api/v3/37374877/products?token=${process.env.REACT_APP_TOKEN}`
          : /* production */
            `https://app.ecwid.com/api/v3/${
              window.EcwidApp.getPayload().store_id
            }/products?token=${window.EcwidApp.getPayload().access_token}`;

        const { data: _products } = await axios.get(productsURL);
        window.store__products = _products;
        products = _products.items;
      }

      let found = [];

      if (products && products.length >= 1) {
        found = products.filter((e) => e.categoryIds.includes(id));
      }

      resolve(found);
    }
  });
}
