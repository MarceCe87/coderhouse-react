import React from 'react';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = (props) => {
	const { onAdd } = props;
	return (
		<div>
			<ItemListContainer onAdd={onAdd} />
		</div>
	);
};

export default Home;
