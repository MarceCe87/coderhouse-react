import React, { useContext, useState } from "react";
import { Tooltip } from "@mui/material";
import { CartContext } from "../../CartContext";

import ShoppingCart from "@mui/icons-material/ShoppingCart";


const CartWidget = () => {
  const {cartItems} = useContext(CartContext);
  const [state, setState] = useState({
    right: false,
  });
  const anchor = 'right';

  const toggleDrawer = (anchor, open) => (event) => {
    console.log({cartItems});
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  
  return ( 
  <div>
  <Tooltip title="Shopping Cart">
    <ShoppingCart
      onClick={toggleDrawer(anchor, true)}
      sx={{ color:"white", cursor:"pointer"}}
    />
  </Tooltip>

  
     
    </div>
  
)};

export default CartWidget;