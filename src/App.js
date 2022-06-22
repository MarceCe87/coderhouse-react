import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages';
import Products from './pages/products';
import Sales from './pages/sales';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import axios from 'axios';

function App() {
  const baseURL = "https://marcece87.github.io/Data/action-figures.json";
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(baseURL).then((res)=> setData(res.data));

    setTimeout(() =>{}, 13000);
  }, []);
  
  const onAdd = (item) => {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems.length}/>
      <ItemListContainer items={data} onAdd={onAdd} />
      < Routes>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/sales' component={Sales} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/item/:id' component={Contact} />
      </ Routes>
    </Router>      
  );
};

export default App;
