import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import data from './data';
import Home from './pages';
import Products from './pages/products';
import Sales from './pages/sales';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (item) => {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems.length}/>
      <ItemListContainer 
        items={products} onAdd={onAdd}
      />
      < Routes>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/sales' component={Sales} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </ Routes>
    </Router>      
  );
};

export default App;
