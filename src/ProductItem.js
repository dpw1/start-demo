import React, { useRef, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupCustom from "./PopupCustom";
import "./ProductItem.scss";
import { useStore } from "./store/store";

import Products from "./Products";
import { getProductURLHref } from "./utils";

export default function ProductItem(props) {
  const { product, upsell } = props;
  // const [upsell, setUpsell] = useState([]);

  const getUpsellProductById = useStore((state) => state.getUpsellProductById);
  const deleteUpsellProductById = useStore(
    (state) => state.deleteUpsellProductById,
  );

  const getCurrentPopupProduct = useStore(
    (state) => state.getCurrentPopupProduct,
  );
  const getProductById = useStore((state) => state.getProductById);
  const setCurrentPopupProduct = useStore(
    (state) => state.setCurrentPopupProduct,
  );

  useEffect(() => {
    // (async (_) => {
    //   // handlePopulateUpsell();
    // })();
    // useStore.subscribe(async (e) => {
    //   handlePopulateUpsell(e);
    // });

    if (upsell && upsell.length >= 1) {
    }
  }, []);

  useEffect(() => {
    console.log("current popup: ", getCurrentPopupProduct);
  }, [getCurrentPopupProduct]);

  const setProduct = () => {
    console.log("setting current product: ", product.id);
    setCurrentPopupProduct(product.id);
  };

  return (
    <div className="ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode">
      <div className="ProductItem-top">
        <a
          className="ProductItem-link"
          href={getProductURLHref(product.id)}
          target="_blank"
          rel="noreferrer">
          <figure className="ProductItem-figure list-element__image">
            <img
              className="ProductItem-image"
              src={product.thumbnailUrl}
              alt={product.name}
            />
          </figure>
          <div className="ProductItem-name">
            <div className="list-element__header">
              <div className="list-element__main-info">
                <div className="ProductItem-name-text list-element__title">
                  {product.name}
                </div>
              </div>
            </div>
          </div>
        </a>

        <Popup
          modal={true}
          onOpen={() => {
            setProduct();
          }}
          trigger={() => {
            return (
              <button
                type="button"
                className="ProductItem-button btn btn-small btn-primary">
                <span className="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    focusable="false">
                    <path d="M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"></path>
                  </svg>
                </span>
                <span className="ProductItem-button-text gwt-InlineLabel">
                  Add Upsell Products
                </span>
              </button>
            );
          }}
          position="center center">
          {(close) => (
            <PopupCustom close={close} parentID={product.id}></PopupCustom>
          )}
        </Popup>
      </div>

      <div className="ProductItem-bottom list-element__content">
        <div className="list-element__info">
          <div
            className="list-element__status-row"
            data-upsell-products={
              upsell.hasOwnProperty("bundle") ? upsell.bundle.length : 0
            }>
            {upsell && upsell.hasOwnProperty("bundle") && (
              <React.Fragment>
                <p className="ProductItem-bottom-title">Upsell products</p>
                <div className="list-element__data-row ProductItem-bottom-wrapper">
                  {upsell.bundle.map((e) => {
                    const _product = e;
                    /* If the upsell product is the same as the parent, do not add it to the list. */
                    if (_product.id === product.id) {
                      return;
                    }
                    return (
                      <div
                        key={`${_product.id}_${product.id}`}
                        className={`ProductItem-upsell ProductItem-upsell--${_product.id}-${product.id}`}>
                        <figure className="ProductItem-upsell-figure">
                          <img
                            className="ProductItem-upsell-image"
                            src={_product.thumbnailUrl}
                            alt=""
                          />
                        </figure>
                        <div className="ProductItem-info">
                          <span className="ProductItem-title spacing--mr1">
                            {_product.name}
                          </span>

                          {/* <span className="ProductItem-price spacing--mr1">
                            $0.00
                          </span> */}
                        </div>
                        <button
                          className="ProductItem-delete icolink"
                          onClick={(event) => {
                            event.preventDefault();
                            console.log(
                              `Delete ${_product.id} from the parent ${product.id}`,
                            );
                            deleteUpsellProductById(product.id, _product.id);
                            try {
                              const $item = window.document.querySelector(
                                `.ProductItem-upsell--${_product.id}-${product.id}`,
                              );
                              if ($item) {
                                $item.style.display = "none";
                              }
                            } catch (err) {
                              console.log("Removing error", err);
                            }
                          }}>
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false">
                            <path d="M7 0h4l1 2H6l1-2z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 3c-.5523 0-1 .4477-1 1s.4477 1 1 1v11c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V5c.5523 0 1-.4477 1-1s-.4477-1-1-1H2zm12 13V5H4v11h10z"
                            />
                            <path d="M6 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6zM10 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6z" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}{" "}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
