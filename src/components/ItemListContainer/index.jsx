import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";

export const ItemListContainer = ({title}) => {

    const onAdd = (quantity) => {
        
    }

    return (
        <>
            <Title text={title}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;