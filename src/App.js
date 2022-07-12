import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
// VIEWS
import ProductDetail from './views/ProductDetail/ProductDetail';
import Home from './views/Home/Home';
import Outlet from './views/Outlet/Outlet';
import Figures from './views/Figures/Figures';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Cart from './views/Cart/Cart';
import { Component } from 'react';

class App extends Component {
  
  render(){
    
    return (
    <CartProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)} >      
            <Navbar/>       
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/category/figures' element={<Figures />} />
              <Route path='/category/outlet' element={<Outlet />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/figures/:id' element={<ProductDetail/>} />
            </ Routes>
            <Footer/>      
      </Router>
    </CartProvider>
    )      
  };
};

export default App;