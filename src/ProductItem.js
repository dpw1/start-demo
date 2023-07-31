import React, { useRef, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupCustom from "./PopupCustom";
import "./ProductItem.scss";
import useStore from "./store/store";
import Products from "./Products";

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

  const populateUpsells = async (id) => {
    // const bundle = await getUpsellProductById(product.id);
    // console.log("my ID and  bundle: ", bundle);
    // setUpsell(bundle);
  };

  const handlePopulateUpsell = async (subscription) => {
    // let bundleProducts = upsellProducts;
    // console.log("my bbbb", bundleProducts(), props);
    // if (bundleProducts && bundleProducts.length <= 0) {
    //   setUpsell([]);
    //   return;
    // }
    // const current = bundleProducts.filter((e) => e.id === product.id)[0];
    // if (!current) {
    //   setUpsell([]);
    //   return;
    // }
    // populateUpsells(product.id);
  };

  useEffect(() => {
    // (async (_) => {
    //   // handlePopulateUpsell();
    // })();
    // useStore.subscribe(async (e) => {
    //   handlePopulateUpsell(e);
    // });

    console.log("my upsell: ", upsell);
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
            <span className="order__date-wrapper ProductItem-subtitle">
              Upsell Products:
            </span>
            <div className="list-element__data-row">
              {upsell &&
                upsell.hasOwnProperty("bundle") &&
                upsell.bundle.length >= 1 &&
                upsell.bundle.map((e) => {
                  const _product = e;

                  /* If the upsell product is the same as the parent, do not add it to the list. */
                  if (_product.id === product.id) {
                    return;
                  }

                  return (
                    <div
                      key={`${_product.id}_${product.id}`}
                      className={`ProductItem-upsell ProductItem-upsell--${_product.id}-${product.id}`}>
                      <span className="spacing--mr1">{_product.name}</span>

                      {/* <button onClick={() => increaseValue()}>add</button> */}

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          console.log(
                            `Delete ${_product.id} from the parent ${product.id}`,
                          );
                          deleteUpsellProductById(product.id, _product.id);
                          // try {

                          //   // const $item = window.document.querySelector(
                          //   //   `.ProductItem-upsell--${_product.id}-${product.id}`,
                          //   // );

                          //   // if ($item) {
                          //     // $item.style.display = "none";
                          //   }
                          // } catch (err) {}
                        }}
                        className="icolink">
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
                      </button>
                    </div>
                  );
                })}
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
