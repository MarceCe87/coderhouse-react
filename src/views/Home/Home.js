import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
	const [onAdd] = useContext(CartContext);
	return (
		<div>
			<ImageCarousel/>
			<div style={{ textAlign: "center" }}>
				<h2>Action Figures</h2>
				<p>Easy to use, responsive and customizable carousel component for React Projects.</p>
			</div>
			<ItemListContainer category={"figures"} onAdd={onAdd} />
		</div>
	);
};

export default Home;
