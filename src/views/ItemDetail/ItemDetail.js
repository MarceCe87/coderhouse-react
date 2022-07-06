import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import './ItemDetail.css';
import CreditCard from '@mui/icons-material/Payment';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../CartContext';

const ItemDetail = () => {	
	const [items, setItems] = useState([]);
	const [count, setCount] = useState(1);
	const {onAdd} = useContext(CartContext);

	let { id } = useParams();

	useEffect(() => {
		axios("https://marcece87.github.io/Data/action-figures.json").then((res)=> setItems(res.data));
	}, []);

	const ApplyDiscount = (price) => {
		let discount = price - (price * 0.10);
		return discount.toFixed(2);
	};

	return (
		<div className='Item-Container' >
			{items.filter(item => item.id === id).map((item) => {
				return (
					<div key={item.id}>
						<Card variant="" sx={{ display: 'flex', border: "none", boxShadow: "none"}}>
							<CardMedia
								component="img"
								sx={{ width: 550, borderRadius: 6}}
								image={item.image}								
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '550px'}} marginLeft="20px" marginBottom={10}>
								<CardContent sx={{ flex: '1 0 auto' }}>
									<Typography component="div" variant="h4">
										{item.name}<br/>
									</Typography>
									<Typography variant="h5" color="text.secondary" component="div">
										{item.brand}<br/><br/>
									</Typography>
									<Typography marginBottom={1} variant="h4" color="darkblue" component="div">
										$ {item.sale === "true" ? ApplyDiscount(item.price) : item.price.toFixed(2)}  <del className='discount'>{item.sale === "true" ? item.price.toFixed(2) : ""} </del>
									</Typography>
									<Typography variant="subtitle1" color="blueviolet" component="div">
										<CreditCard/>  <b>6 cuotas sin interes</b> de ${(item.price / 6).toFixed(2)}	
									</Typography>
									<Typography variant="subtitle1" color="blueviolet" component="div" marginBottom={2}>
										<AccountBalanceWallet/>  <b>10% de descuento</b>  pagando en Efectivo	
									</Typography>
									<Typography variant="subtitle1"  component="div" marginBottom={5} marginLeft={0.5} fontFamily="Montserrat" fontSize={15} color="darkblue" > 
										<li>Series: {item.serie}</li>
										<li>Character: {item.character}</li>
										<li>Brand: {item.brand}</li>
										<li>Size: {item.size}</li>										
									</Typography>
									<CardActions >
										<TextField
											onChange={e => setCount( parseInt(e.target.value))}
											helperText={"Stock: "+ item.stock} 
											id={item.id}
											label="Quantity"
											type="number"
											size="small"
											defaultValue={1}
											InputProps={{ inputProps: { min: 1, max: item.stock } }}
											InputLabelProps={{ shrink: true, }}
											sx={{ paddingRight: 2 }}
											color="primary"
										/>      
										<Button
											sx={{ background: '#0a0032', marginBottom: "25px", borderRadius: 6}}
											startIcon={<ShoppingCartIcon />} 										
											variant="contained"
											onClick={() => onAdd(item)}
											disabled={(count > item.stock || count === 0) }									
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
