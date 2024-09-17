import React from "react";

function BagSummary({ bagItems }) {
  let totalMRP = 0;
  let finalMRP = 0;
  let bagLength = bagItems.length;
  for (let i = 0; i < bagLength; i++) {
    totalMRP += +bagItems[i].original_price;
    finalMRP += bagItems[i].current_price;
  }
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bagLength}) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹ {totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalMRP - finalMRP}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹ {bagLength === 0 ? 0 : 99}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹ {bagLength === 0 ? 0 : finalMRP + 99}
          </span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagSummary;
