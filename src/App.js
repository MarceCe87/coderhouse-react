import React, { useState } from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
// VIEWS
import ItemDetail from './views/ItemDetail/ItemDetail';
import Home from './views/Home/Home';
import Products from './views/products';
import Sales from './views/sales';
import Contact from './views/Contact/Contact';
import SignUp from './views/signup';

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
          <Route path='/products' element={<Products/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/detail/:id' element={<ItemDetail />} />
        </ Routes>
      </div>
    </Router>      
  );
};

export default App;
