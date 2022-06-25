import React, { useState } from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
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

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (item) => {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar cartItems={cartItems.length}/>       
        < Routes>
          <Route path='/' element={<Home onAdd={onAdd} />} />
          <Route path='/category/figures' element={<Figures onAdd={onAdd} />} />
          <Route path='/category/outlet' element={<Outlet onAdd={onAdd} />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/figures/:id' element={<ItemDetail />} />
        </ Routes>
        <Footer/>
      </div>
      
    </Router>      
  );
};

export default App;
