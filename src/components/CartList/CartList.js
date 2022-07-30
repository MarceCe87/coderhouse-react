import React, { useContext } from "react";
import { Avatar, Button, ButtonGroup, Divider, ListItemAvatar, Typography } from "@mui/material";
import { CartContext } from "../../CartContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyCart from '../../images/empty-cart.png';
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
        <div className="center">
            <Box>
                <List >
                    {cartItems.length > 0 
                    ?
                        (cartItems.map((item) => (
                        <ListItem key={item.id} >
                            <ListItemAvatar>
                                <Avatar alt={item.name}
                                src={item.images[0]}
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
                                            <Button onClick={()=> onAdd(item, 0)}>+</Button>
                                        </ButtonGroup>
                                        <Button  onClick={()=> onDelete(item)}>
                                            Remove
                                        </Button>
                                                                                
                                    </Box>             
                                } 
                            /> 
                            <Typography variant="body1" color={"#303ca9"} >
                                {cartItems.length > 0 ? `US$${(item.price * item.qty).toFixed(2)}`: ""} 
                            </Typography>    
                                    
                        </ListItem>                
                        )))
                    :
                        <Box>
                            <img
                                className="photo"
                                src={EmptyCart}
                                alt='The Cart is Empty'
                            />
                        </Box>
                    }
                    {cartItems.length > 0 ? 
                        <Box>
                            <Divider/> 
                            <ListItemText sx={{textAlign: "right",  marginTop: 2,  marginBottom: 2}}>
                                <Typography variant="h5" color={"#303ca9"}>
                                    {cartItems.length > 0 ? `Total Amount: US$${getTotalAmount().toFixed(2)}`: ""} 
                                </Typography>
                                <Typography   variant='subtitle2' color={"#303ca9"}>
                                    or <b>6</b> installments of US$ <b>{(getTotalAmount()/ 6).toFixed(2)}</b>
                                </Typography>
                            </ListItemText>
                            <Divider/> 
                            
                        </Box>
                        : ""}               
                </List>
            </Box>
        </div>
    )};

export default CartList;