import React, { useContext, useState } from "react";
import { Avatar, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, ListItemAvatar, Typography } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { CartContext } from "../../CartContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyCart from '../../images/empty-cart.png';
import { Link } from "react-router-dom";
import './CartList.css';

const CartList = (state) => {
  const {cartItems, onAdd, onRemove, onDelete, onCheckOut} = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState();


    const onSubmit = async ()=> {
        const data = cartItems.map((item) => (
            {
                itemID: item.id,
                quantity: item.qty
            }
        ));

        // Add a new order with a generated id.
        const docRef = await addDoc(collection(db, "orders"),{ 
            data
        });

        setOrderId(docRef.id);
        handleClickOpen();
        onCheckOut();
    }   

    const getTotalAmount = () => {
        let amount = 0;
        cartItems.map((item) => (
            amount += (item.price * item.qty)
        ))
        return amount;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return ( 
        <Box sx={{width: 1200 }} >
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
                                        <Button onClick={()=> onAdd(item)}>+</Button>
                                    </ButtonGroup>
                                    <Button  onClick={()=> onDelete(item)}>
                                        Remove
                                    </Button>
                                                                            
                                </Box>             
                            } 
                        /> 
                        <Typography variant="h6">
                            {cartItems.length > 0 ? `US$${(item.price * item.qty).toFixed(2)}`: ""} 
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
                                {cartItems.length > 0 ? `Total Amount: US$${getTotalAmount().toFixed(2)}`: ""} 
                            </Typography>
                            <Typography   variant='subtitle2' color="text.secondary" >
                                or <b>6</b> installments of US$ <b>{(getTotalAmount()/ 6).toFixed(2)}</b>
                            </Typography>
                        </ListItemText>
                        <Divider/> 
                        <ListItem sx={{textAlign: "right", marginLeft: "84%", marginTop: 1}}>
                            <Button
                                onClick={()=> onSubmit()}               
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
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Successful Purchase!"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    The order ID: <b>{orderId}</b>has been created!
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )};

export default CartList;