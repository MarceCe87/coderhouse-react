import React, { useContext } from "react";
import { Avatar, Button, ButtonGroup, Divider, ListItemAvatar, Typography } from "@mui/material";
import { CartContext } from "../../CartContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyCart from '../../images/empty-cart.png';
import { Link } from "react-router-dom";
import './CartList.css';

const CartList = (state) => {
  const {cartItems, onAdd, onRemove, onDelete} = useContext(CartContext);


  const getTotalAmount = () => {
    let amount = 0;
    cartItems.map((item) => (
      amount += (item.price * item.qty)
    ))
    return amount;
  };
  
  return ( 
    <Box sx={{width: 1200 }} >
        <List >
            {cartItems.length > 0 
            ?
                (cartItems.map((item, index) => (
                <ListItem key={item.id} >
                    <ListItemAvatar>
                        <Avatar alt={item.name}
                        src={item.image}
                        variant="square"
                        sx={{ width: 80, height: 80, marginRight: 1 }} 
                        />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={item.name }
                        secondary={
                            <Box>
                                <ButtonGroup variant="outlined"size="small" >
                                    <Button  onClick={()=> onRemove(item)}>-</Button>
                                    <Button>{item.qty}</Button>
                                    <Button onClick={()=> onAdd(item)}>+</Button>
                                </ButtonGroup>
                                <Button  onClick={()=> onDelete(item)}>
                                    Remove
                                </Button>
                                                                        
                            </Box>             
                        } 
                    /> 
                    <Typography variant="h6">
                        {cartItems.length > 0 ? `$${(item.price * item.qty).toFixed(2)}`: ""} 
                    </Typography>    
                            
                </ListItem>                
                )))
            :
                <Box>
                    <img
                        className="center"
                        src={EmptyCart}
                        alt='The Cart is Empty'

                    />
                    <Link to='/'
                      className="center"
                    >
                        Go back to shopping 
                    </Link>
                </Box>
            }
            {cartItems.length > 0 ? 
                <Box>
                    <Divider/> 
                    <ListItemText sx={{textAlign: "right",  marginTop: 2,  marginBottom: 2}}>
                        <Typography variant="h5" >
                            {cartItems.length > 0 ? `Total Amount: $${getTotalAmount().toFixed(2)}`: ""} 
                        </Typography>
                        <Typography   variant='subtitle2' color="text.secondary" >
                            o en <b>6</b> cuotas sin interes de $ <b>{(getTotalAmount()/ 6).toFixed(2)}</b>
                        </Typography>
                    </ListItemText>
                    <Divider/> 
                    <ListItem sx={{textAlign: "right", marginLeft: "84%", marginTop: 1}}>
                        <Button               
                            sx={{ borderRadius:6,  background: '#0a0032' }}
                            variant="contained" 
                            size="large"           
                        >                        
                            Go to Checkout
                        </Button>
                    </ListItem> 
                </Box>
                : ""}               
        </List>
    </Box>
)};

export default CartList;