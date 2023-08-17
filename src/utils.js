export const defaultSettings = {
  isEnabled: true,
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
export function sanitizeUpsellProducts(products) {
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

    for (var _upsell of each.relatedProducts.productIds) {
      var upsell = products.items.filter((e) => e.id === _upsell)[0];

      console.log(_upsell);
      debugger;

      bundle.push({
        id: upsell.id,
        name: upsell.name,
        thumbnailUrl: upsell.thumbnailUrl,
        defaultDisplayedPriceFormatted: upsell.defaultDisplayedPriceFormatted,
        compareToPriceDiscountFormatted: upsell.compareToPriceDiscountFormatted,
        compareToPriceFormatted: upsell.compareToPriceFormatted,
        url: upsell.url,
        totalOptions: totalOptions(upsell),
      });
    }

    /* Random categories here */
    if (each.relatedProducts.relatedCategory.enabled) {
    }

    result.push({
      id: parentID,
      bundle,
    });
  }

  window.upsellProducts = result;
  console.log("cleaning: ", result);
  debugger;

  return result;
}
