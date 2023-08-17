import React, { useEffect, useState } from "react";
import { useStore } from "./store/store";
import "./TotalProducts.scss";
import { getProducts } from "./utils";

export default function TotalProducts() {
  const [totalWithUpsell, setTotalWithUpsell] = useState(null);

  const [settings, setSettings] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        console.log("upsell products update from app!!!", e);
        setTotalWithUpsell(e);
      },
    );

    useStore.subscribe(
      (state) => state.settings,
      (e) => {
        setSettings(e);
      },
    );

    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  return (
    <div
      data-total-products={totalWithUpsell ? totalWithUpsell.length : "null"}
      className="TotalProducts">
      {settings ? (
        <div className="TotalProducts-items">
          <div className="TotalProducts-item">
            {settings.isEnabled === false ? (
              <div className="TotalProducts-image TotalProducts-image--x">
                <svg
                  className="TotalProducts-icon--x"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 460.775 460.775"
                  xmlSpace="preserve">
                  <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                </svg>
              </div>
            ) : (
              <div className="TotalProducts-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 70 70"
                  focusable="false">
                  <path d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z" />
                </svg>
              </div>
            )}

            <div className="TotalProducts-content Text--h3">
              {settings.isEnabled
                ? `The app is active and visible on the checkout page.`
                : `The app is deactivated and not visible on the checkout page.`}
            </div>
          </div>
          <div className="TotalProducts-item">
            {totalWithUpsell !== null && totalWithUpsell.length <= 0 ? (
              <div className="TotalProducts-image TotalProducts-image--x">
                <svg
                  className="TotalProducts-icon--x"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 460.775 460.775"
                  xmlSpace="preserve">
                  <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                </svg>
              </div>
            ) : (
              <div className="TotalProducts-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 70 70"
                  focusable="false">
                  <path d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z" />
                </svg>
              </div>
            )}

            <div className="TotalProducts-content Text--h3">
              {totalWithUpsell === null
                ? "Loading..."
                : totalWithUpsell.length >= 1
                ? `You have ${totalWithUpsell.length} product(s) with related products setup. Yay!`
                : totalWithUpsell.length <= 0 &&
                  `There are no products with related products setup yet. Please follow the instructions below to get started.`}
            </div>
          </div>

          {totalWithUpsell !== null && products && settings.isEnabled && (
            <div className="TotalProducts-item">
              <div className="TotalProducts-image TotalProducts-image--exclamation">
                <svg
                  xmlns=" http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  version="1.1">
                  <path d="M10.656 8.864q0-2.208 1.568-3.776t3.776-1.568 3.776 1.568 1.6 3.776q0 0.256-0.064 0.448l-1.76 6.944q-0.096 1.408-1.12 2.368t-2.432 0.96q-1.376 0-2.4-0.928t-1.152-2.304q-0.32-0.96-0.672-2.112t-0.736-2.784-0.384-2.592zM12.416 24.928q0-1.472 1.056-2.496t2.528-1.056 2.528 1.056 1.056 2.496q0 1.504-1.056 2.528t-2.528 1.056-2.528-1.056-1.056-2.528z" />
                </svg>
              </div>
              <div className="TotalProducts-content Text--h3">
                To test it, you can add{" "}
                <a
                  target="_blank"
                  href={
                    products.filter((e) => e.id === totalWithUpsell[0].id)[0]
                      .url
                  }
                  rel="noreferrer">
                  this product{" "}
                </a>
                to cart and proceed to the checkout page.
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="TotalProducts-loading Text--h3">Loading...</div>
      )}
    </div>
  );
}
