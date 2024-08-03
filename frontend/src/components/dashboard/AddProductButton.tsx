 

import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AddProductButton: React.FC = () => {
  return (
    <Button
      component={Link}
      to="/add"
      variant="contained"
      color="secondary"
    >
      Add New Product
    </Button>
  );
};

export default AddProductButton;
