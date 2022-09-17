import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filter';

import styles from "./Category.module.scss"

const categoryList = ["All", "Monitors", "Mices", "Keyboards", "Headsets"]

export const Category = () => {

    const categoryId = useSelector((state) => state.filterSlice.categoryId)
    const dispatch = useDispatch()

    return (
        <div className={styles.root}>
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

