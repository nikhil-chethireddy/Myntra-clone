import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchActions } from "../store/fetchSlice";

function Fetch() {
  const fetchStatus = useSelector((store) => store.fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus) {
      return;
    }

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.fetchDone());
        dispatch(itemsActions.addInitial(items[0]));
      });
  }, [fetchStatus]);
  return <></>;
}

export default Fetch;
