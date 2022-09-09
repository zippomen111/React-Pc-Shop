import React, { useState, useEffect } from 'react';
import Category from '../components/Category/Category';
import Sort from '../components/Sort/Sort';
import ProductBlock from '../components/ProductBlock/ProductBlock'
import { useSelector } from 'react-redux';


export const Home = () => {
    const [items, setItems] = useState([])
    const categoryId = useSelector((state) => state.filterSlice.categoryId)
    const sortId = useSelector((state) => state.filterSlice.sort)



    useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        fetch(`https://62fbd962abd610251c12510e.mockapi.io/PC_Items?${category}&orderBy=${sortId.name}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setItems(data);


            });
    }, [categoryId, sortId])

    return (
        <>
            <div className="navigation">
                <div className="container">
                    <Category />
                    <Sort />
                </div>
            </div>
            <div className="container itemsList">
                <div className="products">
                    {
                        items.map((obj) => (
                            <ProductBlock key={obj.id} {...obj} />
                        ))
                    }
                </div>
            </div>
        </>

    )
}