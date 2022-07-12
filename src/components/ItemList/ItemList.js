import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemList.css';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import { Skeleton, Stack } from "@mui/material";

const ItemList = (props) => {
    const {category } = props;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Call firestore
	const getItems = async () => {
        setIsLoading(true);
		const q = query(collection(db, 'figures'));
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

	useEffect(() => {
		getItems();
	}, []);

    return (
        <div className="ItemList-container">
            {isLoading ? (
				[...Array(8)].map(() =>
                    <Stack spacing={1}>
                        <Skeleton variant="rectangular" width={290} height={300} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="circular" width={290} height={40} />
                    </Stack>
                 )       
			) :          
                items.filter(item => category === "outlet" ? item.sale === true : item ).map((item) => {
                    return ( 
                        <div key={item.id}>
                            <Item item={item} ></Item>
                        </div>            
                    );
                })
            }
        </div>
    );
};

export default ItemList;