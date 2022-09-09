import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filter';

import "./index.scss"

const categoryList = ["All", "Monitors", "Mices", "Keyboards", "Headsets"]

function Category() {

    const categoryId = useSelector((state) => state.filterSlice.categoryId)
    const dispatch = useDispatch()

    return (
        <div className="navigation__category">
            <ul>
                {
                    categoryList.map((item, index) => (

                        //categorys render
                        <li
                            key={index}
                            onClick={() => dispatch(setCategoryId(index))}
                            className={categoryId === index ? 'active' : ''}>
                            {item}
                        </li>))
                }
            </ul>
        </div>
    )
}

export default Category
