/*
Cleans the bundle products. Requires an object like this:

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
  const bundle =
    Symbol.iterator in Object(productWithBundles)
      ? [...productWithBundles]
      : [];

  var result = [];

  for (var each of bundle) {
    var parentID = each.id;
    var bundles = [];

    for (var upsell of each.bundle) {
      bundles.push({
        id: upsell.id,
        name: upsell.name,
        thumbnailUrl: upsell.thumbnailUrl,
        defaultDisplayedPriceFormatted: upsell.defaultDisplayedPriceFormatted,
        compareToPriceDiscountFormatted: upsell.compareToPriceDiscountFormatted,
        compareToPriceFormatted: upsell.compareToPriceFormatted,
        url: upsell.url,
      });
    }

    result.push({
      id: parentID,
      bundles,
    });
  }

  console.log("cleaning: ", result);
  debugger;

  return result;
}
