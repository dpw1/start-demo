import React, { useRef, useState, useEffect } from "react";
import useStore from "./store/store";

export default function PopupItem({ product, parentID }) {
  const addUpsellProduct = useStore((state) => state.addUpsellProduct);

  const currentProductID = useStore((state) => state.getCurrentPopupProduct);
  const getUpsellProductById = useStore((state) => state.getUpsellProductById);
  const getCurrentPopupProduct = useStore(
    (state) => state.getCurrentPopupProduct,
  );

  const [isAddable, setIsAddable] = useState(true);

  const addBundleProduct = (id) => {
    addUpsellProduct(currentProductID, id);
    setIsAddable(false);
  };

  useEffect(() => {
    (async (_) => {
      const upsell = await getUpsellProductById(parentID);

      if (upsell.filter((e) => e.id === product.id).length >= 1) {
        console.log(
          "shhh",
          upsell.filter((e) => e.id === product.id),
        );
        setIsAddable(false);
      }
      console.log("my product bundle: ", upsell);
    })();
  }, []);

  return (
    <div className="PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode">
      <div className="list-element__image">
        <img src={product.thumbnailUrl} alt={product.name} />
      </div>

      <div className="list-element__content">
        <div className="list-element__info">
          <div className="list-element__header">
            <div className="list-element__main-info">
              <div className="list-element__title">
                <span>{product.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        disabled={isAddable ? false : true}
        onClick={(_) => addBundleProduct(product.id)}
        type="button"
        className="btn btn-small btn-primary">
        <span className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            focusable="false">
            <path d="M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"></path>
          </svg>
        </span>
        <span className="gwt-InlineLabel">{isAddable ? "Add" : "Added"}</span>
      </button>
    </div>
  );
}
