import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import './ItemDetail.css';
import CreditCard from '@mui/icons-material/Payment';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemDetail = (props) => {
	const baseURL = "https://marcece87.github.io/Data/action-figures.json";
	const { onAdd } = props;
	const [item, setItem] = useState([]);
	const [count, setCount] = useState(1);

	let { id } = useParams();

	useEffect(() => {
		axios(baseURL).then((res)=> setItem(res.data));
	}, []);

	return (
		<div className='Item-Container' >
			{item.filter(item => item.id === id).map((filteredItem) => {
				return (
					<div key={filteredItem.id}>
						<Card variant="" sx={{ display: 'flex', border: "none", boxShadow: "none"}}>
							<CardMedia
								component="img"
								sx={{ width: 550 }}
								image={filteredItem.image}
								alt="Live from space album cover"
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '550px'}} marginLeft="20px" marginBottom={10}>
								<CardContent sx={{ flex: '1 0 auto' }}>
									<Typography component="div" variant="h4">
										{filteredItem.name}<br/>
									</Typography>
									<Typography variant="h5" color="text.secondary" component="div">
										{filteredItem.brand}<br/><br/>
									</Typography>
									<Typography marginBottom={1} variant="h4" color="darkblue" component="div">
										${filteredItem.price.toFixed(2)}
									</Typography>
									<Typography variant="subtitle1" color="blueviolet" component="div">
										<CreditCard/>  <b>6 cuotas sin interes</b> de ${(filteredItem.price / 6).toFixed(2)}	
									</Typography>
									<Typography variant="subtitle1" color="blueviolet" component="div" marginBottom={2}>
										<AccountBalanceWallet/>  <b>10% de descuento</b>  pagando en Efectivo	
									</Typography>
									<Typography variant="subtitle1"  component="div" marginBottom={5} marginLeft={0.5} fontFamily="Montserrat" fontSize={15} color="darkblue" > 
										<li>Series: {filteredItem.serie}</li>
										<li>Character: {filteredItem.character}</li>
										<li>Size: {filteredItem.size}</li>
										<li>Brand: {filteredItem.brand}</li>
									</Typography>
									<CardActions >
										<TextField
											onChange={e => setCount( parseInt(e.target.value))}
											helperText={"Stock: "+ filteredItem.stock} 
											id={filteredItem.id}
											label="Quantity"
											type="number"
											size="small"
											defaultValue={1}
											InputProps={{ inputProps: { min: 1, max: filteredItem.stock } }}
											InputLabelProps={{ shrink: true, }}
											sx={{ paddingRight: 2 }}
											color="primary"
										/>      
										<Button
											sx={{ background: '#0a0032', marginBottom: "25px"}}
											startIcon={<ShoppingCartIcon />} 										
											variant="contained"
											onClick={() => onAdd(filteredItem)}
											disabled={(count > filteredItem.stock || count === 0) }									
										>
											Add To Cart
										</Button>
									</CardActions>									
								</CardContent>								  															
							</Box>							
						</Card>						
					</div>	
				);
			})}
		</div>
	);
};

export default ItemDetail;
