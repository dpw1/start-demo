import React from "react";
import "./Tutorial.scss";
import example from "./images/example-1.png"; // Import the image

export default function Tutorial() {
  return (
    <div className="Tutorial">
      <div className="Tutorial-container">
        <div className="Tutorial-left">
          <p className="HomepageSettings-text Text--h3">
            Offer products at the checkout page
          </p>
          <div className="Text--p">
            This app creates a carousel with recommendations based on what your
            customer has added to the cart.
          </div>

          <br />

          <div className="Text--p">
            These recommendations are configured manually. To configure it,
            please do the following:
          </div>
          <ol>
            <li className="Text--p">
              Choose one of your products from the list below in the next
              section.
            </li>
            <li className="Text--p">
              Once you've found it, click on "Add Upsell Products." A popup will
              appear.
            </li>
            <li className="Text--p">
              In this popup, choose the products you'd like to display on the
              carousel.
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
