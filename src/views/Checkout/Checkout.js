import './Checkout.css';
import CartList from '../../components/CartList/CartList';
import User from '../../components/User/User';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const Cart = () => {	
	return (
		<div className="App-body">
			<h1>Checkout</h1>
			 <Box sx={{ width: '100%' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
					<Grid item xs={6}>
						<User/>
					</Grid>
					<Grid item xs={6}>						
						<CartList/>
					</Grid>					
				</Grid>
			</Box>
			
			
		</div>
	);
};

export default Cart;
