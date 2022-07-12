import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Button, CardActionArea, CardActions} from '@mui/material';
import { CartContext } from '../../CartContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Item.css';

const Item = (props) => {
  const { item } = props;
  const {onAdd} = useContext(CartContext);

  const ApplyDiscount = (price) => {
    let discount = price - (price * 0.10);
    return discount.toFixed(2);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
      <Link
          to={`/figures/${item.id}`}
          style={{ textDecoration: 'none'}}
      >
        <CardMedia component='img' image={item.images[0]} alt={item.name} />
        <CardContent sx={{alignContent: "center" }} >
          <Typography align='center' variant='body2' color="text.secondary" component="div" style={{ minHeight: "60px" }}  >
            {item.name}<br/><br/>
          </Typography>
          <Typography align='center' variant='h6' color='darkblue' marginBottom={1} component="div">
            US$ {item.sale === true ? ApplyDiscount(item.price) : item.price.toFixed(2)}  <del className='discount'>{item.sale === true ? item.price.toFixed(2) : ""} </del>
          </Typography>
          <Typography align='center'  variant='subtitle2' color="text.secondary" >
            <b>6</b> installments of <b>US${(item.price / 6).toFixed(2)}</b>
          </Typography>
        </CardContent>
      </Link>
      </CardActionArea>
      <CardActions>
          <Button 
              sx={{ borderRadius: 6, background: '#0a0032', width: "100%"}}
              startIcon={<ShoppingCartIcon />}  	
              variant="contained"            
              onClick={() => onAdd(item)}             
          >
            Add To Cart
          </Button>
    </CardActions>      
	</Card>
  );
}

export default Item;