import { Grid } from "@mui/material";
import React from "react";
import Item from "../Item/Item";

const ItemList = (props) => {
    const { items, onAdd } = props;
    return (
        <main className="block col-2">
        <div className="UserSection">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {items.map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item key={item.id} item={item} onAdd={onAdd}></Item>
                </Grid>
            ))}
        </Grid>

        </div>
        </main>
    );
};

export default ItemList;