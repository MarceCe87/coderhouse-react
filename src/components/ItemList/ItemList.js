import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemList.css';
import axios from "axios";

const ItemList = (props) => {
    const {onAdd } = props;
    const [items, setItems] = useState([]);
    const baseURL = "https://marcece87.github.io/Data/action-figures.json";

    useEffect (() => {
      axios(baseURL).then((res)=> setItems(res.data));
  
      setTimeout(() =>{}, 13000);
    }, []);

    return (
        <div className="ItemList-container">
            {items.map((item, index) => { 
                return ( 
                    <div key={item.id}>
                        <Item key={item.id} item={item} onAdd={onAdd}></Item>
                    </div>            
                );
            })}
        </div>
    );
};

export default ItemList;