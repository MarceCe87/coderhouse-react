import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

    const  onAdd = (item) =>  { 
        const exist = cartItems.find((x) => x.id === item.id);

        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, qty: 1 }]);
        }

    };
    
    const onRemove = (item) => {
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== item.id));
        } else {
            setCartItems(
            cartItems.map((x) =>
                x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
            )
            );
        }
    };

	return (
		<CartContext.Provider value={{cartItems, setCartItems, onAdd, onRemove}}>
			{children}
		</CartContext.Provider>
	);
};
