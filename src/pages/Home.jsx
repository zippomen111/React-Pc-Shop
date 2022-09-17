import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { ProductBlock } from '../components/ProductBlock';
import { PaginationBlock } from '../components/Pagination';


export const Home = () => {
    const [items, setItems] = useState([])
    const currentPage = useSelector((state) => state.filterSlice.currentPage)
    const categoryId = useSelector((state) => state.filterSlice.categoryId)
    const sortId = useSelector((state) => state.filterSlice.sort)
    const BASE_URL = 'https://62fbd962abd610251c12510e.mockapi.io/PC_Items?'

    const category = categoryId > 0 ? `category=${categoryId}` : ''

    useEffect(() => {


        //axios fetch data
        //&limit - hardcoded
        axios.get(
            BASE_URL + `&page=${currentPage}&limit=${4}&${category}&orderBy=${sortId.name}`
        ).then((res) => {
            setItems(res.data)
        })


    }, [category, sortId, currentPage])



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
            <div className="pagination">
                <PaginationBlock />
            </div>

        </>

    )
}