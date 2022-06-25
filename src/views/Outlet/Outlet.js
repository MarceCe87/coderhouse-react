import React from 'react';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Outlet = (props) => {
	const { onAdd } = props;
	return (
		<div>
			<div className='title'>
				<h1>Outlet</h1>
			</div>
			<ItemListContainer category={"outlet"} onAdd={onAdd} />
		</div>
	);
};

export default Outlet;