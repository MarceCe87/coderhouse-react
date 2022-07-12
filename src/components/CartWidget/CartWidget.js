import React, { useContext, useState } from "react";
import { Avatar, Button, ButtonGroup, Drawer, IconButton, ListItemAvatar, Tooltip } from "@mui/material";
import { CartContext } from "../../CartContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Close from "@mui/icons-material/Close";
import EmptyCart from '../../images/empty-cart.png';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cartItems, onAdd, onRemove} = useContext(CartContext);
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

  const getTotalAmount = () => {
    let amount = 0;
    cartItems.map((item) => (
      amount += (item.price * item.qty)
    ))
    return amount;
  };

  const list = (anchor) => (    
    <Box sx={{  width: 500 }} >
        <List>
          <ListItem  
            sx={{ background:"#0a0032", color: "white", height: 70, marginRight: 1}} 
            secondaryAction={
              <IconButton  edge="end" aria-label="delete" onClick={toggleDrawer(anchor, false)}>
                <Close sx={{ color: 'white' }}/>
              </IconButton>
            } 
          >
            <ListItemText primary="Shopping Cart" />
          </ListItem>
          {cartItems.length > 0 
            ?
              (cartItems.map((item, index) => (
                <ListItem key={item.id} >
                    <ListItemAvatar>
                      <Avatar alt={item.name}
                      src={item.image}
                        variant="square"
                        sx={{ width: 70, height: 70, marginRight: 1 }} 
                        />
                    </ListItemAvatar>
                      <ListItemText 
                        primary={item.name }
                        secondary={
                          <Box>
                              <ButtonGroup variant="outlined"size="small">
                                <Button  onClick={()=> onRemove(item)}>-</Button>
                                <Button cursor>{item.qty}</Button>
                                <Button onClick={()=> onAdd(item)}>+</Button>
                              </ButtonGroup>                                          
                          </Box>
                        } 
                      /> 
                      <DeleteIcon />                 
                </ListItem>
                
              ))
            )
            :
            <img
              src={EmptyCart}
              alt='The Cart is Empty'
              width="100%"
            />
          } 
          <ListItem>
            <ListItemText>
              {cartItems.length > 0 ? `Total Amount: US${getTotalAmount()}`: ""} 
            </ListItemText>
          </ListItem>
        </List>
    </Box>
  );
  
  return ( 
  <div>
  <Tooltip title="Shopping Cart">
  <Link
          to={`/cart`}
          style={{ textDecoration: 'none'}}
      >
    <ShoppingCart
      sx={{ color:"white", cursor:"pointer"}}
    />
    </Link>
  </Tooltip>
      <Drawer
          anchor={anchor}
          open={state[anchor]}        
      >
        {list(anchor)}
      </Drawer>
    </div>
)};

export default CartWidget;