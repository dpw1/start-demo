export const defaultSettings = {
  isEnabled: false,
};

export const localURL = /localhost/.test(window.location.href)
  ? /* local dev */
    `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`
  : /* production */
    `https://app.ecwid.com/api/v3/${
      window.EcwidApp.getPayload().store_id
    }/products?token=${window.EcwidApp.getPayload().access_token}`;

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
      console.log("apply - products", products);

      var filtered = findEqualById(products.items, upsellProducts);

      console.log("apply - filtered", filtered);
      products.items = filtered;

      debugger;

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
export function sanitizeBundleProducts(productWithBundles) {
  console.log("within sanitze: ", productWithBundles);

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

  for (var each of productWithBundles) {
    var parentID = each.id;
    var bundle = [];

    for (var upsell of each.bundle) {
      console.log("my upsell", upsell);

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

    result.push({
      id: parentID,
      bundle,
    });
  }

  console.log("cleaning: ", result);

  return result;
}
