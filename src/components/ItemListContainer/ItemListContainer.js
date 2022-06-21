import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
    const { items, onAdd } = props;
    return (
        <main className="block col-2">
        <div className="UserSection">
            {items.map((item) => (
            <ItemCount key={item.id} item={item} onAdd={onAdd}></ItemCount>
            ))}
        </div>
        </main>
    );
};

export default ItemListContainer;