import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Figures = (props) => {
  const { onAdd } = props;
  return (
    <div className="text-title">
      <div className="title">
        <h1>Action Figures</h1>
      </div>
      <ItemListContainer category={"figures"} onAdd={onAdd} />
    </div>
  );
};

export default Figures;
