import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail';

const product = [
    { id: 1, image: "#", title:"product1", price: 123},
]

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 1000)
        })
        getData.then(res => setData(res))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;