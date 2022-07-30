import { Dialog } from "@mui/material";
import React from "react";
import CartList from "../CartList/CartList";

const Checkout = (props) => {
    const { category } = props;
    const {cartItems, onAdd, onRemove, onDelete, onCheckOut} = useContext(CartContext);
    const [orderId, setOrderId] = useState();

    const onSubmit = async ()=> {
        const data = cartItems.map((item) => (
            {
                itemID: item.id,
                quantity: item.qty
            }
        ));

        // Add a new order with a generated id.
        const docRef = await addDoc(collection(db, "orders"),{ 
            data
        });

        setOrderId(docRef.id);
        handleClickOpen();
        onCheckOut();
    }   

    return (
        <div className="colum-style">
            <CartList/>
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
                    The order ID: <b>{orderId}</b>has been created!
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