import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
// VIEWS
import ItemDetail from './views/ItemDetail/ItemDetail';
import Home from './views/Home/Home';
import Outlet from './views/Outlet/Outlet';
import Figures from './views/Figures/Figures';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import { Component } from 'react';

class App extends Component {
  
  render(){
    return (
    <CartProvider>
      <Router>      
          <div className='App'>
            <Navbar/>       
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/figures' element={<Figures />} />
              <Route path='/category/outlet' element={<Outlet />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/figures/:id' element={<ItemDetail/>} />
            </ Routes>
            <Footer/>
          </div>        
      </Router>
    </CartProvider>
    )      
  };
};

export default App;