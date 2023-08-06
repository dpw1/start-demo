export const defaultSettings = {
  isEnabled: false,
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  var result = [];

  for (var each of productWithBundles) {
    var parentID = each.id;
    var bundle = [];

    for (var upsell of each.bundle) {
      bundle.push({
        id: upsell.id,
        name: upsell.name,
        thumbnailUrl: upsell.thumbnailUrl,
        defaultDisplayedPriceFormatted: upsell.defaultDisplayedPriceFormatted,
        compareToPriceDiscountFormatted: upsell.compareToPriceDiscountFormatted,
        compareToPriceFormatted: upsell.compareToPriceFormatted,
        url: upsell.url,
        totalOptions: upsell.options.length,
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
