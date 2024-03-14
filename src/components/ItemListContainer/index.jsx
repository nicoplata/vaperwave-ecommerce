import React, {useState, useEffect} from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const products = [
    { id: 1, image: "#", title:"product1", price: 123},
    { id: 1, image: "#", title:"product2", price: 456},
    { id: 1, image: "#", title:"product3", price: 789},
];

export const ItemListContainer = ({title}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });

        getData.then(res => setData(res))
    }, [])

    const onAdd = (quantity) => {
        
    }

    return (
        <>
            <Title text={title}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;