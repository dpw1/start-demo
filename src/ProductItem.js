import React, { useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupCustom from "./PopupCustom";
import "./ProductItem.scss";
import useStore from "./store/store";

export default function ProductItem({ product }) {
  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  const setProduct = () => {
    console.log("setting current product: ", product.id);
    setCurrentProduct(product.id);
  };

  return (
    <div className="ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode">
      <div className="list-element__image">
        <img src={product.thumbnailUrl} alt={product.name} />
      </div>

      <div className="list-element__content">
        <div className="list-element__info">
          <div className="list-element__header">
            <div className="list-element__main-info">
              <div className="list-element__title">
                <span>
                  {product.name} {product.id}
                </span>
              </div>
            </div>
          </div>
          <div className="list-element__status-row">
            <span className="order__date-wrapper">Upsell Products:</span>
            <div className="list-element__data-row">
              <div className="ProductItem-upsell">
                <span className="spacing--mr1">Cool product 1</span>

                {/* <button onClick={() => increaseValue()}>add</button> */}

                <a className="icolink" href="#">
                  <span className="svg-icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false">
                      <path d="M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"></path>
                      <path d="M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"></path>
                    </svg>
                  </span>
                </a>
              </div>

              <div className="ProductItem-upsell">
                <span className="spacing--mr1">Cool product 2</span>

                <a className="icolink" href="#">
                  <span className="svg-icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false">
                      <path d="M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"></path>
                      <path d="M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup
        modal={true}
        onOpen={() => {
          setProduct();
        }}
        trigger={() => {
          return (
            <button type="button" className="btn btn-small btn-primary">
              <span className="svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  focusable="false">
                  <path d="M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"></path>
                </svg>
              </span>
              <span className="gwt-InlineLabel">Add Upsell Products</span>
            </button>
          );
        }}
        position="center center">
        <PopupCustom parentID={product.id}></PopupCustom>
      </Popup>
    </div>
  );
}
