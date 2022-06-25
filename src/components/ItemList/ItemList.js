import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemList.css';
import axios from "axios";

const ItemList = (props) => {
    const {category ,onAdd } = props;
    const [items, setItems] = useState([]);
    const baseURL = "https://marcece87.github.io/Data/action-figures.json";

    useEffect (() => {
      axios(baseURL).then((res)=> setItems(res.data));
  
      setTimeout(() =>{}, 13000);
    }, []);

    return (
        <div className="ItemList-container">
            { items.filter(item => category === "outlet" ? item.sale === "true" : item ).map((filteredItem) => {
                return ( 
                    <div key={filteredItem.id}>
                        <Item key={filteredItem.id} item={filteredItem} onAdd={onAdd}></Item>
                    </div>            
                );
            })}
        </div>
    );
};

export default ItemList;