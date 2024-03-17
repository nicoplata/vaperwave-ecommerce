import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail';

const product = [
    { id: 1, image: "https://lavaperia.com/wp-content/uploads/2022/09/VAPE_PEN_V2_kit_7-Color_.jpg", title:"product1", price: 123, category:'vapes'},
    { id: 2, image: "https://cdn.vapo.es/media/catalog/product/cache/0631a30874d52acf0f203e96e98e3a74/s/m/smok-vape-pen-v2-kit-2.jpg", title:"product2", price: 123, category:'vapes'},
    { id: 3, image: "https://cdn.vapestore.co.uk/media/catalog/product/cache/312af16b4230f9639b105af4a9030f8d/s/e/seriously_nice_0005_blue_razz_ice_seriously_nice_100ml_1_.jpg", title:"product3", price: 456, category:'smoke'},
    { id: 4, image: "https://vapestreams.co.uk/wp-content/uploads/2023/07/doozy-seriously-nice-blackcurrant-lemonade-100ml-eliquid-shortfill-bottle.jpg", title:"product4", price: 456, category:'smoke'},
    { id: 5, image: "https://www.chilevapo.cl/wp-content/uploads/2019/07/6358_5ab037643d1c55.17694445_Smok-Vape-Pen-Plus-kit-3000mAh-coil_large_5063d274-c6c1-4a99-a182-ddfd240c514e_grande.jpg", title:"product5", price: 789, category:'res'},
    { id: 6, image: "https://gomarizstore.com/11365-superlarge_default/resistencia-vape-pen-mesh-0-15-ohm-smok.jpg", title:"product6", price: 789, category:'res'},
];


export const ItemDetailContainer = () => {

    const [data, setData] = useState({})

    const { detailId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 1000)
        })
        getData.then(res => setData(res.find(product => product.id === parseInt(detailId))))
    }, [detailId])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;