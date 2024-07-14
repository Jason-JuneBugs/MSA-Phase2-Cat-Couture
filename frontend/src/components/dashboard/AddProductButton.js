import React from "react";

const AddProductButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ float: "right" }}>
      Add a new product
    </button>
  );
};

export default AddProductButton;
