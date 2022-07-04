import React from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const { category } = props;
    return (
        <div className="App-body">
            <ItemList category={category}/>
        </div>
    );
};

export default ItemListContainer;