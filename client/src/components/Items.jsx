import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../store/bagItemsSlice";

function Items({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagItems);

  const handleAdd = () => {
    dispatch(bagItemsActions.addToBag(item));
  };

  const handleRemove = (id) => {
    // console.log(bagItem);
    dispatch(bagItemsActions.removeFromBag(id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagItems.includes(item) ? (
        <button
          className="btn btn-danger btn-add-bag"
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </button>
      ) : (
        <button className="btn btn-primary btn-add-bag" onClick={handleAdd}>
          Add to Bag
        </button>
      )}
    </div>
  );
}

export default Items;
