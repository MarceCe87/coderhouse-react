import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, CardActions, CardContent, Skeleton, Stack, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
import './ItemDetails.css';
import ImageGallery from 'react-image-gallery';
import CreditCard from '@mui/icons-material/Payment';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../CartContext';
import { useParams } from 'react-router';
import "react-image-gallery/styles/css/image-gallery.css";
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';

const ItemDetails = () => {
	const [count, setCount] = useState(1);
	const {onAdd} = useContext(CartContext);
    const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	let { id } = useParams();

	useEffect(() => {
		// Call figures in firestore
		const getItems = async () => {
			setIsLoading(true);
			const q = query(collection(db, 'figures'), where(documentId(), '==', id));
			const querySnapshot = await getDocs(q);
			
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItems(docs);
			
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		};

		getItems();

	},[id]);

	const ApplyDiscount = (price) => {
		let discount = price - (price * 0.10);
		return discount.toFixed(2);
	};

	const Images = () => {
		let imgs = [];
		items[0].images.map((img, i) =>[
			imgs[i]={	
				original: img,
				thumbnail: img,
			}
		])
		return imgs;
	};

	return (
		
		<div className='Item-Container' >
			{isLoading ?
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Stack paddingRight={2}>
					<Skeleton variant="rectangular" width={600} height={600} />					
				</Stack>
				<Stack spacing={1} top="0" >
					<Skeleton  variant="text"  width={400} height={90} />
					<Skeleton  variant="text"  width={400} height={40} />
					<Skeleton variant="text"  width={290} height={40} />
					<Skeleton  variant="text"  width={400} height={40} />
					<Skeleton variant="text"  width={290} height={40} />
					<Skeleton  variant="text"  width={400} height={40} />
					<Skeleton variant="text"  width={290} height={40} />
				</Stack>
			</Box>
			:
				items.map((item) => {
					return (
						<div key={item.id}>
							<Card variant="" sx={{ display: 'flex', border: "none", boxShadow: "none"}}>
								<ImageGallery 
									items={Images()}
									thumbnailPosition="left"
									disableThumbnailScroll={true} 
									showPlayButton={false}
									showNav={false}
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
											US$ {item.sale === true ? ApplyDiscount(item.price) : item.price.toFixed(2)}  <del className='discount'>{item.sale === true ? item.price.toFixed(2) : ""} </del>
										</Typography>
										<Typography variant="subtitle1" color="blueviolet" component="div">
											<CreditCard/>  <b>6 installments</b> of US${(item.price / 6).toFixed(2)}	
										</Typography>
										<Typography variant="subtitle1" color="blueviolet" component="div" marginBottom={2}>
											<AccountBalanceWallet/>  <b>10% discount</b>  paying in cash	
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
				}
			)}
		</div>
	);
};

export default ItemDetails;
