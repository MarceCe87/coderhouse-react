import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";

const CartWidget = () => {
  return ( 
  <Tooltip title="Shopping Cart">
    <ShoppingCart
      sx={{ color:"white" }}
    />
  </Tooltip>
)};

export default CartWidget;