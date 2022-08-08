import React, { useContext, useState } from "react";
import { Button, Drawer, IconButton, Tooltip } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Close from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import "./CartWidget.css";
import { CartContext } from "../../CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [state, setState] = useState({
    right: false,
  });
  const anchor = "right";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Tooltip title="Shopping Cart">
        <Link
          to={`/`}
          style={{ textDecoration: "none" }}
          onMouseOver={toggleDrawer(anchor, true)}
        >
          <ShoppingCart sx={{ color: "white", cursor: "pointer" }} />
        </Link>
      </Tooltip>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div>
          <div>
            <ListItem
              sx={{
                background: "#0a0032",
                color: "white",
                height: 96,
                width: 600,
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Close sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Shopping Cart" />
            </ListItem>
          </div>
          <div className="list">
            <CartList />
            {cartItems.length > 0 ? (
              <ListItem>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ borderRadius: 6, background: "#0a0032" }}
                    variant="contained"
                    size="large"
                    onClick={toggleDrawer(anchor, false)}
                  >
                    Go to Checkout
                  </Button>
                </Link>
              </ListItem>
            ) : (
              ""
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CartWidget;
