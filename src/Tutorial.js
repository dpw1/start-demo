import React from "react";
import "./Tutorial.scss";
import example from "./images/example-1.png"; // Import the image

export default function Tutorial() {
  return (
    <div className="Tutorial">
      <div className="Tutorial-container">
        <div className="Tutorial-left">
          <p className="HomepageSettings-text Text--h3">
            Offer related products at the checkout page
          </p>
          <div className="Text--p">
            This app creates a carousel with products related to what your
            customer has added to cart.
          </div>

          <br />

          <div className="Text--p">
            How to add related products to show up in the carousel (detailed
            instructions can be{" "}
            <a
              target="_blank"
              href="https://support.ecwid.com/hc/en-us/articles/208078945-Related-products"
              rel="noreferrer">
              found here
            </a>
            ):
          </div>
          <ol>
            <li className="Text--p">
              <a
                target="_blank"
                href="https://my.ecwid.com/#products"
                rel="noreferrer">
                Go to the products page (click here)
              </a>
              .
            </li>
            <li className="Text--p">
              Choose the product you wish to recommend related products.
            </li>
            <li className="Text--p">Click on the "related products" tab.</li>
            <li className="Text--p">
              Click Enable (if you haven't set up related products for this item
              before) and configure the products.
            </li>
          </ol>
        </div>
        <figure className="Tutorial-figure">
          <img src={example} alt="" />
        </figure>
      </div>
    </div>
  );
}
