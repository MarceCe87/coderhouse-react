import { Alert, Snackbar } from "@mui/material";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = React.useState(false);

  const onAdd = (item, quantity) => {
    const exist = cartItems.find((x) => x.id === item.id);

    quantity = quantity > 0 ? quantity : 1;

    if (exist) {
      if (exist.qty + quantity <= exist.stock) {
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty + quantity } : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...item, qty: quantity }]);
      setOpen(true);
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    }
  };

  const onCheckOut = () => {
    setCartItems([]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, onAdd, onRemove, onDelete, onCheckOut }}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item Added to the cart!
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  );
};
