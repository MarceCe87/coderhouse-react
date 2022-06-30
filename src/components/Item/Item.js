import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, CardActionArea, CardActions, TextField} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Item.css';

const Item = (props) => {
  const { item, onAdd } = props;
  const [count, setCount] = useState(1);

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
        <CardMedia component='img' image={item.image} alt={item.name}/>
        <CardContent sx={{alignContent: "center" }} >
          <Typography align='center' variant='body2' color="text.secondary" component="div" style={{ minHeight: "60px" }}  >
            {item.name}<br/><br/>
          </Typography>
          <Typography align='center' variant='h6' color='darkblue' marginBottom={1} component="div">
            $ {item.sale === "true" ? ApplyDiscount(item.price) : item.price.toFixed(2)}  <del className='discount'>{item.sale === "true" ? item.price.toFixed(2) : ""} </del>
          </Typography>
          <Typography align='center'  variant='subtitle2' color="text.secondary" >
            <b>6</b> cuotas sin interes de <b>${(item.price / 6).toFixed(2)}</b>
          </Typography>
        </CardContent>
      </Link>
      </CardActionArea>
      <CardActions>
          <TextField
              onChange={e => setCount( parseInt(e.target.value))} 
              id={item.id}              
              label="Quantity"
              type="number"
              size="small"
              defaultValue={1}
              InputProps={{ inputProps: { min: 1, max: item.stock } }}
              InputLabelProps={{ shrink: true, }}
              sx={{ paddingRight: 2, borderBlockColor: '#0a0032', }}
          />            
          <Button 
              sx={{ background: '#0a0032'}}
              startIcon={<ShoppingCartIcon />}  	
              variant="contained"            
              onClick={() => onAdd(item)}
              disabled={(count > item.stock || count === 0) }              
          >
            Add To Cart
          </Button>
    </CardActions>      
	</Card>
  );
}

export default Item;