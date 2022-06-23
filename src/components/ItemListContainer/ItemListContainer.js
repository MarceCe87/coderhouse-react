import React from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const { onAdd } = props;
    return (
        <div className="App-body">
            <ItemList onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;