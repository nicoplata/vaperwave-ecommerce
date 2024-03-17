import './ItemDetail.css';

import React, {useState} from 'react';
import ItemCount from "../ItemCount";

export const ItemDetail = ({ data = [] }) => {

    const [goToCart, setGoToCart] = useState(false)

    const onAdd = (quantity) => {
        
    }

    return (
        <div className='container'>
            <div className='detail'>
                <img className='detailImage' src={data.image} alt="" />
                <div className='content'>
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;