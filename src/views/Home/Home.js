import React from 'react';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = (props) => {
	const { onAdd } = props;
	return (
		<div>
			<div className='title'>
				<h1>Home</h1>
			</div>
			<ItemListContainer category={"figures"} onAdd={onAdd} />
		</div>
	);
};

export default Home;
