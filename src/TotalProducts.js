import React, { useEffect, useState } from "react";
import { useStore } from "./store/store";
import "./TotalProducts.scss";

export default function TotalProducts() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    useStore.subscribe(
      (state) => state.upsellProducts,
      (e) => {
        console.log("upsell products update from app!!!", e);
        setTotal(e.length);
      },
    );
  }, []);

  return (
    <div data-total-products={total ? total : "null"} className="TotalProducts">
      <div className="TotalProducts-image">
        {total !== null && total <= 0 ? (
          <svg
            className="TotalProducts-icon--x"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 460.775 460.775"
            xmlSpace="preserve">
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 70"
            focusable="false">
            <path d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z" />
          </svg>
        )}
      </div>
      <div className="TotalProducts-content Text--h3">
        {total === null
          ? "Loading..."
          : total >= 1
          ? `You have ${total} product(s) with related products. Yay!`
          : total <= 0 &&
            `There are no products with related products setup yet. Please follow the instructions above to get started.`}
      </div>
    </div>
  );
}
