import React from "react";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((store) => store.bagItems);

  return (
    <>
      <div className="bag-page">
        {bagItems.length === 0 ? (
          <div
            className="alert alert-danger"
            style={{ margin: "100px 0px" }}
            role="alert"
          >
            <center>
              Oops! Your cart is empty. Add items to your cart to continue
              shopping!
            </center>
          </div>
        ) : (
          <>
            <div className="bag-items-container">
              {bagItems.map((bagItem) => (
                <BagItems key={bagItem.id} bagItem={bagItem} />
              ))}
            </div>
            <div className="bag-summary">
              <BagSummary bagItems={bagItems} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Bag;
