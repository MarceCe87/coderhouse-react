import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, TextField} from '@mui/material';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { item, onAdd } = props;
  const [count, setCount] = useState(1);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
      <Link
          to={`/detail/${item.id}`}
          style={{ textDecoration: 'none'}}
      >
        <CardMedia component='img' image={item.image} alt={item.name} />
        <CardContent sx={{alignContent: "center"}} >
          <Typography align='center'  variant='body2' color="text.secondary" >
            {item.name}<br/><br/>
          </Typography>
          <Typography align='center' variant='h6' color='darkblue'>
            ${item.price}
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