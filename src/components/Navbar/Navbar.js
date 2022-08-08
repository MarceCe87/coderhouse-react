import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements.js";
import UserAvatar from "../UserAvatar/UserAvatar";
import CartWidget from "../CartWidget/CartWidget";
import Badge from "@mui/material/Badge";
import logo from "../../images/logo.png";
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const cartQty = () => {
    let qty = 0;
    cartItems.map((item) => (qty += item.qty));

    return qty;
  };

  return (
    <Nav>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/category/figures">Action Figures</NavLink>
        <NavLink to="/category/outlet">Outlet</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavMenu>
      <NavBtn to="/cart/">
        <Badge
          badgeContent={cartQty()}
          color="primary"
          sx={{ marginTop: "14px" }}
        >
          <CartWidget />{" "}
        </Badge>
        <UserAvatar />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
