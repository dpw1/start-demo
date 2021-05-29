import React from "react";
import "./Products.scss";
import Skeleton from "react-loading-skeleton";

export default function Products(props) {
  const { products } = props;

  const ProductSkeleton = () => {
    return (
      <React.Fragment>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
        <div className="list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader">
          <Skeleton count={1} height={50} />
          <Skeleton count={3} height={7} />
        </div>
      </React.Fragment>
    );
  };

  const ProductsList = ({ product }) => {
    return (
      <div
        key={product.id}
        className="list-element list-element--compact list-element--has-hover list-element--inline-mode">
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
            <div className="list-element__status-row">
              <span className="order__date-wrapper">Upsell Products</span>
              <div className="list-element__data-row">
                <span className="spacing--mr1">Cool product 1</span>
                <span className="spacing--mr1">Nice Product 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Products  named-area">
      <div className="named-area__body">
        <div className="a-card a-card--compact">
          <div className="a-card__paddings">
            <h4>Products</h4>

            {products && products.hasOwnProperty("items") ? (
              products.items.map((e) => (
                <ProductsList product={e}></ProductsList>
              ))
            ) : (
              <ProductSkeleton></ProductSkeleton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
