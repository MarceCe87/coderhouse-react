import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import './Checkout.css';
import TextField from '@mui/material/TextField';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { db } from '../../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const initialState = {
	name: ' ',
	lastName: ' ',
	phone: 0,
    email: ' ',
    emailcheck: ' ',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Checkout = () => {
	const [values, setValues] = useState(initialState);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const {cartItems, onCheckOut} = useContext(CartContext);
	const [orderId, setOrderId] = useState();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

	const handleOnChange = (e) => {
        e.preventDefault();
		const { value, name } = e.target;
        setValues({ ...values, [name]: value });
        if (!isValidEmail(value)) {
            setOpen(false);
        }		
	};

    const onSubmit = async ()=> {
        let isError = false;
        

        if(values.name === "" || values.lastName === "" || values.phone <= 0 || values.email === "" || values.emailcheck === "" ){
            isError =true;
            setErrorMsg('Please fill the requeired fields.');
        }else if(!isValidEmail(values.email)){
            isError =true;
            setErrorMsg('Invalid Email format.');
        }else if(values.email !== values.emailcheck){
            isError =true;
            setErrorMsg('The emails do not match.');
        }

        if(isError === false){
            const data = { 
                name: values.name,
                lastName: values.lastName,
                email: values.email,
                items: cartItems.map((item) => (
                {
                    itemID: item.id,
                    quantity: item.qty,                
                }))
            };
            // Add a new order with a generated id.
            const docRef = await addDoc(collection(db, "orders"),{ 
                data
            });

            setOrderId(docRef.id);
            setOpen(true);
            setValues(initialState);
            onCheckOut();
        }else{
            setError(true);
        }
    }   

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setError(false);
        setOpen(false);
    };

	return (
		<div style={styles.containerShop}>
            <Snackbar open={error} autoHideDuration={4000} onClose={handleClose}  anchorOrigin={{ vertical: "top", horizontal: "left" }}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {errorMsg}
              </Alert>
            </Snackbar> 
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
                    label="Name"                    
					style={{ margin: 2, width: 400 }}
                    size="small"
					name='name'
					value={values.name}
					onChange={handleOnChange}
                    error={values.name === ''}
                    helperText={values.name === "" ? "Empty!" : " "}
				/>
				<TextField
					label='Last Name'
					style={{ margin: 2, width: 400 }}
                    size="small"
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
                    error={values.lastName === ''}
                    helperText={values.lastName === "" ? "Empty!" : " "}
				/>
				<TextField
					label='Phone'
					style={{ margin: 2, width: 400 }}
                    size="small"
					name='phone'
                    type={"number"}
					value={values.phone}
					onChange={handleOnChange}
                    error={values.phone === ''}
                    helperText={values.phone === "" ? "Empty!" : " "}
				/>
                <TextField
					label='Email'
					style={{ margin: 2, width: 400 }}
                    size="small"
					name='email'
                    type={"mail"}
					value={values.email}
					onChange={handleOnChange}
                    error={values.email === ''}
                    helperText={values.email === "" ? "Empty!" : " "}
                    
				/>
                <TextField
					label='Re-enter Email'
					style={{ margin: 2, width: 400 }}
                    size="small"
					name='emailcheck'
					value={values.emailcheck}
					onChange={handleOnChange}
                    error={values.emailcheck !== values.email}
                    helperText={values.emailcheck !== values.email ? "Does not match!" : " "}
				/>
                <Button  
                    disabled={cartItems.length === 0}           
                    sx={{ borderRadius:6,  background: '#0a0032', width: '400px', margin: 3}}
                    variant="contained" 
                    size="large"
                    onClick={()=>onSubmit()}                 
                >                        
                  Place your order
                </Button>
			</form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Successful Purchase!"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    The order ID: <b>{orderId}</b> has been created!
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
		</div>
	);
};

export default Checkout;
