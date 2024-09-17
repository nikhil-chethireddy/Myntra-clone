import React from "react";
import { MdHeight } from "react-icons/md";

function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border spinner"
        style={{ height: "80px", width: "80px" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
