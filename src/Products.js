import React from "react";
import "./Products.scss";

export default function Products(props) {
  const { products } = props;
  return (
    <div className="Products  named-area">
      <div className="named-area__body">
        <div className="a-card a-card--compact">
          <div className="a-card__paddings">
            <h4>Products</h4>

            {products &&
              products.hasOwnProperty("items") &&
              products.items.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="list-element list-element--compact list-element--has-hover list-element--inline-mode">
                    <div className="list-element__image">
                      <img src={e.thumbnailUrl} alt={e.name} />
                    </div>
                    <div className="list-element__content">
                      <div className="list-element__info">
                        <div className="list-element__header">
                          <div className="list-element__main-info">
                            <div className="list-element__title">
                              <span>{e.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="list-element__status-row">
                          <span className="order__date-wrapper">
                            Upsell Products
                          </span>
                          <div className="list-element__data-row">
                            <span className="spacing--mr1">Cool product 1</span>
                            <span className="spacing--mr1">Nice Product 2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
