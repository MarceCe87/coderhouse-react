import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(0);

    function onAdd (item) { 
        console.log(item);   
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

	return (
		<CartContext.Provider value={[cartItems, setCartItems, onAdd]}>
			{children}
		</CartContext.Provider>
	);
};
