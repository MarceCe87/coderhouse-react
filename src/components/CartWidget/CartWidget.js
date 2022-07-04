import React, { useContext, useState } from "react";
import { Avatar, Drawer, ListItemAvatar, Tooltip } from "@mui/material";
import { CartContext } from "../../CartContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  const {cartItems, setCartItems} = useContext(CartContext);
  const [state, setState] = useState({
    right: false,
  });
  const anchor = 'right';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={item.id} >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} variant="square" />
              </ListItemAvatar>
                <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>     
    </Box>
  );
  
  return ( 
  <div>
  <Tooltip title="Shopping Cart">
    <ShoppingCart
      onClick={toggleDrawer(anchor, true)}
      sx={{ color:"white", cursor:"pointer"}}
    />
  </Tooltip>
  <Drawer
      anchor={anchor}
      open={state[anchor]}
      onMouseUp={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
    </div>
  
)};

export default CartWidget;