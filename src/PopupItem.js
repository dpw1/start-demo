import React from "react";

export default function PopupItem({ product }) {
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

      <button type="button" className="btn btn-small btn-primary">
        <span className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            focusable="false">
            <path d="M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"></path>
          </svg>
        </span>
        <span className="gwt-InlineLabel">Add</span>
      </button>
    </div>
  );
}
