
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './NavbarElements.js';
import UserAvatar from "../UserAvatar/UserAvatar";
import Cart from "../CartWidget/CartWidget";
import Badge from '@mui/material/Badge';
import logo from '../../images/logo.png';

const Navbar = (props) => {
    const { cartItems } = props;

    return (
      <Nav>
        <NavLink to='/' >
            <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/category/figures'>
            Action Figures
          </NavLink>          
          <NavLink to='/category/outlet' >
            Outlet
          </NavLink>
          <NavLink to='/contact' >
            Contact Us
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Badge badgeContent={cartItems} color="primary" sx={{marginTop: "10px"}}>
            <Cart/>{" "}
          </Badge>
          <UserAvatar/>
        </NavBtn>        
      </Nav>
    )
};

export default Navbar;