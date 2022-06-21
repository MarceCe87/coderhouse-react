import Cart from "../CartWidget/CartWidget";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js';
import Badge from '@mui/material/Badge';
import logo from '../../images/logo.png';

const Navbar = (props) => {
    const { cartItems } = props;
    return (
        <Nav>
        <NavLink to='/'>
            <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/sales' activeStyle>
            Sales
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Badge badgeContent={cartItems} color="primary">
            <Cart/>{" "}
          </Badge>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>        
      </Nav>
    )
};

export default Navbar;