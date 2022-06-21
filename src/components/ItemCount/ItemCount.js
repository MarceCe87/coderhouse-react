import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, TextField} from '@mui/material';

const ItemCount = (props) => {
  const { item, onAdd } = props;
  const [count, setCount] = useState(1);

  return (
    <Card sx={{ maxWidth: 345 }}>
		<CardActionArea>
			<CardMedia component='img' image={item.image} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{item.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					${item.price}
				</Typography>
			</CardContent>
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
                sx={{ paddingRight: 2 }}
                color="primary"
            />            
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => onAdd(item)}
                disabled={(count > item.stock || count === 0) }
                
            >
				Add To Cart
			</Button>
		</CardActions>      
	</Card>
  );
}

export default ItemCount;