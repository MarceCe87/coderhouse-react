import React from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const { items, onAdd } = props;
    return (
        <ItemList items={items} onAdd={onAdd}/>
    );
};

export default ItemListContainer;