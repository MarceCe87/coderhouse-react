import React from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const { category, onAdd } = props;
    return (
        <div className="App-body">
            <ItemList category={category} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;